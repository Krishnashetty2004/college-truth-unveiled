import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Get college IDs
    const { data: colleges } = await supabase
      .from("colleges")
      .select("id, short_name")
      .in("short_name", [
        "IIIT-H", "BITS Hyd", "JNTUH", "OU", "IISc", "ISB",
        "RVCE", "Christ", "PES", "UoH", "BMSCE", "MSRIT", "IIM-B", "NALSAR", "NIMS"
      ]);

    if (!colleges || colleges.length === 0) {
      return new Response(JSON.stringify({ error: "No colleges found" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const c = (name: string) => colleges.find((col) => col.short_name === name)?.id;

    // Create or get a seed user for stories
    let seedUserId: string;
    const seedEmail = "seed-stories@internal.app";
    
    const { data: existingUsers } = await supabase.auth.admin.listUsers();
    const seedUser = existingUsers?.users?.find((u: any) => u.email === seedEmail);
    
    if (seedUser) {
      seedUserId = seedUser.id;
    } else {
      const { data: newUser, error: userError } = await supabase.auth.admin.createUser({
        email: seedEmail,
        password: "seed-stories-internal-2024",
        email_confirm: true,
      });
      if (userError || !newUser.user) {
        return new Response(JSON.stringify({ error: "Failed to create seed user: " + userError?.message }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      seedUserId = newUser.user.id;
    }

    const stories = [
      {
        title: "Professor caught us in the server room 💀",
        content: "My professor caught me and my ex making out in the server room at IIIT-H. He just said 'at least close the door' and walked away. We never spoke of it again. That man has seen things.",
        college_id: c("IIIT-H"),
        category: "confession",
        upvote_count: 187,
        user_id: seedUserId,
      },
      {
        title: "Our prof copies from YouTube tutorials",
        content: "Our JNTUH prof literally copies from YouTube tutorials during class. One time his WiFi died mid-lecture and he just... left. Came back 20 mins later pretending nothing happened. We all saw him in the canteen.",
        college_id: c("JNTUH"),
        category: "faculty_stories",
        upvote_count: 143,
        user_id: seedUserId,
      },
      {
        title: "HR was on Tinder during our placement test",
        content: "Company came to BITS Hyd, asked us to build a full-stack app in 2 hours. The HR was literally on Tinder the whole time. She matched with someone and said 'at least someone's getting placed today.' I'm not joking.",
        college_id: c("BITS Hyd"),
        category: "placement_experience",
        upvote_count: 221,
        user_id: seedUserId,
      },
      {
        title: "Roommate's girlfriend stayed for 3 weeks",
        content: "My roommate at OU brought his girlfriend to our hostel room. She stayed for 3 WEEKS. The warden thought she was a new student. I had to sleep in the common room. When they broke up, she kept the room key.",
        college_id: c("OU"),
        category: "hostel_life",
        upvote_count: 165,
        user_id: seedUserId,
      },
      {
        title: "Chicken released in the exam hall 🐔",
        content: "Someone released a live chicken in the exam hall during our thermodynamics paper. The invigilator chased it for 20 minutes while we all copied. Best group project we ever did. Everyone passed.",
        college_id: c("RVCE"),
        category: "funny",
        upvote_count: 198,
        user_id: seedUserId,
      },
      {
        title: "The fest was so bad the chief guest left",
        content: "The college fest was so bad, the chief guest left mid-speech. The DJ played the same 3 Honey Singh songs on loop for 4 hours. Someone threw a chappal at the stage. The organizing committee got a trophy for 'best disaster management.'",
        college_id: c("PES"),
        category: "fest_culture",
        upvote_count: 134,
        user_id: seedUserId,
      },
      {
        title: "Seniors made freshers propose to a statue",
        content: "Seniors made all the freshers propose to the founder's statue at the entrance. Campus guard recorded the whole thing and posted it on YouTube. It got 50K views. The principal saw it and made the seniors apologize... to the statue.",
        college_id: c("MSRIT"),
        category: "ragging",
        upvote_count: 112,
        user_id: seedUserId,
      },
      {
        title: "The old hostel block is genuinely haunted",
        content: "The old hostel block is genuinely haunted. Three different people on three different nights saw the same woman in white standing at the end of the corridor. The watchman refuses to do rounds there after 11 PM. I transferred rooms.",
        college_id: c("UoH"),
        category: "horror",
        upvote_count: 89,
        user_id: seedUserId,
      },
      {
        title: "My ex is dating my professor now",
        content: "My ex broke up with me saying she needed to 'focus on studies.' Two months later she's dating our 28-year-old assistant professor. They think nobody knows. EVERYONE KNOWS. He gave her an A+ and she can't even code a for loop.",
        college_id: c("BITS Hyd"),
        category: "confession",
        upvote_count: 256,
        user_id: seedUserId,
      },
      {
        title: "Mess food gave us food poisoning — 47 students",
        content: "The hostel mess served 'paneer' that turned out to be expired tofu. 47 students got food poisoning in one night. The bathroom line was longer than the placement queue. The mess staff blamed the students for 'weak stomachs.'",
        college_id: c("JNTUH"),
        category: "hostel_life",
        upvote_count: 178,
        user_id: seedUserId,
      },
      {
        title: "Professor came drunk to a viva exam",
        content: "Our external examiner showed up visibly drunk to our viva. He asked one guy 'what is your name' and gave him 8/10. Asked another 'explain quantum mechanics' and gave him 7/10. Chaos reigned. Best viva ever.",
        college_id: c("OU"),
        category: "faculty_stories",
        upvote_count: 201,
        user_id: seedUserId,
      },
      {
        title: "Got placed at a company that doesn't exist",
        content: "I got 'placed' at a startup during campus placements. Showed up on day 1 — the office was a single room above a chai shop. The CEO was also the developer, HR, and office boy. Company shut down in 2 weeks. My placement record still shows it though 💀",
        college_id: c("BMSCE"),
        category: "placement_experience",
        upvote_count: 167,
        user_id: seedUserId,
      },
      {
        title: "Caught my roommate selling exam papers",
        content: "Found out my roommate was running a whole business selling leaked question papers. He had a WhatsApp group with 200+ students. ₹500 per paper. When the college found out, they expelled him. He's now running a successful EdTech startup. Life is unfair.",
        college_id: c("IIIT-H"),
        category: "campus_life",
        upvote_count: 145,
        user_id: seedUserId,
      },
      {
        title: "The WiFi password is the real admission test",
        content: "IISc WiFi is so bad that students have created a secret mesh network using hotspots and old routers. The IT department knows but can't find the source. It's faster than the official one. We call it 'ScienceNet.'",
        college_id: c("IISc"),
        category: "campus_life",
        upvote_count: 93,
        user_id: seedUserId,
      },
      {
        title: "MBA student proposed during a case study presentation",
        content: "During a live case study presentation with a company CEO in the audience, this absolute unit of an MBA student proposed to his girlfriend who was on the opposing team. She said no. The CEO offered him a job for 'boldness in high-pressure situations.'",
        college_id: c("ISB"),
        category: "funny",
        upvote_count: 210,
        user_id: seedUserId,
      },
      {
        title: "Our class bunked so hard the prof cried",
        content: "Entire section of 60 students bunked the same class for 3 weeks straight. The professor thought the class was cancelled. When he found out, he actually teared up in the staff room. We felt so guilty we attended every class after that. He's actually a good guy.",
        college_id: c("Christ"),
        category: "faculty_stories",
        upvote_count: 132,
        user_id: seedUserId,
      },
      {
        title: "Cheated on my GF with her best friend, both are in my class",
        content: "I cheated on my girlfriend with her best friend. Plot twist — they both found out AND they're both in my class. Every group project is now a war zone. The professor paired all three of us for the final project. I think he knows.",
        college_id: c("PES"),
        category: "confession",
        upvote_count: 289,
        user_id: seedUserId,
      },
      {
        title: "Admission counselor lied about EVERYTHING",
        content: "The admission counselor promised Olympic-size swimming pool, AC classrooms, and 100% placement. We got a pond, ceiling fans from 1990, and 'placement assistance' which means they forward your resume to Naukri. I want my donation money back.",
        college_id: c("JNTUH"),
        category: "admission_journey",
        upvote_count: 156,
        user_id: seedUserId,
      },
      {
        title: "Law student filed an RTI against the canteen",
        content: "A 3rd year law student filed an actual RTI against the college canteen asking for the ingredient list of their samosas. The canteen shut down for 2 days. When it reopened, samosa price went from ₹10 to ₹25. Nobody filed an RTI again.",
        college_id: c("NALSAR"),
        category: "funny",
        upvote_count: 176,
        user_id: seedUserId,
      },
      {
        title: "My hostel roommate is a crypto bro who lost everything",
        content: "Roommate dropped out to become a full-time crypto trader. Put his entire education loan into Dogecoin. Lost 90% of it. Now he's back in college pretending nothing happened. Still gives unsolicited financial advice in the mess.",
        college_id: c("BITS Hyd"),
        category: "hostel_life",
        upvote_count: 198,
        user_id: seedUserId,
      },
      {
        title: "The parking lot is where relationships go to die",
        content: "Everyone knows the parking lot behind Block C is where couples go. What they don't know is the security guard has a logbook. He literally tracks who goes with whom. He showed me once — it reads like a soap opera script.",
        college_id: c("RVCE"),
        category: "campus_life",
        upvote_count: 147,
        user_id: seedUserId,
      },
      {
        title: "Medical student fainted during their first dissection... twice",
        content: "First day of anatomy lab, this guy confidently walked in saying 'I've watched all of Grey's Anatomy, I'm ready.' Fainted within 5 minutes. Came back, fainted again. He's now a dermatologist. Smart move honestly.",
        college_id: c("NIMS"),
        category: "funny",
        upvote_count: 163,
        user_id: seedUserId,
      },
      {
        title: "Professor gave us life advice instead of teaching DSA",
        content: "Our DSA professor spent the entire semester talking about his divorce instead of teaching algorithms. Final exam had 'discuss the time complexity of heartbreak' as a question. I'm not even making this up. He got transferred next semester.",
        college_id: c("IIIT-H"),
        category: "faculty_stories",
        upvote_count: 234,
        user_id: seedUserId,
      },
      {
        title: "Someone started a fight at the cultural fest over biryani",
        content: "Two hostels got into an actual fistfight over who makes better biryani at the cultural fest. Campus security was called. The dean made both hostels cook biryani for the faculty as punishment. Faculty said hostel B won. Hostel A hasn't recovered.",
        college_id: c("OU"),
        category: "fest_culture",
        upvote_count: 188,
        user_id: seedUserId,
      },
      {
        title: "IIM case study about our own college's terrible management",
        content: "A professor literally used our own college's mismanagement as a case study in organizational behavior class. Administration found out and tried to get the case study removed. It became the most downloaded paper on the college portal.",
        college_id: c("IIM-B"),
        category: "inspirational",
        upvote_count: 142,
        user_id: seedUserId,
      },
    ];

    // Filter out stories where college_id is undefined
    const validStories = stories.filter((s) => s.college_id);

    const { data, error } = await supabase
      .from("college_stories")
      .insert(validStories);

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({ success: true, inserted: validStories.length }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
