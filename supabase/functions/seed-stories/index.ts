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

    const { action } = await req.json().catch(() => ({ action: "seed_all" }));

    // ── SEED COLLEGES ────────────────────────────────────────────────
    const colleges = [
      { name: "Indian Institute of Technology Hyderabad", short_name: "IIT-H", city: "Hyderabad", state: "Telangana", type: "engineering", tier: "tier_1", ownership: "government", established_year: 2008, student_population: 3200, seed_priority: 1 },
      { name: "International Institute of Information Technology Hyderabad", short_name: "IIIT-H", city: "Hyderabad", state: "Telangana", type: "engineering", tier: "tier_1", ownership: "autonomous", established_year: 1998, student_population: 3500, seed_priority: 1 },
      { name: "BITS Pilani Hyderabad Campus", short_name: "BITS Hyd", city: "Hyderabad", state: "Telangana", type: "engineering", tier: "tier_1", ownership: "deemed", established_year: 2008, student_population: 3800, seed_priority: 1 },
      { name: "Jawaharlal Nehru Technological University Hyderabad", short_name: "JNTUH", city: "Hyderabad", state: "Telangana", type: "engineering", tier: "tier_2", ownership: "government", established_year: 1972, student_population: 450000, seed_priority: 2 },
      { name: "Osmania University", short_name: "OU", city: "Hyderabad", state: "Telangana", type: "arts", tier: "tier_2", ownership: "government", established_year: 1918, student_population: 300000, seed_priority: 2 },
      { name: "University of Hyderabad", short_name: "UoH", city: "Hyderabad", state: "Telangana", type: "science", tier: "tier_1", ownership: "government", established_year: 1974, student_population: 5000, seed_priority: 1 },
      { name: "NALSAR University of Law", short_name: "NALSAR", city: "Hyderabad", state: "Telangana", type: "law", tier: "tier_1", ownership: "government", established_year: 1998, student_population: 1200, seed_priority: 1 },
      { name: "Nizam's Institute of Medical Sciences", short_name: "NIMS", city: "Hyderabad", state: "Telangana", type: "medical", tier: "tier_2", ownership: "government", established_year: 1963, student_population: 2000, seed_priority: 2 },
      { name: "Indian School of Business", short_name: "ISB", city: "Hyderabad", state: "Telangana", type: "management", tier: "tier_1", ownership: "private", established_year: 2001, student_population: 900, seed_priority: 1 },
      { name: "Indian Institute of Science", short_name: "IISc", city: "Bangalore", state: "Karnataka", type: "science", tier: "tier_1", ownership: "government", established_year: 1909, student_population: 4000, seed_priority: 1 },
      { name: "Indian Institute of Management Bangalore", short_name: "IIM-B", city: "Bangalore", state: "Karnataka", type: "management", tier: "tier_1", ownership: "government", established_year: 1973, student_population: 1200, seed_priority: 1 },
      { name: "RV College of Engineering", short_name: "RVCE", city: "Bangalore", state: "Karnataka", type: "engineering", tier: "tier_2", ownership: "private", established_year: 1963, student_population: 6000, seed_priority: 2 },
      { name: "Christ University", short_name: "Christ", city: "Bangalore", state: "Karnataka", type: "arts", tier: "tier_2", ownership: "private", established_year: 1969, student_population: 22000, seed_priority: 2 },
      { name: "PES University", short_name: "PES", city: "Bangalore", state: "Karnataka", type: "engineering", tier: "tier_2", ownership: "private", established_year: 1972, student_population: 10000, seed_priority: 2 },
      { name: "BMS College of Engineering", short_name: "BMSCE", city: "Bangalore", state: "Karnataka", type: "engineering", tier: "tier_2", ownership: "private", established_year: 1946, student_population: 5500, seed_priority: 2 },
      { name: "MS Ramaiah Institute of Technology", short_name: "MSRIT", city: "Bangalore", state: "Karnataka", type: "engineering", tier: "tier_2", ownership: "private", established_year: 1962, student_population: 6000, seed_priority: 2 },
      { name: "Indian Institute of Technology Delhi", short_name: "IIT-D", city: "Delhi", state: "Delhi", type: "engineering", tier: "tier_1", ownership: "government", established_year: 1961, student_population: 8500, seed_priority: 1 },
      { name: "Jawaharlal Nehru University", short_name: "JNU", city: "Delhi", state: "Delhi", type: "arts", tier: "tier_1", ownership: "government", established_year: 1969, student_population: 8000, seed_priority: 1 },
      { name: "Delhi Technological University", short_name: "DTU", city: "Delhi", state: "Delhi", type: "engineering", tier: "tier_2", ownership: "government", established_year: 1941, student_population: 10000, seed_priority: 2 },
      { name: "Netaji Subhas University of Technology", short_name: "NSUT", city: "Delhi", state: "Delhi", type: "engineering", tier: "tier_2", ownership: "government", established_year: 1983, student_population: 4500, seed_priority: 2 },
      { name: "Indian Institute of Technology Madras", short_name: "IIT-M", city: "Chennai", state: "Tamil Nadu", type: "engineering", tier: "tier_1", ownership: "government", established_year: 1959, student_population: 9000, seed_priority: 1 },
      { name: "Anna University", short_name: "Anna Univ", city: "Chennai", state: "Tamil Nadu", type: "engineering", tier: "tier_2", ownership: "government", established_year: 1978, student_population: 400000, seed_priority: 2 },
      { name: "Vellore Institute of Technology", short_name: "VIT", city: "Vellore", state: "Tamil Nadu", type: "engineering", tier: "tier_2", ownership: "private", established_year: 1984, student_population: 30000, seed_priority: 2 },
      { name: "Indian Institute of Technology Bombay", short_name: "IIT-B", city: "Mumbai", state: "Maharashtra", type: "engineering", tier: "tier_1", ownership: "government", established_year: 1958, student_population: 10000, seed_priority: 1 },
      { name: "Savitribai Phule Pune University", short_name: "SPPU", city: "Pune", state: "Maharashtra", type: "arts", tier: "tier_2", ownership: "government", established_year: 1949, student_population: 700000, seed_priority: 2 },
    ];

    const { data: insertedColleges, error: collegeError } = await supabase
      .from("colleges")
      .upsert(colleges, { onConflict: "short_name", ignoreDuplicates: true })
      .select("id, short_name");

    if (collegeError) {
      console.error("College insert error:", collegeError);
    }

    // Fetch all colleges to get IDs
    const { data: allColleges } = await supabase
      .from("colleges")
      .select("id, short_name");

    if (!allColleges || allColleges.length === 0) {
      return new Response(JSON.stringify({ error: "No colleges found after seeding" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const c = (name: string) => allColleges.find((col) => col.short_name === name)?.id;

    // ── SEED USER ────────────────────────────────────────────────────
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

    // ── SEED STORIES ────────────────────────────────────────────────
    const stories = [
      { title: "Professor caught us in the server room 💀", content: "My professor caught me and my ex making out in the server room at IIIT-H. He just said 'at least close the door' and walked away. We never spoke of it again. That man has seen things.", college_id: c("IIIT-H"), category: "confession", upvote_count: 187, user_id: seedUserId },
      { title: "Our prof copies from YouTube tutorials", content: "Our JNTUH prof literally copies from YouTube tutorials during class. One time his WiFi died mid-lecture and he just... left. Came back 20 mins later pretending nothing happened. We all saw him in the canteen.", college_id: c("JNTUH"), category: "faculty_stories", upvote_count: 143, user_id: seedUserId },
      { title: "HR was on Tinder during our placement test", content: "Company came to BITS Hyd, asked us to build a full-stack app in 2 hours. The HR was literally on Tinder the whole time. She matched with someone and said 'at least someone's getting placed today.' I'm not joking.", college_id: c("BITS Hyd"), category: "placement_experience", upvote_count: 221, user_id: seedUserId },
      { title: "Roommate's girlfriend stayed for 3 weeks", content: "My roommate at OU brought his girlfriend to our hostel room. She stayed for 3 WEEKS. The warden thought she was a new student. I had to sleep in the common room. When they broke up, she kept the room key.", college_id: c("OU"), category: "hostel_life", upvote_count: 165, user_id: seedUserId },
      { title: "Chicken released in the exam hall 🐔", content: "Someone released a live chicken in the exam hall during our thermodynamics paper. The invigilator chased it for 20 minutes while we all copied. Best group project we ever did. Everyone passed.", college_id: c("RVCE"), category: "funny", upvote_count: 198, user_id: seedUserId },
      { title: "The fest was so bad the chief guest left", content: "The college fest was so bad, the chief guest left mid-speech. The DJ played the same 3 Honey Singh songs on loop for 4 hours. Someone threw a chappal at the stage. The organizing committee got a trophy for 'best disaster management.'", college_id: c("PES"), category: "fest_culture", upvote_count: 134, user_id: seedUserId },
      { title: "Seniors made freshers propose to a statue", content: "Seniors made all the freshers propose to the founder's statue at the entrance. Campus guard recorded the whole thing and posted it on YouTube. It got 50K views. The principal saw it and made the seniors apologize... to the statue.", college_id: c("MSRIT"), category: "ragging", upvote_count: 112, user_id: seedUserId },
      { title: "The old hostel block is genuinely haunted", content: "The old hostel block is genuinely haunted. Three different people on three different nights saw the same woman in white standing at the end of the corridor. The watchman refuses to do rounds there after 11 PM. I transferred rooms.", college_id: c("UoH"), category: "horror", upvote_count: 89, user_id: seedUserId },
      { title: "My ex is dating my professor now", content: "My ex broke up with me saying she needed to 'focus on studies.' Two months later she's dating our 28-year-old assistant professor. They think nobody knows. EVERYONE KNOWS. He gave her an A+ and she can't even code a for loop.", college_id: c("BITS Hyd"), category: "confession", upvote_count: 256, user_id: seedUserId },
      { title: "Mess food gave us food poisoning — 47 students", content: "The hostel mess served 'paneer' that turned out to be expired tofu. 47 students got food poisoning in one night. The bathroom line was longer than the placement queue. The mess staff blamed the students for 'weak stomachs.'", college_id: c("JNTUH"), category: "hostel_life", upvote_count: 178, user_id: seedUserId },
      { title: "Professor came drunk to a viva exam", content: "Our external examiner showed up visibly drunk to our viva. He asked one guy 'what is your name' and gave him 8/10. Asked another 'explain quantum mechanics' and gave him 7/10. Chaos reigned. Best viva ever.", college_id: c("OU"), category: "faculty_stories", upvote_count: 201, user_id: seedUserId },
      { title: "Got placed at a company that doesn't exist", content: "I got 'placed' at a startup during campus placements. Showed up on day 1 — the office was a single room above a chai shop. The CEO was also the developer, HR, and office boy. Company shut down in 2 weeks. My placement record still shows it though 💀", college_id: c("BMSCE"), category: "placement_experience", upvote_count: 167, user_id: seedUserId },
      { title: "Caught my roommate selling exam papers", content: "Found out my roommate was running a whole business selling leaked question papers. He had a WhatsApp group with 200+ students. ₹500 per paper. When the college found out, they expelled him. He's now running a successful EdTech startup. Life is unfair.", college_id: c("IIIT-H"), category: "campus_life", upvote_count: 145, user_id: seedUserId },
      { title: "The WiFi password is the real admission test", content: "IISc WiFi is so bad that students have created a secret mesh network using hotspots and old routers. The IT department knows but can't find the source. It's faster than the official one. We call it 'ScienceNet.'", college_id: c("IISc"), category: "campus_life", upvote_count: 93, user_id: seedUserId },
      { title: "MBA student proposed during a case study presentation", content: "During a live case study presentation with a company CEO in the audience, this absolute unit of an MBA student proposed to his girlfriend who was on the opposing team. She said no. The CEO offered him a job for 'boldness in high-pressure situations.'", college_id: c("ISB"), category: "funny", upvote_count: 210, user_id: seedUserId },
      { title: "Our class bunked so hard the prof cried", content: "Entire section of 60 students bunked the same class for 3 weeks straight. The professor thought the class was cancelled. When he found out, he actually teared up in the staff room. We felt so guilty we attended every class after that. He's actually a good guy.", college_id: c("Christ"), category: "faculty_stories", upvote_count: 132, user_id: seedUserId },
      { title: "Cheated on my GF with her best friend, both are in my class", content: "I cheated on my girlfriend with her best friend. Plot twist — they both found out AND they're both in my class. Every group project is now a war zone. The professor paired all three of us for the final project. I think he knows.", college_id: c("PES"), category: "confession", upvote_count: 289, user_id: seedUserId },
      { title: "Admission counselor lied about EVERYTHING", content: "The admission counselor promised Olympic-size swimming pool, AC classrooms, and 100% placement. We got a pond, ceiling fans from 1990, and 'placement assistance' which means they forward your resume to Naukri. I want my donation money back.", college_id: c("JNTUH"), category: "admission_journey", upvote_count: 156, user_id: seedUserId },
      { title: "Law student filed an RTI against the canteen", content: "A 3rd year law student filed an actual RTI against the college canteen asking for the ingredient list of their samosas. The canteen shut down for 2 days. When it reopened, samosa price went from ₹10 to ₹25. Nobody filed an RTI again.", college_id: c("NALSAR"), category: "funny", upvote_count: 176, user_id: seedUserId },
      { title: "My hostel roommate is a crypto bro who lost everything", content: "Roommate dropped out to become a full-time crypto trader. Put his entire education loan into Dogecoin. Lost 90% of it. Now he's back in college pretending nothing happened. Still gives unsolicited financial advice in the mess.", college_id: c("BITS Hyd"), category: "hostel_life", upvote_count: 198, user_id: seedUserId },
      { title: "The parking lot is where relationships go to die", content: "Everyone knows the parking lot behind Block C is where couples go. What they don't know is the security guard has a logbook. He literally tracks who goes with whom. He showed me once — it reads like a soap opera script.", college_id: c("RVCE"), category: "campus_life", upvote_count: 147, user_id: seedUserId },
      { title: "Medical student fainted during their first dissection... twice", content: "First day of anatomy lab, this guy confidently walked in saying 'I've watched all of Grey's Anatomy, I'm ready.' Fainted within 5 minutes. Came back, fainted again. He's now a dermatologist. Smart move honestly.", college_id: c("NIMS"), category: "funny", upvote_count: 163, user_id: seedUserId },
      { title: "Professor gave us life advice instead of teaching DSA", content: "Our DSA professor spent the entire semester talking about his divorce instead of teaching algorithms. Final exam had 'discuss the time complexity of heartbreak' as a question. I'm not even making this up. He got transferred next semester.", college_id: c("IIIT-H"), category: "faculty_stories", upvote_count: 234, user_id: seedUserId },
      { title: "Someone started a fight at the cultural fest over biryani", content: "Two hostels got into an actual fistfight over who makes better biryani at the cultural fest. Campus security was called. The dean made both hostels cook biryani for the faculty as punishment. Faculty said hostel B won. Hostel A hasn't recovered.", college_id: c("OU"), category: "fest_culture", upvote_count: 188, user_id: seedUserId },
      { title: "IIM case study about our own college's terrible management", content: "A professor literally used our own college's mismanagement as a case study in organizational behavior class. Administration found out and tried to get the case study removed. It became the most downloaded paper on the college portal.", college_id: c("IIM-B"), category: "inspirational", upvote_count: 142, user_id: seedUserId },
      { title: "Entire batch failed because prof forgot to submit grades", content: "The entire batch of 120 students failed a subject because the professor forgot to submit grades before the deadline. When admin asked why, he said 'I was on vacation.' We had to redo the entire semester paper. He won 'Best Professor' that year.", college_id: c("DTU"), category: "faculty_stories", upvote_count: 211, user_id: seedUserId },
      { title: "Security guard moonlights as a food delivery guy", content: "Our campus security guard delivers Swiggy orders inside the campus to students after his shift. We tip him well. He knows everyone's room number. He's more popular than the dean. Nobody rats on him. The system works.", college_id: c("VIT"), category: "campus_life", upvote_count: 178, user_id: seedUserId },
      { title: "JNU canteen debate that lasted 6 hours", content: "A debate started in the JNU canteen about whether idli-sambar or poha is the superior breakfast. It lasted 6 hours, attracted 200+ students, and a professor moderated it as 'extra credit' for his Political Theory class. Idli won 52-48 in a formal vote.", college_id: c("JNU"), category: "funny", upvote_count: 165, user_id: seedUserId },
      { title: "IIT-B prof refused to teach until AC was fixed", content: "A professor at IIT-B straight up refused to teach for two weeks because the AC in his classroom wasn't working. Admin said it would take a month to fix. He taught all his lectures in the parking lot under a tent. Students loved it.", college_id: c("IIT-B"), category: "faculty_stories", upvote_count: 193, user_id: seedUserId },
    ];

    // Check for existing stories to avoid duplicates
    const { data: existingStories } = await supabase
      .from("college_stories")
      .select("title")
      .in("title", stories.map((s) => s.title));

    const existingTitles = new Set(existingStories?.map((s) => s.title) || []);
    const newStories = stories.filter((s) => s.college_id && !existingTitles.has(s.title));

    let storiesInserted = 0;
    if (newStories.length > 0) {
      const { error: storyError } = await supabase
        .from("college_stories")
        .insert(newStories);

      if (storyError) {
        console.error("Story insert error:", storyError);
      } else {
        storiesInserted = newStories.length;
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        colleges_seeded: insertedColleges?.length || 0,
        stories_seeded: storiesInserted,
        stories_skipped: stories.length - newStories.length,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
