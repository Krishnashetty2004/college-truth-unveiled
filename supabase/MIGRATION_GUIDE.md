# Migrate to Your Own Supabase Project

## Step 1: Create a New Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Note down:
   - **Project URL**: `https://YOUR_PROJECT_REF.supabase.co`
   - **Anon Key**: Found in Settings → API
   - **Service Role Key**: Found in Settings → API (keep secret!)

## Step 2: Run the Database Migration

Go to **SQL Editor** in your Supabase dashboard and run the contents of:
`supabase/migrations/full_schema.sql`

This creates all tables, enums, functions, triggers, and RLS policies.

## Step 3: Create Storage Buckets

In **Storage** section, create these buckets:

1. **story-images** (Public)
   - Click "New Bucket" → Name: `story-images` → Check "Public bucket"

2. **review-images** (Public)
   - Click "New Bucket" → Name: `review-images` → Check "Public bucket"

### Storage Policies (run in SQL Editor):

```sql
-- story-images policies
CREATE POLICY "Public read story images" ON storage.objects
  FOR SELECT USING (bucket_id = 'story-images');

CREATE POLICY "Authenticated upload story images" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'story-images' AND auth.role() = 'authenticated');

CREATE POLICY "Users delete own story images" ON storage.objects
  FOR DELETE USING (bucket_id = 'story-images' AND auth.uid()::text = (storage.foldername(name))[1]);

-- review-images policies
CREATE POLICY "Public read review images" ON storage.objects
  FOR SELECT USING (bucket_id = 'review-images');

CREATE POLICY "Authenticated upload review images" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'review-images' AND auth.role() = 'authenticated');

CREATE POLICY "Users delete own review images" ON storage.objects
  FOR DELETE USING (bucket_id = 'review-images' AND auth.uid()::text = (storage.foldername(name))[1]);
```

## Step 4: Configure Authentication

1. Go to **Authentication** → **Providers** → **Google**
2. Enable Google and add:
   - Client ID (from Google Cloud Console)
   - Client Secret

3. In **Authentication** → **URL Configuration**:
   - Site URL: `https://your-domain.com` (or `http://localhost:5173` for dev)
   - Redirect URLs: Add your domain + `/auth`

4. In **Google Cloud Console**:
   - Add `https://YOUR_PROJECT_REF.supabase.co/auth/v1/callback` to authorized redirect URIs

## Step 5: Update Environment Variables

Create/update `.env`:

```env
VITE_SUPABASE_URL="https://YOUR_PROJECT_REF.supabase.co"
VITE_SUPABASE_PUBLISHABLE_KEY="your-anon-key"
```

## Step 6: Deploy Edge Functions (Optional)

If you want AI moderation, deploy the edge functions:

```bash
supabase link --project-ref YOUR_PROJECT_REF
supabase functions deploy moderate-content
supabase functions deploy seed-stories
```

**Note:** The `moderate-content` function uses Lovable's AI gateway. You'll need to replace it with your own AI provider (OpenAI, Google AI, etc.) or remove the AI moderation.

## Step 7: Seed Initial Data (Optional)

Run the seed-stories function to populate colleges:

```bash
curl -X POST https://YOUR_PROJECT_REF.supabase.co/functions/v1/seed-stories \
  -H "Authorization: Bearer YOUR_ANON_KEY" \
  -H "Content-Type: application/json"
```

## Verification Checklist

- [ ] All tables created (colleges, reviews, stories, etc.)
- [ ] Storage buckets created with public access
- [ ] Google OAuth working
- [ ] Environment variables updated
- [ ] App connects successfully
