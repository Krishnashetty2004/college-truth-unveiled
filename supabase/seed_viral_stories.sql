-- =====================================================
-- VIRAL STORIES SEED - Part 1: Confessions & Faculty
-- Pure Unhinged Chaos Edition
-- =====================================================

-- ===============================
-- CONFESSIONS (20 stories)
-- ===============================

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'I accidentally sent my assignment to my situationship instead of my professor',
  '2am. deadline in 3 hours. i was working on my DBMS assignment while also texting this guy from ECE. sleep-deprived brain said send. i sent the assignment to him. his reply: ''is this your way of saying you want to normalize our relationship?'' i didn''t reply. submitted the assignment 30 minutes late. professor deducted marks. ECE guy asked me out. we dated for 6 months. he helped me with DBMS the whole time. broke up. now i have to do assignments alone AND i don''t understand joins. the relationship was not normalized. neither was my database.',
  'confession',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 400)::int
FROM colleges c WHERE c.short_name = 'IIIT-H' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'My Tinder match turned out to be my viva examiner the next day',
  'matched with this cute guy on tinder. great conversation. he asked what i study. i said engineering. he said ''cool i teach engineering''. i thought he meant coaching classes. we planned to meet after my viva next week. NEXT DAY. i walk into the viva room. HE is the external examiner. he looked at me. i looked at him. he asked me to explain polymorphism. i polymorphed into a puddle of embarrassment. he gave me 7/10. after viva he texted ''you''re better at flirting than OOPs''. we never spoke again. i see him on campus sometimes. we both pretend the other person died.',
  'confession',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 500)::int
FROM colleges c WHERE c.short_name = 'VIT' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'I catfished my own roommate for 4 months as a social experiment',
  'created a fake instagram. girl pics from pinterest. started talking to my roommate. he fell HARD. would tell me about this ''amazing girl'' every night. i would give him relationship advice. AS HER. the cognitive dissonance was insane. he proposed to her (me) on valentine''s day. i revealed myself. he didn''t speak to me for 3 weeks. then he asked me to help him make a fake account to catfish someone else. we are still roommates. we have catfished 7 people together since. we call it ''social research''. we should probably go to therapy.',
  'confession',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 450)::int
FROM colleges c WHERE c.short_name = 'BITS Hyd' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'I''m the one who released the chicken in the exam hall. It was an accident.',
  'it was supposed to be a prank for after the exam. my friend and i bought a chicken from a local farm. hid it in my bag. the plan: release it during the last 5 minutes for chaos. what happened: chicken did not understand the plan. chicken escaped during question paper distribution. mass hysteria. invigilator chased it for 20 minutes. we all copied. EVERYONE passed. i am a hero. i am also a liar because i''ve been taking credit for ''planning'' this for 3 years now. it was an accident. the chicken was just stressed. so was i. we were both trying to escape that thermodynamics paper.',
  'confession',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 600)::int
FROM colleges c WHERE c.short_name = 'RVCE' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Hooked up in the library. Librarian walked in. She gave us 5 stars on Google.',
  'third floor of the library. 11pm. finals week. everyone was stressed. we were... destressing. librarian aunty walked in with her torch. we froze. she looked at us. we looked at her. she said ''at least someone is using this section'' and walked away. next week i checked the library google reviews. new 5-star review: ''finally students are showing interest in the reference section. keep it up!'' i cannot make this up. i have screenshot. we got married last year. she attended. gave us a book on ''maintaining healthy relationships'' as a gift. absolute legend.',
  'confession',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 550)::int
FROM colleges c WHERE c.short_name = 'Christ' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Dated my ex''s sister. Found out at their family dinner. I was dessert conversation.',
  'broke up with priya in 2nd year. started dating neha in 3rd year. different surname. different department. everything was going well until she invited me to a family dinner. walked in. PRIYA IS SITTING AT THE TABLE. neha introduces me as her boyfriend. priya''s face went through 7 stages of grief in 3 seconds. their mom asked ''beta how did you two meet?'' i said ''college''. priya muttered ''he meets everyone in college''. dinner was 2 hours of psychological warfare. i ate paneer while receiving death stares. neha and i broke up. priya and i also stopped talking. their mom still follows me on instagram and likes my posts. i think she enjoyed the drama.',
  'confession',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 520)::int
FROM colleges c WHERE c.short_name = 'PES' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Professor caught me and my boyfriend in his cabin. He''s now our marriage counselor.',
  'we needed a private place. professor''s cabin was empty after 6pm. we had a system. 3 months of success. one day he came back for his charger. we were on his desk. he screamed. we screamed. papers flew everywhere. instead of reporting us, he sat us down and gave us a 45-minute lecture on ''appropriate expression of emotions in academic settings''. now he checks in on our relationship every month. asks if we''re ''communicating effectively''. he attended our engagement. brought his wife. she said ''so these are the desk kids''. we have no secrets from this man. he knows more about our relationship than our parents.',
  'confession',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 480)::int
FROM colleges c WHERE c.short_name = 'MSRIT' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Accidentally sent nudes to the class WhatsApp group. Became a legend.',
  'meant to send to boyfriend. sent to ''Digital Electronics 2024 Batch''. 127 people. including the class representative. who is also my ex. and two faculty members who were in the group for announcements. my life flashed before my eyes. i left the group immediately. changed my name. considered changing my college. considered changing my country. next day in class: nobody said anything. absolute silence. one guy gave me a thumbs up. the CR said ''nice phone case''. THE FACULTY NEVER ACKNOWLEDGED IT. i still don''t know if they saw. i will never know. i graduated. it''s been 2 years. i still check that group sometimes. it''s still active. my mistake is still there. immortalized. some say it''s been downloaded to the college archives.',
  'confession',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 700)::int
FROM colleges c WHERE c.short_name = 'JNTUH' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'My girlfriend and I pretended to be siblings for a year to avoid ragging',
  'first year. seniors were brutal. they''d target couples specifically. so my girlfriend and i decided to pretend we were twins. same surname. similar features (we don''t actually look alike but confidence is key). called each other bhai and didi in public. held hands only during ''family emergencies''. one year of method acting. seniors believed it. faculty believed it. some juniors asked for ''sibling day'' photos. when we finally revealed we were dating, one senior said ''i KNEW something was off. siblings don''t look at each other like that.'' we''re married now. sometimes at family gatherings her actual brother calls me bhai. the trauma continues.',
  'confession',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 420)::int
FROM colleges c WHERE c.short_name = 'CBIT' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'I''ve been running a fake ''campus couple rating'' Instagram page. I am the judge.',
  'started it as a joke in first year. people submit photos of couples. i rate them out of 10 and write roasts. page has 8000 followers now. nobody knows it''s me. i rated my own relationship a 6/10 to avoid suspicion. my girlfriend was HURT. she cried. i had to comfort her while also being the person who hurt her. i am living a double life. sometimes people @ the page in front of me asking ''who runs this?'' i say ''no idea bro probably some senior''. i am not a senior. i am the god of campus relationships. i have ruined friendships. i have made couples. one guy proposed because i gave them a 10/10 and said ''marry her''. THEY ACTUALLY GOT MARRIED. i am too powerful.',
  'confession',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 650)::int
FROM colleges c WHERE c.short_name = 'VNR VJIET' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'My ex is in my group project. For every. Single. Subject. This is targeted harassment.',
  'broke up in 2nd year. 3rd year: same group for DBMS project. 4th year: same group for major project, minor project, AND seminar. THE ODDS OF THIS ARE ASTRONOMICALLY LOW. i calculated it. 1 in 847,000 chance. either the universe hates me or the faculty hates me or my ex bribed someone. every presentation is psychological warfare. every meeting is a cold war. we have a shared google drive called ''work'' where we communicate only in passive aggressive comments. ''as PER MY LAST COMMENT...''. our project got an A. the professor said we have ''great chemistry''. SHE DOESN''T KNOW. she doesn''t know we haven''t made eye contact in 11 months.',
  'confession',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 580)::int
FROM colleges c WHERE c.short_name = 'DTU' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'I''m dating my professor''s son. The professor teaches me. Family dinners are exams.',
  'met at a coffee shop. didn''t know who his dad was. found out when i walked into class and saw MY BOYFRIEND''S FACE on the desk. family photo. that''s his dad. teaching me thermodynamics. every family dinner is basically an oral exam. his dad asks me about my ''future plans'' which i know means ''can you solve this heat transfer problem''. his mom asks about my ''interests'' which means ''did you submit the assignment''. i can''t break up because of the grade implications. i can''t fail because of the relationship implications. i am trapped in a romantic-academic paradox. his dad gave me a B+. i don''t know if that''s good or bad. i am afraid to ask.',
  'confession',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 530)::int
FROM colleges c WHERE c.short_name = 'IIT-H' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Started a relationship during online class. We still haven''t met in person. It''s been 2 years.',
  'COVID era. online classes. there was this girl who always had her camera on. we started talking in DMs during boring lectures. then we moved to WhatsApp. then video calls. then we were dating. TWO YEARS of online relationship. classes resumed. i could have met her ANY TIME. but what if she''s different in person? what if I''M different in person? we''ve been avoiding meeting while being on the SAME CAMPUS. i see her in the canteen sometimes. we make eye contact. then we text ''saw you today lol''. THIS IS INSANE BEHAVIOR. we know it. we can''t stop. we''re getting married next year. online ceremony only. this is who we are now.',
  'confession',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 490)::int
FROM colleges c WHERE c.short_name = 'Anna Univ' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'I ghosted someone and they became my direct senior at my first job. Karma is real.',
  'final year. this guy asked me out. we went on 3 dates. he was nice but i wasn''t feeling it. instead of being mature and communicating, i just... stopped replying. blocked everywhere. classic ghost. 6 months later. first day at my new job. team meeting. HE walks in. HE is my reporting manager. HE sits next to me. HE says ''so we meet again''. i have never worked harder in my life. every email is perfectly formatted. every deadline is met early. every meeting i am OVER PREPARED. he has never mentioned the ghosting. but he knows. i know he knows. my performance review was ''excellent''. i don''t know if he''s being professional or planning long-term revenge.',
  'confession',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 560)::int
FROM colleges c WHERE c.short_name = 'BMSCE' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'I''ve been secretly feeding the stray dogs answers during open-book exams',
  'okay hear me out. open book exam. i wrote all the answers on paper and wrapped them around dog treats. trained the campus dogs to bring me the treats when i make a specific whistle. 3 semesters of this. 100% success rate. the dogs now follow me everywhere. one dog, biscuit, sits outside my exam hall. invigilators think it''s cute. ''such loyalty!''. it''s not loyalty. it''s business. biscuit has helped me pass 8 subjects. he gets 5 star food every sunday. we have a deal. i am going to miss this dog more than most humans when i graduate.',
  'confession',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 720)::int
FROM colleges c WHERE c.short_name = 'MRU' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'My boyfriend proposed in the library. I said no. The entire silent section heard.',
  'finals week. library. he got down on one knee. the ENTIRE silent section watched. i panicked and said ''bhai abhi nahi'' (not now bro). CALLED HIM BHAI. IN FRONT OF EVERYONE. he stood up. put the ring back. someone in the back said ''bhai-zoned ho gaya'' (got bro-zoned). 47 people laughed. we are still together. we don''t talk about it. his friends call me bhabhi-bhai ironically. i will say yes eventually. just not in a library. not in a silent section. not with 47 witnesses. he learned his lesson. the ring is still in his bag. waiting. i check sometimes to make sure he hasn''t given up.',
  'confession',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 610)::int
FROM colleges c WHERE c.short_name = 'NSUT' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'I broke up with my girlfriend over a PUBG match. We were on the same team.',
  'we were playing PUBG. squads. final circle. 3 teams left. she took the supply drop that i called. I CALLED IT. she took MY level 3 vest. i said ''we''re done''. she thought i meant the game. i meant the relationship. didn''t speak for 2 days. she realized i was serious when i unfollowed her on instagram. we got back together after a week. but i still remember. level 3 vest. supply drop. she knows. i know. every time we play now, she gives me first dibs. as she should. some wounds never heal. some betrayals never forget. that vest was rightfully mine.',
  'confession',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 540)::int
FROM colleges c WHERE c.short_name = 'IIIT-H' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Told my parents I''m studying late. Actually going on dates. My GPS gave me away.',
  'classic move. ''amma late night study at library''. actually going to CCD with boyfriend. worked perfectly for 6 months. then my dad downloaded family tracker app. WITHOUT TELLING ME. one night he casually asked ''how was the library?'' i said ''good, studied hard''. he said ''interesting that the library is now at phoenix mall''. SILENCE. i am 21. i was grounded. FOR A MONTH. my boyfriend had to send ''character certificate'' to my parents. we are getting married next year. my dad will walk me down the aisle. we still don''t acknowledge that he tracked my location. the tension remains. the love persists.',
  'confession',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 470)::int
FROM colleges c WHERE c.short_name = 'Christ' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'I have been writing love letters for other guys in my hostel. I charge ₹200 per letter.',
  'it started when my roommate couldn''t express feelings. i helped him write a letter. she said yes. word spread. now i''m the hostel''s official love letter writer. ₹200 for basic, ₹500 for poetry, ₹1000 for full romantic package with spotify playlist recommendations. 34 letters so far. 28 successful relationships. i am like cyrano de bergerac but with better rates. the irony? i am single. the letters work for everyone except me. maybe i should write one for myself. ''dear future girlfriend, i am available. i am eloquent. i am also charging myself ₹200 for this letter. please respond.''',
  'confession',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 590)::int
FROM colleges c WHERE c.short_name = 'IIT-M' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'My ex and I run competing chai stalls on campus. The Cold War of beverages.',
  'we dated for 2 years. broke up badly. we both had the same backup plan: chai stall. now we run stalls 50 meters apart. same timings. same prices. competitive discounts. i offer free rusk with chai. she offers free biskoot. i started a loyalty program. she started giving 10% student discount. customers pick sides. it''s become political. some people say ''tera chai better hai'' just to make a statement. i don''t even like chai. i am lactose intolerant. i am running a business on spite alone. she''s thriving. i''m surviving. we haven''t spoken in 8 months but we know each other''s daily sales by observation. this is capitalism. this is war. this is heartbreak.',
  'confession',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 680)::int
FROM colleges c WHERE c.short_name = 'JNU' LIMIT 1;

-- ===============================
-- FACULTY STORIES / EVIL PROFESSORS (20 stories)
-- ===============================

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Professor failed 47 students because ''the vibes were off'' that semester',
  'end semester results. 47 out of 60 students failed digital electronics. we checked the papers. answers were correct. we asked the HOD. HOD asked the professor. professor''s reason — and i have this in WRITING from the official appeal response: ''the collective academic energy of this batch was not conducive to passing.'' THE VIBES. he failed us for VIBES. revaluation happened. all 47 passed. professor got ''best teacher'' award that year. the certificate is still in the department. we walk past it every day. it haunts us. it mocks us. it reminds us that vibes are, indeed, checked.',
  'faculty_stories',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 650)::int
FROM colleges c WHERE c.short_name = 'JNTUH' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Professor''s PPT is from 2003. It references Orkut and ''the new thing called Facebook''.',
  'data communication lecture. professor pulls up his slides. the template says ''microsoft powerpoint 2003''. slide 4: ''social networking sites like orkut are the future''. slide 7: ''this new platform called facebook might be interesting for students''. slide 12: references rupees in thousands, not lakhs. we are learning about networking from a man whose mental model stopped updating when tata indicom was still relevant. i asked him about 5G. he said ''we will cover G in the next module''. what G? he didn''t specify. i think he meant 2G. may god have mercy on us all.',
  'faculty_stories',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 570)::int
FROM colleges c WHERE c.short_name = 'MRCET' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Professor caught sleeping during his OWN online lecture. Blamed ''network lag''.',
  'covid online era. 2pm lecture. professor was sharing screen. we were watching. then... his head dropped. soft snoring into the microphone. 47 students watched him sleep for 8 minutes before someone finally unmuted and said ''sir?''. he JUMPED. scared. then immediately said ''sorry students, there was network lag on my end''. SIR. WE SAW YOU. we heard you. THE RECORDING HAS PROOF. he continued the lecture as if nothing happened. nobody mentioned it. we all have the recording. it''s been 3 years. we bring it up at every alumni meet. he is now HOD. the snoring HOD. we respect him though. he was just tired.',
  'faculty_stories',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 620)::int
FROM colleges c WHERE c.short_name = 'SNIST' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'HOD''s car got towed. He cancelled all classes for the department. For a week.',
  'campus parking rules. HOD parked in student area. car got towed to the main gate. MASSIVE public embarrassment. he saw students smiling. he took it personally. next day: email. ''all classes cancelled for department review''. no classes for 7 days. we thought it was a blessing until we realized the ''review'' meant cramming 2 weeks into 1 week later. exam was not postponed. 60% failed. HOD bought a cycle after that. parks it wherever he wants. nobody touches it. we learned our lesson. he learned nothing. the cycle remains unchained. untouched. feared.',
  'faculty_stories',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 510)::int
FROM colleges c WHERE c.short_name = 'CVR' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Professor going through divorce. Made ''relationship communication failures'' part of syllabus.',
  'software engineering class. topic: communication in team projects. he started normally. then he said ''you know where communication really fails? marriage.'' we thought it was a joke. IT WAS NOT A JOKE. 45 minutes on how his wife ''never listened to his requirements''. he literally used UML diagrams to explain their arguments. drew an activity diagram of their last fight. assigned homework: ''analyze communication failure in any relationship''. we all wrote about group project issues. he gave everyone full marks saying ''at least you tried to understand''. he and his wife reconciled. he still teaches that module. it''s now called ''interpersonal communication''. the diagram remains.',
  'faculty_stories',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 680)::int
FROM colleges c WHERE c.short_name = 'PES' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'External examiner was visibly drunk. Gave marks based on zodiac signs.',
  'practical viva. external examiner walked in... swaying slightly. smell of old monk in the air. first question to first student: ''what is your sun sign?'' student confused, said ''leo''. examiner said ''brave. 8 out of 10.'' this continued. i am a libra. he said ''balanced. 7 out of 10.'' one student was scorpio. he gave her 9/10 and said ''mysterious. i respect that.'' the internal examiner was SHOOK. couldn''t do anything. 35 students evaluated by zodiac. average marks: 7.3/10. highest: pisces (9.5). lowest: capricorn (6). capricorn student filed an RTI. it got rejected. astrology apparently has academic validity in this country.',
  'faculty_stories',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 740)::int
FROM colleges c WHERE c.short_name = 'OU' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Professor has been teaching the wrong subject for 2 months. Blamed JNTUH regulations.',
  'third semester. subject: data structures. professor walks in day one. starts teaching computer networks. we assumed it was introduction. week 2: more networks. week 3: pure networking. week 8: someone finally asked ''sir when are we doing trees and linked lists?'' his face. OH HIS FACE. he pulled up the syllabus. checked it. checked it again. we had been learning the wrong subject for 8 WEEKS. his explanation: ''JNTUH changed the syllabus and didn''t inform properly''. SIR. the syllabus is on the WEBSITE. we fast-tracked data structures in 3 weeks. exam had questions from both subjects. nobody passed cleanly. this is engineering.',
  'faculty_stories',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 590)::int
FROM colleges c WHERE c.short_name = 'MREC' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Professor said ''I will fail everyone who doesn''t wish me on my birthday''. He was serious.',
  'october 14th. we didn''t know it was his birthday. we walked into class as usual. he looked disappointed. said nothing. class continued. results came out. 43 out of 60 failed. the 17 who passed? all of them had wished him on social media. someone had posted ''happy birthday sir'' on the class group. only 17 saw it. rest of us? failed. the appeal was rejected because ''internal assessment is faculty discretion''. we now have a shared calendar. everyone''s birthday is marked. we don''t miss ANY faculty birthday. we send cards. flowers. cakes. this is survival. this is academic hostageship. this is higher education.',
  'faculty_stories',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 710)::int
FROM colleges c WHERE c.short_name = 'MGIT' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Professor''s entire personality is hating on IIT. He brings it up every class.',
  'our professor applied to IIT. didn''t get in. that was in 1987. it is now 2024. he still talks about it. EVERY. SINGLE. CLASS. ''this is how they do it at IIT... not that i would know, they rejected me for no reason''. ''IIT graduates think they''re special but they just got lucky''. one time a student said he was preparing for GATE for IIT. professor gave him a C in internals. no explanation. just C. we have learned to never mention IIT. never wear IIT merchandise. never reference IIT professors. he has google alerts set up for ''IIT news'' and gets angry about it in class. this is a man held together by spite. we respect the commitment.',
  'faculty_stories',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 640)::int
FROM colleges c WHERE c.short_name = 'IARE' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Professor walks in 40 minutes late every class but marks us absent if we''re 2 minutes late',
  'class starts at 9am. professor arrives at 9:40am. consistently. without fail. has been doing this for 12 years. but if you walk in at 9:02? absent. no exceptions. no appeals. one student calculated: over 4 years, he has been late by a cumulative 160 hours. she presented this data to the HOD. nothing happened. he still arrives at 9:40. we now call it IST - indian standard time, subramanian variation. he knows about this nickname. he seems proud of it. the attendance register is his kingdom. we are merely subjects. late subjects. marked absent subjects.',
  'faculty_stories',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 580)::int
FROM colleges c WHERE c.short_name = 'GCET' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Professor hasn''t updated his notes since 1998. Still references Y2K as ''the upcoming crisis''.',
  'microprocessors class. page 47 of his notes: ''students must be prepared for the Y2K bug which could crash all systems in the year 2000''. sir. we are in 2024. the crisis is over. we survived. but his notes did not update. he still references floppy disks as primary storage. CDs as ''the future of data''. his diagram of ''modern computer'' shows a CRT monitor. when asked about SSDs, he said ''solid state? what state? gaseous?'' we think he''s joking but his face never breaks. either he''s the greatest deadpan comedian or time has genuinely stopped for him. either way, we''re learning 1998 tech at 2024 fees.',
  'faculty_stories',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 550)::int
FROM colleges c WHERE c.short_name = 'MLRIT' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Professor called ChatGPT his ''research assistant''. His entire paper was AI-generated.',
  'research paper published in a ''journal''. professor proud. showed the class. asked us to cite it in our projects. one student ran it through AI detector. 97% AI GENERATED. she showed him. his response: ''ChatGPT is my research assistant. we collaborated.'' sir, collaborating means BOTH parties contribute. he listed ChatGPT as co-author. paper got flagged. removed from journal. he still claims it was ''discrimination against AI researchers''. his next paper? also AI generated. also flagged. he is now working on a paper about ''ethical AI usage''. using AI. the irony is lost on him. it is found by us. daily.',
  'faculty_stories',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 690)::int
FROM colleges c WHERE c.short_name = 'VIT' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Professor gave a surprise test on content he''s never taught. Said ''life is also a surprise''.',
  '8:30am. we walk in. professor says ''surprise test, 20 marks, no books''. topics: chapters 7-9. he has taught till chapter 4. we said ''sir you haven''t covered this''. his response: ''life doesn''t give you warnings. earthquakes don''t send calendar invites. this is practical education.'' we all failed. average marks: 2.3/20. one guy got 7 because he had read ahead. professor praised him as ''the only survivor''. later we found out his wife had surprised him with divorce papers that morning. he was projecting. we were collateral damage. marriage counselling would''ve been cheaper than our revaluation fees.',
  'faculty_stories',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 620)::int
FROM colleges c WHERE c.short_name = 'RVCE' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Professor made us stand for the entire 1-hour class because ''chairs are for focused minds''',
  'wednesday morning. thermodynamics. professor walks in. looks at us sitting. says ''stand up. all of you.'' we thought it was a joke or national anthem situation. no. he made us STAND for the entire class. reason: ''sitting makes blood pool in your legs. standing keeps you alert. at IIM they do this.'' SIR THIS IS NOT IIM. this is engineering. we barely have blood in our bodies because of the canteen food. 47 students stood for 60 minutes. 3 people fainted. he counted it as ''successful implementation''. chairs are back now. but the trauma remains. my legs hurt when i hear his name.',
  'faculty_stories',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 530)::int
FROM colleges c WHERE c.short_name = 'BMSCE' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Professor muted himself for 40 minutes during online class. Taught to nobody. No refunds.',
  'online class era. professor speaking passionately. we couldn''t hear anything. muted. WE TRIED TO TELL HIM. spammed chat. unmuted ourselves. nothing worked. he taught for 40 minutes to silence. completed 2 chapters. finally someone called his phone. he picked up. unmuted. said ''why didn''t anyone tell me earlier?'' SIR. THE CHAT. IT WAS IN THE CHAT. he refused to re-teach. said ''you should have been more proactive''. those 2 chapters came in the exam. we all referenced the mute incident in answers. examiner was not amused. we were not refunded. time, money, or sanity.',
  'faculty_stories',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 610)::int
FROM colleges c WHERE c.short_name = 'CBIT' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Professor forgot he already conducted the exam. Gave us the same paper twice.',
  'tuesday. exam happened. 3 hours. full syllabus. nightmare. thursday. same professor. walks in. hands out papers. SAME EXAM. literally identical. we looked at each other. nobody said anything for 2 minutes. finally someone asked ''sir, didn''t we do this on tuesday?'' his face. he checked his phone. checked his notes. realized he''d conducted the same exam twice. his solution? ''okay tuesday was practice. this is the real one.'' SIR. we already know the answers. we spent 2 days preparing. he collected the papers. gave everyone average marks. called it ''unfortunate technical error''. we call it ''senioritis but for professors''.',
  'faculty_stories',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 570)::int
FROM colleges c WHERE c.short_name = 'DSCE' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Professor refused to use microphone because ''real teachers don''t need amplification''',
  'auditorium lecture. 400 students. professor refused the microphone. said ''my voice carries. i have been teaching for 30 years without technology''. SIR. your voice does NOT carry. we cannot hear you beyond row 5. we told him this. he said ''then sit in front''. 400 STUDENTS CANNOT ALL SIT IN FRONT. last 300 people learned nothing. wrote random things in exams. he failed them for ''not paying attention''. they appealed saying they couldn''t hear. his defense: ''i spoke clearly. they should have lip-read.'' LIP. READ. from 50 meters away. this is the education system. this is fine. everything is fine.',
  'faculty_stories',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 540)::int
FROM colleges c WHERE c.short_name = 'VCE' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Professor openly trades marks for samosas. It''s a documented economy.',
  'professor reddy. signals and systems. everyone knows the deal. one samosa = 0.5 internal marks. maximum 10 samosas per semester. this has been going on for 8 years. there''s a RATE CARD circulating in WhatsApp. during festival season, rates increase. diwali 2023: 0.3 marks per samosa. students have calculated ROI. samosa cost: ₹15. marks value: priceless. one student brought 50 samosas once. professor said ''this is bribery'' and accepted only 10. he has PRINCIPLES. corrupt, yes. but principled corruption. we respect the hustle. we participate in the hustle. this is networking. this is india.',
  'faculty_stories',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 780)::int
FROM colleges c WHERE c.short_name = 'JNTUH' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Professor showed up to class in track pants and slippers. It was the AICTE inspection day.',
  'aicte inspection. everyone wearing formals. faculty in suits. students in best clothes. labs cleaned for the first time in 4 years. then professor malhotra walks in. track pants. hawaii chappals. carrying chai in a steel glass. DIRECTLY in front of the inspection committee. principal''s face lost all color. malhotra sir didn''t notice. or didn''t care. gave his regular lecture. scratched his belly mid-sentence. the inspection report mentioned ''casual faculty attire''. we lost some points. malhotra sir was given a ''verbal warning''. he wore the same track pants the next week. added a blazer on top. compliance achieved. technically.',
  'faculty_stories',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 660)::int
FROM colleges c WHERE c.short_name = 'REVA' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Professor said ''Google it'' for every question. His entire teaching method is outsourcing.',
  '6th semester. advanced algorithms. professor''s standard response to any question: ''google it''. student: ''sir can you explain dijkstra''s algorithm?'' professor: ''google it''. student: ''sir what''s the time complexity?'' professor: ''google it''. student: ''sir where is the bathroom?'' professor: ''google it''. he assigns youtube videos as homework. his ''teaching'' is playing youtube at 1.5x speed while he checks his phone. we pay ₹2 lakh per year to watch youtube. ONE student filed a complaint. professor''s defense: ''i am teaching them self-learning''. he got promoted. HEAD of department. the system rewards innovation.',
  'faculty_stories',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 700)::int
FROM colleges c WHERE c.short_name = 'NHCE' LIMIT 1;
-- =====================================================
-- VIRAL STORIES SEED - Part 2: Fest, Funny, Hostel
-- Pure Unhinged Chaos Edition
-- =====================================================

-- ===============================
-- FEST CULTURE (18 stories)
-- ===============================

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'DJ played ''Jai Ho'' for 45 minutes straight because his laptop crashed',
  'college fest 2023. 3000 students. professional DJ hired for ₹50,000. his laptop crashed 10 minutes into the set. only song fully loaded in backup: jai ho. he played it. on loop. for 45 MINUTES. first 5 minutes: people danced ironically. next 10 minutes: people left. next 30 minutes: the 200 remaining students entered a trance-like state of acceptance. security guard started dancing. principal walked in, saw everyone vibing to jai ho for the 12th time, and walked out without comment. DJ got paid in full. he has not been invited back. some say on quiet nights, you can still hear jai ho echoing from the auditorium.',
  'fest_culture',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 720)::int
FROM colleges c WHERE c.short_name = 'CBIT' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Celebrity guest demanded green room AC at OUTDOOR venue. Fest cancelled.',
  'pro show night. famous singer booked. outdoor amphitheater. no green room. student organizers built a makeshift tent. singer arrived. demanded AC. IN THE TENT. IN AN OUTDOOR VENUE. in hyderabad. in march. we tried explaining physics. he said ''i don''t perform without AC''. we brought 3 coolers. he said ''this is not AC''. argued for 2 hours. he left. students rioted. fest was cancelled at 9pm. the backup plan was a faculty member singing ''tum hi ho''. 47 people attended. we got our money back. the tent is still there. unoccupied. a monument to diva behavior.',
  'fest_culture',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 680)::int
FROM colleges c WHERE c.short_name = 'VNR VJIET' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Food stall gave 200 people food poisoning but won ''Best Taste'' award anyway',
  'college fest food competition. 12 stalls. stall 7: biryani. looked amazing. tasted amazing. 200 people ate. 200 people got food poisoning. hospital bills: ₹4.5 lakh collectively. lawsuits: 3. BUT. the judging happened before the poisoning. guess who won ''Best Taste''? STALL 7. they gave trophy. photo was taken. THEN people started vomiting. the trophy was not revoked. it''s still in the winner''s house. he frames the newspaper cutting of both the award AND the food poisoning lawsuit next to each other. says it''s ''balance''. the audacity. the absolute criminal audacity. we respect it.',
  'fest_culture',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 750)::int
FROM colleges c WHERE c.short_name = 'JNTUH' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Pro show artist forgot college name. Called us ''Hyderabad walo'' for entire set.',
  'finally. after 3 years of saving. we got a famous rapper for pro show. crowd of 5000. artist comes on stage. grabs mic. screams ''HYDERABAD WALO ARE YOU READY?''. we are not ''hyderabad walo''. we have a name. the college has a name. HE DIDN''T KNOW IT. he called us ''hyderabad ke bachhe'' (kids), ''hyderabad ke tigers'', ''hyderabad ka dil''. EVERY city reference. never the college name. someone held up a poster with college name. he squinted at it. still didn''t say it. we have footage. 47 times he referred to us generically. our college paid him ₹8 lakh. he couldn''t google the name. we still stream his music. we are the problem.',
  'fest_culture',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 640)::int
FROM colleges c WHERE c.short_name = 'MRU' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Security beat up a student thinking he was outsider. He was the fest coordinator.',
  'fest day 2. chaos. outside people trying to sneak in. security on high alert. our fest coordinator — rahul — was running around managing things. he looked stressed. shirt untucked. no ID visible. security guard grabbed him. asked for ID. rahul said ''bro i AM the fest i don''t need ID''. wrong answer. they thought he was being smart. dragged him to the security room. kept him there for 2 hours. meanwhile, NOBODY was coordinating. events delayed. sponsors angry. when they finally checked and realized, rahul was released. he didn''t press charges. said ''at least security is working''. legend. he graduated. still bitter. understandably.',
  'fest_culture',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 590)::int
FROM colleges c WHERE c.short_name = 'MSRIT' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Chief guest was MLA who gave 3-hour speech. 47 students fainted. He didn''t notice.',
  'annual day function. chief guest: local MLA. supposed to speak for 15 minutes. spoke for 3 HOURS. about his life. his struggles. his achievements. his vision for 2047. we were sitting in the sun. no water allowed inside. 47 students fainted over 3 hours. medical team was running back and forth. HE DIDN''T NOTICE. kept speaking. audience went from 2000 to 400. still speaking. finally principal cut the mic ''due to technical difficulties''. MLA was upset. said ''i wasn''t finished''. SIR. WE ARE FINISHED. he demanded the mic back. spoke for 20 more minutes. we were held hostage by democracy.',
  'fest_culture',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 610)::int
FROM colleges c WHERE c.short_name = 'OU' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Dance competition: girl fell off stage, kept dancing on the ground, WON first place',
  'inter-college dance competition. our college''s star performer — ananya — mid-performance. spinning. slipped. FELL OFF STAGE. 4 feet drop. everyone gasped. she landed. paused for 0.5 seconds. KEPT DANCING ON THE GROUND. incorporated the fall into choreography. did a floor routine nobody had seen before. got back on stage. finished. crowd went INSANE. judges gave standing ovation. WON FIRST PLACE. the fall was unplanned. the recovery was legendary. she''s now a professional dancer. her bio says ''fell into dance''. we were there. we witnessed greatness. we witnessed someone refuse to let gravity win.',
  'fest_culture',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 780)::int
FROM colleges c WHERE c.short_name = 'Christ' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Battle of bands: all 5 bands played the same Arijit Singh medley. Nobody won.',
  'music competition. 5 bands. 3-hour event. band 1: arijit singh medley. crowd loved it. band 2: different arijit singh medley. crowd confused but vibed. band 3: SAME SONGS as band 1. band 4: mashup of ALL previous arijit songs. band 5: one guy with guitar played tum hi ho solo. EVERYONE played arijit singh. judges couldn''t decide winner because ''all performances were essentially identical''. they gave participation certificates to everyone. no winner announced. we learned that day: there is only one genre in indian college music, and it is arijit. resistance is futile.',
  'fest_culture',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 560)::int
FROM colleges c WHERE c.short_name = 'BITS Hyd' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Fashion show model tripped, fell on judge''s table, knocked out 2 judges',
  'fashion show. final walk. our star model — vikram — wearing 6kg costume with wings. he tripped on a wire. momentum carried him forward. he CRASHED into the judges'' table. table flipped. 2 judges went down. one got punch on the hand, other got wine on saree. absolute carnage. vikram stood up, costume destroyed, posed anyway. crowd went silent, then started clapping. he got disqualified but won ''most memorable performance'' in the unofficial awards. the judges recovered. one of them now follows him on instagram. says he has ''undeniable stage presence''. technically true. presence that cannot be ignored or avoided.',
  'fest_culture',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 690)::int
FROM colleges c WHERE c.short_name = 'NIFT Hyd' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Freshers party DJ mixed devotional songs with EDM. It worked. Disturbingly well.',
  'freshers party. new DJ. clearly confused about the brief. started with normal bollywood. then suddenly: ''om jai jagdish hare'' BUT with bass drops. we were confused. then ''govinda aala re'' with EDM drops. WE STARTED DANCING. unironically. the transition from ''chammak challo'' to ''ganpati bappa morya'' remix was seamless. by hour 2, we were doing garba to house music. nobody questioned it. seniors were crying (good tears). faculty member joined briefly. said ''this is fusion''. it was. it was unholy fusion. it was perfect. that DJ is now booked for every college fest. devotional EDM is apparently a genre now. we created it.',
  'fest_culture',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 650)::int
FROM colleges c WHERE c.short_name = 'NMIT' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Fest sponsor pulled out last minute. We advertised their competitor instead. Chaos.',
  'main sponsor: local coaching institute. gave ₹2 lakh. one week before fest: they pulled out. no reason. no refund. we were broke. angry. so we did the unthinkable. we put up competitor''s banners EVERYWHERE. called them ''proud sponsor'' even though they hadn''t paid. original sponsor saw. LOST THEIR MINDS. threatened lawsuit. competitor was confused but went with it. gave us ₹50k ''for the free advertising''. fest happened. both coaching institutes showed up. argued in front of students. free entertainment. we learned: corporate beef is the best fest sponsorship. threaten the sponsor with their enemy. works every time.',
  'fest_culture',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 580)::int
FROM colleges c WHERE c.short_name = 'BMSIT' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Comedy night performer roasted principal so hard he walked out. Got standing ovation.',
  'comedy night. local standup comedian. was told ''family friendly''. he started mild. then he saw the principal in front row. targeted him. ''sir your assembly speeches are longer than my set and less funny''. principal smiled awkwardly. comedian continued. ''the wifi password is the only thing in this college that works — and it doesn''t work''. crowd laughed. principal stopped smiling. ''sir the canteen food has more culture than the cultural committee''. principal stood up. WALKED OUT. crowd gave comedian standing ovation. he got paid double. principal banned comedy nights for 2 years. we consider it worth it. comedy won.',
  'fest_culture',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 810)::int
FROM colleges c WHERE c.short_name = 'PES' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Rain destroyed outdoor stage. We did the entire fest in the parking lot. Better vibe.',
  'monsoon. outdoor stage. day 1: beautiful setup. day 2: rain destroyed everything. canopy collapsed. sound system flooded. ₹3 lakh damage. what do we do? we moved to the PARKING LOT. no stage. no proper lighting. just car headlights and bluetooth speakers. 400 students showed up anyway. we did performances standing ON cars. acoustic music only. it was magical. intimate. raw. people cried. not because it was sad but because it was so unexpectedly beautiful. rain was still falling. we didn''t care. best fest in college history. the ''proper'' stage was never used again. parking lot forever.',
  'fest_culture',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 670)::int
FROM colleges c WHERE c.short_name = 'ISB' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Treasure hunt clue led to principal''s office. 47 students barged in during meeting.',
  'fest event: treasure hunt. ₹10,000 prize. clue 7 of 10: ''where decisions are made but nothing changes''. we interpreted it as principal''s office. 47 of us RAN to admin building. burst open the door. principal was in a meeting. WITH THE UNIVERSITY CHANCELLOR. 47 sweaty students screaming ''WHERE''S THE CLUE''. principal''s face: horror. chancellor: confused. us: determined. turns out clue was about the student council room. not principal''s office. we apologized. slowly backed out. didn''t win treasure hunt. did win ''most memorable moment'' and a warning letter. worth it. chancellor apparently said ''at least they''re enthusiastic''. small wins.',
  'fest_culture',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 720)::int
FROM colleges c WHERE c.short_name = 'IIT-H' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Debate competition judge fell asleep. Woke up and declared random winner.',
  'inter-college debate finals. intense topic. excellent arguments from both sides. everyone noticed judge 3 nodding off. we thought he was thinking deeply. he was SLEEPING. for 20 minutes. final verdict time. he woke up suddenly. loudly said ''TEAM B WINS''. team B had made mediocre arguments. team A was clearly better. we protested. asked for reasoning. his response: ''team B had better... energy.'' SIR YOU WERE ASLEEP. HOW WOULD YOU KNOW THE ENERGY. team A filed official complaint. complaint rejected because ''judge''s decision is final''. team B celebrated. they knew they shouldn''t have won. we all knew. justice is a concept. not a reality.',
  'fest_culture',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 540)::int
FROM colleges c WHERE c.short_name = 'NALSAR' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Flash mob proposal during fest. She said no. The entire crowd heard.',
  'cultural fest. peak crowd time. ajay planned flash mob proposal for girlfriend. 30 dancers. coordinated outfits. bollywood song. the whole thing. build up was amazing. crowd gathered. he got down on one knee. she looked horrified. she said ''bhai tu mere liye SIRF dost hai'' (you''re just a friend to me). INTO THE MIC. crowd heard. 2000 people. silence. then someone started slow clapping sarcastically. it spread. ajay stood up. dancers didn''t know what to do. kept dancing for 30 more seconds. he walked away. she walked away. they both graduated. never spoke again. flash mobs were banned after this. for everyone''s emotional safety.',
  'fest_culture',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 770)::int
FROM colleges c WHERE c.short_name = 'DTU' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'College hired local band. They only knew 3 songs. Played each one 4 times.',
  'budget constraints. hired local band for ₹15,000 instead of professional DJ. they were confident. too confident. set was supposed to be 2 hours. they started with ''tum hi ho''. crowd loved it. then ''bekhayali''. vibing. then ''kesariya''. perfect. then... ''tum hi ho'' again. we thought it was remix. it was not. they only knew 3 songs. played each one 4 TIMES. by round 3, crowd started requesting songs ironically. ''PLAY TUM HI HO''. they did. enthusiastically. unaware of the sarcasm. round 4: people were crying (not good tears). they got full payment. said ''great crowd energy''. we have trust issues now.',
  'fest_culture',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 630)::int
FROM colleges c WHERE c.short_name = 'SNIST' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Someone released a goat during the fashion show. It became the star.',
  'fashion week. serious event. designers worked for months. show started. third outfit walk. suddenly: GOAT on the runway. nobody knows where it came from. security tried to catch it. goat evaded. models tried to work around it. goat followed them. photogenic goat. walked better than half the models. crowd went WILD. goat got more photos than any outfit. instagram went viral. college famous for all wrong reasons. goat was caught eventually. given to nearby temple. fashion show continued but nobody cared. everyone was talking about the goat. designer won but goat was the real winner. we called him ''ramp-raj''. legend.',
  'fest_culture',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 850)::int
FROM colleges c WHERE c.short_name = 'NIFT Blr' LIMIT 1;

-- ===============================
-- FUNNY AF (20 stories)
-- ===============================

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Submitted meme as project documentation. Got more marks than the actual code.',
  'final year project. worked for 6 months. code: mediocre. documentation: memes. every page had a relevant meme. architecture diagram? meme. user flow? meme. future scope? meme saying ''this is beyond science''. submitted it as joke. EXTERNAL EXAMINER LOVED IT. said ''finally someone who understands user engagement''. gave documentation 48/50. code got 35/50. overall: better than students who tried seriously. we learned that day: education is a meme. take it too seriously and you lose. we won by not trying. academic nihilism validated.',
  'funny',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 680)::int
FROM colleges c WHERE c.short_name = 'IIIT-H' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'College dog has better attendance than 60% of students. Officially recognized.',
  'campus dog: sheru. comes to every class. sits in front row. never sleeps. never talks. perfect student. someone calculated his attendance: 94%. calculated class average: 67%. sheru beats 60% of students. we made him an unofficial ID card. someone submitted ''sheru'' in attendance sheet as joke. professor marked him present. for 3 months. until admin noticed. they didn''t remove the attendance. they just stopped adding more. sheru now has 78 days of official attendance in the system. he cannot graduate but he can audit any course. we gave him a certificate. he ate it. fair.',
  'funny',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 730)::int
FROM colleges c WHERE c.short_name = 'VIT' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Exam hall has CCTV but projector hasn''t worked since 2010. Priorities clear.',
  'exam hall. state of the art security. 8 CCTV cameras. facial recognition at entry. anti-cheating software on computers. projector in the same room? BROKEN SINCE 2010. we asked why. ''budget constraints''. the CCTV system cost ₹5 lakh. a projector costs ₹40,000. we live in a surveillance state but cannot see presentations. professors write on the board. students squint from back rows. someone once suggested using phone projector. got detained for ''unauthorized electronic device''. this is education. watching us fail while unable to show us how to succeed. poetic in the worst way.',
  'funny',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 590)::int
FROM colleges c WHERE c.short_name = 'MRCET' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Professor asked ''any questions?'' Student asked ''sir can I go to bathroom?'' Class suspended.',
  'thermodynamics. intense 2-hour lecture. professor finishes. says ''any questions about the topic?'' one guy raises hand. asks ''sir can i go to bathroom?'' professor stares. we stare. silence. professor: ''you''re asking to go to BATHROOM after i asked about THERMODYNAMICS?'' student: ''sir bladder doesn''t wait for entropy''. professor SNAPPED. suspended class for the day. said ''when you learn to prioritize academics over bodily functions, we will resume''. the student went to bathroom. came back. empty class. we all went home. that guy is a legend. he prioritized bladder over bachelor''s degree. respect.',
  'funny',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 660)::int
FROM colleges c WHERE c.short_name = 'MREC' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Principal''s speech so boring, birds stopped chirping. Literally. We timed it.',
  'annual day. outdoor function. birds in trees around ground. principal started speaking. birds were chirping. 10 minutes in: birds silent. we noticed. started timing. the MOMENT principal stopped for water break — birds resumed. he started again — birds stopped. we tested this 4 times. correlation: perfect. birds literally prefer silence over his voice. someone recorded this. showed to biology professor. he said ''even nature has standards''. principal found out. didn''t change his speeches. just removed the trees next year. the birds won though. they moved to the parking lot. still judge from afar.',
  'funny',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 710)::int
FROM colleges c WHERE c.short_name = 'JNTUH' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Someone printed exam paper as wedding invitation. Got caught by the worst person.',
  'exam paper leaked. student printed it. but printer was out of paper. he grabbed the nearest paper: wedding invitation cards from professor''s desk. printed on the BACK. didn''t notice. took it home. studied. next day: professor giving out his daughter''s wedding invitations. one of them had... exam paper on the back. of all the people who could have gotten that card. PROFESSOR''S WIFE. she noticed. investigated. traced printer logs. student caught. he had to attend the wedding. as punishment. sat in front row. made eye contact with professor entire reception. most uncomfortable biryani he''s ever eaten.',
  'funny',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 790)::int
FROM colleges c WHERE c.short_name = 'OU' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Autocorrect changed ''Dear Sir'' to ''Dear Siri'' in formal email. Professor replied ''I''m not AI yet''.',
  'formal email to HOD. requesting leave. typed ''dear sir''. autocorrect changed to ''dear siri''. didn''t notice. sent. waited 3 days. no response. sent follow-up. ''sir did you receive my email?'' he replied: ''yes i did. i am not siri yet but the way technology is going, who knows. your leave is approved. please update your dictionary.'' i wanted to die. i wanted to laugh. i did both. screenshot went viral in college. HOD became briefly famous. he now signs emails as ''Not Siri, but close enough''. we created a legend accidentally. autocorrect giveth. autocorrect taketh.',
  'funny',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 620)::int
FROM colleges c WHERE c.short_name = 'IIT-M' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Fire drill during exam. Students grabbed answer sheets. Prof grabbed samosas.',
  'mid-semester exam. fire alarm went off. protocol: leave everything, exit building. students grabbed answer sheets and RAN. professor? didn''t grab papers. didn''t grab attendance. grabbed his tiffin box with samosas and LEFT. priorities. we all stood outside for 45 minutes. false alarm. went back in. professor still eating samosas. our answer sheets? some blown away by wind. his samosas? fully consumed. evaluation: he gave everyone average marks because ''fire destroyed evidence''. no fire. no destruction. just samosas. we learned that day: no emergency is bigger than snack time.',
  'funny',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 680)::int
FROM colleges c WHERE c.short_name = 'CBIT' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Stray cat walked into viva room. Examiner talked to cat more than student.',
  'final viva. nervous. walked in. STRAY CAT already inside. examiner: cooing at cat. ''who''s a good kitty? yes you are!''. i stood there. waiting. 5 minutes of cat interaction. finally he looked at me. asked one question. i answered. he said ''good, good'' while looking at cat. gave me 8/10. i was there for 3 minutes total. cat was there for 15. i don''t know if i deserved 8/10. i don''t know if cat deserved more attention than my 4-year engineering knowledge. what i know: that cat has better networking skills than me. it''s probably placed by now.',
  'funny',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 640)::int
FROM colleges c WHERE c.short_name = 'RVCE' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Submitted assignment in Comic Sans as power move. Got deducted marks for ''assault on eyes''.',
  'database assignment. 40 pages. tired of times new roman. chose violence. chose COMIC SANS. not just text. headings. tables. diagrams. everything. submitted confidently. got it back with note: ''-5 marks for visual assault''. fair. another note: ''+2 marks for courage''. net: -3 marks. professor said ''i respect the chaos but not the execution''. i asked what font HE prefers. he said ''calibri like a normal person''. i submitted next assignment in wingdings. got a phone call. not from professor. from counselor. they thought i was ''going through something''. i was. it was called boredom.',
  'funny',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 570)::int
FROM colleges c WHERE c.short_name = 'BITS Hyd' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'College WiFi password is ''chairman123'' and has been since 2015. Nobody dares change it.',
  'true story. wifi password: chairman123. nobody has changed it in 9 years. IT department knows. they cannot change it. WHY? because ''chairman sir himself suggested it''. the CHAIRMAN of the college board personally selected the wifi password in 2015 and expects it to remain forever. anyone who changes it is ''disrespecting his vision''. one IT guy tried. got transferred to library records department. the password is now institutional knowledge. fresher orientation includes ''and the wifi password is chairman123, do not question it''. we don''t question it. we accept it. this is tradition now.',
  'funny',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 820)::int
FROM colleges c WHERE c.short_name = 'MRU' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Guy sneezed during online exam, got flagged for ''suspicious head movement''.',
  'online proctored exam. strict AI monitoring. friend sneezed. SNEEZED. natural human function. exam got paused. warning: ''suspicious head movement detected''. he had to wait 20 minutes for manual review. reviewer asked him to ''explain the movement''. he said ''i sneezed''. she asked ''can you demonstrate?''. HE HAD TO FAKE SNEEZE FOR THE PROCTOR. she approved. exam resumed. he failed anyway because he lost 20 minutes. appealed based on ''medical sneeze discrimination''. appeal rejected. moral: in online exams, even your immune system is sus. don''t have allergies. don''t be human.',
  'funny',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 690)::int
FROM colleges c WHERE c.short_name = 'VIT' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Canteen aunty''s chai has been keeping this college alive since 1995. She is the true HOD.',
  'rani aunty. canteen. since 1995. 29 years. she has seen 7 principals come and go. 4 HODs retire. 2 buildings get demolished. she remains. her chai remains. ₹10 chai that tastes like comfort and emotional support. students cry to her about placements. she listens. gives free biscuit. doesn''t judge. when she took leave for 2 days, productivity dropped 40%. that''s measured. someone did a study. she returned. everything normalized. she knows everyone''s name. everyone''s order. everyone''s problems. she IS the institution. buildings can be replaced. rani aunty cannot. we must protect her at all costs.',
  'funny',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 750)::int
FROM colleges c WHERE c.short_name = 'AIT Blr' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Accidentally cc''d entire college on email meant for girlfriend. ''Miss you baby'' to 8000 people.',
  'email. simple email. ''miss you baby, can''t wait to see you tonight''. selected girlfriend''s email. or so i thought. autocomplete selected ''all_students@college.edu''. 8000 people received my love note. including all professors. including dean. including my own mother who is faculty. my phone didn''t stop buzzing for 3 hours. 247 reply-alls saying ''aww''. 89 people said ''same''. 12 asked ''who is baby?'' dean responded ''please use official channels for official communication only. personal matters should use personal email.'' my mother''s response: ''come home. we need to talk.'' i didn''t go home for 2 weeks. legend says the email is still being forwarded in alumni groups.',
  'funny',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 860)::int
FROM colleges c WHERE c.short_name = 'Christ' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Library fine was ₹2. I negotiated it down to ₹1.50. Worth my dignity? No. But I won.',
  'library book. 2 days late. fine: ₹2. i could have paid. but no. i asked ''any discount?'' librarian stared. i explained: ''hardship. student budget. economy is bad.'' she stared more. finally said ''₹1.50. final offer.'' I TOOK IT. saved 50 paise. spent 15 minutes negotiating. my time is worth more than 50 paise. my dignity is worth more. but the PRINCIPLE. the principle of negotiation. i won. she knows it. i know it. the 47 students in line behind me who waited 15 minutes for my petty victory? they know it too. one of them clapped. sarcastically. but still clapped. small victories matter.',
  'funny',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 540)::int
FROM colleges c WHERE c.short_name = 'IISc' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Asked ChatGPT to write apology email to professor. It apologized for things I didn''t even do.',
  'missed assignment deadline. needed apology email. asked chatgpt. it wrote: ''i sincerely apologize for my tardiness, and also for my general lack of enthusiasm in class, my tendency to arrive late, my occasional yawning, and the incident involving the coffee spill which i hope you''ve forgiven.'' I NEVER SPILLED COFFEE. i sent it anyway without reading fully. professor replied: ''i wasn''t aware of most of these issues. we need to talk.'' meeting scheduled. had to explain that AI apologized for fictional crimes. he laughed. then stopped. then asked ''but did you spill coffee?'' i said no. he doesn''t believe me. chatgpt ruined my reputation with imaginary guilt.',
  'funny',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 720)::int
FROM colleges c WHERE c.short_name = 'NSUT' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Entire class pretended professor was invisible for 40 minutes. He called his wife to confirm he exists.',
  'boring class. we coordinated. when professor entered, nobody acknowledged. he said good morning. we ignored. he asked questions. we stared through him. for 40 MINUTES he tried to get our attention. we stared at the board BEHIND him. he checked if projector was on. checked if mic was working. finally, he called his wife. speaker on. ''dear, can you see me? am i visible?'' she was confused. we broke character. started laughing. he laughed too. eventually. gave us attendance. called us ''creative but psychologically concerning''. best prank. no property damage. only existential damage.',
  'funny',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 780)::int
FROM colleges c WHERE c.short_name = 'IIM-B' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'College bus so unpredictable, students developed prediction app. VCs now interested.',
  'college bus supposed to come at 8am. comes anywhere between 7:30 and 9:15. nobody knew when. pure chaos. so we collected data. 6 months. 180 data points. fed it to ML model. app predicted arrival within 5-minute accuracy. word spread. 2000 downloads. local startup VCs noticed. offered funding. we said no — we built it for survival, not profit. app still runs. professor who teaches machine learning uses it as case study. we got extra marks for ''real-world application''. the bus company saw the app. got offended. tried to become more unpredictable. our model adapted. we always win.',
  'funny',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 700)::int
FROM colleges c WHERE c.short_name = 'PES' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Wore formal clothes to exam by mistake. Everyone thought I was external examiner.',
  'woke up late. grabbed whatever clothes. happened to be formal suit from wedding last week. ran to exam. reached 5 minutes early. students STOOD UP when i entered. someone said ''good morning sir''. i was confused. they thought i was external examiner. i went with it. nodded professionally. sat in the front. exam started. actual external came 10 minutes late. confusion. explanations. embarrassment. he thought i was impersonating him. i had to show student ID. wearing suit. students laughed. i wanted to dissolve. wrote entire exam in shame. passed though. suit luck maybe.',
  'funny',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 610)::int
FROM colleges c WHERE c.short_name = 'BMSCE' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Professor wrote entire derivation on board, then erased it because ''you should have copied faster''.',
  'signals and systems. complex derivation. professor wrote for 20 minutes. 4 boards full. we were copying. he finished. looked at us. 30% still copying. he picked up the duster. ERASED EVERYTHING. ''you should have copied faster. life doesn''t wait.'' SIR. 4 boards of derivation. 20 minutes of work. erased in 30 seconds. life lesson apparently. exam had that derivation. nobody remembered fully. everyone failed that question. he gave partial marks for ''effort''. what effort? he erased the effort. this is pedagogy. this is terrorism. there is no difference in engineering colleges.',
  'funny',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 650)::int
FROM colleges c WHERE c.short_name = 'DTU' LIMIT 1;

-- ===============================
-- HOSTEL LIFE (20 stories)
-- ===============================

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Roommate''s girlfriend moved in for entire semester. She paid half the electricity bill.',
  'first year hostel. roommate got girlfriend. she visited. then stayed overnight. then stayed a week. then just... stayed. FOR THE ENTIRE SEMESTER. i had to pretend she was visiting her ''cousin'' whenever warden checked. she paid half electricity because ''it''s only fair''. she was a better roommate than actual roommate honestly. cleaned. cooked maggi. helped with assignments. when they broke up, SHE kept the room key. HE had to request it back. i still talk to her. not to him. she was the real homie. she attended convocation. not officially. but spiritually.',
  'hostel_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 640)::int
FROM colleges c WHERE c.short_name = 'BITS Hyd' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Mess food so bad, we started a black market for Maggi. Economics professor approved.',
  'hostel mess. food quality: questionable. taste: absent. nutrition: negative. what did we do? organized. basement of hostel became maggi trading hub. buy in bulk from D-mart. sell in hostel at 20% markup. 300% profit margins. someone created delivery system. someone else created loyalty program. economics professor found out. didn''t report us. instead: used us as case study for ''entrepreneurship in constrained environments''. we got marks. we got money. mess improved after our cartel became too powerful. we were disrupting their monopoly. capitalism wins. always.',
  'hostel_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 710)::int
FROM colleges c WHERE c.short_name = 'IIT-D' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Hostel rat was named, given attendance, and technically graduated before me.',
  'rat in room. couldn''t remove it. trap didn''t work. poison avoided. decided to coexist. named him ''raju''. put his name on attendance sheet as joke. professor didn''t notice. marked him present. FOR TWO YEARS. someone calculated: raju had 89% attendance. better than most humans. at graduation, someone made a fake degree for him. ''bachelor of surviving in hostile environments''. he disappeared after we left. legend says he mentors new rats now. teaches them which rooms have food. passing on knowledge. true educator. better than half our faculty.',
  'hostel_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 760)::int
FROM colleges c WHERE c.short_name = 'JNTUH' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Hot water works only between 4:17am and 4:23am. We have documented this.',
  'hostel bathroom. geyser. theoretically provides hot water. practically? works 6 minutes per day. exactly 4:17am to 4:23am. no other time. we tested this. for 3 months. 92 days of data. that geyser has a mind of its own. reported to maintenance. they said ''working as intended''. SIR. 4:17AM IS NOT A VALID INTENDED TIME. we created a schedule. students wake up in shifts to shower. alarm at 4:15. sprint to bathroom. 2 minutes each. 3 people per day get hot water. the rest? cold. character building. we applied for patent on ''thermal scheduling algorithm''. rejected. obviously.',
  'hostel_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 620)::int
FROM colleges c WHERE c.short_name = 'CVR' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Warden''s son sells cigarettes. Warden catches students for smoking. Economy.',
  'college is officially smoke-free. warden conducts random checks. catches smokers. ₹500 fine. but ALSO: warden''s son runs a pan shop 100 meters from hostel. sells cigarettes. to same students. who get caught. by his father. THE CIRCLE IS COMPLETE. we did the math. warden''s son makes ₹3000/day in cigarette sales. warden collects ₹2000/day in fines. family income: ₹5000/day. from same students. it''s vertical integration. they''ve captured the entire value chain. supply and enforcement. we''re not even mad. we''re impressed. this is business school worthy.',
  'hostel_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 800)::int
FROM colleges c WHERE c.short_name = 'SNIST' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  '3am hostel corridor: 200 students singing Ae Dil Hai Mushkil. Security bhai cried.',
  'exam week. everyone stressed. someone played ae dil hai mushkil at 2:55am. first one room started singing. then the corridor. then the floor. then ALL 6 FLOORS. 200 students. windows open. full volume. synchronized somehow. 3am concert in hostel H block. security bhai ramesh was doing rounds. he stopped. listened. then started HUMMING. then singing. then crying. he said ''this reminds me of my college days''. we hugged him. group hug. 200 students and one security guard. we got one hour extra sleep that night. he didn''t report us. best night of engineering.',
  'hostel_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 870)::int
FROM colleges c WHERE c.short_name = 'PES' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Found previous occupant''s hidden money in room. Used it to buy Maggi. He found out.',
  'new hostel room. cleaning under bed. found envelope. ₹2000 cash. no name. no number. clearly forgotten. what did i do? SPENT IT. bought maggi for entire floor. party. two months later: senior knocked on door. ''hey did you find an envelope under the bed?'' i said no. he knew i was lying. MY ENTIRE FLOOR was eating maggi he paid for. he didn''t fight. just said ''at least you have good taste''. we became friends. i paid him back eventually. with interest. ₹2500. he said ''maggi inflation''. fair. financial karma is real.',
  'hostel_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 580)::int
FROM colleges c WHERE c.short_name = 'RVCE' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Roommate slept through earthquake. Woke up angry because we ''moved his bed''.',
  '4am. earthquake. magnitude 4.something. building shook. i ran out. entire hostel ran out. except my roommate. deep sleeper. deepest sleeper. earthquake ended. we went back. his bed had shifted 3 feet. he was still sleeping. 7am he woke up. angry. ''which idiot moved my bed?'' we said earthquake. he said ''impossible, i would have felt it''. showed him news. showed him videos. showed him the CRACK IN THE WALL. he said ''huh. must have been mild''. THIS MAN. 4.0 MAGNITUDE. crack in wall. he slept through it. we are not safe with him. he is not safe with us. natural selection should have worked.',
  'hostel_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 690)::int
FROM colleges c WHERE c.short_name = 'IIT-B' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Hostel wifi so slow, it''s faster to walk to IT department and ask them to email you the page.',
  'wifi speed: 0.3 mbps on good days. downloading a 10MB pdf: 45 minutes. one day i needed notes urgently. walked to IT building. asked them to open the website on their computer. email me the pdf. walked back. total time: 12 minutes. faster than wifi. i now have a relationship with IT department. i visit weekly. they have chai. they let me use their computer. my hostel room has wifi that doesn''t work but i have friends in IT. this is networking. literally. both types.',
  'hostel_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 610)::int
FROM colleges c WHERE c.short_name = 'MREC' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Shower drain clogged for 6 months. We adapted. Became amphibian.',
  'hostel bathroom. shower drain clogged. reported to maintenance. they said ''next week''. next week became next month. next month became next semester. WE GAVE UP. started showering in 3 inches of standing water. got used to it. when they finally fixed it, we felt uncomfortable. it felt ''too dry''. one guy complained drain was ''working too well now''. we had evolved. regressed? evolved. we became creatures of the flood. the maintenance man looked at us with concern. we looked back with wet feet. we are forever changed.',
  'hostel_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 550)::int
FROM colleges c WHERE c.short_name = 'IARE' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Power cut during online exam. Used cycle-powered generator. Professor was impressed.',
  'online proctored exam. high stakes. 30 minutes in: power cut. full hostel dark. laptop dying. 12% battery. 2 hours of exam left. what did we do? we had a cycle. we had a physics student. we made a cycle-powered phone charger. I CYCLED FOR 90 MINUTES while writing exam on laptop. thighs burning. answers flowing. proctor saw through camera. asked ''what is that sound?'' i said ''sustainable energy''. he approved. passed the exam. failed the next 2 because couldn''t move legs for a week. no regrets. this is engineering. this is survival. this is cardio.',
  'hostel_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 730)::int
FROM colleges c WHERE c.short_name = 'IIIT-H' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Hostel ghost story turned out to be senior eating Maggi at 3am in common room.',
  'rumors of ghost in C-block hostel. multiple sightings. always 3am. white figure in common room. mysterious sounds. we were scared. set up phone camera one night to catch evidence. reviewed footage next morning. IT WAS PRAKASH FROM 4TH YEAR. he was sneaking to common room at 3am to make maggi because his roommate complained about smell. wearing white kurta. slurping sounds were noodles. we exposed him in the hostel group. he became defensive: ''maggi at 3am is self-care''. ghost story died. maggi culture lived. prakash became legend. for wrong reasons. but legend nonetheless.',
  'hostel_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 640)::int
FROM colleges c WHERE c.short_name = 'VCE' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Laundry machine ate my clothes. 3 months later, it gave them back. Washed.',
  'hostel laundry. put clothes in. machine stopped mid-cycle. jammed. couldn''t open. reported to maintenance. they ''worked on it'' for 3 months. gave up hope. bought new clothes. 3 MONTHS LATER. machine fixed. opened. my clothes. STILL INSIDE. and somehow... clean? the machine had been slowly washing them for 90 days. one cycle that never ended. i got them back. they fit weird. like they''d been on a spiritual journey. technically cleanest clothes i''ve ever owned. i wear them with pride. and confusion. mostly confusion.',
  'hostel_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 590)::int
FROM colleges c WHERE c.short_name = 'MSRIT' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Roommate''s alarm goes off at 5am. He wakes up at 8am. We suffer.',
  'roommate: ''i''m a morning person''. sets alarm at 5am. 5:00am alarm rings. he snoozes. 5:10am. snooze. 5:20, 5:30, 5:40, 5:50, 6:00, 6:10, 6:20... HE WAKES UP AT 8AM. every single day. i calculated: i hear 36 alarms per day. that''s 252 per week. he''s not a morning person. he''s an alarm terrorist. i bought him coffee. i bought him books. i bought him THERAPY SESSIONS. nothing works. we''ve adapted. we sleep with pillows on our ears. we hate him. we also love him. mostly hate though. 60-40 hate.',
  'hostel_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 670)::int
FROM colleges c WHERE c.short_name = 'BMSCE' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Hostel food served same dal for 40 days straight. We counted. We documented. Nothing changed.',
  'mess food. dal. same dal. every day. we started a tally. day 1: dal. day 2: dal. day 10: dal. day 20: dal. day 30: STILL DAL. day 40: we presented our findings to warden. with charts. with data visualization. with a 15-slide presentation titled ''The Dal Conspiracy''. warden looked at it. said ''protein is good for you''. NOTHING CHANGED. day 41: dal. we gave up. accepted our fate. became one with the dal. we are dal now. dal is us. this is hostel life. this is protein. this is suffering.',
  'hostel_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 720)::int
FROM colleges c WHERE c.short_name = 'GCET' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Built a pulley system to share food between floors. Warden called it ''innovative but illegal''.',
  'room on 4th floor. friend on 2nd floor. sharing food was tedious. solution: PULLEY SYSTEM. rope, bucket, window. worked perfectly. biryani went up, maggi came down. midnight snack exchange network established. 3 months of successful operation. warden saw one day. bucket with dosa flying between floors. she stared. we stared. she said ''this is innovative but against hostel rules''. wrote us up. BUT: she also took photos. ''for engineering display''. we got warning. also got appreciation for ''applied physics''. net result: neutral. pulley still exists. we just use it when she''s not looking.',
  'hostel_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 750)::int
FROM colleges c WHERE c.short_name = 'ISB' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Roommate talks in sleep. One night he recited entire data structures syllabus. Got 9 CGPA.',
  'roommate studies hard. dreams harder. one night, 3am, he started talking in sleep. i ignored at first. then listened. HE WAS EXPLAINING BINARY TREES. full lecture. proper terminology. complete explanation. i recorded it. next morning showed him. he didn''t remember. BUT: he got 9.2 in data structures that semester. his sleep-self is better at academics than his awake-self. we now ''consult'' his sleeping brain before exams. ask him questions while he''s asleep. he answers. 70% accuracy. we''re concerned. also grateful. mostly concerned.',
  'hostel_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 680)::int
FROM colleges c WHERE c.short_name = 'NIT' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Mess paneer is so hard, someone used it to nail a poster. It worked.',
  'hostel mess. paneer day. technically. that paneer was not paneer. it was construction material. one guy: genius level thinking. took the paneer piece. tried to nail poster to wall. hammer. nail. PANEER WAS THE SURFACE. nail went through paper, through wall. paneer didn''t break. poster stayed for 2 years. we submitted this as evidence of food quality issues. warden said ''at least it''s functional''. SHE DEFENDED THE CONCRETE PANEER. we still have that poster. paneer is still there. fossilized. a monument to hostel cuisine. future archaeologists will be confused.',
  'hostel_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 810)::int
FROM colleges c WHERE c.short_name = 'JNTUH' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Found a snake in the bathroom. It became floor mascot for a week.',
  'hostel bathroom. 6am. saw snake. non-venomous (we googled). instead of freaking out, we... adopted it. named it ''slimu''. he stayed in the corner. didn''t bother anyone. we bothered him minimally. became floor mascot. people came to visit slimu. someone made an instagram for him. 200 followers in a week. wildlife rescue came after day 7. took him away. we were sad. he was a good roommate. better than humans. didn''t make noise. didn''t use hot water. didn''t eat our food. perfect roommate energy. we miss slimu. slimu doesn''t miss us. that''s fair.',
  'hostel_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 630)::int
FROM colleges c WHERE c.short_name = 'IISc' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Seniors stole all our room furniture. We stole theirs. Cold war for 2 semesters.',
  'first year. seniors ragging style: stole our chairs. all of them. no sitting for 2 weeks. we retaliated. stole THEIR beds. they couldn''t sleep. they stole our fans. we stole their water connection. ESCALATION. by month 2, nobody had complete furniture. things were scattered across 4 floors. warden intervention. UN peacekeeping level negotiation. furniture returned with ''territorial agreements''. we signed a treaty. actually signed. on paper. ''hostel H block non-aggression pact 2022''. it''s framed. in the common room. future batches respect it. mostly.',
  'hostel_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 700)::int
FROM colleges c WHERE c.short_name = 'VIT' LIMIT 1;
-- =====================================================
-- VIRAL STORIES SEED - Part 3: Placement, Horror, Other
-- Pure Unhinged Chaos Edition
-- =====================================================

-- ===============================
-- PLACEMENT HORROR (18 stories)
-- ===============================

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Got placed at company that doesn''t exist anymore. Showed up to chai shop.',
  'campus placement. startup name. promising salary. ₹6 LPA. signed offer letter. celebrated. told parents. bought new clothes. showed up on joining day. address led to a chai shop. THE COMPANY HAD SHUT DOWN. during my notice period. nobody informed us. 47 students showed up. chai shop owner was confused. gave us free chai though. ''you look sad. drink''. we drank chai in formal clothes. mourning our careers. placement cell said ''technical error''. they added company to next year''s blacklist. too late for us. we had chai. we had trauma. we had stories.',
  'placement_experience',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 680)::int
FROM colleges c WHERE c.short_name = 'JNTUH' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'HR was on Bumble during interview. Matched with the candidate. Didn''t get job but got date.',
  'final round interview. HR. she was typing on phone throughout. i assumed she was taking notes. SHE WAS ON BUMBLE. i know because my phone buzzed. NEW MATCH. during interview. IT WAS HER. we both froze. she said ''let''s continue the interview''. professional. i answered questions about teamwork while knowing she swiped right on me. didn''t get the job. got a date though. dated for 3 months. broke up. still no job. but interesting story. would trade job for story again. no i wouldn''t. i need money. but story is nice.',
  'placement_experience',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 730)::int
FROM colleges c WHERE c.short_name = 'BITS Hyd' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Placement cell proudly announced 3 LPA mass recruitment. Email had confetti graphics.',
  'placement season. email from placement cell. subject: ''HISTORIC ACHIEVEMENT''. body: ''we are proud to announce that 2000 students have been placed at prestigious company X at package of 3 LPA''. THE EMAIL HAD CONFETTI GRAPHICS. celebration emoji. ''record breaking placements!''. sir. 3 LPA. in 2024. for engineering. after ₹8 lakh fees. THE CONFETTI. we calculated: ₹25,000/month. minus tax = ₹21,000. minus rent = ₹11,000. minus food = ₹3,000. we''re supposed to celebrate having ₹3,000 for life. placement officer got ''excellence in placement'' award. confetti was probably from the ceremony.',
  'placement_experience',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 760)::int
FROM colleges c WHERE c.short_name = 'VIT' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Interview asked me to explain recursion. I explained it using recursion. They got confused.',
  'technical interview. big company. interviewer: ''explain recursion''. me, trying to be clever: ''recursion is when you explain recursion by explaining recursion''. silence. he stared. i stared. he asked ''can you explain that again?'' i said ''recursion is when you explain recursion by explaining recursion''. same answer. he got annoyed. asked me to write code instead. code worked. still didn''t get job. feedback: ''technically sound but communication needs improvement''. SIR I COMMUNICATED RECURSION RECURSIVELY. you don''t deserve me. they hired someone who explained it normally. boring choice.',
  'placement_experience',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 620)::int
FROM colleges c WHERE c.short_name = 'IIIT-H' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Company offered ₹24 LPA. Then said it was typo. Actual offer: ₹2.4 LPA.',
  'dream placement. offer letter said ₹24,00,000 per annum. i told everyone. bought iphone on EMI. mentally bought a car. mentally bought a house. day 2: HR calls. ''there was a typo in offer letter''. typo? ''actual package is ₹2,40,000''. THEY MISSED A ZERO. i lost ₹21,60,000 to a DECIMAL POINT. iphone EMI: still running. dreams: cancelled. they said ''take it or leave it''. i took it. what choice? worked there for 6 months. quit. joined startup. now earn ₹18 LPA. but that day. that phone call. i will never forgive that decimal point. never.',
  'placement_experience',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 810)::int
FROM colleges c WHERE c.short_name = 'CBIT' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Interviewer asked ''where do you see yourself in 5 years?'' I said ''in your seat''. He laughed. Then rejected me.',
  'confidence is key they said. be bold they said. interviewer asked standard question: ''where do you see yourself in 5 years?'' i looked him in the eye. said ''in your seat''. HE LAUGHED. i laughed. everyone laughed. i thought we were bonding. rejection email came next day. feedback: ''overconfident and potentially threatening to organizational hierarchy''. THREATENING? it was a METAPHOR. i wanted career growth not hostile takeover. he''s probably still paranoid. checking his seat daily. sorry sir. i just wanted a job. not your furniture.',
  'placement_experience',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 650)::int
FROM colleges c WHERE c.short_name = 'PES' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Rejected from TCS. 3 years later, TCS uses software my startup built. Karma.',
  'placement season. TCS came. cleared written. cleared technical. HR round: rejected. reason: ''not a cultural fit''. i was devastated. started a startup instead. built payroll software. 3 years later: got a client. BIG client. who? TCS HR DEPARTMENT. they now use MY software to reject other people. i personally onboarded them. the same HR who rejected me sat in the training. she didn''t recognize me. i recognized her. i said nothing. charged them premium rates. ''enterprise pricing''. they paid. i smiled. the universe has a sense of humor. so do i.',
  'placement_experience',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 890)::int
FROM colleges c WHERE c.short_name = 'VNR VJIET' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Placement officer promised 100% placement. 78% got placed. At 2.4 LPA. Still technically 78%.',
  'brochure: ''100% placement assistance''. keyword: ASSISTANCE. not guarantee. subtle. 78% got placed. technically good. BUT: average package was 2.4 LPA. highest: 4 LPA. we complained. placement officer said ''we placed people, salary negotiation is individual skill''. SIR. you brought the companies. you set the salary caps. HOW IS IT OUR SKILL. the remaining 22%? they got ''lifetime placement assistance''. which means: access to an email ID that nobody monitors. it bounces back now. server shut down. we are assisted. perpetually.',
  'placement_experience',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 570)::int
FROM colleges c WHERE c.short_name = 'MRCET' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Group discussion topic was ''Is water wet?'' 5 people got rejected for wrong answer.',
  'placement GD round. topic: ''is water wet?'' we thought it was icebreaker. IT WAS NOT. actual evaluation happened. debate got philosophical. one guy said ''water makes things wet but isn''t wet itself''. another said ''wetness is a property of the liquid state''. 5 people got rejected. reason: ''incorrect scientific understanding and poor argumentation''. THERE IS NO CORRECT ANSWER TO THIS. we asked placement officer. he said ''company knows what they want''. apparently they want people who know whether water is wet. we don''t know. we will never know. we are unemployed and confused.',
  'placement_experience',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 640)::int
FROM colleges c WHERE c.short_name = 'SNIST' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Interviewer fell asleep during my technical round. I finished, woke him up, got selected.',
  '2pm interview slot. post-lunch. interviewer was sleepy. asked me to explain microprocessor architecture. i started talking. 5 minutes in: he was asleep. fully asleep. snoring slightly. what did i do? CONTINUED EXPLAINING. to a sleeping man. for 15 minutes. finished. woke him up politely. ''sir i''m done''. he jolted awake. said ''very good, you have clarity''. SELECTED. i don''t know if he heard anything. i don''t care. i got the job. sleep-through-the-interview technique. 100% success rate. sample size: 1. but still. technique is technique.',
  'placement_experience',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 710)::int
FROM colleges c WHERE c.short_name = 'CVR' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Company said ''startup culture'' in interview. Meant: no AC, no chairs, work from floor.',
  'startup placement. they said ''we have startup culture''. sounded cool. young. dynamic. joined. THERE WAS NO AC. no proper chairs. bean bags only. ''floor meetings'' were literal - we sat on floor. ''flexible hours'' meant work 12 hours, flex which 12. ''unlimited snacks'' was a bowl of mixture that was refilled monthly. ''equity'' was 0.001% that vests in 8 years. startup culture = no budget culture. left after 3 months. they said ''you couldn''t handle the grind''. the grind was the literal floor. my back still hurts. my resume still shows it.',
  'placement_experience',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 600)::int
FROM colleges c WHERE c.short_name = 'REVA' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Offered 3 LPA but ''CTC could go up to 12 LPA with variables''. Variables never varied.',
  'offer letter: ₹3 LPA fixed + ''variables up to ₹9 LPA''. total CTC: ₹12 LPA. impressive right? NO. variables were: performance bonus (never given), stock options (company never went public), retention bonus (they laid us off), and ''flexibility allowance'' (literally ₹0). actual take home: ₹21,000/month. actual CTC achieved: ₹3 LPA exactly. the ₹9 LPA of ''variables''? theoretical. imaginary. mythical. like unicorns. like my savings. like my will to live in corporate india. they still advertise ₹12 LPA. students still join. the cycle continues.',
  'placement_experience',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 690)::int
FROM colleges c WHERE c.short_name = 'MLRIT' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'PPT started with inspirational quote. It was misattributed. Company got embarrassed.',
  'placement PPT. company came to impress. first slide: inspirational quote. ''success is not final, failure is not fatal'' - ALBERT EINSTEIN. one student googled. real author: WINSTON CHURCHILL. she raised hand. pointed it out. HR fumbled. tried to continue. student asked ''if you can''t verify a quote, how do we trust your company values?'' SILENCE. devastating. company still hired 12 people. but the damage. oh the damage. we call her ''fact-check queen''. she didn''t get hired there. she got hired somewhere better. fact-checking pays. literally.',
  'placement_experience',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 550)::int
FROM colleges c WHERE c.short_name = 'BMSCE' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Asked about work-life balance in interview. Interviewer laughed for 30 seconds straight.',
  'first proper interview. i asked ''what''s the work-life balance like?'' interviewer paused. then started laughing. not a chuckle. full belly laugh. for 30 seconds. wiped tears. said ''that''s a good one''. then realized i was serious. his face changed. said ''work IS life here. balance is for accountants.'' i should have left. i didn''t. i took the job. he was right. work was life. life was work. balance was a concept i vaguely remembered from the interview. left after 8 months. now i know: if they laugh at work-life balance question, RUN.',
  'placement_experience',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 630)::int
FROM colleges c WHERE c.short_name = 'MSRIT' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Resume said ''proficient in Python''. Interview asked to code in Python. Forgot how to print.',
  'resume padded. obviously. said ''proficient in Python''. i knew basics. BASICS. interviewer: ''write a simple program''. me: sitting confidently. typing... typing... i forgot how to print. PRINT. the most basic function. print(). i typed printf(). wrong language. i typed System.out.println(). wrong language. my mind blanked. interviewer staring. i stared at keyboard like it betrayed me. finally typed print(''hello''). he asked ''why did that take 3 minutes?'' i said ''i was optimizing''. he didn''t believe me. i didn''t believe me. rejected. deserved. lesson learned. now i actually know Python. mostly.',
  'placement_experience',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 580)::int
FROM colleges c WHERE c.short_name = 'IARE' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Company withdrew offer because I asked too many questions in pre-joining call. ''Red flag'' apparently.',
  'got offer. ₹8 LPA. good package. pre-joining call happened. i asked about project details. asked about team size. asked about tech stack. asked about growth opportunities. asked about learning budget. STANDARD QUESTIONS. offer withdrawn next day. reason: ''candidate demonstrated concerning levels of curiosity which might indicate dissatisfaction potential''. I WAS CURIOUS BECAUSE I WANTED TO WORK WELL. apparently wanting to know what you''ll do is a red flag. i should have been blindly obedient. noted. lesson learned. now i ask nothing. accept everything. this is corporate india.',
  'placement_experience',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 670)::int
FROM colleges c WHERE c.short_name = 'DTU' LIMIT 1;

-- ===============================
-- RAGGING TRUTH (15 stories)
-- ===============================

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Seniors made us start a fake startup. It''s real now. Worth 2 crore.',
  'ragging task: ''create a business plan and present it to investors'' (seniors). we made fake startup. food delivery for hostels. 3am Maggi delivery. seniors laughed. gave us ''D grade''. we actually launched it as joke. IT TOOK OFF. 400 orders in first month. scaled to 4 hostels. senior investor (the guy who gave us D grade) wanted in. we said no. he gave us A grade in ''apology''. company now worth 2 crore. he still messages asking for equity. we still say no. best ragging outcome. transformed trauma to success.',
  'ragging',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 820)::int
FROM colleges c WHERE c.short_name = 'IIT-H' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Anti-ragging committee more strict than ragging itself. Got punished for saying ''hi senior''.',
  'first week of college. saw senior in corridor. said ''hi senior, how are you?'' ANTI-RAGGING COMMITTEE appeared. from nowhere. like ninjas. asked ''did he ask you to call him senior?'' i said no, just being polite. they called a MEETING. 2-hour investigation. senior was cleared. i was given ''counseling session'' for ''voluntary submission to hierarchy''. SIR. I SAID HI. this is politeness. not ragging. they didn''t care. wrote a report. my parents got a letter. explaining i was ''potentially vulnerable to peer pressure''. i stopped saying hi to everyone. safer that way.',
  'ragging',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 580)::int
FROM colleges c WHERE c.short_name = 'Christ' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Seniors made freshers propose to founder''s statue. Principal saw. Made seniors apologize. To statue.',
  'fresher week. seniors lined us up at founder''s statue. task: propose to statue. with flowers. with emotional speech. we did it. one by one. 47 freshers proposed to bronze man. principal walked past. saw. GATHERED ALL SENIORS. made them apologize. not to us. TO THE STATUE. ''you have disrespected our founder by involving him in ragging''. seniors stood in line. said ''sorry sir'' to statue. for 15 minutes. we were watching. trying not to laugh. principal was serious. statue was silent. justice was served. to the statue.',
  'ragging',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 720)::int
FROM colleges c WHERE c.short_name = 'RVCE' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Ragging task: memorize senior''s girlfriend''s birthday. I remembered. He forgot. Relationship drama.',
  'senior assigned task: ''remember my girlfriend''s birthday and remind me''. weird task. but okay. her birthday: march 17. i memorized. march 17 came. i reminded him. HE HAD FORGOTTEN. she was already mad because he hadn''t wished. he blamed me: ''you should have reminded me EARLIER''. SIR THIS IS RAGGING NOT RELATIONSHIP MANAGEMENT. she found out the entire setup. broke up with him. blamed me somehow. i became villain in their story. i was just doing homework. literally doing ragging homework. still got blamed. seniors are complicated.',
  'ragging',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 640)::int
FROM colleges c WHERE c.short_name = 'PES' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Senior asked me to bring 1 kg ice. By the time I found it, he forgot why he asked.',
  'ragging task: ''bring 1 kg of ice immediately''. 10pm. where do i find ice? canteen closed. shops closed. ran for 40 minutes. found a wedding nearby. convinced caterer to sell me ice. brought 1 kg ice. found senior. ''here''s your ice, senior''. he stared. ''ice? what ice?'' HE FORGOT. he was playing PUBG. didn''t remember asking. the ice melted in my hands. literally. my effort melted. he said ''cool dedication though''. gave me free pass from future tasks. the ice situation. it haunts me. the ice melted but the memory froze.',
  'ragging',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 530)::int
FROM colleges c WHERE c.short_name = 'BITS Hyd' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Seniors made us form a human pyramid. We fell. On the warden. Everyone got punished.',
  'hostel ragging. classic: human pyramid. we were 12 freshers. climbed on each other. reached 3 levels. someone at bottom sneezed. ENTIRE PYRAMID COLLAPSED. landed on someone. that someone? WARDEN MADAM. she was doing late night rounds. she went down. we went down. everyone was down. 12 freshers + 4 seniors + 1 warden = 1 massive pile. she was fine. her dignity was not. everyone got punished. freshers: warning. seniors: suspension. warden: never did late rounds again. the sneeze. it changed hostel history. someone always sneezes at the wrong time.',
  'ragging',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 690)::int
FROM colleges c WHERE c.short_name = 'VIT' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Made to call every senior ''sir'' for a month. Called professor ''sir''. He said ''finally some respect''.',
  'ragging rule: call every senior ''sir'' without exception. muscle memory developed. one day: professor walked past. automatic: ''good morning SIR''. he stopped. turned. looked at me. said ''finally. a student who shows respect. what is your name?'' gave me extra marks in internals. FOR SHOWING RESPECT. ragging trauma became academic benefit. i kept calling him sir. enthusiastically. he kept giving extra marks. 2 marks here. 3 marks there. net positive from ragging. seniors were confused. i was thriving. accidentally. trauma to triumph.',
  'ragging',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 570)::int
FROM colleges c WHERE c.short_name = 'JNTUH' LIMIT 1;

-- ===============================
-- ADMISSION JOURNEY (15 stories)
-- ===============================

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Counselor promised Olympic pool. Got pond with 2 ducks. Ducks were nice though.',
  'admission counseling. shiny brochure. ''olympic size swimming pool''. i love swimming. this was THE reason i chose this college. paid ₹50,000 deposit. arrived on campus. asked ''where is swimming pool?'' watchman pointed to the back. walked 500 meters. found... A POND. with 2 ducks. they looked at me. i looked at them. we all knew. we were all victims. the ducks more literally. i named them ''olympic'' and ''size''. they became friends. i never learned to swim. but i feed ducks now. that''s something. counselor has blocked my number.',
  'admission_journey',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 710)::int
FROM colleges c WHERE c.short_name = 'MRCET' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Brochure showed 5-star hostel. Actual room has 5 roommates. Same number. Different meaning.',
  'college brochure: hostel room looking like marriott. single occupancy. attached bathroom. balcony view. joined college. actual room: 12x10 feet. 5 roommates. ONE ATTACHED BATHROOM. for 5 people. balcony? there was a window. it didn''t open. ''view'' was the adjacent building''s AC unit. confronted admission office. they said ''images are for representation purposes only''. SIR. THIS IS MISREPRESENTATION. they didn''t care. we became family though. 5 people. 1 bathroom. you learn to love quickly. or hate quickly. we chose love. mostly.',
  'admission_journey',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 680)::int
FROM colleges c WHERE c.short_name = 'MREC' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Paid management quota. Later found out I could have gotten in on merit. ₹5 lakh regret.',
  'panic admission. low confidence. parents paid ₹5 lakh management quota. felt proud. ''at least we got in''. orientation day. met students. one guy: same entrance rank as me. got in on MERIT. paid NOTHING. ₹5 LAKH DIFFERENCE. for same rank. i could have just... waited? applied normally? but no. counselor said ''seats are limited act fast''. SEATS WERE NOT LIMITED. there were 40 empty seats after merit. we were scammed. legally. with a receipt. i have the receipt. framed it. ''₹5 lakh lesson in patience''. parents don''t find it funny.',
  'admission_journey',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 750)::int
FROM colleges c WHERE c.short_name = 'SNIST' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Campus tour showed AC labs. Joined. Found out AC is ''under maintenance'' since 2008.',
  'campus visit. impressed by AC labs. ''all labs are centrally air conditioned''. signed up immediately. first day of actual class. lab. no AC. asked. they said ''under maintenance''. when will it be fixed? ''soon''. HOW SOON? ''process is ongoing''. i asked seniors. AC has been ''under maintenance'' since 2008. 16 YEARS. the maintenance process is older than some students. we sweat in ''AC labs''. the stickers saying ''centrally air conditioned'' are still there. peeling. fading. like our hopes. like our comfort. the AC is a concept. not reality. we are baked.',
  'admission_journey',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 630)::int
FROM colleges c WHERE c.short_name = 'IARE' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Auto driver laughed when I said college address. Thought I was joking. I wasn''t.',
  'first day of college. told auto driver the address. he laughed. ACTUALLY LAUGHED. then stopped. looked at me. ''beta you''re serious?'' i said yes. he called his friend. put on speaker. repeated address. friend also laughed. ''bhai wahan koi college nahi hai, wahan toh jungle hai'' (there''s no college there, that''s just jungle). 45 minutes later. arrived. HE WAS HALF RIGHT. campus exists. surrounded by fields. the ''jungle'' was accurate. auto driver took photo. said ''for proof that i actually came here''. i see him in city sometimes. he waves. concerned wave. supportive wave.',
  'admission_journey',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 690)::int
FROM colleges c WHERE c.short_name = 'MRU' LIMIT 1;

-- ===============================
-- HORROR STORIES (12 stories)
-- ===============================

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Library ghost appears during exam week. She''s actually helpful. Points to relevant books.',
  'library. 3rd floor. old section. during exam week: people report seeing a woman in white. floating between shelves. sounds terrifying right? WRONG. she''s helpful. people say when they''re stuck on a topic, she APPEARS. points to the right book. vanishes. multiple sightings. consistent behavior. one guy was looking for thermodynamics reference. she appeared. pointed to shelf 7. book was exactly what he needed. he passed with 78%. we don''t question her. we thank her. we leave her offerings of bookmarks. she''s the librarian we deserve.',
  'horror',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 640)::int
FROM colleges c WHERE c.short_name = 'OU' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Old hostel block so haunted, rent is 50% off. Still not worth it. Trust me.',
  'H-block hostel. oldest building. rent: ₹15,000/semester. other blocks: ₹30,000. why 50% off? BECAUSE IT''S HAUNTED. everyone knows. administration doesn''t say it officially but everyone knows. doors open by themselves. footsteps at 3am. someone taking shower when all rooms are empty. i stayed there one semester to save money. WORST DECISION. slept with lights on every night. saw things. heard things. saved ₹15,000. spent ₹20,000 on therapy. net loss: ₹5,000 and my peace of mind. not worth it. pay full rent. live peacefully.',
  'horror',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 710)::int
FROM colleges c WHERE c.short_name = 'UoH' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Night security saw something in biology lab. Quit next day. Sells chai outside now.',
  'rajesh bhai. security guard for 8 years. one night. 2am. heard noises from biology lab. went to check. came out running. didn''t explain. resigned next morning. effective immediately. no notice period negotiation. just left. now sells chai OUTSIDE the campus gate. we asked him what he saw. he says ''some things cannot be spoken''. that''s all. 8 years of service. ended by one night. whatever he saw in biology lab... biology lab has preserved specimens. some very old. some... we don''t ask what anymore. we just don''t go there after 6pm. nobody does.',
  'horror',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 680)::int
FROM colleges c WHERE c.short_name = 'NIMS' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Anatomy lab skeleton went missing. Found in dean''s office. As decoration. Nobody questioned.',
  'medical college. anatomy lab. teaching skeleton - the full one, named ''hariprasad'' by generations of students. one day: missing. entire lab searched. panic. hariprasad gone. 3 days later: new student visits dean''s office. sees skeleton. IN THE CORNER. AS DECORATION. with a santa hat on (it was december). nobody had reported it stolen. nobody questioned why dean has a skeleton. it''s still there. we visit hariprasad sometimes. he seems happy. better decorated. nicer room. promoted from teaching tool to executive decoration. living the dream. dying the dream?',
  'horror',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 730)::int
FROM colleges c WHERE c.short_name = 'IISc' LIMIT 1;

-- ===============================
-- INSPIRATIONAL (12 stories)
-- ===============================

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Failed NID entrance 3 times. 4th attempt: got in. Now work displayed at Milan Design Week.',
  'applied to NID. rejected. applied again. rejected. third time: reached interview. rejected at interview. fourth time: spent 6 months. redesigned every project. slept 5 hours daily. lived on chai and deadlines. studio interview: 45 minutes. they asked me to redesign the chair i was sitting on. in real time. i did it. with a pen and napkin. GOT IN. two years later: my work displayed at milan design week. the professor who initially rejected me sent congratulations email. i replied ''thank you for the motivation''. the rejection hurt. the success healed. keep trying.',
  'inspirational',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 850)::int
FROM colleges c WHERE c.short_name = 'NID' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Professor said I''d fail in life. I hired his son at my company. Paid him well.',
  '2nd year. professor hated me. said ''you will never succeed with this attitude''. i had asked too many questions. failed his subject. twice. graduated barely. started a tech company. 7 years later: company doing well. 200 employees. posted job opening. application came in. familiar surname. IT WAS HIS SON. same last name. did well in interview. hired him. paid above market rate. his son is happy. works hard. good employee. professor knows. called me once. didn''t apologize. just said ''take care of him''. i said ''i will''. success is the best response. kindness is the best revenge.',
  'inspirational',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 890)::int
FROM colleges c WHERE c.short_name = 'BITS Hyd' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Dropped out to do YouTube. Education channel now has more subscribers than college has students.',
  '2nd year engineering. i was struggling. but i was good at explaining things. started youtube channel. explained engineering concepts simply. 500 subscribers in month 1. 5000 in month 3. dropped out of college. parents panicked. everyone panicked. except me. 2 years later: 2 million subscribers. my college has 8000 students. i have 2 million students. virtually. earn more from one video than dad''s monthly salary. he''s proud now. was scared then. the irony: i now get invited to speak at colleges. including the one i dropped out from. they paid me. to talk about dropping out.',
  'inspirational',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 920)::int
FROM colleges c WHERE c.short_name = 'VIT' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Rejected from Goldman Sachs. Built startup. Got acquired. Goldman reached out for partnership.',
  'final year. placement season. goldman sachs on campus. cleared all rounds. offer: ₹28 LPA. i said NO. placement cell called parents. HOD called. even principal called. ''pagal hai kya?'' (are you crazy?). i was. started fintech startup. 2 batchmates. 1BHK in koramangala. ramen days. rejection days. almost gave up days. 4 years later: series B funding. 1 year after: acquired. guess who called for partnership? GOLDMAN SACHS. the same team that interviewed me. i didn''t gloat. just smiled. said ''let''s talk''. some rejections are redirections. trust the process. even when process feels broken.',
  'inspirational',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 880)::int
FROM colleges c WHERE c.short_name = 'RVCE' LIMIT 1;

-- ===============================
-- CAMPUS LIFE (15 stories)
-- ===============================

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Chairman''s portrait is bigger than national flag in every room. Democracy trembles.',
  'walked into main building. national flag: A4 printout. laminated. stuck on wall. chairman''s portrait: 6 FEET WIDE. oil painting. golden frame. this is consistent. EVERY building. labs: chairman larger than flag. library: chairman watching you study. hostel reception: chairman greeting you. mess hall: eat under chairman''s gaze. i counted: 47 chairman portraits across campus. 8 national flags. ratio: concerning. his eyes follow you everywhere. we are not students. we are subjects. in his kingdom of education. democracy is a suggestion here. chairman is absolute.',
  'campus_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 740)::int
FROM colleges c WHERE c.short_name = 'MRU' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Security guard logbook tracks who goes to parking lot with whom. It''s a soap opera.',
  'parking lot behind C-block. everyone knows. it''s where couples go. for ''discussing projects''. security guard sharma ji. he knows everything. HE MAINTAINS A LOGBOOK. dates. times. couples. frequency. i asked to see it once. he showed me. it reads like a netflix drama. ''rahul+priya 5th time this month''. ''amit changed from sneha to neha in same week''. ''suspicious solo visits by accounting student''. he doesn''t judge. he documents. said ''this is more interesting than TV''. he''s right. he''s the silent observer of campus romance. unpaid historian.',
  'campus_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 680)::int
FROM colleges c WHERE c.short_name = 'RVCE' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Stray dog has student ID. Attends convocation every year. Hasn''t graduated. Permanent student.',
  'campus dog. name: bobby. been here since 2015. someone made him an ID card as joke. photo laminated. roll number assigned. he ATTENDS convocation. every year. sits in the crowd. they tried removing him once. students protested. ''bobby has more attendance than half of us''. he stays. they gave him official ''campus security'' designation now. unpaid. but official. bobby has been in more group photos than actual students. he has seen 5 batches come and go. he remains. eternal. immortal. the truest student. never graduates. always present.',
  'campus_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 810)::int
FROM colleges c WHERE c.short_name = 'JNTUH' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Canteen aunty knows more about students than placement cell. Better network too.',
  'rani aunty. canteen. 20 years of service. she knows EVERYONE. their orders. their birthdays. their relationship status. their exam schedule. someone asked her for placement help. she connected him with an alumnus. HE GOT PLACED. ₹12 LPA. through canteen aunty''s network. placement cell success rate: 68%. rani aunty success rate: 100% (sample size: 3, but still). she gives credit to broke students. attends student weddings. sends birthday wishes. she is the institution. buildings change. principals change. rani aunty remains. we protect her at all costs.',
  'campus_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 760)::int
FROM colleges c WHERE c.short_name = 'AIT Blr' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'WiFi so bad, students built secret mesh network. IT department can''t find it. We won.',
  'official wifi: 0.3 mbps. ₹2 lakh fees. 0.3 mbps. someone got angry enough. built mesh network. old routers. hotspots. complex system. called it ''ScienceNet''. 10x faster than official. IT department noticed bandwidth usage patterns were weird. couldn''t find source. WE HID IT IN PLAIN SIGHT. router disguised as textbook on shelf. hotspot in fake plant. they looked for weeks. gave up. ScienceNet still runs. new students get inducted. it''s tradition now. guerrilla internet warfare. we are the resistance. they are the lag. we will not be buffered.',
  'campus_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 870)::int
FROM colleges c WHERE c.short_name = 'IISc' LIMIT 1;

-- ===============================
-- OTHER / WILD CARDS (10 stories)
-- ===============================

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Submitted ChatGPT assignment. Prof gave A+. It was his question paper from last year.',
  'lazy. deadline pressure. asked ChatGPT to write assignment. submitted without checking properly. got A+. SUSPICIOUS. professors don''t give A+ easily. checked the content. ChatGPT had basically rewritten LAST YEAR''S QUESTION PAPER. the prof was using the same questions. for years. ChatGPT had been trained on previous submissions probably. i accidentally exposed his recycled questions by submitting recycled AI answers. he couldn''t fail me without admitting his papers are recycled. i accidentally played 4D chess. didn''t even know i was playing. sometimes luck > skill.',
  'other',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 790)::int
FROM colleges c WHERE c.short_name = 'VIT' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Principal''s speech so boring, crow flew into auditorium and left. Even birds have standards.',
  'annual day. compulsory attendance. principal speaking about ''excellence'' and ''vision'' for 90 minutes. 30 minutes in: crow flew into auditorium. everyone excited. distraction. crow sat on speaker. listened for 5 seconds. FLEW OUT. deliberately. the exit was dramatic. crow preferred outside. students cheered. principal thought we were cheering for him. continued another hour. the crow never returned. it knew. animals can sense things. that crow sensed boredom on a molecular level. we should have followed it. we couldn''t. attendance was mandatory. crow was free. we were not.',
  'other',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 650)::int
FROM colleges c WHERE c.short_name = 'JNTUH' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Library has more students sleeping than reading. We call it ''community nap time''.',
  'library. supposed to be for studying. actually: world''s largest hostel extension. at any given time: 60% sleeping on books. 30% on phones. 10% actually reading. that 10% are usually exam eve. we''ve accepted this. librarian has accepted this. she dims lights at 2pm for ''optimal studying conditions''. translation: nap time lighting. comfortable chairs are always taken. by sleepers. we''ve developed a rotation system. ''wake me up for your turn''. communal sleeping. this is education. this is rest. this is ₹40,000/year tuition for professional napping facilities.',
  'other',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 580)::int
FROM colleges c WHERE c.short_name = 'Christ' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Fire extinguisher expired in 2012. Still on wall. ''Safety First'' poster next to it.',
  'safety audit was happening. preparing for AICTE visit. someone noticed fire extinguisher. expiry date: 2012. it was 2024. 12 YEARS EXPIRED. right next to it: poster saying ''SAFETY FIRST''. the irony. we took photos. submitted to safety committee. they replaced it. with another expired one. 2019 this time. ''improvement''. we gave up. if fire happens, we run. no faith in extinguisher. no faith in system. but the poster remains. ''SAFETY FIRST''. inspiring. meaningless. beautiful. this is infrastructure. this is india. this is fine.',
  'other',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 620)::int
FROM colleges c WHERE c.short_name = 'MLRIT' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Management sends motivational texts at 6am daily. I have received 743. Read 0.',
  '6:00am. every. single. day. text from college management. ''Good morning! Today is a new opportunity to shine. Remember: YOUR FUTURE IS IN YOUR HANDS! — College Management''. i have received 743 of these. i have read 0 since week 2. my phone auto-files them now. ''motivational spam'' folder. my mother saw my inbox once. thought i was in a cult. i showed her the college brochure. she agreed it was possible. the texts continue. they will continue after i graduate. they will continue after i die. my children will receive them. generational motivation. unwanted. persistent. eternal.',
  'other',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 400 + 700)::int
FROM colleges c WHERE c.short_name = 'REVA' LIMIT 1;
