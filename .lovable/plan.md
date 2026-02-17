
# Three Features: Review Image Upload + Story Feed Thumbnails + Share Buttons

## Overview

Three distinct improvements to add simultaneously:

1. **Image upload on college reviews** — attach up to 5 photos (hostel, mess, classroom) when writing a review, stored in the existing `review-images` bucket and tracked in the `review_images` table.
2. **Story image thumbnails in the feed** — fetch the first image for each story from the `story-images` storage bucket and show it as a thumbnail on the Stories list page.
3. **WhatsApp + Twitter/X share buttons** — on each story card in the feed, two icon buttons that open pre-filled share links.

---

## Feature 1 — Review Image Upload in `WriteReview.tsx`

The `reviews` table already has a `has_images` boolean column and the `review_images` table exists with the correct schema (`review_id`, `image_url`, `display_order`, `image_type`). The `review-images` storage bucket is already public. No schema changes needed.

**Implementation in `src/pages/WriteReview.tsx`:**

- Add state: `images: File[]`, `imagePreviews: string[]`, `fileInputRef`
- Add an "Add Photos" section below the Advice field — same pattern as `CreateStoryDialog.tsx` (max 5 images, 80×80 preview tiles with ×remove button, dashed add button)
- In `mutation.mutationFn`, after the review is inserted and we have `data.id`:
  1. Loop through `images`, upload each to `review-images` bucket at path `{user.id}/{data.id}/{timestamp}.{ext}`
  2. For each successful upload, get the public URL via `supabase.storage.from("review-images").getPublicUrl(path)`
  3. Insert a row into `review_images` table: `{ review_id: data.id, image_url, display_order: i, image_type: "other" }`
  4. If any images uploaded successfully, do `UPDATE reviews SET has_images = true WHERE id = data.id`

**UI details:**
- Accept: `image/jpeg,image/png,image/webp`
- Max 5 files (matches the memory note: "up to 5 proof images per review")
- Shown between the Advice textarea and the Submit button
- Label: "Add Photos (optional, max 5) — hostel, mess, classrooms etc"

---

## Feature 2 — Story Image Thumbnails in the Feed

The `story-images` bucket stores images at path `{userId}/{storyId}/{timestamp}.{ext}`. There is no column in `college_stories` tracking image URLs. The current story query fetches all stories at once.

**Approach — Batch fetch story image paths client-side:**

After the stories list loads, make a single batch call to `supabase.storage.from("story-images").list()` for each story that has images. However, since the bucket path includes `userId/storyId/`, we can't batch-list without knowing user IDs.

**Better approach — Add a `thumbnail_url` column to `college_stories`:**

When a story is created and images are uploaded in `CreateStoryDialog.tsx`, save the first image's public URL into a new `thumbnail_url` nullable text column on `college_stories`. This is clean, efficient, and avoids N+1 storage API calls on every feed render.

**Database migration:**
```sql
ALTER TABLE public.college_stories ADD COLUMN IF NOT EXISTS thumbnail_url text;
```

**CreateStoryDialog.tsx update:**
- After uploading the first image, get its public URL
- Update the story row: `UPDATE college_stories SET thumbnail_url = <url> WHERE id = data.id`

**StoryCard in `Stories.tsx` update:**
- If `story.thumbnail_url` exists, show a `64×64` rounded image thumbnail to the right of the text content, inside the card
- The thumbnail links to the story detail page
- On mobile it shows full-width below the text as a thin strip

**Type:**
- `StoryWithCollege` type gets the new `thumbnail_url` field automatically once the migration runs and types regenerate

---

## Feature 3 — WhatsApp + Twitter/X Share Buttons on Story Cards

**Implementation in `StoryCard` component in `Stories.tsx`:**

Add two icon buttons at the end of the bottom action bar (after comments link):

```
[ ↑ 42 ↓ ]  [ 💬 12 comments ]  [ WhatsApp icon ]  [ X/Twitter icon ]
```

**Share URLs:**
- **WhatsApp:** `https://wa.me/?text={encodeURIComponent(text + url)}`
  - Text: `"${story.title} — RateMyCollege\n${window.location.origin}/stories/${story.id}"`
- **Twitter/X:** `https://twitter.com/intent/tweet?text={encodeURIComponent(title)}&url={encodeURIComponent(url)}`

Both open in `target="_blank" rel="noopener noreferrer"`.

**Icons:** Use lucide-react's `Share2` icon for WhatsApp (green tint) and a simple SVG X logo for Twitter since lucide doesn't have a Twitter/X icon. Alternative: use text labels "WA" and "𝕏" as small badges.

**Practical approach — use text labels to keep it simple and recognizable:**
- WhatsApp: green `<a>` with "📱 Share" or just a WhatsApp SVG inline
- Twitter: `𝕏` character in a link

---

## Files Changed

| File | Change |
|------|--------|
| `supabase/migrations/...` | Add `thumbnail_url` column to `college_stories` |
| `src/pages/WriteReview.tsx` | Add image upload UI + upload logic to `review-images` bucket + insert into `review_images` table |
| `src/pages/Stories.tsx` | Show thumbnail in `StoryCard` + add WhatsApp/Twitter share buttons |
| `src/components/CreateStoryDialog.tsx` | After first image upload, save public URL into `thumbnail_url` on the story row |

---

## Technical Notes

- No new storage buckets needed — `review-images` and `story-images` already exist and are public
- The `review_images` table RLS already allows authenticated users to insert images for their own reviews
- Share buttons use native `window.open` / `<a href>` — no library needed
- The `thumbnail_url` migration is additive (nullable column) — zero risk to existing data
- WhatsApp deep links work on both mobile (opens app) and desktop (opens web.whatsapp.com)
