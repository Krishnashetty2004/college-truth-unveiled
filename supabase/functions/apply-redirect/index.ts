import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const opportunityId = url.searchParams.get("id");

    if (!opportunityId) {
      return new Response(
        JSON.stringify({ error: "Missing opportunity ID" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Create Supabase client with service role for direct table access
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Get the apply URL from the opportunities table
    const { data, error } = await supabase
      .from("opportunities")
      .select("apply_url")
      .eq("id", opportunityId)
      .eq("is_active", true)
      .single();

    if (error || !data) {
      return new Response(
        JSON.stringify({ error: "Opportunity not found" }),
        {
          status: 404,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Increment the apply count (fire and forget)
    supabase
      .from("opportunities")
      .update({ apply_count: data.apply_count + 1 })
      .eq("id", opportunityId)
      .then(() => {});

    // Also try using the increment function
    await supabase.rpc("increment_apply_count", { opportunity_id: opportunityId });

    // Redirect to the apply URL
    return new Response(null, {
      status: 302,
      headers: {
        ...corsHeaders,
        Location: data.apply_url,
      },
    });
  } catch (err) {
    console.error("Error in apply-redirect:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
