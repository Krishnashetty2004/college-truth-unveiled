-- =====================================================
-- ICFAI/IBS ROAST STORIES - Absolutely Savage Edition
-- Hinglish, No Filter, God-Level Burns
-- =====================================================

-- 1. Tech Placement Reality Check
INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'ICFAI tech placement: 3 LPA offer aaya, usme bhi bond sign karna padega 💀',
  'bhai sun. placement season aaya. humne socha finally tech role milega. company aaye — ek toh naam bhi nahi suna kabhi. offered 3 LPA. BUT WAIT. 2 year bond. training fee deduct. relocation NOT covered. actual in-hand: ₹18,000/month. in HYDERABAD. rent alone is ₹12,000. baaki ₹6,000 mein jeena hai. maine calculator nikala. HR ne calculator cheen liya. bola "focus on learning, not money". SIR LEARNING SE RENT NAHI BHARTA. maa baap ko kya bolu? ki MIT se reject hua toh ICFAI aaya, ab 18k kamata hoon? they still think i''m doing well. i let them think. ignorance is bliss. for them. not for me.',
  'placement_experience',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 300 + 600)::int
FROM colleges c WHERE c.short_name = 'ICFAI/IBS' LIMIT 1;

-- 2. MBA Roast - Absolute Destruction
INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'IBS MBA: 20 lakh fees, placements mein Byju''s BDA role. ROI negative hai bhai.',
  'MBA kiya. IBS Hyderabad. total investment: 20 lakh (fees + hostel + "mandatory" study tours). placement: Byju''s BDA role. 6 LPA CTC. 3.2 LPA in hand. JOB: selling courses to parents. calling 200 people daily. "sir aapke bachhe ka future". bc i went to B-school to become a glorified telecaller? ROI calculate kiya. negative. literally negative. i would have made more money if i had put 20 lakh in FD and sat at home. at least FD doesn''t make you cry in office bathroom. my father asked "beta MBA toh ho gaya, ab settle ho jao". papa, mai Byju''s mein hun. settling nahi ho raha. unsettling ho raha hai.',
  'placement_experience',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 300 + 700)::int
FROM colleges c WHERE c.short_name = 'ICFAI/IBS' LIMIT 1;

-- 3. Fest Roast - Zero Budget Maximum Cringe
INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'IBS fest ka budget itna low tha ki DJ ne apna phone connect karke gaana bajaya',
  'annual fest. poster said "biggest fest of hyderabad". bhai attendance thi 400 log. 300 were students who were FORCED to come. compulsory hai warna attendance issue. DJ aaya. professional DJ hire kiya tha. ₹10,000 fees. DJ ka equipment kharab ho gaya. what did he do? CONNECTED HIS PHONE. played spotify free version. EVERY 3 SONGS — AD. "spotify premium try karein". we''re dancing to DJ at a fest. ad aata hai. dance ruk jata hai. ad khatam. dance shuru. this happened 14 times. i counted. fest coordinator won "best event management" award. FOR WHAT? THE ADS?? we are clowns. this is circus. fees is admission ticket.',
  'fest_culture',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 300 + 650)::int
FROM colleges c WHERE c.short_name = 'ICFAI/IBS' LIMIT 1;

-- 4. Law School - Don't Even Talk About It
INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'ICFAI Law: NLU reject hoke aaye, yahan aake aur reject feel hote hain',
  'CLAT mein rank nahi aaya. backup: ICFAI Law. joined with hope. "at least law toh padh lenge". bc yahan law kam, politics zyada padhte hain. moot court competition hua. judge was a local advocate whose main achievement is "30 years experience in district court". no offense but sir, we wanted to learn constitutional law, not how to file bail applications in malkajgiri court. placements? law firms don''t come here. they don''t even know we exist. we have to send cold emails. 200 emails sent. 3 replies. all rejections. polite rejections but rejections. "we appreciate your interest but currently not hiring from your institution". CURRENTLY. as if koi time aayega jab they will. they won''t. we know. they know. everyone knows. but we still send emails. hope is a dangerous drug.',
  'campus_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 300 + 580)::int
FROM colleges c WHERE c.short_name = 'ICFAI/IBS' LIMIT 1;

-- 5. Money = Relationships (Savage Confession)
INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'IBS mein relationship chahiye? Paisa dikhao. Personality optional hai.',
  'first year tha. i thought personality matters. i was funny. i was kind. i was BROKE. result: single. then observed the campus dynamics. rich kids — doesn''t matter if they''re dumb, rude, have personality of a brick — they had girlfriends. multiple. guy in my class. dad owns dealership. he can''t spell "business" correctly. has dated 4 girls in 2 years. maine approach kiya ek ladki ko. she asked "tumhara ghar kahan hai?" i said "rented flat". she said "oh nice" and never replied again. bhai yahan love nahi hai, investment hai. relationship = financial partnership. shaadi.com se seedha hai yeh toh. at least wahan openly baat hoti hai. yahan pretend karte hain ki "vibe" matter karti hai. vibe nahi bhai, BMW matter karti hai.',
  'confession',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 300 + 750)::int
FROM colleges c WHERE c.short_name = 'ICFAI/IBS' LIMIT 1;

-- 6. Tech Department vs MBA - Internal War
INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Tech walon ko MBA wale "future IT coolie" bulate hain. We call them "future unemployed". Fair.',
  'campus mein cold war hai. tech students vs MBA students. MBA wale sochte hain they''re superior because "management mindset". tech wale sochte hain they''re superior because "actual skills". truth? DONO KI GAAND LAGI HAI. tech placements: 3-4 LPA service companies. MBA placements: byju''s and insurance companies. but we fight anyway. canteen mein alag tables. MBA wale suits pehente hain class mein. why? "professional appearance". bhai yeh goa nahi hai ki dress code hatao. yeh college hai. chill karo. tech wale hoodies pehente hain. "silicon valley culture". bhai yeh bangalore nahi hai. yahan humidity hai. sweating in hoodie is not culture, it''s torture. dono sides pagal hain. main bhi pagal hoon. hum sab pagal hain.',
  'campus_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 300 + 690)::int
FROM colleges c WHERE c.short_name = 'ICFAI/IBS' LIMIT 1;

-- 7. Good Story - One Prof Who Actually Cares
INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Sharma sir: akele insaan jo actually padhaate hain. Baaki sab YouTube forward karte hain.',
  'ek positive story bhi sun lo. sharma sir. economics professor. only person in this entire institution who ACTUALLY TEACHES. class mein whiteboard use karte hain. notes khud likhte hain. examples dete hain. not YouTube videos. not "self-learning module". ACTUAL. TEACHING. revolutionary concept for ICFAI apparently. ek baar maine doubt pucha after class. he sat with me for 1 HOUR. explained everything. no extra charge. no attitude. just pure teaching. when i said thank you, he said "this is my job, why thank?". SIR. other professors ko toh attendance lene mein bhi mehnat lagti hai. you are an anomaly. a beautiful anomaly. when he retires, this place will collapse. he is the single load-bearing pillar. we worship him. unofficially.',
  'faculty_stories',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 300 + 820)::int
FROM colleges c WHERE c.short_name = 'ICFAI/IBS' LIMIT 1;

-- 8. Rich Kid Confession - Brutal Honesty
INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'I''m a rich kid here. Confession: mujhe bhi pata hai education shit hai, but papa ka paisa hai toh kya karun',
  'honest confession from a rich kid. main IBS mein hoon. papa ne admission karwaya. i know this college is not great. i know placements are bad. i know education quality is meh. BUT. mujhe kya? i''ll graduate. join papa''s business. MBA degree will be on the wall. for show. i feel bad for middle class students though. they''re actually HERE for education. taking loans. working hard. and for what? same useless degree, but THEY have to find jobs. WE already have jobs. family business. i pretend to study. they actually study. they score more. i get placed (family). they struggle. life is unfair. i didn''t make the rules. but i benefit from them. i''m sorry. i''m not sorry. i''m confused. mostly privileged. definitely confused.',
  'confession',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 300 + 880)::int
FROM colleges c WHERE c.short_name = 'ICFAI/IBS' LIMIT 1;

-- 9. Fake Internship Scam Story
INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Placement cell ne "internship" dilwaya. Unpaid tha. Company thi nahi. Ghar se kaam tha. 💀',
  'placement cell email aaya. "exciting internship opportunity for IBS students". applied. got selected. NO INTERVIEW. should have been red flag #1. "work from home internship". red flag #2. "unpaid but certificate provided". red flag #3. maine accept kar liya anyway. desperate times. COMPANY DIDN''T EXIST. google kiya — no website, no linkedin, nothing. "work" tha: share social media posts. that''s it. 2 months of sharing random motivational posts on linkedin. certificate mila. company name: "GlobalTech Solutions Pvt Ltd". search karo. doesn''t exist. maine resume pe daala anyway. interviewer ne pucha "what was your role at GlobalTech?". i said "social media management". he googled. paused. looked at me. i looked at him. we both knew. he rejected me. fair.',
  'placement_experience',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 300 + 670)::int
FROM colleges c WHERE c.short_name = 'ICFAI/IBS' LIMIT 1;

-- 10. Hostel Food Horror
INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Hostel mess ka khana khake doctor ke paas gaya. Doctor bola "ICFAI se ho kya?" He knew.',
  'hostel mess. dinner. "paneer" curry. ate it. 3am: stomach exploded. literally felt like aliens inside. went to nearby hospital. emergency. doctor examined. asked some questions. then casually asked "ICFAI hostel mein rehte ho?". i said yes. HE NODDED KNOWINGLY. like this was expected. gave me medicine. said "beta yeh common hai wahan se. hamesha antacid rakhna." SIR. THE DOCTOR KNOWS OUR MESS FOOD IS DANGEROUS. this is not quality issue. this is PUBLIC HEALTH CRISIS. informed warden. warden said "everyone''s stomach is different". yes sir, everyone''s stomach is different but EVERYONE is sick. coincidence? i think not. i eat outside now. ₹200/day extra. small price for not dying.',
  'hostel_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 300 + 720)::int
FROM colleges c WHERE c.short_name = 'ICFAI/IBS' LIMIT 1;

-- 11. Group Discussion Clownery
INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'GD practice mein topic tha "AI in Business". Ek ladke ne 10 min Salman Khan pe baat ki. Selected.',
  'MBA class. GD practice. serious stuff. topic: "Artificial Intelligence in Modern Business". i prepared. read articles. made points. my turn came. spoke about ML applications, automation, job displacement. felt good. next guy''s turn. he starts... WITH SALMAN KHAN MOVIE REFERENCE. "sir jaise Salman Khan ne Ready mein AI use kiya..." SIR READY MEIN KOI AI NAHI THA. WOH COMEDY FILM THI. he continued for 10 MINUTES. about how Salman Khan is example of "natural intelligence" and therefore AI cannot replace humans. prof nodding. NODDING. at the end? he got selected for mock placement GD. i didn''t. feedback for me: "too technical, need more creativity". CREATIVITY? SALMAN KHAN IS NOT CREATIVITY. IT''S DELUSION. but ok. next time i''ll reference Tiger 3. apparently that''s what gets you placed.',
  'funny',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 300 + 780)::int
FROM colleges c WHERE c.short_name = 'ICFAI/IBS' LIMIT 1;

-- 12. Relationship Reality - Shallow AF
INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Breakup ho gaya. Reason: mere paas car nahi thi. Her words: "future dikha bhai".',
  'dated this girl for 6 months. thought it was going well. then one day she said "bhai we need to talk". "bhai". instant heartbreak. she said "tu accha hai but future kya hai tera?". i said "MBA kar raha hoon, placement hogi, grow karunga". she said "haan but like ABHI kya hai? car hai? flat hai? startup hai?". BRO I AM 23. i have NOTHING except student loan. she wanted someone with "established path". translation: rich kid with daddy''s business. we broke up. 2 weeks later she was dating a guy whose dad owns a hotel chain. mujhe dukh nahi hua breakup ka. dukh hua ki 6 months waste kiye. she was auditioning. i was the rehearsal. the hotel guy was the main role. i was just practice. that''s IBS dating. everyone''s looking for upgrade. everyone''s temporary.',
  'confession',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 300 + 830)::int
FROM colleges c WHERE c.short_name = 'ICFAI/IBS' LIMIT 1;

-- 13. Good Story - Alumni Network Actually Helped
INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Ek senior alumni ne LinkedIn pe message kiya. Actually helped me get internship. Faith restored (thoda).',
  'was losing hope. sending applications everywhere. getting rejected. one day linkedin message: "hey, saw you''re from IBS. i graduated 2015. how can i help?". i thought scam hai. but replied anyway. kya jaata hai. HE ACTUALLY HELPED. referred me to his company. got internship. PAID internship. ₹25k/month. in bangalore. proper work. proper learning. i asked him why he helped random junior. he said "jab main tha tab koi help nahi thi. toh maine decide kiya main karunga". 😭 bhai rula diya. there ARE good people from this college. they''re just... rare. like shiny pokemon. you have to search hard. but they exist. this senior is now my mentor. he checks on me every month. gives career advice. IBS gave me nothing. IBS alumni gave me everything. institution fails. individuals save.',
  'inspirational',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 300 + 870)::int
FROM colleges c WHERE c.short_name = 'ICFAI/IBS' LIMIT 1;

-- 14. Marketing vs Reality - Savage
INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Brochure: "World-class infrastructure". Reality: AC works only during inspection. 🤡',
  'remember when we took campus tour? shiny buildings. AC classrooms. "smart boards". "digital library". all working perfectly. WHAT THEY DIDN''T TELL YOU: that was inspection week. join karne ke baad? AC: "under maintenance" since 2019. smart boards: 3 out of 12 work. digital library: 4 computers for 200 students. projector: makes noise like airplane. chairs: half broken. but every year, 2 weeks before NAAC or whatever inspection — EVERYTHING WORKS MAGICALLY. AC suddenly fixed. chairs replaced. even the GRASS looks greener. inspection khatam? back to normal. we are living in two different colleges. inspection version and real version. fees same hai. experience different hai. this is fraud. legal fraud but fraud. they should offer MBA in "Institutional Deception". at least we''d learn practical skills.',
  'campus_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 300 + 740)::int
FROM colleges c WHERE c.short_name = 'ICFAI/IBS' LIMIT 1;

-- 15. The Ultimate Roast - Self Aware
INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'IBS ka full form: "I Be Struggling". Officially it''s Indian Business School. Unofficially: pain.',
  'someone asked me "IBS kya hai?". official answer: ICFAI Business School. top B-school. great placements. amazing faculty. real answer? I. Be. Struggling. daily. constantly. academically. financially. emotionally. professionally. we struggle to wake up for 8am classes. we struggle to understand what professors are saying. we struggle to get internships. we struggle to get placements. we struggle to explain to relatives what IBS is. "beta IIM hai?" "nahi uncle, IBS". "oh... IIT jaisa?" "nahi uncle... business school". "achha toh MBA?" "haan uncle" "toh job toh mil jayegi?" *nervous laughter* "haan uncle... zaroor". lie. i lied. we all lie. because truth is too painful. truth is: I Be Struggling. forever. until some miracle happens. or until we accept our fate. either works.',
  'funny',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 300 + 910)::int
FROM colleges c WHERE c.short_name = 'ICFAI/IBS' LIMIT 1;

-- 16. Study Tour Scam
INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Mandatory study tour: 40k fees. "Industry visit" was factory ka gate se photo. Andar nahi gaye.',
  'MBA requires "industry exposure". college organized study tour. goa + mumbai. "company visits". "industry interaction". cost: ₹40,000. MANDATORY. can''t graduate without it. what happened? goa: 2 days beach. party. no study. mumbai: reached "company". STOOD OUTSIDE GATE. took group photo. guard ne andar nahi jaane diya. didn''t have proper permission. ₹40,000 for gate photo. faculty said "sometimes plans change". SIR. YOU CHARGED 40K. FOR A GATE PHOTO. could have gone myself for 5k. got same gate photo. plus actually entered as visitor. this tour cost more than my entire semester. and i learned nothing. except that this college will find ways to extract money. for everything. every single thing. oxygen bhi charge karte agar legal hota.',
  'campus_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 300 + 760)::int
FROM colleges c WHERE c.short_name = 'ICFAI/IBS' LIMIT 1;

-- 17. Dating App Reality
INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Dating app pe "IBS MBA" likha. Matches kam ho gaye. Changed to "Pursuing MBA". Matches aaye. Brand value 📉',
  'tried dating apps. profile mein proudly likha: "MBA at IBS Hyderabad". matches: 2 in 1 month. both were also from IBS. trying to match with each other. removed IBS. wrote "MBA student". matches: 15 in 1 week. BRAND VALUE NEGATIVE HAI. log IBS sun ke swipe left karte hain. one match actually asked "which IBS?" i said hyderabad. she said "oh... okay 👍" and unmatched. didn''t even wait for conversation. instant unmatch. dating market mein bhi placement nahi ho rahi. even tinder rejects us. at this point what is left? shaadi.com? at least there parents negotiate. merit doesn''t matter. only bank balance matters. going back to original point. money > personality. even on dating apps. especially on dating apps.',
  'confession',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 300 + 800)::int
FROM colleges c WHERE c.short_name = 'ICFAI/IBS' LIMIT 1;

-- 18. Positive Ending - Self Improvement Despite College
INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'College ne kuch nahi diya. Maine khud seekha. Got 12 LPA job. Not because of IBS. Despite IBS.',
  'real talk. i joined IBS with low expectations. expectations met. college taught me nothing useful. so i taught myself. online courses. youtube tutorials. linkedin learning. free resources. projects on github. while classmates were attending useless lectures, i was building skills. resume mein college section: IBS (have to mention). skills section: self-taught everything. interview mein? they asked about projects. not about college. got placed. 12 LPA. product company. not through placement cell. through linkedin application. my own effort. college ka contribution: ZERO. degree is just checkbox. actual learning was outside classroom. if you''re in IBS and reading this: learn yourself. don''t depend on this place. it will disappoint you. but you don''t have to disappoint yourself. be better than your institution. it''s not hard here. the bar is underground.',
  'inspirational',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 300 + 930)::int
FROM colleges c WHERE c.short_name = 'ICFAI/IBS' LIMIT 1;
