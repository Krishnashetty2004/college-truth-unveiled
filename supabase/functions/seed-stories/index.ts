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
      // ── TIER 1 HYDERABAD ──
      { name: "Indian Institute of Technology Hyderabad", short_name: "IIT-H", city: "Hyderabad", state: "Telangana", type: "engineering", tier: "tier_1", ownership: "government", established_year: 2008, student_population: 3200, seed_priority: 1 },
      { name: "International Institute of Information Technology Hyderabad", short_name: "IIIT-H", city: "Hyderabad", state: "Telangana", type: "engineering", tier: "tier_1", ownership: "autonomous", established_year: 1998, student_population: 3500, seed_priority: 1 },
      { name: "BITS Pilani Hyderabad Campus", short_name: "BITS Hyd", city: "Hyderabad", state: "Telangana", type: "engineering", tier: "tier_1", ownership: "deemed", established_year: 2008, student_population: 3800, seed_priority: 1 },
      { name: "Indian School of Business", short_name: "ISB", city: "Hyderabad", state: "Telangana", type: "management", tier: "tier_1", ownership: "private", established_year: 2001, student_population: 900, seed_priority: 1 },
      { name: "NALSAR University of Law", short_name: "NALSAR", city: "Hyderabad", state: "Telangana", type: "law", tier: "tier_1", ownership: "government", established_year: 1998, student_population: 1200, seed_priority: 1 },
      { name: "University of Hyderabad", short_name: "UoH", city: "Hyderabad", state: "Telangana", type: "science", tier: "tier_1", ownership: "government", established_year: 1974, student_population: 5000, seed_priority: 1 },

      // ── TIER 2/3 HYDERABAD ──
      { name: "Jawaharlal Nehru Technological University Hyderabad", short_name: "JNTUH", city: "Hyderabad", state: "Telangana", type: "engineering", tier: "tier_2", ownership: "government", established_year: 1972, student_population: 450000, seed_priority: 2 },
      { name: "Osmania University", short_name: "OU", city: "Hyderabad", state: "Telangana", type: "arts", tier: "tier_2", ownership: "government", established_year: 1918, student_population: 300000, seed_priority: 2 },
      { name: "Nizam's Institute of Medical Sciences", short_name: "NIMS", city: "Hyderabad", state: "Telangana", type: "medical", tier: "tier_2", ownership: "government", established_year: 1963, student_population: 2000, seed_priority: 2 },
      { name: "Chaitanya Bharathi Institute of Technology", short_name: "CBIT", city: "Hyderabad", state: "Telangana", type: "engineering", tier: "tier_2", ownership: "private", established_year: 1979, student_population: 5500, seed_priority: 2 },
      { name: "Vasavi College of Engineering", short_name: "VCE", city: "Hyderabad", state: "Telangana", type: "engineering", tier: "tier_2", ownership: "private", established_year: 1981, student_population: 4500, seed_priority: 2 },
      { name: "VNR Vignana Jyothi Institute of Engineering and Technology", short_name: "VNR VJIET", city: "Hyderabad", state: "Telangana", type: "engineering", tier: "tier_2", ownership: "private", established_year: 1996, student_population: 5000, seed_priority: 2 },
      { name: "CVR College of Engineering", short_name: "CVR", city: "Hyderabad", state: "Telangana", type: "engineering", tier: "tier_3", ownership: "private", established_year: 2001, student_population: 4000, seed_priority: 3 },
      { name: "MLR Institute of Technology", short_name: "MLRIT", city: "Hyderabad", state: "Telangana", type: "engineering", tier: "tier_3", ownership: "private", established_year: 1999, student_population: 3800, seed_priority: 3 },
      { name: "Sreenidhi Institute of Science and Technology", short_name: "SNIST", city: "Hyderabad", state: "Telangana", type: "engineering", tier: "tier_3", ownership: "private", established_year: 1997, student_population: 4500, seed_priority: 3 },
      { name: "Institute of Aeronautical Engineering", short_name: "IARE", city: "Hyderabad", state: "Telangana", type: "engineering", tier: "tier_3", ownership: "private", established_year: 2000, student_population: 6000, seed_priority: 3 },
      { name: "CMR College of Engineering and Technology", short_name: "CMR", city: "Hyderabad", state: "Telangana", type: "engineering", tier: "tier_3", ownership: "private", established_year: 2002, student_population: 3500, seed_priority: 3 },
      { name: "Anurag University", short_name: "Anurag", city: "Hyderabad", state: "Telangana", type: "engineering", tier: "tier_3", ownership: "private", established_year: 1998, student_population: 4200, seed_priority: 3 },
      { name: "Malla Reddy College of Engineering and Technology", short_name: "MRCET", city: "Hyderabad", state: "Telangana", type: "engineering", tier: "tier_3", ownership: "private", established_year: 2002, student_population: 7000, seed_priority: 3 },
      { name: "Malla Reddy Engineering College", short_name: "MREC", city: "Hyderabad", state: "Telangana", type: "engineering", tier: "tier_3", ownership: "private", established_year: 2004, student_population: 5000, seed_priority: 3 },
      { name: "Gurunanak Institutions Technical Campus", short_name: "GCET", city: "Hyderabad", state: "Telangana", type: "engineering", tier: "tier_3", ownership: "private", established_year: 1997, student_population: 3200, seed_priority: 3 },
      { name: "Mahatma Gandhi Institute of Technology", short_name: "MGIT", city: "Hyderabad", state: "Telangana", type: "engineering", tier: "tier_3", ownership: "private", established_year: 2002, student_population: 3500, seed_priority: 3 },
      { name: "Marri Chenna Reddy Human Resource Development Institute", short_name: "MCET", city: "Hyderabad", state: "Telangana", type: "engineering", tier: "tier_3", ownership: "private", established_year: 2001, student_population: 2800, seed_priority: 3 },

      // ── MALLA REDDY EMPIRE — NEW ──
      { name: "Malla Reddy University", short_name: "MRU", city: "Hyderabad", state: "Telangana", type: "engineering", tier: "tier_3", ownership: "deemed", established_year: 2020, student_population: 8000, seed_priority: 3 },
      { name: "Malla Reddy Institute of Technology and Science", short_name: "MRITS", city: "Hyderabad", state: "Telangana", type: "engineering", tier: "tier_3", ownership: "private", established_year: 2007, student_population: 4500, seed_priority: 3 },
      { name: "Malla Reddy College of Pharmacy", short_name: "MRCP", city: "Hyderabad", state: "Telangana", type: "pharmacy", tier: "tier_3", ownership: "private", established_year: 2005, student_population: 1200, seed_priority: 3 },

      // ── TIER 1 BANGALORE ──
      { name: "Indian Institute of Science", short_name: "IISc", city: "Bangalore", state: "Karnataka", type: "science", tier: "tier_1", ownership: "government", established_year: 1909, student_population: 4000, seed_priority: 1 },
      { name: "Indian Institute of Management Bangalore", short_name: "IIM-B", city: "Bangalore", state: "Karnataka", type: "management", tier: "tier_1", ownership: "government", established_year: 1973, student_population: 1200, seed_priority: 1 },

      // ── TIER 2 BANGALORE ──
      { name: "RV College of Engineering", short_name: "RVCE", city: "Bangalore", state: "Karnataka", type: "engineering", tier: "tier_2", ownership: "private", established_year: 1963, student_population: 6000, seed_priority: 2 },
      { name: "PES University", short_name: "PES", city: "Bangalore", state: "Karnataka", type: "engineering", tier: "tier_2", ownership: "private", established_year: 1972, student_population: 10000, seed_priority: 2 },
      { name: "BMS College of Engineering", short_name: "BMSCE", city: "Bangalore", state: "Karnataka", type: "engineering", tier: "tier_2", ownership: "private", established_year: 1946, student_population: 5500, seed_priority: 2 },
      { name: "MS Ramaiah Institute of Technology", short_name: "MSRIT", city: "Bangalore", state: "Karnataka", type: "engineering", tier: "tier_2", ownership: "private", established_year: 1962, student_population: 6000, seed_priority: 2 },
      { name: "Christ University", short_name: "Christ", city: "Bangalore", state: "Karnataka", type: "arts", tier: "tier_2", ownership: "private", established_year: 1969, student_population: 22000, seed_priority: 2 },
      { name: "CMR Institute of Technology", short_name: "CMRIT", city: "Bangalore", state: "Karnataka", type: "engineering", tier: "tier_2", ownership: "private", established_year: 2000, student_population: 4500, seed_priority: 2 },

      // ── TIER 3 BANGALORE ──
      { name: "REVA University", short_name: "REVA", city: "Bangalore", state: "Karnataka", type: "engineering", tier: "tier_3", ownership: "private", established_year: 2012, student_population: 15000, seed_priority: 3 },
      { name: "Acharya Institute of Technology", short_name: "AIT Blr", city: "Bangalore", state: "Karnataka", type: "engineering", tier: "tier_3", ownership: "private", established_year: 2000, student_population: 5000, seed_priority: 3 },
      { name: "BNM Institute of Technology", short_name: "BNMIT", city: "Bangalore", state: "Karnataka", type: "engineering", tier: "tier_3", ownership: "private", established_year: 2001, student_population: 3200, seed_priority: 3 },
      { name: "Presidency University", short_name: "Presidency Univ", city: "Bangalore", state: "Karnataka", type: "engineering", tier: "tier_3", ownership: "private", established_year: 2013, student_population: 8000, seed_priority: 3 },
      { name: "Dayananda Sagar College of Engineering", short_name: "DSCE", city: "Bangalore", state: "Karnataka", type: "engineering", tier: "tier_3", ownership: "private", established_year: 1979, student_population: 6000, seed_priority: 3 },
      { name: "BMS Institute of Technology", short_name: "BMSIT", city: "Bangalore", state: "Karnataka", type: "engineering", tier: "tier_3", ownership: "private", established_year: 2002, student_population: 4800, seed_priority: 3 },
      { name: "New Horizon College of Engineering", short_name: "NHCE", city: "Bangalore", state: "Karnataka", type: "engineering", tier: "tier_3", ownership: "private", established_year: 2001, student_population: 8000, seed_priority: 3 },
      { name: "Nitte Meenakshi Institute of Technology", short_name: "NMIT", city: "Bangalore", state: "Karnataka", type: "engineering", tier: "tier_3", ownership: "private", established_year: 2001, student_population: 5000, seed_priority: 3 },

      // ── DESIGN COLLEGES ──
      { name: "National Institute of Fashion Technology Hyderabad", short_name: "NIFT Hyd", city: "Hyderabad", state: "Telangana", type: "design", tier: "tier_1", ownership: "government", established_year: 2010, student_population: 600, seed_priority: 2 },
      { name: "National Institute of Fashion Technology Bangalore", short_name: "NIFT Blr", city: "Bangalore", state: "Karnataka", type: "design", tier: "tier_1", ownership: "government", established_year: 2008, student_population: 700, seed_priority: 2 },
      { name: "Srishti Manipal Institute of Art Design and Technology", short_name: "Srishti", city: "Bangalore", state: "Karnataka", type: "design", tier: "tier_2", ownership: "private", established_year: 1996, student_population: 2000, seed_priority: 2 },
      { name: "National Institute of Fashion Technology Delhi", short_name: "NIFT Del", city: "Delhi", state: "Delhi", type: "design", tier: "tier_1", ownership: "government", established_year: 1986, student_population: 1000, seed_priority: 1 },
      { name: "Pearl Academy Delhi", short_name: "Pearl", city: "Delhi", state: "Delhi", type: "design", tier: "tier_2", ownership: "private", established_year: 1993, student_population: 2500, seed_priority: 2 },
      { name: "National Institute of Design Ahmedabad", short_name: "NID", city: "Ahmedabad", state: "Gujarat", type: "design", tier: "tier_1", ownership: "government", established_year: 1961, student_population: 800, seed_priority: 1 },

      // ── OTHER METROS ──
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

    const { error: collegeError } = await supabase
      .from("colleges")
      .upsert(colleges, { onConflict: "short_name", ignoreDuplicates: true });

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

    // ── SEED USERS ────────────────────────────────────────────────────
    // Multiple fake users for realism
    const seedEmails = [
      "seed-stories@internal.app",
      "seed-user2@internal.app",
      "seed-user3@internal.app",
      "seed-user4@internal.app",
      "seed-user5@internal.app",
    ];

    const userIds: string[] = [];
    const { data: existingUsers } = await supabase.auth.admin.listUsers();

    for (const email of seedEmails) {
      const existing = existingUsers?.users?.find((u: any) => u.email === email);
      if (existing) {
        userIds.push(existing.id);
      } else {
        const { data: newUser } = await supabase.auth.admin.createUser({
          email,
          password: "seed-stories-internal-2024",
          email_confirm: true,
        });
        if (newUser?.user) userIds.push(newUser.user.id);
      }
    }

    const seedUserId = userIds[0];
    const u = (i: number) => userIds[i % userIds.length];

    // ── SEED STORIES ────────────────────────────────────────────────
    if (action !== "seed_reviews") {
      const stories = [

        // ═══════════════════════════════════════
        // 🔥 MALLA REDDY EMPIRE (absolute chaos)
        // ═══════════════════════════════════════

        {
          title: "The WiFi password is 'mallareddy123' and has been since 2015",
          content: "bhai i am not joking. the hostel wifi password is literally 'mallareddy123' and nobody has changed it in 9 years. i asked the warden why — he said 'chairman sir suggested it'. the CHAIRMAN personally chose the wifi password. it connects at 0.3 mbps. i use my hotspot for everything. the wifi exists purely as a monument to the malla reddy brand.",
          college_id: c("MRU"), category: "hostel_life", upvote_count: 347, user_id: u(0)
        },
        {
          title: "Chairman's portrait is 10x bigger than the national flag in every building",
          content: "i counted. in the main building — chairman's portrait: 6 feet wide. national flag: A4 size printout laminated and stuck to the wall. LAMINATED A4. every single building is the same. the labs, the library, the hostel reception. his portrait stares at you while you eat, while you study, while you cry about your marks. welcome to malla reddy university — where one man's legacy is literally taller than democracy.",
          college_id: c("MRU"), category: "campus_life", upvote_count: 412, user_id: u(1)
        },
        {
          title: "HOD called Google Maps 'foreign propaganda' for showing us in a field",
          content: "our HOD called a mandatory meeting to address the 'misinformation being spread by foreign technology companies'. what misinformation? google maps shows our campus location as a field next to a dumpsite. he said it was a 'deliberate attempt to defame the institution by anti-national elements'. sir. sir. it IS a field. the goats behind block D agree.",
          college_id: c("MRCET"), category: "faculty_stories", upvote_count: 389, user_id: u(2)
        },
        {
          title: "Attendance software crashed, prof manually called 400 names for 3 hours",
          content: "the biometric attendance software crashed during exams week. our professor — 62 year old sir who cannot type — was given a physical register and asked to call names. 400 students. it took 3 hours and 14 minutes. he called 'akhil' six different ways. students started answering to anything. a guy named vivek answered to 'vignesh' just to be safe. sir completed all 400 names. uninterrupted. absolute legend. exam started at 12:30pm for a 9am paper.",
          college_id: c("MRCET"), category: "campus_life", upvote_count: 453, user_id: u(3)
        },
        {
          title: "Chaprassi bhai is literally the most powerful person in this college",
          content: "forget professors. forget HODs. forget the principal. chaprassi bhai controls EVERYTHING at MREC. need a hall ticket? chaprassi bhai. need your marks corrected? chaprassi bhai. need a bonafide certificate in one day instead of 3 weeks? chaprassi bhai + ₹200. he has been here since 1997. he knows where every body is buried. faculty greet him first. i once saw the principal hold the door open for him. the real dean.",
          college_id: c("MREC"), category: "campus_life", upvote_count: 521, user_id: u(4)
        },
        {
          title: "Prof taught wrong syllabus for entire semester, blamed JNTUH",
          content: "our data structures professor taught us the R16 syllabus. we were on R20. for the ENTIRE SEMESTER. when students pointed it out in month 4, he said 'JNTUH keeps changing things, how am I supposed to keep up.' sir. sir the syllabus is on the official website. you have been teaching the wrong subject for 4 months. the exam had questions from chapters we never covered. he gave everyone 9/10 in internal marks as compensation. that's it. that's the apology.",
          college_id: c("MREC"), category: "faculty_stories", upvote_count: 398, user_id: u(0)
        },
        {
          title: "New building opened with zero working toilets, bushes for 2 months",
          content: "the new academic block opened with a ribbon-cutting ceremony. the principal gave a speech about 'world-class infrastructure'. we moved in. found out none of the toilets were plumbed. not broken. not under maintenance. just... not connected to anything. pipes going nowhere. we used the bushes behind block E for 2 months while they 'completed the work'. the bushes now have a name. we call it the 'common area'.",
          college_id: c("MRITS"), category: "hostel_life", upvote_count: 378, user_id: u(1)
        },
        {
          title: "Lab chemicals expired in 2009, we used them in 2024",
          content: "pharmacy lab. practical exam. i picked up a chemical reagent bottle. expiry: november 2009. i showed the lab assistant. he said 'chemicals don't really expire, that's just western propaganda.' WESTERN PROPAGANDA. we used 15-year-old reagents for our pharmaceutical analysis practicals. my results were completely wrong. i passed anyway because the prof gave everyone the 'expected' values to copy. the circle of malla reddy life.",
          college_id: c("MRCP"), category: "campus_life", upvote_count: 334, user_id: u(2)
        },
        {
          title: "ONE company came for placements, offered 2.4 LPA packing jobs",
          content: "placement season. after 6 months of 'exciting opportunities coming soon' posters in the placement cell. one company came. ONE. it was a packaging company in patancheru industrial area. they offered 2.4 LPA to pack cardboard boxes. they interviewed 200 students. 12 people got placed. the placement brochure that year said '12 students placed at leading manufacturing firm'. technically true. absolutely fraudulent. my parents still believe i'm in a good college.",
          college_id: c("MREC"), category: "placement_experience", upvote_count: 467, user_id: u(3)
        },
        {
          title: "The campus is so far, auto driver thought I was joking",
          content: "i told the auto driver the address of MRCET. he laughed. actually laughed. then he called his friend and repeated the address. his friend also laughed. 'beta wahan koi college nahi hota' (son, no college exists there). 45 minutes and ₹180 later, we arrived at a building surrounded by open fields. the auto driver took a photo for proof. i see him sometimes in the city. he always looks at me with concern.",
          college_id: c("MRCET"), category: "admission_journey", upvote_count: 289, user_id: u(4)
        },
        {
          title: "MRU orientation: 2-hour speech about the chairman's life story",
          content: "day 1 of college. orientation. we sat for 2 full hours listening to a documentary-style presentation about the chairman's life journey 'from humble beginnings to building an empire of education'. there was background music. the first slide was his childhood photo. the last slide said 'and now, YOU are part of his legacy'. we were handed a printed copy of his biography as a 'gift'. i still haven't received my actual syllabus. i received the biography on day 1.",
          college_id: c("MRU"), category: "admission_journey", upvote_count: 301, user_id: u(0)
        },

        // ═══════════════════════════════════════
        // 🌶️ TIER 2/3 HYDERABAD CHAOS
        // ═══════════════════════════════════════

        {
          title: "JNTUH regulation saga: 4 years in a discontinued regulation",
          content: "joined in 2018 under R16 regulation. in 2020 they said R18 is starting. in 2021 they said actually R18 is merged with R20. in 2022 they said R16 is being 'phased out'. we graduated in 2022 still under R16 which was officially discontinued. my degree says R16 regulation. companies ask 'what's R16'. i say 'it's complicated.' the correct answer is: even JNTUH doesn't know.",
          college_id: c("JNTUH"), category: "campus_life", upvote_count: 445, user_id: u(1)
        },
        {
          title: "Results portal crashed for 3 days, students did puja at the server room",
          content: "JNTUH results were supposed to release at 11am. portal crashed at 10:59am. stayed down for 3 days. on day 2, a group of students from secunderabad came to the campus with flowers, camphor and a pandit. they did a full puja outside the server room. the IT guy inside the server room (who was just eating his lunch) was photographed as if he was the deity. the results came out the next morning. the puja worked. i believe.",
          college_id: c("JNTUH"), category: "funny", upvote_count: 512, user_id: u(2)
        },
        {
          title: "Professor threw chalk, bullseye on the CCTV camera",
          content: "anurag university. mam was ANGRY. student was sleeping in the back row. she grabbed the chalk and hurled it. i have never seen better aim in my life. direct hit on the CCTV camera. it tilted. the feed went blank. for approximately 4 seconds, there was complete silence. then 60 students started slow clapping. the professor turned red. the student woke up and started clapping without knowing why. best physics demonstration of my engineering career.",
          college_id: c("Anurag"), category: "faculty_stories", upvote_count: 467, user_id: u(3)
        },
        {
          title: "GCET hostel dal: unchanged for 16 years, possibly immortal",
          content: "the dal in gcet hostel mess has been the same since 2008. i have confirmed this with seniors, alumni, visiting parents, and the mess cook himself who said 'we found a good recipe and stopped experimenting.' the dal is not bad. the dal is not good. the dal simply EXISTS. it has outlasted 4 principals, 2 mess vendors, and a renovation. we think the dal is what holds the building together. nobody dares change it. nobody will.",
          college_id: c("GCET"), category: "hostel_life", upvote_count: 334, user_id: u(4)
        },
        {
          title: "CMR security guard has more street cred than any professor",
          content: "rajesh bhai. CMR college security guard. has been there since 2009. knows every student by name, by bike number, and by which girlfriend/boyfriend they are currently dating. he has resolved 3 parking disputes, 2 ragging complaints, and once mediated a fight between a faculty member and a vendor. faculty members ask HIM for advice. the principal greeted him on teacher's day. not a mistake. intentional. the man has earned it.",
          college_id: c("CMR"), category: "campus_life", upvote_count: 356, user_id: u(0)
        },
        {
          title: "IARE shuttle: 30km from city, NEVER once on time. Perfect record.",
          content: "iare is 30km outside hyderabad. the shuttle is the only way to survive. the shuttle has NEVER been on time in the 4 years i studied there. not even by accident. we tracked it for a full semester. earliest: 23 minutes late. latest: did not come. average delay: 41 minutes. once it came 10 minutes early by mistake — the driver realized, drove around the block for 10 minutes, and arrived exactly 5 minutes late. honor system.",
          college_id: c("IARE"), category: "hostel_life", upvote_count: 412, user_id: u(1)
        },
        {
          title: "CVR prof failed entire class for 'collective attitude problem'",
          content: "end semester results. entire section — 62 students — failed data communications. reason written in the internal memo: 'students demonstrated collective attitude problem and lack of academic seriousness.' we had 73% average attendance. we attended every lab. the external exam was fine. the professor failed 62 people because we asked too many questions in class. the revaluation took 4 months. we all passed revaluation with the same answers.",
          college_id: c("CVR"), category: "faculty_stories", upvote_count: 423, user_id: u(2)
        },
        {
          title: "VNR placement cell head said 'communication is key' 47 times in 1 talk",
          content: "final year. pre-placement talk. placement cell HOD. 90 minute session. me and my friend started a tally on a napkin. 'communication is key' — 47 times. we verified after. 47. that's once every 1.9 minutes. by count 15 we were giggling. by count 30 we were crying. by count 47 we were in a trance-like state. the girl next to me had written it as a song. when he finally said 'and that, students, is why communication is key' we stood up and gave a standing ovation. he thought it was appreciation.",
          college_id: c("VNR VJIET"), category: "placement_experience", upvote_count: 489, user_id: u(3)
        },
        {
          title: "CBIT seniors made freshers register a fake startup for 'ragging'",
          content: "the seniors at cbit have creative ragging. they didn't ask for pushups or embarrassing songs. they made every fresher in our group incorporate a fake startup — filed with ROC and everything. company name: 'CBIT Enterprises Pvt Ltd'. we were the directors. one guy is still getting GST notices to his home address for a company he formed under duress in 2019. the company has ₹0 revenue. the compliance officer calls twice a year.",
          college_id: c("CBIT"), category: "ragging", upvote_count: 378, user_id: u(4)
        },
        {
          title: "SNIST fest cancelled because DJ played a song the principal disliked",
          content: "annual cultural fest. 3000 students. the DJ played 'the humma song'. principal sir — who was sitting in the front row — stood up, walked to the DJ booth, personally unplugged the laptop, and announced 'the event is concluded.' over the mic. into silence. 3000 people. generator noise. one cricket. that was the 2019 fest. we never had a DJ again. the 2020 fest had a harmonium and classical singing. attendance: 40 students and all the faculty.",
          college_id: c("SNIST"), category: "fest_culture", upvote_count: 356, user_id: u(0)
        },
        {
          title: "MLRIT lab marks depend entirely on the prof's mood and your face",
          content: "i have a theory about mlrit lab practicals. i ran a statistical analysis (i'm a CS student, this is literally my job). students who showed up in ironed clothes: avg 24/25. students in casual wear: avg 18/25. students who greeted the prof in telugu: avg 23/25. students who used english only: avg 17/25. me, who brought the prof a samosa from the canteen: 25/25. sample size: 60 students. p-value: 0.003. the results are conclusive. bring a samosa.",
          college_id: c("MLRIT"), category: "faculty_stories", upvote_count: 412, user_id: u(1)
        },
        {
          title: "MCET counsellor promised 5-star hostel, I got broken fans and no hot water",
          content: "the admission counsellor showed me a brochure with a hostel that looked like a marriott. marble floors. double beds. 'fully air-conditioned'. i signed on the spot. paid the fees. arrived. room: 12x8 feet. 3 people. ceiling fan missing 2 blades. hot water: no. the one in the brochure was the principal's guest house. it exists. only guests use it. when i asked the counsellor about it she said 'conditions may vary from marketing materials.' i didn't go to law school to understand that sentence.",
          college_id: c("MCET"), category: "admission_journey", upvote_count: 378, user_id: u(2)
        },

        // ═══════════════════════════════════════
        // 💜 BANGALORE TIER 2/3 CHAOS
        // ═══════════════════════════════════════

        {
          title: "REVA management sends motivational texts at 6am EVERY SINGLE DAY",
          content: "6:00am. every morning. a text from the college management. 'Good morning! Today is a new opportunity to shine. Remember: YOUR FUTURE IS IN YOUR HANDS! — REVA University Management.' i have received 743 of these messages. i have read 0 of them since week 2. my phone auto-files them now. my mother thought i was in a cult when she saw my message folder. i showed her the college brochure. she agreed that it was possible.",
          college_id: c("REVA"), category: "campus_life", upvote_count: 445, user_id: u(3)
        },
        {
          title: "AIT canteen aunty is more famous than any professor here",
          content: "i have forgotten the name of my operating systems professor. i will NEVER forget rani aunty from the AIT canteen. she knows every student's order by heart. she gives credit to broke students at month-end. she attended 3 student weddings. she rejected a ₹50 tip from a student saying 'give it to someone who needs it'. students from 2010 batch still come back to visit her. not the professors. not the campus. rani aunty. she is the college.",
          college_id: c("AIT Blr"), category: "campus_life", upvote_count: 489, user_id: u(4)
        },
        {
          title: "CMRIT WiFi password changes every Monday, nobody tells anyone",
          content: "the IT department changes the wifi password every monday. policy: for security. communication plan: none. students find out the new password via a chain of 'bhai password kya hai?' that starts from whoever knows the lab assistant personally. by tuesday afternoon the password is on every floor. by wednesday it's in the batch whatsapp. by friday everyone has it. by monday it changes. this has been the weekly ritual since 2016. the IT department considers this 'strong security practice.'",
          college_id: c("CMRIT"), category: "campus_life", upvote_count: 398, user_id: u(0)
        },
        {
          title: "HOD's son failed 3 subjects, appeared on results as 'pass with distinction'",
          content: "i was the exam coordinator assistant. i should not be saying this. the HOD's son failed algorithms, DBMS, and computer networks in the third semester. i saw the original mark sheets. i helped file them. two weeks later the published results showed him as passed with distinction in all three subjects. the marks were literally different numbers. i asked the coordinator about it. he looked at me for a long time and said 'sometimes the system makes errors during data entry.' i transferred departments the next semester.",
          college_id: c("BNMIT"), category: "confession", upvote_count: 534, user_id: u(1)
        },
        {
          title: "Paid 2 lakh fees at Presidency, got broken AC and plastic chairs",
          content: "the website said 'state of the art smart classrooms'. i paid ₹2,20,000 in fees. classroom 301: plastic chairs that wobble, one of three ACs broken, projector that works at 40% brightness in a room with 8 windows and no curtains. the 'smart' part is a QR code on the door. i scanned it. it takes you to the college website. the website has photos of a different building entirely. i'm pretty sure those photos are from a college in coimbatore.",
          college_id: c("Presidency Univ"), category: "admission_journey", upvote_count: 367, user_id: u(2)
        },
        {
          title: "DSCE farewell: formal dress code, 40-degree heat, no AC, no mercy",
          content: "june farewell. bangalore. 40 degrees that day. venue: the college open-air amphitheater. dress code: strictly formal. boys in suits. girls in sarees or formal western. the principal gave a 1 hour speech about 'professionalism in the workplace'. sweat was dripping from the ceiling lights. three people fainted. one suit caught fire near a lamp (minor, handled quickly). after the event, 15 people vomited. the food was also expired. it was the most memorable day of my college life. truly unforgettable.",
          college_id: c("DSCE"), category: "fest_culture", upvote_count: 423, user_id: u(3)
        },
        {
          title: "BMSIT prof sent student out of class for 'western haircut'",
          content: "tushar got a modern fade haircut over the weekend. walked into monday morning class. professor stopped mid-sentence, looked at tushar's head, and said — i quote — 'this is an institution of learning, not a bollywood film set. if you cannot respect our culture, please wait outside.' tushar sat outside for 90 minutes. he was readmitted after promising to 'think about his choices.' tushar graduated with an 8.4 CGPA and now works at an MNC where his entire team has fades.",
          college_id: c("BMSIT"), category: "faculty_stories", upvote_count: 445, user_id: u(4)
        },
        {
          title: "NHCE: 3 buses, 8000 students, every morning is the hunger games",
          content: "the bus stop at nhce at 8:30am is the most lawless place in bangalore. three buses for 8000 students. there is no queue. there is no system. there is only survival. i have seen:  a girl vault over a compound wall to board bus 2 from the back. two guys finish a physical fight, board the same bus, become friends. a professor join the chaos, fail to board, and walk back to his car in silence. i take an auto now. ₹80 well spent for my mental health.",
          college_id: c("NHCE"), category: "hostel_life", upvote_count: 389, user_id: u(0)
        },
        {
          title: "NMIT librarian has been sleeping on duty for 4 years, nobody stopped him",
          content: "the nmit library has a librarian — i will call him sir — who has been sleeping at his desk from approximately 11am to 3pm every working day since i joined in 2020. students work around him. we've learned to process our own book check-outs. one time a visitor from the AICTE inspection team came while he was asleep. we put a stack of files in front of him to make it look like he was reviewing documents. sir got praised for 'diligent work'. he slept through the entire compliment.",
          college_id: c("NMIT"), category: "funny", upvote_count: 501, user_id: u(1)
        },

        // ═══════════════════════════════════════
        // 🏆 GOLD-TIER LEGENDARY STORIES
        // ═══════════════════════════════════════

        {
          title: "IIIT-H student built AI that solves JNTUH papers, entire faculty panicked",
          content: "a 3rd year student at iiit-h trained an LLM specifically on 15 years of JNTUH question papers. it could predict exam questions with 73% accuracy. he shared it in the batch group. within 48 hours it reached 40,000 students across telangana. jntuh issued an emergency circular banning 'AI-assisted examination prediction tools'. iiit-H professors were horrified — not by the security breach, but because the model was better at writing exam questions than the professors. he got a PPO from an AI company before graduation.",
          college_id: c("IIIT-H"), category: "inspirational", upvote_count: 567, user_id: u(2)
        },
        {
          title: "3am: entire BITS hostel sings Pehla Nasha, security bhai joins in",
          content: "it started with one room in the C wing. 3am. someone started playing pehla nasha on guitar. by the second verse, the next room had opened their door. by the chorus, the corridor was singing. by the end of the song, all 6 floors of the hostel were on their balconies. silence. then someone started the song again. all 6 floors again. security bhai — ramanna, who had been doing rounds — stood in the courtyard and started humming. we sang it 4 times that night. nobody knows who started it. nobody needed to know.",
          college_id: c("BITS Hyd"), category: "hostel_life", upvote_count: 623, user_id: u(3)
        },
        {
          title: "ISB professor fell asleep during his OWN lecture. ₹40 lakh course.",
          content: "dr. subramaniam. corporate strategy. module 4. he was mid-sentence explaining porter's five forces. his head dropped. the clicker fell from his hand. the room — 60 MBA students who collectively paid ₹240 crores in fees — sat in absolute silence for 3 minutes. someone in the back row whispered 'should we wake him?'. someone else whispered back 'he's charging ₹66 lakh per hour, let him sleep.' he woke up 4 minutes later, continued from exactly where he left off. gave us all full marks on that module. the man is a professional.",
          college_id: c("ISB"), category: "funny", upvote_count: 534, user_id: u(4)
        },
        {
          title: "IISc student found a cobra in the lab, finished the experiment anyway",
          content: "spectroscopy lab. 4th floor. priya opened a cabinet under the workbench and found a cobra. medium-sized. clearly confused. she closed the cabinet, stood up, told the lab assistant 'there is a snake in cabinet 4', and continued running her experiment. the lab assistant called wildlife rescue. by the time they arrived 40 minutes later, priya had completed her experiment, cleaned up her workstation, and was reviewing her data. she told the wildlife officer 'cabinet 4, it seemed calm.' she got her PhD last year. the cobra was released in GKVK forest. both are fine.",
          college_id: c("IISc"), category: "campus_life", upvote_count: 589, user_id: u(0)
        },
        {
          title: "Entire IIM-B batch ghosted a professor for a full semester. He noticed at feedback.",
          content: "prof. ramanathan taught business ethics. nobody went to class after week 3. not a single student. he continued teaching to an empty room for 11 weeks. recorded his lectures. uploaded them. marked everyone's attendance manually 'present' because 'i cannot confirm absence without physical verification.' at the end-of-semester feedback, he wrote in his report: 'this batch showed exceptional initiative in self-directed learning.' the feedback form asked if he noticed any issues. he wrote 'no issues observed.' greatest professor. biggest legend.",
          college_id: c("IIM-B"), category: "faculty_stories", upvote_count: 578, user_id: u(1)
        },
        {
          title: "RVCE student rejected Goldman Sachs for startup. It worked.",
          content: "placement season 2019. goldman sachs was on campus. vivek got through all rounds. offer: ₹28 LPA. he declined. placement cell called his parents. his parents called him 11 times. his HOD personally visited his room. he declined anyway. started a fintech startup with 2 batchmates in a 1BHK in koramangala. 2022: series B funding of $4M. 2024: acquired by a US fintech for undisclosed amount (multiple sources say 8 figures). the goldman sachs offer letter is framed in the RVCE placement office as a cautionary tale. it is the most inspiring thing i have ever seen.",
          college_id: c("RVCE"), category: "placement_experience", upvote_count: 612, user_id: u(2)
        },
        {
          title: "PES hostel room drone project: security thought it was a weapon",
          content: "room 412. three of us spent 3 months building a fully functional delivery drone in our hostel room. parts arrived weekly as 'computer accessories'. by month 2, the drone could carry 800 grams and fly at 60kmph. we tested it in the corridor at 2am. a security guard saw it, screamed, pressed the panic button, and the entire hostel was evacuated for 45 minutes at 2:30am. 400 students outside in their nightclothes. we showed the security team the drone. one senior guard said 'okay but why.' valid question. we got featured in the college newsletter. it said 'innovative use of hostel space.'",
          college_id: c("PES"), category: "campus_life", upvote_count: 556, user_id: u(3)
        },

        // ═══════════════════════════════════════
        // 🎨 DESIGN COLLEGE STORIES
        // ═══════════════════════════════════════

        {
          title: "NIFT Hyd visiting prof from Milan spent entire class criticizing Hyderabad fashion",
          content: "visiting professor from milan school of design. first lecture. we were excited. he walked in wearing a white turtleneck. sat down. looked around at the class. said 'before we begin, i need to process what i am seeing clothing-wise.' he then spent 2 hours critiquing — individually, out loud — what each of the 24 students was wearing. one girl was wearing a beautiful kanjeevaram saree. he said it was 'texturally interesting but conceptually colonial.' she transferred to nift delhi the next semester. he rated my outfit 'confused but honest.' that's probably accurate.",
          college_id: c("NIFT Hyd"), category: "faculty_stories", upvote_count: 456, user_id: u(4)
        },
        {
          title: "NIFT Blr collection deadline: 3 days in studio, college ordered 40 pizzas at 3am",
          content: "3 days before collection submission. the studio looked like a war zone with fabric. nobody had slept. people were crying into their mood boards. at 2:47am on the final night, the department head walked in with the admin staff, carrying 40 boxes of domino's pizza. she put them down, said 'eat something before you ruin another seam', and left. no speech. no motivation. just pizza. all 35 students sat on the floor among the fabric scraps and ate pizza at 3am. it's the most beautiful memory from my entire design education.",
          college_id: c("NIFT Blr"), category: "campus_life", upvote_count: 501, user_id: u(0)
        },
        {
          title: "Srishti portfolio review: 3 cried, 2 quit art, 1 got famous",
          content: "end of first year. portfolio review with external industry panelists. 18 students. the panel was brutal in a way i didn't know adults were allowed to be. student 1: 'this is technically competent and emotionally empty.' student 7: the panelist just shook her head and moved on without speaking. 3 students cried during their presentation. 2 withdrew from the program the following week. student 14 — meera — got absolutely destroyed for 20 minutes. the panelist said her work was 'disturbing in a way that is hard to look away from.' meera's first solo show sold out in 2022. she thanked the panel in her artist statement.",
          college_id: c("Srishti"), category: "admission_journey", upvote_count: 489, user_id: u(1)
        },
        {
          title: "NIFT Del: model wore wrong shoes on ramp, entire batch failed the module",
          content: "fashion show module. final showcase. model for our batch wore white sneakers instead of the heels specified in our design brief. not a dramatic difference. 3cm height and a color change. the faculty panel failed ALL 24 students in the batch for 'failure to ensure execution quality and overlooking critical design specifications.' we argued that the model made an independent choice. the faculty said 'the designer is responsible for every atom of the look.' we all did the module again in the summer. i now specify shoe lace colors in my briefs. i am not taking chances.",
          college_id: c("NIFT Del"), category: "funny", upvote_count: 423, user_id: u(2)
        },
        {
          title: "NID Ahmedabad: rejected 3 times, got in on 4th attempt, worth every rejection",
          content: "i applied to NID four times. the first three times i didn't even pass the preliminary screening. the fourth time i spent 6 months redesigning every single project in my portfolio from scratch. slept 5 hours a night. the studio interview lasted 45 minutes and they asked me to redesign the chair i was sitting on in real time. i did it with a pen and a napkin. i got in. being at NID is like breathing different air. the way people think about objects, systems, experiences here is unlike anything i've experienced. the 3 rejections were the best thing that happened to me.",
          college_id: c("NID"), category: "inspirational", upvote_count: 478, user_id: u(3)
        },

        // ═══════════════════════════════════════
        // ♻️ EXISTING CLASSICS (preserved)
        // ═══════════════════════════════════════

        { title: "Professor caught us in the server room 💀", content: "my professor caught me and my ex making out in the server room at iiit-h. he just said 'at least close the door' and walked away. we never spoke of it again. that man has seen things.", college_id: c("IIIT-H"), category: "confession", upvote_count: 187, user_id: u(0) },
        { title: "Our prof copies from YouTube tutorials live in class", content: "our jntuh prof literally copies from youtube tutorials during class. one time his wifi died mid-lecture and he just... left. came back 20 mins later pretending nothing happened. we all saw him in the canteen.", college_id: c("JNTUH"), category: "faculty_stories", upvote_count: 143, user_id: u(1) },
        { title: "HR was on Tinder during our placement test", content: "company came to bits hyd, asked us to build a full-stack app in 2 hours. the HR was literally on tinder the whole time. she matched with someone and said 'at least someone's getting placed today.' i'm not joking.", college_id: c("BITS Hyd"), category: "placement_experience", upvote_count: 221, user_id: u(2) },
        { title: "Roommate's girlfriend stayed for 3 weeks straight", content: "my roommate at OU brought his girlfriend to our hostel room. she stayed for 3 WEEKS. the warden thought she was a new student. i had to sleep in the common room. when they broke up, she kept the room key.", college_id: c("OU"), category: "hostel_life", upvote_count: 165, user_id: u(3) },
        { title: "Live chicken released in the exam hall 🐔", content: "someone released a live chicken in the exam hall during our thermodynamics paper. the invigilator chased it for 20 minutes while we all copied. best group project we ever did. everyone passed.", college_id: c("RVCE"), category: "funny", upvote_count: 198, user_id: u(4) },
        { title: "The fest was so bad the chief guest left mid-speech", content: "the college fest was so bad, the chief guest left mid-speech. the DJ played the same 3 honey singh songs on loop for 4 hours. someone threw a chappal at the stage. the organizing committee got a trophy for 'best disaster management.'", college_id: c("PES"), category: "fest_culture", upvote_count: 134, user_id: u(0) },
        { title: "IISc secret mesh network built by students is faster than official WiFi", content: "iisc wifi is so bad that students have created a secret mesh network using hotspots and old routers. the IT department knows but can't find the source. it's faster than the official one. we call it 'ScienceNet.'", college_id: c("IISc"), category: "campus_life", upvote_count: 93, user_id: u(1) },
        { title: "MBA student proposed during case study with CEO in the room", content: "during a live case study with a company CEO in the audience, this unit of an MBA student proposed to his girlfriend who was on the opposing team. she said no. the CEO offered him a job for 'boldness in high-pressure situations.'", college_id: c("ISB"), category: "funny", upvote_count: 210, user_id: u(2) },
        { title: "DSA professor spent entire semester talking about his divorce", content: "our DSA professor spent the entire semester talking about his divorce instead of teaching algorithms. final exam had 'discuss the time complexity of heartbreak' as a question. i'm not making this up. he got transferred.", college_id: c("IIIT-H"), category: "faculty_stories", upvote_count: 234, user_id: u(3) },
        { title: "IIM case study about our own college's management failures", content: "a professor literally used our own college's mismanagement as a case study in organizational behavior class. administration tried to get it removed. it became the most downloaded paper on the portal.", college_id: c("IIM-B"), category: "inspirational", upvote_count: 142, user_id: u(4) },
        { title: "Entire batch failed because prof forgot to submit grades before going on vacation", content: "the entire batch of 120 students failed a subject because the professor forgot to submit grades before the deadline. he said 'i was on vacation.' we redid the semester paper. he won 'Best Professor' that year.", college_id: c("DTU"), category: "faculty_stories", upvote_count: 211, user_id: u(0) },
        { title: "JNU 6-hour canteen debate: idli vs poha, formal vote, idli wins", content: "a debate started in the JNU canteen about whether idli-sambar or poha is the superior breakfast. it lasted 6 hours, attracted 200+ students, and a professor moderated it as extra credit for political theory. idli won 52-48.", college_id: c("JNU"), category: "funny", upvote_count: 165, user_id: u(1) },
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
          .insert(newStories.map(s => ({ ...s, status: "published" })));

        if (storyError) {
          console.error("Story insert error:", storyError);
        } else {
          storiesInserted = newStories.length;
        }
      }

      return new Response(
        JSON.stringify({
          success: true,
          colleges_in_list: colleges.length,
          stories_attempted: stories.length,
          stories_inserted: storiesInserted,
          stories_skipped: stories.length - newStories.length,
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // ── SEED REVIEWS ────────────────────────────────────────────────
    let reviewsInserted = 0;
    let profReviewsInserted = 0;

    if (action === "seed_reviews" || action === "seed_all") {
      const { count: existingReviewCount } = await supabase
        .from("reviews")
        .select("id", { count: "exact", head: true });

      if ((existingReviewCount || 0) < 10) {
        const reviewData = [
          { college_id: c("BITS Hyd"), user_id: seedUserId, title: "BITS Hyd is worth every penny", content: "Absolutely top-tier experience. The faculty are research-oriented and push you hard. Placements are phenomenal — almost everyone from CS gets above 15 LPA. Infrastructure is excellent, hostels are clean.", reviewer_type: "alumni", course: "B.E. Computer Science", department: "Computer Science", admission_year: 2018, graduation_year: 2022, status: "published", overall_rating: 4.6, rating_placement: 5, rating_faculty: 5, rating_curriculum: 5, rating_hostel: 4, rating_food: 3, rating_wifi: 5, rating_infrastructure: 5, rating_campus_life: 4, rating_safety: 5, rating_location: 4, rating_admin: 4, rating_value_for_money: 4, pros: "Amazing placements, world-class faculty, great peer group", cons: "Food is average, campus can feel isolated", advice: "Join clubs early and attend every coding competition." },
          { college_id: c("IIIT-H"), user_id: seedUserId, title: "Best CS college in Hyderabad hands down", content: "If you want to do CS properly, IIIT-H is the place. The research culture is insane. Professors are from top PhD programs abroad. Most students either get into top grad schools or tier-1 companies.", reviewer_type: "alumni", course: "B.Tech Computer Science", department: "Computer Science", admission_year: 2017, graduation_year: 2021, status: "published", overall_rating: 4.7, rating_placement: 5, rating_faculty: 5, rating_curriculum: 5, rating_hostel: 3, rating_food: 3, rating_wifi: 5, rating_infrastructure: 4, rating_campus_life: 3, rating_safety: 4, rating_location: 4, rating_admin: 3, rating_value_for_money: 4, pros: "Research-focused faculty, exceptional placements, small batch size", cons: "Campus is small, hostel facilities are basic", advice: "Get into a research lab early, it changes everything." },
          { college_id: c("IISc"), user_id: seedUserId, title: "The best research institution in India", content: "IISc is in a different league for research. If you want to do a PhD or go into deep tech, there's nowhere better in India. The atmosphere is intensely academic. Most people here have turned down IIT seats.", reviewer_type: "current_student", course: "B.S. Research (Computer Science)", department: "Computer Science & Automation", admission_year: 2020, graduation_year: 2024, status: "published", overall_rating: 4.5, rating_placement: 4, rating_faculty: 5, rating_curriculum: 5, rating_hostel: 4, rating_food: 3, rating_wifi: 3, rating_infrastructure: 5, rating_campus_life: 3, rating_safety: 5, rating_location: 4, rating_admin: 4, rating_value_for_money: 5, pros: "Best research environment in India, elite peer group, beautiful campus", cons: "WiFi is frustratingly bad, social life is almost non-existent", advice: "Get into a lab in your first semester." },
          { college_id: c("ISB"), user_id: seedUserId, title: "Best MBA program in India, period", content: "ISB is worth the Rs 40 lakh fee. The ROI is proven — average placement is 35+ LPA and the network you build is unmatched. One year program means you're out quickly and earning fast. Faculty are from top global B-schools.", reviewer_type: "alumni", course: "Post Graduate Programme in Management", department: "Management", admission_year: 2019, graduation_year: 2020, status: "published", overall_rating: 4.6, rating_placement: 5, rating_faculty: 5, rating_curriculum: 5, rating_hostel: 5, rating_food: 4, rating_wifi: 5, rating_infrastructure: 5, rating_campus_life: 4, rating_safety: 5, rating_location: 4, rating_admin: 4, rating_value_for_money: 4, pros: "Unmatched placements, elite network, world-class faculty", cons: "Very expensive, extremely competitive", advice: "Have at least 3 years of strong work experience before applying." },
          { college_id: c("DTU"), user_id: seedUserId, title: "One of Delhi's best government engineering colleges", content: "DTU offers a great education at government college fees. CS and Electronics branches have excellent placement records. The campus is huge and facilities are being upgraded. Admin can be slow.", reviewer_type: "current_student", course: "B.Tech Computer Science", department: "Computer Science", admission_year: 2020, graduation_year: 2024, status: "published", overall_rating: 4.1, rating_placement: 5, rating_faculty: 4, rating_curriculum: 4, rating_hostel: 3, rating_food: 3, rating_wifi: 3, rating_infrastructure: 4, rating_campus_life: 4, rating_safety: 4, rating_location: 4, rating_admin: 3, rating_value_for_money: 5, pros: "Government college fees, excellent placements for CS, Delhi location", cons: "Hostel is average, WiFi is unreliable", advice: "Focus on DSA and competitive programming from day 1." },
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
    }

    return new Response(
      JSON.stringify({
        success: true,
        colleges_seeded: colleges.length,
        reviews_inserted: reviewsInserted,
        prof_reviews_inserted: profReviewsInserted,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
