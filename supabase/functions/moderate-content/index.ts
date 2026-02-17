import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { type, id } = await req.json();
    // type: "review" | "story" | "professor_review"

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    let content = "";
    let title = "";

    if (type === "review") {
      const { data } = await supabase.from("reviews").select("title, content, pros, cons").eq("id", id).single();
      if (!data) throw new Error("Review not found");
      title = data.title;
      content = `${data.title}\n${data.content}\n${data.pros || ""}\n${data.cons || ""}`;
    } else if (type === "story") {
      const { data } = await supabase.from("college_stories").select("title, content").eq("id", id).single();
      if (!data) throw new Error("Story not found");
      title = data.title;
      content = `${data.title}\n${data.content}`;
    } else if (type === "professor_review") {
      const { data } = await supabase.from("professor_reviews").select("comment, course_taught").eq("id", id).single();
      if (!data) throw new Error("Professor review not found");
      title = data.course_taught || "";
      content = data.comment || "";
    } else {
      throw new Error("Invalid type");
    }

    const aiResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Deno.env.get("LOVABLE_API_KEY")}`,
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-lite",
        messages: [
          {
            role: "system",
            content: `You are a content moderator for an Indian college review platform. Analyze the following user-generated content and return a JSON object with these fields:
- authenticity_score: 0-100 (how likely this is genuine student content)
- helpfulness_score: 0-100 (how useful this is for prospective students)
- sentiment_score: -1 to 1 (negative to positive)
- topics: array of up to 5 topic tags (e.g. "placement", "hostel", "faculty")
- flag_reason: null if OK, or a string explaining why this should be flagged (spam, fake, defamatory, etc.)
- recommended_status: "published" | "held" | "rejected"

Be lenient with slang and informal language - this is a Gen-Z platform. Flag only genuinely harmful content.
Return ONLY valid JSON, no markdown.`,
          },
          { role: "user", content },
        ],
        temperature: 0.1,
      }),
    });

    if (!aiResponse.ok) {
      console.error("AI gateway error:", await aiResponse.text());
      // Don't block content if AI fails - default to published
      return new Response(JSON.stringify({ moderated: false }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const aiData = await aiResponse.json();
    const rawText = aiData.choices?.[0]?.message?.content || "";
    
    // Parse JSON from response (handle potential markdown wrapping)
    const jsonMatch = rawText.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    const scores = JSON.parse(jsonMatch);

    // Update the content with AI scores
    if (type === "review") {
      await supabase.from("reviews").update({
        ai_authenticity_score: scores.authenticity_score,
        ai_helpfulness_score: scores.helpfulness_score,
        ai_sentiment_score: scores.sentiment_score,
        ai_topics: scores.topics,
        ai_flag_reason: scores.flag_reason,
        status: scores.recommended_status === "rejected" ? "rejected" 
             : scores.recommended_status === "held" ? "held" 
             : "published",
      }).eq("id", id);
    } else if (type === "story") {
      if (scores.recommended_status === "rejected" || scores.recommended_status === "held") {
        await supabase.from("college_stories").update({
          status: scores.recommended_status,
        }).eq("id", id);
      }
    }

    return new Response(JSON.stringify({ moderated: true, scores }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Moderation error:", error);
    return new Response(JSON.stringify({ error: error.message, moderated: false }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
