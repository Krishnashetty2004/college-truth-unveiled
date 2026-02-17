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
    if (action !== "seed_reviews") {
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
    }

    // ── SEED REVIEWS ────────────────────────────────────────────────
    let reviewsInserted = 0;
    let profReviewsInserted = 0;

    if (action === "seed_reviews" || action === "seed_all") {
      // Check existing review count
      const { count: existingReviewCount } = await supabase
        .from("reviews")
        .select("id", { count: "exact", head: true });

      if ((existingReviewCount || 0) < 10) {
        const reviewData = [
          // BITS Hyderabad — tier_1 engineering
          { college_id: c("BITS Hyd"), user_id: seedUserId, title: "BITS Hyd is worth every penny", content: "Absolutely top-tier experience. The faculty are research-oriented and push you hard. Placements are phenomenal — almost everyone from CS gets above 15 LPA. Infrastructure is excellent, hostels are clean.", reviewer_type: "alumni", course: "B.E. Computer Science", department: "Computer Science", admission_year: 2018, graduation_year: 2022, status: "published", overall_rating: 4.6, rating_placement: 5, rating_faculty: 5, rating_curriculum: 5, rating_hostel: 4, rating_food: 3, rating_wifi: 5, rating_infrastructure: 5, rating_campus_life: 4, rating_safety: 5, rating_location: 4, rating_admin: 4, rating_value_for_money: 4, pros: "Amazing placements, world-class faculty, great peer group", cons: "Food is average, campus can feel isolated", advice: "Join clubs early and attend every coding competition." },
          { college_id: c("BITS Hyd"), user_id: seedUserId, title: "Great college but prepare for pressure", content: "BITS is intense. The grading system is relative and can be brutal. But the exposure you get — internships, research, clubs — is unmatched. I got a PPO from Google after my internship.", reviewer_type: "current_student", course: "B.E. Computer Science", department: "Computer Science", admission_year: 2021, graduation_year: 2025, status: "published", overall_rating: 4.2, rating_placement: 5, rating_faculty: 4, rating_curriculum: 4, rating_hostel: 4, rating_food: 3, rating_wifi: 4, rating_infrastructure: 4, rating_campus_life: 4, rating_safety: 5, rating_location: 3, rating_admin: 3, rating_value_for_money: 3, pros: "PPO culture, research opportunities, strong alumni network", cons: "CGPA pressure is real, admin is bureaucratic", advice: "Start competitive programming from day 1." },
          
          // IIIT-H — tier_1 engineering
          { college_id: c("IIIT-H"), user_id: seedUserId, title: "Best CS college in Hyderabad hands down", content: "If you want to do CS properly, IIIT-H is the place. The research culture is insane. Professors are from top PhD programs abroad. Most students either get into top grad schools or tier-1 companies.", reviewer_type: "alumni", course: "B.Tech Computer Science", department: "Computer Science", admission_year: 2017, graduation_year: 2021, status: "published", overall_rating: 4.7, rating_placement: 5, rating_faculty: 5, rating_curriculum: 5, rating_hostel: 3, rating_food: 3, rating_wifi: 5, rating_infrastructure: 4, rating_campus_life: 3, rating_safety: 4, rating_location: 4, rating_admin: 3, rating_value_for_money: 4, pros: "Research-focused faculty, exceptional placements, small batch size", cons: "Campus is small, hostel facilities are basic", advice: "Get into a research lab early, it changes everything." },
          { college_id: c("IIIT-H"), user_id: seedUserId, title: "Tough but worth it", content: "The academics are brutal — expect 12+ hour days in first year. But by third year you'll be doing things other students only dream of. My batchmates are now at Google, Microsoft, and top PhDs.", reviewer_type: "current_student", course: "B.Tech Computer Science", department: "Computer Science", admission_year: 2022, graduation_year: 2026, status: "published", overall_rating: 4.4, rating_placement: 5, rating_faculty: 5, rating_curriculum: 5, rating_hostel: 3, rating_food: 2, rating_wifi: 5, rating_infrastructure: 4, rating_campus_life: 3, rating_safety: 4, rating_location: 3, rating_admin: 3, rating_value_for_money: 4, pros: "World-class research, great placement stats", cons: "Food is terrible, social life is limited", advice: "Join OSDG or any technical club from day 1." },

          // Anna University Chennai
          { college_id: c("Anna Univ"), user_id: seedUserId, title: "Premier technical university of Tamil Nadu", content: "Anna University has the best technical reputation in Tamil Nadu. The affiliated colleges vary a lot, but the main campus CEG is excellent. Faculty are highly qualified and the library is among the best.", reviewer_type: "alumni", course: "B.E. Electronics", department: "Electronics & Communication", admission_year: 2016, graduation_year: 2020, status: "published", overall_rating: 3.8, rating_placement: 4, rating_faculty: 4, rating_curriculum: 4, rating_hostel: 3, rating_food: 3, rating_wifi: 3, rating_infrastructure: 4, rating_campus_life: 3, rating_safety: 4, rating_location: 4, rating_admin: 3, rating_value_for_money: 4, pros: "Strong brand value, good faculty, affordable fees", cons: "Admin is very bureaucratic, hostel needs upgrade", advice: "Participate in national hackathons to stand out." },

          // BMSCE Bangalore
          { college_id: c("BMSCE"), user_id: seedUserId, title: "Solid mid-tier engineering college in Bangalore", content: "BMSCE has a good reputation in Karnataka. Placements from core companies like Infosys, TCS, L&T are consistent. The campus is beautiful. Labs are well-equipped. Faculty quality varies by department.", reviewer_type: "alumni", course: "B.E. Mechanical Engineering", department: "Mechanical Engineering", admission_year: 2015, graduation_year: 2019, status: "published", overall_rating: 3.5, rating_placement: 4, rating_faculty: 3, rating_curriculum: 3, rating_hostel: 4, rating_food: 4, rating_wifi: 3, rating_infrastructure: 4, rating_campus_life: 4, rating_safety: 4, rating_location: 3, rating_admin: 3, rating_value_for_money: 4, pros: "Good campus, decent placements, strong alumni", cons: "Some professors are very old-school", advice: "Do an industrial internship in 3rd year." },

          // DTU Delhi
          { college_id: c("DTU"), user_id: seedUserId, title: "One of Delhi's best government engineering colleges", content: "DTU offers a great education at government college fees. CS and Electronics branches have excellent placement records. The campus is huge and facilities are being upgraded. Admin can be slow.", reviewer_type: "current_student", course: "B.Tech Computer Science", department: "Computer Science", admission_year: 2020, graduation_year: 2024, status: "published", overall_rating: 4.1, rating_placement: 5, rating_faculty: 4, rating_curriculum: 4, rating_hostel: 3, rating_food: 3, rating_wifi: 3, rating_infrastructure: 4, rating_campus_life: 4, rating_safety: 4, rating_location: 4, rating_admin: 3, rating_value_for_money: 5, pros: "Government college fees, excellent placements for CS, Delhi location", cons: "Hostel is average, WiFi is unreliable", advice: "Focus on DSA and competitive programming from day 1." },
          { college_id: c("DTU"), user_id: seedUserId, title: "Great value for money government college", content: "Paying 1 lakh per year and getting placed at 20+ LPA is insane ROI. DTU's reputation in Delhi is excellent. The ECE and CS departments are standout.", reviewer_type: "alumni", course: "B.Tech Electronics", department: "Electronics & Communication", admission_year: 2016, graduation_year: 2020, status: "published", overall_rating: 4.0, rating_placement: 4, rating_faculty: 4, rating_curriculum: 4, rating_hostel: 3, rating_food: 3, rating_wifi: 3, rating_infrastructure: 4, rating_campus_life: 4, rating_safety: 4, rating_location: 4, rating_admin: 3, rating_value_for_money: 5, pros: "Incredible value, Delhi connections, strong alumni", cons: "Old infrastructure in some departments", advice: "Network with seniors for off-campus internships." },

          // COEP Pune
          { college_id: c("COEP"), user_id: seedUserId, title: "Historic college with a great engineering culture", content: "COEP is one of the oldest engineering colleges in Asia. The culture here is unlike any other — DIY attitude, maker culture, amazing fests. Placements are solid for Pune-based companies.", reviewer_type: "alumni", course: "B.Tech Mechanical Engineering", department: "Mechanical", admission_year: 2014, graduation_year: 2018, status: "published", overall_rating: 3.9, rating_placement: 4, rating_faculty: 4, rating_curriculum: 4, rating_hostel: 3, rating_food: 3, rating_wifi: 3, rating_infrastructure: 4, rating_campus_life: 5, rating_safety: 4, rating_location: 5, rating_admin: 3, rating_value_for_money: 5, pros: "Amazing campus culture, Boat Club, central Pune location, affordable", cons: "Hostel is very old, WiFi is terrible", advice: "Join the Boat Club or any technical club to get the full experience." },

          // IIT-M Chennai
          { college_id: c("IIT-M"), user_id: seedUserId, title: "The pinnacle of Indian engineering education", content: "IIT Madras is in a league of its own. The faculty are world-renowned researchers. The campus is a protected forest — beautiful and unique. Placements are outstanding across all branches.", reviewer_type: "alumni", course: "B.Tech Computer Science", department: "Computer Science", admission_year: 2014, graduation_year: 2018, status: "published", overall_rating: 4.8, rating_placement: 5, rating_faculty: 5, rating_curriculum: 5, rating_hostel: 4, rating_food: 4, rating_wifi: 5, rating_infrastructure: 5, rating_campus_life: 5, rating_safety: 5, rating_location: 4, rating_admin: 4, rating_value_for_money: 5, pros: "World-class faculty, deer on campus, unmatched research, incredible placements", cons: "Academic pressure is immense, social life takes a hit", advice: "Cherish every moment — it goes by fast." },

          // ISB Hyderabad
          { college_id: c("ISB"), user_id: seedUserId, title: "Best MBA program in India, period", content: "ISB is worth the Rs 40 lakh fee. The ROI is proven — average placement is 35+ LPA and the network you build is unmatched. One year program means you're out quickly and earning fast. Faculty are from top global B-schools.", reviewer_type: "alumni", course: "Post Graduate Programme in Management", department: "Management", admission_year: 2019, graduation_year: 2020, status: "published", overall_rating: 4.6, rating_placement: 5, rating_faculty: 5, rating_curriculum: 5, rating_hostel: 5, rating_food: 4, rating_wifi: 5, rating_infrastructure: 5, rating_campus_life: 4, rating_safety: 5, rating_location: 4, rating_admin: 4, rating_value_for_money: 4, pros: "Unmatched placements, elite network, world-class faculty and facilities", cons: "Very expensive, extremely competitive peer group, one year is exhausting", advice: "Have at least 3 years of strong work experience before applying." },

          // VIT Vellore
          { college_id: c("VIT"), user_id: seedUserId, title: "Good college if you use it right", content: "VIT is what you make of it. Huge campus, great infrastructure, lots of clubs and events. Placements for CS are excellent — 500+ companies visit. But academic rigor is lower than IITs. You need to self-study.", reviewer_type: "current_student", course: "B.Tech Computer Science", department: "Computer Science", admission_year: 2021, graduation_year: 2025, status: "published", overall_rating: 3.8, rating_placement: 5, rating_faculty: 3, rating_curriculum: 3, rating_hostel: 4, rating_food: 4, rating_wifi: 4, rating_infrastructure: 5, rating_campus_life: 5, rating_safety: 4, rating_location: 3, rating_admin: 3, rating_value_for_money: 3, pros: "Amazing placement cell, world-class infrastructure, hundreds of clubs", cons: "Self-study mentality needed, some faculty are outdated", advice: "Get placed in 3rd year through internships, don't rely on campus." },

          // IISc Bangalore
          { college_id: c("IISc"), user_id: seedUserId, title: "The best research institution in India", content: "IISc is in a different league for research. If you want to do a PhD or go into deep tech, there's nowhere better in India. The atmosphere is intensely academic. Most people here have turned down IIT seats.", reviewer_type: "current_student", course: "B.S. Research (Computer Science)", department: "Computer Science & Automation", admission_year: 2020, graduation_year: 2024, status: "published", overall_rating: 4.5, rating_placement: 4, rating_faculty: 5, rating_curriculum: 5, rating_hostel: 4, rating_food: 3, rating_wifi: 3, rating_infrastructure: 5, rating_campus_life: 3, rating_safety: 5, rating_location: 4, rating_admin: 4, rating_value_for_money: 5, pros: "Best research environment in India, elite peer group, beautiful campus", cons: "WiFi is frustratingly bad, social life is almost non-existent", advice: "Get into a lab in your first semester — that's where the real learning happens." },

          // Amity Noida
          { college_id: c("Amity"), user_id: seedUserId, title: "Good private university but do your research", content: "Amity has good infrastructure and facilities. The brand name helps in placements especially for Delhi NCR companies. Faculty quality is mixed. Some departments are much better than others.", reviewer_type: "alumni", course: "B.Tech CSE", department: "Computer Science", admission_year: 2016, graduation_year: 2020, status: "published", overall_rating: 3.2, rating_placement: 3, rating_faculty: 3, rating_curriculum: 3, rating_hostel: 4, rating_food: 3, rating_wifi: 3, rating_infrastructure: 4, rating_campus_life: 4, rating_safety: 4, rating_location: 4, rating_admin: 3, rating_value_for_money: 3, pros: "Good infrastructure, Delhi NCR location, multiple campuses", cons: "Expensive, faculty quality is inconsistent", advice: "Self-study is essential — don't depend only on college teaching." },

          // Christ University Bangalore
          { college_id: c("Christ"), user_id: seedUserId, title: "Best arts and humanities college in South India", content: "Christ is exceptional for arts, humanities, commerce, and social sciences. Discipline culture is strict but it makes you professional. Placement for MBA and commerce programs is very strong. Bangalore location is perfect.", reviewer_type: "alumni", course: "BBA", department: "Business Administration", admission_year: 2017, graduation_year: 2020, status: "published", overall_rating: 4.0, rating_placement: 4, rating_faculty: 4, rating_curriculum: 4, rating_hostel: 4, rating_food: 4, rating_wifi: 4, rating_infrastructure: 4, rating_campus_life: 4, rating_safety: 4, rating_location: 5, rating_admin: 4, rating_value_for_money: 3, pros: "Excellent faculty, strict but professional culture, great location", cons: "Expensive, strict rules (no phones in class)", advice: "Do as many internships as possible — Christ's brand opens doors." },

          // Osmania University Hyderabad
          { college_id: c("OU"), user_id: seedUserId, title: "Historic university with great legacy", content: "OU is one of the oldest and most important universities in India. The campus and architecture are breathtaking. Academics can be inconsistent depending on department, but the legacy and networking are valuable.", reviewer_type: "alumni", course: "B.Sc Computer Science", department: "Computer Science", admission_year: 2015, graduation_year: 2018, status: "published", overall_rating: 3.3, rating_placement: 3, rating_faculty: 3, rating_curriculum: 3, rating_hostel: 3, rating_food: 3, rating_wifi: 2, rating_infrastructure: 3, rating_campus_life: 4, rating_safety: 3, rating_location: 4, rating_admin: 2, rating_value_for_money: 4, pros: "Beautiful historic campus, affordable, strong alumni in government jobs", cons: "Admin is chaotic, infrastructure is very dated", advice: "Supplement college learning with online courses and certifications." },
        ];

        const { error: reviewError } = await supabase
          .from("reviews")
          .upsert(reviewData, { onConflict: "id", ignoreDuplicates: false });

        if (reviewError) {
          console.error("Review insert error:", reviewError);
        } else {
          reviewsInserted = reviewData.length;
        }
      }

      // ── SEED PROFESSOR REVIEWS ────────────────────────────────────
      const { count: existingProfReviews } = await supabase
        .from("professor_reviews")
        .select("id", { count: "exact", head: true });

      if ((existingProfReviews || 0) < 5) {
        const profReviews = [
          // BITS Hyd professors
          { professor_id: "11111111-0001-0001-0001-000000000001", user_id: seedUserId, rating_teaching: 5, rating_knowledge: 5, rating_approachability: 4, rating_grading: 4, rating_punctuality: 5, overall_rating: 4.6, difficulty_level: 4, would_take_again: true, tags: ["clear_explanations", "research_focused", "helpful"], comment: "Dr. Raghavendra is exceptional. His OS lectures are legendary. Very approachable during office hours.", course_taught: "Operating Systems", year_taken: 2022, status: "published" },
          { professor_id: "11111111-0001-0001-0001-000000000001", user_id: seedUserId, rating_teaching: 4, rating_knowledge: 5, rating_approachability: 3, rating_grading: 3, rating_punctuality: 4, overall_rating: 4.0, difficulty_level: 5, would_take_again: true, tags: ["tough_grader", "research_focused", "industry_experience"], comment: "Brilliant but tough. Grading is strict. Worth taking if you actually want to learn.", course_taught: "Algorithms", year_taken: 2021, status: "published" },
          { professor_id: "11111111-0001-0001-0001-000000000002", user_id: seedUserId, rating_teaching: 5, rating_knowledge: 5, rating_approachability: 5, rating_grading: 4, rating_punctuality: 5, overall_rating: 4.8, difficulty_level: 3, would_take_again: true, tags: ["inspirational", "clear_explanations", "helpful"], comment: "Dr. Priya is easily the best professor I had at BITS. Her VLSI course is world-class.", course_taught: "VLSI Design", year_taken: 2022, status: "published" },
          // CBIT professors
          { professor_id: "11111111-0001-0001-0001-000000000005", user_id: seedUserId, rating_teaching: 4, rating_knowledge: 5, rating_approachability: 3, rating_grading: 3, rating_punctuality: 4, overall_rating: 3.8, difficulty_level: 4, would_take_again: true, tags: ["tough_grader", "research_focused"], comment: "Very knowledgeable but strict about attendance. His exams are tough but fair.", course_taught: "Data Structures", year_taken: 2021, status: "published" },
          { professor_id: "11111111-0001-0001-0001-000000000006", user_id: seedUserId, rating_teaching: 3, rating_knowledge: 4, rating_approachability: 4, rating_grading: 4, rating_punctuality: 3, overall_rating: 3.5, difficulty_level: 3, would_take_again: true, tags: ["helpful", "easy_grader", "flexible_deadlines"], comment: "Friendly and approachable. Good for understanding basics.", course_taught: "Digital Electronics", year_taken: 2022, status: "published" },
          // Anna University
          { professor_id: "11111111-0001-0001-0001-000000000008", user_id: seedUserId, rating_teaching: 4, rating_knowledge: 5, rating_approachability: 3, rating_grading: 3, rating_punctuality: 5, overall_rating: 4.0, difficulty_level: 4, would_take_again: true, tags: ["clear_explanations", "test_heavy", "assigns_lots_of_homework"], comment: "Dr. Senthil is very knowledgeable. Strict about homework but you learn a lot.", course_taught: "Database Management", year_taken: 2019, status: "published" },
          // BMSCE professors
          { professor_id: "11111111-0001-0001-0001-000000000011", user_id: seedUserId, rating_teaching: 4, rating_knowledge: 4, rating_approachability: 4, rating_grading: 4, rating_punctuality: 4, overall_rating: 4.0, difficulty_level: 3, would_take_again: true, tags: ["helpful", "clear_explanations"], comment: "Prof. Suresh is a good teacher. Makes complex topics accessible.", course_taught: "Computer Networks", year_taken: 2021, status: "published" },
          { professor_id: "11111111-0001-0001-0001-000000000012", user_id: seedUserId, rating_teaching: 5, rating_knowledge: 4, rating_approachability: 5, rating_grading: 5, rating_punctuality: 4, overall_rating: 4.6, difficulty_level: 2, would_take_again: true, tags: ["inspirational", "easy_grader", "helpful"], comment: "Dr. Anitha is the best. Her Machine Learning class changed my career direction.", course_taught: "Machine Learning", year_taken: 2022, status: "published" },
          // DTU professors
          { professor_id: "11111111-0001-0001-0001-000000000014", user_id: seedUserId, rating_teaching: 4, rating_knowledge: 5, rating_approachability: 3, rating_grading: 3, rating_punctuality: 4, overall_rating: 3.9, difficulty_level: 4, would_take_again: true, tags: ["research_focused", "tough_grader", "industry_experience"], comment: "Dr. Vikram brings industry experience into class. Tough grader but prepares you for interviews.", course_taught: "System Design", year_taken: 2022, status: "published" },
          { professor_id: "11111111-0001-0001-0001-000000000015", user_id: seedUserId, rating_teaching: 3, rating_knowledge: 4, rating_approachability: 3, rating_grading: 3, rating_punctuality: 4, overall_rating: 3.3, difficulty_level: 4, would_take_again: false, tags: ["reads_from_slides", "tough_grader", "test_heavy"], comment: "Reads from slides unfortunately. But the subject matter is important. Self-study needed.", course_taught: "VLSI Design", year_taken: 2021, status: "published" },
          // Amity professors
          { professor_id: "11111111-0001-0001-0001-000000000027", user_id: seedUserId, rating_teaching: 3, rating_knowledge: 4, rating_approachability: 4, rating_grading: 4, rating_punctuality: 3, overall_rating: 3.5, difficulty_level: 2, would_take_again: true, tags: ["helpful", "easy_grader", "flexible_deadlines"], comment: "Good for understanding basics. Not research-level but makes you industry-ready.", course_taught: "Software Engineering", year_taken: 2020, status: "published" },
          // Christ University professors
          { professor_id: "11111111-0001-0001-0001-000000000030", user_id: seedUserId, rating_teaching: 5, rating_knowledge: 5, rating_approachability: 5, rating_grading: 4, rating_punctuality: 5, overall_rating: 4.8, difficulty_level: 3, would_take_again: true, tags: ["inspirational", "industry_experience", "clear_explanations"], comment: "Dr. Thomas is a legend at Christ. His marketing strategy course transformed how I think about business.", course_taught: "Marketing Strategy", year_taken: 2019, status: "published" },
        ];

        const { error: profReviewError } = await supabase
          .from("professor_reviews")
          .insert(profReviews);

        if (profReviewError) {
          console.error("Professor review insert error:", profReviewError);
        } else {
          profReviewsInserted = profReviews.length;
        }
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        colleges_seeded: insertedColleges?.length || 0,
        reviews_inserted: reviewsInserted,
        prof_reviews_inserted: profReviewsInserted,
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
