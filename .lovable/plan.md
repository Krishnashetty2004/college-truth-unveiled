
# Complete App — Full Plan

## Current State Audit

### What Works Well
- College directory with filters, pagination, URL params
- College detail page with ratings, reviews, stories, Write Review links
- Stories feed with sorting, category filtering, voting, college links
- Story detail with threaded comments, voting, anonymous aliases
- Write Review form (auth-guarded, AI moderation triggered)
- Write Professor Review form (auth-guarded)
- Global search dialog (FTS via `search_all` RPC)
- Auth page (Google OAuth)
- Rankings page (all 13 categories)
- Compare page (radar chart + table)
- AI moderation edge function

### What's Missing / Broken

**Critical gaps:**
1. No Professor detail page — professors are only in search results and reviews, but `/professors/:id` doesn't exist, nor does a professors list on CollegeDetail
2. No user profile page — users can't see their own reviews/stories or update their profile (college, course, year)
3. Terms and Privacy pages are linked in footer but 404
4. Navbar still shows "Sign In" when user is already logged in — no logout, no profile link
5. No data seeded — Rankings/Compare pages are empty without reviews, Stories page is empty without stories
6. `CollegeDetail` stories section doesn't link individual story cards to `/stories/:id`
7. `Colleges` page reads `?city=` from URL param correctly, but Index page CTA "Write a Review" links to `/auth` instead of `/colleges` (minor)
8. No review triggers to auto-update `total_reviews` and `avg_*` on college when a review is published — reviews submitted stay `under_review` and never update college aggregate stats

**Backend gaps:**
9. No database triggers to aggregate review scores into college averages — reviews are submitted but college `avg_placement`, `total_reviews` etc. are never updated
10. No `professor_reviews` aggregate trigger — `professors.total_reviews`, `avg_difficulty`, `would_take_again_pct`, `ai_overall_score` never update
11. `moderate-content` edge function sets review status to `published` or `held`, but colleges and professors aggregates still aren't recomputed after a review is published

---

## Implementation Plan

### Phase 1: Database — Aggregate Triggers (Backend Completion)

**Migration 1: College review aggregation trigger**

When a review's status changes to `published`, recompute all `avg_*` columns and `total_reviews` on the college row:

```sql
CREATE OR REPLACE FUNCTION update_college_aggregates()
RETURNS trigger AS $$
BEGIN
  UPDATE colleges SET
    total_reviews = (SELECT COUNT(*) FROM reviews WHERE college_id = NEW.college_id AND status = 'published'),
    avg_placement = (SELECT AVG(rating_placement) FROM reviews WHERE college_id = NEW.college_id AND status = 'published'),
    avg_faculty = (SELECT AVG(rating_faculty) FROM reviews WHERE college_id = NEW.college_id AND status = 'published'),
    avg_curriculum = (SELECT AVG(rating_curriculum) FROM reviews WHERE college_id = NEW.college_id AND status = 'published'),
    avg_hostel = (SELECT AVG(rating_hostel) FROM reviews WHERE college_id = NEW.college_id AND status = 'published'),
    avg_food = (SELECT AVG(rating_food) FROM reviews WHERE college_id = NEW.college_id AND status = 'published'),
    avg_wifi = (SELECT AVG(rating_wifi) FROM reviews WHERE college_id = NEW.college_id AND status = 'published'),
    avg_infrastructure = (SELECT AVG(rating_infrastructure) FROM reviews WHERE college_id = NEW.college_id AND status = 'published'),
    avg_campus_life = (SELECT AVG(rating_campus_life) FROM reviews WHERE college_id = NEW.college_id AND status = 'published'),
    avg_safety = (SELECT AVG(rating_safety) FROM reviews WHERE college_id = NEW.college_id AND status = 'published'),
    avg_location = (SELECT AVG(rating_location) FROM reviews WHERE college_id = NEW.college_id AND status = 'published'),
    avg_admin = (SELECT AVG(rating_admin) FROM reviews WHERE college_id = NEW.college_id AND status = 'published'),
    avg_value_for_money = (SELECT AVG(rating_value_for_money) FROM reviews WHERE college_id = NEW.college_id AND status = 'published'),
    ai_overall_score = (SELECT AVG(overall_rating) FROM reviews WHERE college_id = NEW.college_id AND status = 'published')
  WHERE id = NEW.college_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

CREATE TRIGGER trg_update_college_aggregates
AFTER INSERT OR UPDATE OF status ON reviews
FOR EACH ROW EXECUTE FUNCTION update_college_aggregates();
```

**Migration 2: Professor review aggregation trigger**

```sql
CREATE OR REPLACE FUNCTION update_professor_aggregates()
RETURNS trigger AS $$
BEGIN
  UPDATE professors SET
    total_reviews = (SELECT COUNT(*) FROM professor_reviews WHERE professor_id = NEW.professor_id AND status = 'published'),
    avg_difficulty = (SELECT AVG(difficulty_level) FROM professor_reviews WHERE professor_id = NEW.professor_id AND status = 'published'),
    would_take_again_pct = (SELECT AVG(CASE WHEN would_take_again THEN 100.0 ELSE 0.0 END) FROM professor_reviews WHERE professor_id = NEW.professor_id AND status = 'published'),
    ai_overall_score = (SELECT AVG(overall_rating) FROM professor_reviews WHERE professor_id = NEW.professor_id AND status = 'published')
  WHERE id = NEW.professor_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

CREATE TRIGGER trg_update_professor_aggregates
AFTER INSERT OR UPDATE OF status ON professor_reviews
FOR EACH ROW EXECUTE FUNCTION update_professor_aggregates();
```

Also update the `moderate-content` edge function to set reviews to `published` status by default (currently it might set `under_review`) so the trigger fires and college stats update.

---

### Phase 2: Professor Detail Page

**New page: `src/pages/ProfessorDetail.tsx`**
- Route: `/professors/:id`
- Fetches professor + their published reviews
- Shows: name, department, college (linked), `total_reviews`, `avg_difficulty`, `would_take_again_pct`, `ai_overall_score`
- Rating bars for 5 dimensions
- Tag cloud (most common tags from reviews)
- List of published professor reviews with anonymous alias, course, year, would take again, tags, comment
- "Rate this Professor" button → `/professors/:id/review`

**Update `CollegeDetail.tsx`:**
- Add a "Faculty" section listing professors at this college (query `professors` filtered by `college_id`)
- Each professor card links to `/professors/:id`
- Shows their score, department, review count

**Update `App.tsx`:**
- Add route `<Route path="/professors/:id" element={<ProfessorDetail />} />`

---

### Phase 3: User Profile & Auth-Aware Navbar

**New page: `src/pages/Profile.tsx`**
- Route: `/profile`
- Shows user's anonymous alias, avatar seed
- Editable profile: college (select from list), course, department, admission year, graduation year
- "My Reviews" section: list of reviews this user submitted (query `reviews` with `user_id = auth.uid()`)
- "My Stories" section: list of stories this user submitted
- Sign Out button

**Update `Navbar.tsx`:**
- Listen to auth state (`supabase.auth.onAuthStateChange`)
- When logged in: replace "Sign In" with user avatar/alias + link to `/profile`, add logout option
- When logged out: show "Sign In"

---

### Phase 4: Missing Static Pages

**New page: `src/pages/Terms.tsx`**
- Route: `/terms`
- Simple terms of service page with standard content relevant to an anonymous review platform

**New page: `src/pages/Privacy.tsx`**
- Route: `/privacy`
- Privacy policy: what data is collected, how anonymous aliases work, no real identity exposure

**Update `App.tsx`:** Add routes for both.

---

### Phase 5: Story Cards — Fix Navigation

**Update `CollegeDetail.tsx` story cards:**
- Wrap story title and card in `<Link to={`/stories/${story.id}`}>` so they're clickable

---

### Phase 6: Seed Sample Data

**Seed colleges** (insert via migration or edge function using service role):
- 20+ colleges across Hyderabad, Bangalore, Delhi, Chennai — spread across tier_1, tier_2, tier_3, engineering, management, arts types

**Seed stories** (call existing `seed-stories` edge function or enhance it):
- 20+ wild stories spread across different colleges and categories
- Varied upvote counts so sorting is meaningful

---

### Phase 7: Minor Polish

- `Index.tsx` CTA footer "Write a Review" link: change from `/auth` to `/colleges` so users explore first
- `Index.tsx` "Community" footer: add link to `/stories`
- `Index.tsx` CTA button "Write a Review — It's Anonymous": link to `/colleges` instead of `/auth`
- `CollegeDetail.tsx` stories "View all": pass `?college=id` filter param to `/stories` page so it pre-filters

---

## File Summary

| File | Action |
|------|--------|
| `supabase/migrations/...` | Create aggregate triggers for reviews → colleges and professor_reviews → professors |
| `supabase/functions/moderate-content/index.ts` | Ensure reviews are set to `published` after passing AI check |
| `src/pages/ProfessorDetail.tsx` | Create new professor detail page |
| `src/pages/Profile.tsx` | Create user profile + my reviews/stories page |
| `src/pages/Terms.tsx` | Create terms of service page |
| `src/pages/Privacy.tsx` | Create privacy policy page |
| `src/components/Navbar.tsx` | Auth-aware: show profile/logout when signed in |
| `src/pages/CollegeDetail.tsx` | Add professors list section; fix story card links |
| `src/pages/Index.tsx` | Fix CTA links, add Stories to footer |
| `src/App.tsx` | Add routes for ProfessorDetail, Profile, Terms, Privacy |
| `supabase/functions/seed-stories/index.ts` | Enhance to seed 20+ colleges + stories |

---

## Technical Notes

- Aggregate triggers use `SECURITY DEFINER` to bypass RLS when updating college/professor rows (only admins can normally UPDATE colleges)
- Professor detail page uses the existing `get_anonymous_alias` RPC for anonymous aliases on reviews
- Profile page uses the existing `profiles` table — no new tables needed
- Auth-aware Navbar uses `supabase.auth.onAuthStateChange` listener — same pattern as Stories.tsx
- All new pages maintain the `pl-14` left padding pattern for the fixed sidebar navbar
- Seed data uses the existing `SUPABASE_SERVICE_ROLE_KEY` secret already configured
