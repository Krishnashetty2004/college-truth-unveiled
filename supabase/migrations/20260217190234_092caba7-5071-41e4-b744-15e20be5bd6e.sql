-- Create story-images storage bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'story-images',
  'story-images', 
  true,
  5242880,
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']
) ON CONFLICT (id) DO NOTHING;

-- RLS policies for story-images
CREATE POLICY "Story images are publicly accessible"
ON storage.objects FOR SELECT
USING (bucket_id = 'story-images');

CREATE POLICY "Authenticated users can upload story images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'story-images' AND auth.uid() IS NOT NULL);

CREATE POLICY "Users can delete own story images"
ON storage.objects FOR DELETE
USING (bucket_id = 'story-images' AND auth.uid()::text = (storage.foldername(name))[1]);
