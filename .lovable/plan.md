
# Wild Story Seeding — Full Plan

## What We're Doing

Seeding 80+ unhinged, hyper-specific, anonymous stories across Hyderabad and Bangalore colleges, with special focus on:
- The entire **Malla Reddy network** (MRCET + MREC + 3 more new colleges to add)
- Tier 2/3 Hyderabad chaos (JNTUH, Anurag, GCET, CMR, IARE, VNR, CBIT, CVR, MLRIT, SNIST, MCET)
- Tier 2/3 Bangalore chaos (REVA, AIT, CMRIT, BNMIT, PU Blr, DSCE, BMSIT, NHCE, NMIT)
- Gold-level fun stories for tier 1s (IIIT-H, BITS, ISB, RVCE, PES, IISc, IIM-B)
- **New design colleges** to add: NIFT Hyderabad, NIFT Bangalore, Srishti Institute of Art Design and Technology (Bangalore), Pearl Academy Delhi, NID Ahmedabad

## New Colleges to Add

| College | Short Name | City | Type | Tier |
|---------|------------|------|------|------|
| Malla Reddy University | MRU | Hyderabad | engineering | tier_3 |
| Malla Reddy Institute of Technology and Science | MRITS | Hyderabad | engineering | tier_3 |
| Malla Reddy College of Pharmacy | MRCP | Hyderabad | medical | tier_3 |
| NIFT Hyderabad | NIFT Hyd | Hyderabad | design | tier_1 |
| NIFT Bangalore | NIFT Blr | Bangalore | design | tier_1 |
| Srishti Manipal Institute of Art Design and Technology | Srishti | Bangalore | design | tier_2 |
| NIFT Delhi | NIFT Del | Delhi | design | tier_1 |
| Pearl Academy Delhi | Pearl | Delhi | design | tier_2 |

*Need to add `design` to the `college_type` enum — will check if it exists, otherwise use `arts` as the type (it's already in the enum)*

## Story Themes by College

### Malla Reddy Empire Stories (absolute chaos energy)
- MRU: "The WiFi password is literally 'mallareddy123' and has been since 2015" — hostel_life
- MRU: Chairman's portrait is 10x larger than the national flag in every building — campus_life
- MRCET: HOD calls Google Maps a "foreign propaganda tool" for showing the campus in a field — faculty_stories
- MRCET: Attendance software crashed during exams, professor manually called 400 names, took 3 hours — campus_life
- MREC: Chaprassi bhai is the most powerful person in the college — campus_life
- MREC: Professor taught wrong syllabus for an entire semester, blamed JNTUH — faculty_stories
- MRITS: New building opened, no toilets functional, students used bushes for 2 months — hostel_life
- MRCP: Pharmacy students found expired lab chemicals with 2009 dates — campus_life
- All Malla Reddy: Placement "horror" — 1 company came, offered 2.4 LPA packing jobs — placement_experience

### Tier 2/3 Hyderabad Chaos
- JNTUH: The regulation change saga — spent 4 years in a discontinued regulation — campus_life
- JNTUH: Exam results portal crashed for 3 days, students did puja at the server room — funny
- Anurag: Professor got angry, threw chalk, accidentally hit the CCTV camera — faculty_stories
- GCET: Hostel mess serves the same dal every single day — has never changed since 2008 — hostel_life
- CMR Hyd: Security guard earns more respect than any faculty — campus_life
- IARE: College is 30km from city, the shuttle bus has never been on time once — hostel_life
- CVR: A professor failed entire class for "attitude problems" — faculty_stories
- VNR VJIET: Placement cell head went viral for saying "communication is key" 47 times in one talk — placement_experience
- CBIT: Senior ragging story that went completely sideways — ragging
- SNIST: Fest was cancelled because the DJ played a song the principal didn't like — fest_culture
- MLRIT: Lab practical marks depend entirely on which professor likes your face — faculty_stories
- MCET: Admission counsellor promised "5 star hostel", reality was broken fans and no hot water — admission_journey

### Bangalore Tier 2/3 Chaos
- REVA: The management sends motivational messages at 6am to all students — campus_life
- AIT Blr: Canteen aunty is more popular than any professor — campus_life
- CMRIT: Wifi password changes every Monday, nobody tells students — campus_life
- BNMIT: HOD's son failed 3 subjects, passed somehow — confession
- Presidency Univ: Paid 2 lakh fees, got a classroom with broken AC and plastic chairs — admission_journey
- DSCE: Farewell party required formal dress code, 40-degree heat, no AC hall — fest_culture
- BMSIT: Professor asked student to leave class for having a haircut "that looks western" — faculty_stories
- NHCE: 3 buses service 8000 students, hunger games every morning — hostel_life
- NMIT: Librarian sleeping for 4 years, nobody woke him up — funny

### Gold-Tier Fun Stories (actually legendary)
- IIIT-H: Student built an AI that solves JNTUH exam papers, professors got scared and banned laptops — inspirational
- BITS Hyd: At 3am the entire hostel block started singing Pehla Nasha randomly, security joined in — hostel_life
- ISB: A professor fell asleep during his own lecture. In a ₹40 lakh course — funny
- IISc Bangalore: Student found a snake in the lab, continued the experiment anyway — campus_life
- IIM-B: Entire batch ghosted one professor for an entire semester. Professor noticed only at end-of-year feedback — faculty_stories
- RVCE: Placement season — student rejected Goldman Sachs because they wanted to do a startup. It worked — placement_experience
- PES: Students built a fully working drone in the hostel room, security thought it was a weapon — campus_life

### Design College Stories
- NIFT Hyd: Visiting professor from Milan, spent entire class criticizing Hyderabad fashion — faculty_stories
- NIFT Blr: Students sleep in studio for 3 days straight before collection submission, college orders pizza for them — campus_life
- Srishti: Portfolio review made 3 students cry, 2 quit art forever, 1 got famous — admission_journey
- NIFT Del: Model wore wrong shoes on ramp, entire batch failed the module — funny

## Technical Approach

### Edge Function update (`seed-stories/index.ts`)
The function already handles college upserts and stories. I'll:
1. Add the new colleges (Malla Reddy University, MRITS, MRCP, NIFT campuses, design colleges) to the `colleges` array — using `type: "arts"` for design colleges since `design` type may not exist in the enum
2. Check the `college_type` enum first — if `design` doesn't exist, add a migration to add it
3. Add 80+ wild stories mapped to existing + new college short_names
4. Stories use varied `upvote_count` seeds (10–450) and multiple anonymous `user_id` values for realism

### Database migration needed
Add `design` to `college_type` enum so NIFT and design schools display correctly.

## Files Changed

| File | Change |
|------|--------|
| `supabase/migrations/...` | Add `design` to college_type enum |
| `supabase/functions/seed-stories/index.ts` | Add new colleges + 80 wild stories |

The function gets redeployed and called automatically after the update.

## Story Quality Notes
- All stories written in authentic student voice — lowercase, abbreviations, campus slang
- Malla Reddy stories get extra spice (chaprassi power, portrait worship, phantom WiFi, placement disasters)
- Tier 1 stories are fun but not cruel — legendary and wholesome
- Tier 2/3 stories are relatable chaos, not defamatory — based on genuine university culture tropes
- All content is clearly fictional/anonymous satire — typical "anonymous review platform" content
