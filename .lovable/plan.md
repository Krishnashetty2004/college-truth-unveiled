

# Wild Stories, Functional Voting, and College Connections

## What We're Building

Three major pieces to make Stories come alive:

---

## 1. Seed 20+ Wild Sample Stories

Insert sample stories directly into the database using an edge function (since RLS requires `user_id = auth.uid()` for inserts, we'll use the service role key in an edge function to bypass RLS for seeding).

Stories will be spread across colleges (IIIT-H, BITS Hyd, JNTUH, OU, CBIT, VNR VJIET, VCE, etc.) and categories. Examples:

- **Confession**: "My professor caught me and my ex making out in the server room at IIIT-H. He just said 'at least close the door' and walked away."
- **Faculty Stories**: "Our JNTUH prof literally copies from YouTube tutorials during class. One time his WiFi died mid-lecture and he just... left."
- **Placement Horror**: "Company came to BITS Hyd, asked us to build a full-stack app in 2 hours. HR was on Tinder the whole time."
- **Hostel Life**: "My roommate at OU brought his girlfriend to our hostel. She stayed for 3 weeks. The warden thought she was a new student."
- **Funny**: "Someone released a chicken in the CBIT exam hall. The invigilator chased it for 20 minutes. We all passed that exam."
- **Campus Life**: "The VNR fest was so bad, the chief guest left mid-speech. The DJ played the same 3 songs on loop."
- **Ragging**: "Seniors at MRCET made freshers propose to a statue. Campus guard recorded it and posted on YouTube."
- **Horror**: "The old hostel block at CVR is genuinely haunted. Three people saw the same woman in white. I'm not even joking."

...and 12+ more across all categories, with varied upvote counts (0-200+) to make sorting work.

---

## 2. Functional Upvote/Downvote System

Currently the vote buttons are decorative. We'll make them real:

- **How it works**: Use the existing `helpful_votes` table (has `story_id` column) to track votes
- **Upvote**: Insert a row into `helpful_votes` with `story_id` set. Increment `upvote_count` on the story
- **Downvote**: Remove the vote (or don't upvote). We'll keep it simple -- upvote toggle (tap to upvote, tap again to remove)
- **Auth check**: If user isn't logged in, clicking vote redirects to `/auth`
- **Visual feedback**: Upvote arrow turns filled/colored when user has voted
- **Optimistic updates**: Vote count updates instantly, rolls back on error

### Database changes needed:
- Create a database function `toggle_story_vote` that atomically inserts/deletes the vote AND updates `upvote_count` on the story (to avoid race conditions)
- Add a unique constraint on `helpful_votes(user_id, story_id)` to prevent double voting

---

## 3. College-Story Connection in UI

Stories already have `college_id` linking to `colleges` table (foreign key exists). We'll enhance the connection:

- **On Stories page**: College name shown as a clickable link to `/colleges/:id`
- **On College Detail page**: Add a "Stories" tab/section showing stories from that college
- **Story cards**: Show college badge that links to the college page

---

## Technical Details

### Step 1: Database Migration
```sql
-- Unique constraint to prevent double voting
ALTER TABLE helpful_votes 
ADD CONSTRAINT helpful_votes_user_story_unique 
UNIQUE (user_id, story_id);

-- Atomic vote toggle function
CREATE OR REPLACE FUNCTION toggle_story_vote(p_story_id uuid, p_user_id uuid)
RETURNS json AS $$
DECLARE
  existing_vote_id uuid;
  new_count integer;
BEGIN
  SELECT id INTO existing_vote_id 
  FROM helpful_votes 
  WHERE story_id = p_story_id AND user_id = p_user_id;
  
  IF existing_vote_id IS NOT NULL THEN
    DELETE FROM helpful_votes WHERE id = existing_vote_id;
    UPDATE college_stories SET upvote_count = GREATEST(upvote_count - 1, 0) 
    WHERE id = p_story_id RETURNING upvote_count INTO new_count;
    RETURN json_build_object('voted', false, 'count', new_count);
  ELSE
    INSERT INTO helpful_votes (user_id, story_id) VALUES (p_user_id, p_story_id);
    UPDATE college_stories SET upvote_count = upvote_count + 1 
    WHERE id = p_story_id RETURNING upvote_count INTO new_count;
    RETURN json_build_object('voted', true, 'count', new_count);
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

### Step 2: Seed Edge Function
Create `supabase/functions/seed-stories/index.ts` that inserts 20+ wild stories using the service role key. One-time use, call it once to populate.

### Step 3: Update Stories.tsx
- Add auth state tracking (`supabase.auth.getUser()`)
- Fetch user's existing votes on visible stories
- Wire up vote button to call `toggle_story_vote` RPC
- Make college name a `<Link>` to `/colleges/:id`
- Add optimistic UI updates with react-query mutation

### Step 4: Update CollegeDetail.tsx
- Add a "Stories" section at the bottom
- Query `college_stories` filtered by `college_id`
- Show latest 5 stories with "View all" link to Stories page filtered by college

### Files to Create/Modify
- **Create**: `supabase/functions/seed-stories/index.ts` (seed data)
- **Modify**: `src/pages/Stories.tsx` (voting, auth, college links)
- **Modify**: `src/pages/CollegeDetail.tsx` (add stories section)
- **Migration**: Add unique constraint + vote toggle function
