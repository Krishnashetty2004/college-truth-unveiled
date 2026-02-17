
-- ============================================
-- RateMyCollege — Full Database Schema
-- ============================================

-- 1. ENUMS
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');
CREATE TYPE public.verification_tier AS ENUM ('unverified', 'self_declared', 'verified_student');
CREATE TYPE public.review_status AS ENUM ('under_review', 'published', 'held', 'rejected');
CREATE TYPE public.content_status AS ENUM ('published', 'held', 'rejected');
CREATE TYPE public.report_reason AS ENUM ('fake', 'defamatory', 'spam', 'inappropriate', 'other');
CREATE TYPE public.report_target_type AS ENUM ('review', 'story', 'story_comment', 'professor_review');
CREATE TYPE public.reviewer_type AS ENUM ('current_student', 'alumni', 'parent', 'other');
CREATE TYPE public.college_type AS ENUM ('engineering', 'medical', 'law', 'arts', 'science', 'commerce', 'management', 'pharmacy', 'architecture', 'other');
CREATE TYPE public.college_ownership AS ENUM ('government', 'private', 'deemed', 'autonomous');
CREATE TYPE public.college_tier AS ENUM ('tier_1', 'tier_2', 'tier_3');
CREATE TYPE public.professor_tag AS ENUM (
  'tough_grader', 'easy_grader', 'inspirational', 'boring',
  'reads_from_slides', 'industry_experience', 'research_focused',
  'helpful', 'unapproachable', 'clear_explanations', 'assigns_lots_of_homework',
  'test_heavy', 'extra_credit', 'flexible_deadlines'
);
CREATE TYPE public.story_category AS ENUM (
  'campus_life', 'placement_experience', 'hostel_life', 'ragging',
  'fest_culture', 'faculty_stories', 'admission_journey', 'funny',
  'horror', 'inspirational', 'confession', 'other'
);
CREATE TYPE public.image_type AS ENUM (
  'hostel', 'mess_food', 'classroom', 'library', 'campus',
  'lab', 'sports', 'washroom', 'wifi_speed', 'other'
);

-- 2. PROFILES TABLE
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  anonymous_alias TEXT NOT NULL,
  avatar_seed TEXT NOT NULL DEFAULT gen_random_uuid()::text,
  college_id UUID,
  course TEXT,
  department TEXT,
  admission_year INTEGER,
  graduation_year INTEGER,
  verification_tier public.verification_tier NOT NULL DEFAULT 'unverified',
  college_email TEXT,
  reputation_score INTEGER NOT NULL DEFAULT 0,
  review_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- 3. COLLEGES TABLE
CREATE TABLE public.colleges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  short_name TEXT,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  type public.college_type NOT NULL DEFAULT 'engineering',
  ownership public.college_ownership NOT NULL DEFAULT 'private',
  tier public.college_tier NOT NULL DEFAULT 'tier_3',
  established_year INTEGER,
  website TEXT,
  student_population INTEGER,
  ai_overall_score NUMERIC(3,1) DEFAULT 0,
  ai_summary TEXT,
  ai_pros TEXT[],
  ai_cons TEXT[],
  ai_best_for TEXT,
  ai_avoid_if TEXT,
  ai_trend TEXT DEFAULT 'Stable',
  total_reviews INTEGER NOT NULL DEFAULT 0,
  avg_placement NUMERIC(3,1) DEFAULT 0,
  avg_faculty NUMERIC(3,1) DEFAULT 0,
  avg_curriculum NUMERIC(3,1) DEFAULT 0,
  avg_hostel NUMERIC(3,1) DEFAULT 0,
  avg_food NUMERIC(3,1) DEFAULT 0,
  avg_wifi NUMERIC(3,1) DEFAULT 0,
  avg_infrastructure NUMERIC(3,1) DEFAULT 0,
  avg_campus_life NUMERIC(3,1) DEFAULT 0,
  avg_safety NUMERIC(3,1) DEFAULT 0,
  avg_location NUMERIC(3,1) DEFAULT 0,
  avg_admin NUMERIC(3,1) DEFAULT 0,
  avg_value_for_money NUMERIC(3,1) DEFAULT 0,
  seed_priority INTEGER DEFAULT 1,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.colleges ENABLE ROW LEVEL SECURITY;

-- Add FK from profiles to colleges (after colleges exists)
ALTER TABLE public.profiles ADD CONSTRAINT fk_profiles_college FOREIGN KEY (college_id) REFERENCES public.colleges(id) ON DELETE SET NULL;

-- 4. REVIEWS TABLE
CREATE TABLE public.reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  college_id UUID NOT NULL REFERENCES public.colleges(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL CHECK (char_length(content) BETWEEN 50 AND 5000),
  pros TEXT,
  cons TEXT,
  advice TEXT,
  course TEXT,
  department TEXT,
  reviewer_type public.reviewer_type NOT NULL DEFAULT 'current_student',
  admission_year INTEGER,
  graduation_year INTEGER,
  -- 12 category ratings (1-5)
  rating_placement SMALLINT CHECK (rating_placement BETWEEN 1 AND 5),
  rating_faculty SMALLINT CHECK (rating_faculty BETWEEN 1 AND 5),
  rating_curriculum SMALLINT CHECK (rating_curriculum BETWEEN 1 AND 5),
  rating_hostel SMALLINT CHECK (rating_hostel BETWEEN 1 AND 5),
  rating_food SMALLINT CHECK (rating_food BETWEEN 1 AND 5),
  rating_wifi SMALLINT CHECK (rating_wifi BETWEEN 1 AND 5),
  rating_infrastructure SMALLINT CHECK (rating_infrastructure BETWEEN 1 AND 5),
  rating_campus_life SMALLINT CHECK (rating_campus_life BETWEEN 1 AND 5),
  rating_safety SMALLINT CHECK (rating_safety BETWEEN 1 AND 5),
  rating_location SMALLINT CHECK (rating_location BETWEEN 1 AND 5),
  rating_admin SMALLINT CHECK (rating_admin BETWEEN 1 AND 5),
  rating_value_for_money SMALLINT CHECK (rating_value_for_money BETWEEN 1 AND 5),
  overall_rating NUMERIC(3,1),
  -- AI analysis fields
  ai_sentiment_score NUMERIC(4,2),
  ai_authenticity_score NUMERIC(4,2),
  ai_helpfulness_score NUMERIC(4,2),
  ai_topics TEXT[],
  ai_flag_reason TEXT,
  -- Status & engagement
  status public.review_status NOT NULL DEFAULT 'under_review',
  helpful_count INTEGER NOT NULL DEFAULT 0,
  report_count INTEGER NOT NULL DEFAULT 0,
  has_images BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- 5. REVIEW IMAGES TABLE
CREATE TABLE public.review_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  review_id UUID NOT NULL REFERENCES public.reviews(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  image_type public.image_type NOT NULL DEFAULT 'other',
  caption TEXT,
  display_order SMALLINT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.review_images ENABLE ROW LEVEL SECURITY;

-- 6. PROFESSORS TABLE
CREATE TABLE public.professors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  college_id UUID NOT NULL REFERENCES public.colleges(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  department TEXT,
  designation TEXT,
  ai_overall_score NUMERIC(3,1) DEFAULT 0,
  ai_summary TEXT,
  total_reviews INTEGER NOT NULL DEFAULT 0,
  would_take_again_pct NUMERIC(5,2) DEFAULT 0,
  avg_difficulty NUMERIC(3,1) DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.professors ENABLE ROW LEVEL SECURITY;

-- 7. PROFESSOR REVIEWS TABLE
CREATE TABLE public.professor_reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  professor_id UUID NOT NULL REFERENCES public.professors(id) ON DELETE CASCADE,
  course_taught TEXT,
  year_taken INTEGER,
  rating_teaching SMALLINT NOT NULL CHECK (rating_teaching BETWEEN 1 AND 5),
  rating_knowledge SMALLINT NOT NULL CHECK (rating_knowledge BETWEEN 1 AND 5),
  rating_approachability SMALLINT NOT NULL CHECK (rating_approachability BETWEEN 1 AND 5),
  rating_grading SMALLINT NOT NULL CHECK (rating_grading BETWEEN 1 AND 5),
  rating_punctuality SMALLINT NOT NULL CHECK (rating_punctuality BETWEEN 1 AND 5),
  overall_rating NUMERIC(3,1),
  comment TEXT CHECK (char_length(comment) BETWEEN 20 AND 2000),
  would_take_again BOOLEAN,
  difficulty_level SMALLINT CHECK (difficulty_level BETWEEN 1 AND 5),
  tags public.professor_tag[],
  status public.review_status NOT NULL DEFAULT 'under_review',
  helpful_count INTEGER NOT NULL DEFAULT 0,
  report_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.professor_reviews ENABLE ROW LEVEL SECURITY;

-- 8. COLLEGE STORIES TABLE
CREATE TABLE public.college_stories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  college_id UUID NOT NULL REFERENCES public.colleges(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL CHECK (char_length(content) BETWEEN 100 AND 10000),
  category public.story_category NOT NULL DEFAULT 'other',
  status public.content_status NOT NULL DEFAULT 'published',
  upvote_count INTEGER NOT NULL DEFAULT 0,
  comment_count INTEGER NOT NULL DEFAULT 0,
  report_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.college_stories ENABLE ROW LEVEL SECURITY;

-- 9. STORY COMMENTS TABLE
CREATE TABLE public.story_comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  story_id UUID NOT NULL REFERENCES public.college_stories(id) ON DELETE CASCADE,
  parent_comment_id UUID REFERENCES public.story_comments(id) ON DELETE CASCADE,
  content TEXT NOT NULL CHECK (char_length(content) BETWEEN 1 AND 2000),
  upvote_count INTEGER NOT NULL DEFAULT 0,
  report_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.story_comments ENABLE ROW LEVEL SECURITY;

-- 10. HELPFUL VOTES TABLE
CREATE TABLE public.helpful_votes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  review_id UUID REFERENCES public.reviews(id) ON DELETE CASCADE,
  professor_review_id UUID REFERENCES public.professor_reviews(id) ON DELETE CASCADE,
  story_id UUID REFERENCES public.college_stories(id) ON DELETE CASCADE,
  story_comment_id UUID REFERENCES public.story_comments(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  -- Ensure one vote per user per item
  CONSTRAINT one_vote_target CHECK (
    (CASE WHEN review_id IS NOT NULL THEN 1 ELSE 0 END +
     CASE WHEN professor_review_id IS NOT NULL THEN 1 ELSE 0 END +
     CASE WHEN story_id IS NOT NULL THEN 1 ELSE 0 END +
     CASE WHEN story_comment_id IS NOT NULL THEN 1 ELSE 0 END) = 1
  )
);
ALTER TABLE public.helpful_votes ENABLE ROW LEVEL SECURITY;

CREATE UNIQUE INDEX idx_helpful_votes_review ON public.helpful_votes (user_id, review_id) WHERE review_id IS NOT NULL;
CREATE UNIQUE INDEX idx_helpful_votes_prof ON public.helpful_votes (user_id, professor_review_id) WHERE professor_review_id IS NOT NULL;
CREATE UNIQUE INDEX idx_helpful_votes_story ON public.helpful_votes (user_id, story_id) WHERE story_id IS NOT NULL;
CREATE UNIQUE INDEX idx_helpful_votes_comment ON public.helpful_votes (user_id, story_comment_id) WHERE story_comment_id IS NOT NULL;

-- 11. REPORTS TABLE
CREATE TABLE public.reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  target_type public.report_target_type NOT NULL,
  target_id UUID NOT NULL,
  reason public.report_reason NOT NULL,
  details TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  resolved_by UUID REFERENCES auth.users(id),
  resolved_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.reports ENABLE ROW LEVEL SECURITY;

-- 12. USER ROLES TABLE (separate from profiles as required)
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- ============================================
-- HELPER FUNCTIONS (SECURITY DEFINER)
-- ============================================

-- Check if user has a specific role
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE sql STABLE SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Check if user is admin or moderator
CREATE OR REPLACE FUNCTION public.is_admin_or_moderator(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE sql STABLE SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role IN ('admin', 'moderator')
  )
$$;

-- Get anonymous alias for a user (never expose real identity)
CREATE OR REPLACE FUNCTION public.get_anonymous_alias(_user_id UUID)
RETURNS TEXT
LANGUAGE sql STABLE SECURITY DEFINER
SET search_path = public
AS $$
  SELECT anonymous_alias FROM public.profiles WHERE user_id = _user_id
$$;

-- Updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
DECLARE
  animals TEXT[] := ARRAY['Owl','Fox','Bear','Wolf','Eagle','Hawk','Tiger','Lion','Deer','Panda','Koala','Falcon','Raven','Phoenix','Dragon','Dolphin','Shark','Whale','Cobra','Crane'];
  adjectives TEXT[] := ARRAY['Anonymous','Silent','Brave','Swift','Bold','Clever','Wise','Fierce','Calm','Wild','Noble','Mystic','Shadow','Cosmic','Thunder','Crystal','Iron','Golden','Silver','Crimson'];
  alias TEXT;
  num INTEGER;
BEGIN
  num := floor(random() * 9000 + 1000)::integer;
  alias := adjectives[1 + floor(random() * array_length(adjectives, 1))::integer] || ' ' || animals[1 + floor(random() * array_length(animals, 1))::integer] || ' #' || num;
  
  INSERT INTO public.profiles (user_id, anonymous_alias, avatar_seed)
  VALUES (NEW.id, alias, gen_random_uuid()::text);
  
  -- Assign default 'user' role
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'user');
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Trigger for auto profile creation
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Auto-hold content when report count >= 3
CREATE OR REPLACE FUNCTION public.handle_report_threshold()
RETURNS TRIGGER AS $$
DECLARE
  cnt INTEGER;
BEGIN
  -- Count reports for this target
  SELECT COUNT(*) INTO cnt FROM public.reports
  WHERE target_type = NEW.target_type AND target_id = NEW.target_id AND status = 'pending';
  
  IF cnt >= 3 THEN
    IF NEW.target_type = 'review' THEN
      UPDATE public.reviews SET status = 'held' WHERE id = NEW.target_id;
    ELSIF NEW.target_type = 'story' THEN
      UPDATE public.college_stories SET status = 'held' WHERE id = NEW.target_id;
    ELSIF NEW.target_type = 'professor_review' THEN
      UPDATE public.professor_reviews SET status = 'held' WHERE id = NEW.target_id;
    END IF;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

CREATE TRIGGER on_report_created
  AFTER INSERT ON public.reports
  FOR EACH ROW EXECUTE FUNCTION public.handle_report_threshold();

-- Updated_at triggers for all tables
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_colleges_updated_at BEFORE UPDATE ON public.colleges FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_reviews_updated_at BEFORE UPDATE ON public.reviews FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_professors_updated_at BEFORE UPDATE ON public.professors FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_professor_reviews_updated_at BEFORE UPDATE ON public.professor_reviews FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_college_stories_updated_at BEFORE UPDATE ON public.college_stories FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_story_comments_updated_at BEFORE UPDATE ON public.story_comments FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ============================================
-- INDEXES
-- ============================================
CREATE INDEX idx_reviews_college ON public.reviews(college_id);
CREATE INDEX idx_reviews_user ON public.reviews(user_id);
CREATE INDEX idx_reviews_status ON public.reviews(status);
CREATE INDEX idx_colleges_city ON public.colleges(city);
CREATE INDEX idx_colleges_state ON public.colleges(state);
CREATE INDEX idx_colleges_type ON public.colleges(type);
CREATE INDEX idx_professors_college ON public.professors(college_id);
CREATE INDEX idx_professor_reviews_professor ON public.professor_reviews(professor_id);
CREATE INDEX idx_college_stories_college ON public.college_stories(college_id);
CREATE INDEX idx_story_comments_story ON public.story_comments(story_id);
CREATE INDEX idx_reports_target ON public.reports(target_type, target_id);

-- ============================================
-- RLS POLICIES
-- ============================================

-- PROFILES: Users see own, public view via SECURITY DEFINER functions
CREATE POLICY "Users can view own profile" ON public.profiles FOR SELECT TO authenticated USING (user_id = auth.uid());
CREATE POLICY "Admins can view all profiles" ON public.profiles FOR SELECT TO authenticated USING (public.is_admin_or_moderator(auth.uid()));
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE TO authenticated USING (user_id = auth.uid());

-- COLLEGES: Public read, admin write
CREATE POLICY "Anyone can view colleges" ON public.colleges FOR SELECT USING (true);
CREATE POLICY "Admins can insert colleges" ON public.colleges FOR INSERT TO authenticated WITH CHECK (public.is_admin_or_moderator(auth.uid()));
CREATE POLICY "Admins can update colleges" ON public.colleges FOR UPDATE TO authenticated USING (public.is_admin_or_moderator(auth.uid()));

-- REVIEWS: Complex visibility rules
CREATE POLICY "Published reviews are public" ON public.reviews FOR SELECT USING (status = 'published');
CREATE POLICY "Users see own reviews" ON public.reviews FOR SELECT TO authenticated USING (user_id = auth.uid());
CREATE POLICY "Admins see all reviews" ON public.reviews FOR SELECT TO authenticated USING (public.is_admin_or_moderator(auth.uid()));
CREATE POLICY "Auth users can create reviews" ON public.reviews FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid());
CREATE POLICY "Users can update own reviews within 24h" ON public.reviews FOR UPDATE TO authenticated USING (user_id = auth.uid() AND created_at > now() - interval '24 hours');
CREATE POLICY "Admins can update any review" ON public.reviews FOR UPDATE TO authenticated USING (public.is_admin_or_moderator(auth.uid()));
CREATE POLICY "Admins can delete reviews" ON public.reviews FOR DELETE TO authenticated USING (public.is_admin_or_moderator(auth.uid()));

-- REVIEW IMAGES
CREATE POLICY "Images of published reviews are public" ON public.review_images FOR SELECT USING (EXISTS (SELECT 1 FROM public.reviews WHERE id = review_id AND status = 'published'));
CREATE POLICY "Users see own review images" ON public.review_images FOR SELECT TO authenticated USING (EXISTS (SELECT 1 FROM public.reviews WHERE id = review_id AND user_id = auth.uid()));
CREATE POLICY "Users can add images to own reviews" ON public.review_images FOR INSERT TO authenticated WITH CHECK (EXISTS (SELECT 1 FROM public.reviews WHERE id = review_id AND user_id = auth.uid()));
CREATE POLICY "Users can delete own review images" ON public.review_images FOR DELETE TO authenticated USING (EXISTS (SELECT 1 FROM public.reviews WHERE id = review_id AND user_id = auth.uid()));

-- PROFESSORS: Public read
CREATE POLICY "Anyone can view professors" ON public.professors FOR SELECT USING (true);
CREATE POLICY "Admins manage professors" ON public.professors FOR INSERT TO authenticated WITH CHECK (public.is_admin_or_moderator(auth.uid()));
CREATE POLICY "Admins update professors" ON public.professors FOR UPDATE TO authenticated USING (public.is_admin_or_moderator(auth.uid()));

-- PROFESSOR REVIEWS
CREATE POLICY "Published prof reviews are public" ON public.professor_reviews FOR SELECT USING (status = 'published');
CREATE POLICY "Users see own prof reviews" ON public.professor_reviews FOR SELECT TO authenticated USING (user_id = auth.uid());
CREATE POLICY "Auth users can create prof reviews" ON public.professor_reviews FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid());
CREATE POLICY "Users can update own prof reviews" ON public.professor_reviews FOR UPDATE TO authenticated USING (user_id = auth.uid());
CREATE POLICY "Admins manage prof reviews" ON public.professor_reviews FOR UPDATE TO authenticated USING (public.is_admin_or_moderator(auth.uid()));

-- COLLEGE STORIES
CREATE POLICY "Published stories are public" ON public.college_stories FOR SELECT USING (status = 'published');
CREATE POLICY "Users see own stories" ON public.college_stories FOR SELECT TO authenticated USING (user_id = auth.uid());
CREATE POLICY "Admins see all stories" ON public.college_stories FOR SELECT TO authenticated USING (public.is_admin_or_moderator(auth.uid()));
CREATE POLICY "Auth users can create stories" ON public.college_stories FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid());
CREATE POLICY "Users can update own stories" ON public.college_stories FOR UPDATE TO authenticated USING (user_id = auth.uid());
CREATE POLICY "Admins manage stories" ON public.college_stories FOR UPDATE TO authenticated USING (public.is_admin_or_moderator(auth.uid()));

-- STORY COMMENTS
CREATE POLICY "Comments on published stories are public" ON public.story_comments FOR SELECT USING (EXISTS (SELECT 1 FROM public.college_stories WHERE id = story_id AND status = 'published'));
CREATE POLICY "Auth users can create comments" ON public.story_comments FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own comments" ON public.story_comments FOR UPDATE TO authenticated USING (user_id = auth.uid());
CREATE POLICY "Users can delete own comments" ON public.story_comments FOR DELETE TO authenticated USING (user_id = auth.uid());
CREATE POLICY "Admins manage comments" ON public.story_comments FOR DELETE TO authenticated USING (public.is_admin_or_moderator(auth.uid()));

-- HELPFUL VOTES
CREATE POLICY "Votes are public" ON public.helpful_votes FOR SELECT USING (true);
CREATE POLICY "Auth users can vote" ON public.helpful_votes FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid());
CREATE POLICY "Users can remove own votes" ON public.helpful_votes FOR DELETE TO authenticated USING (user_id = auth.uid());

-- REPORTS
CREATE POLICY "Auth users can create reports" ON public.reports FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid());
CREATE POLICY "Admins can view reports" ON public.reports FOR SELECT TO authenticated USING (public.is_admin_or_moderator(auth.uid()));
CREATE POLICY "Admins can update reports" ON public.reports FOR UPDATE TO authenticated USING (public.is_admin_or_moderator(auth.uid()));

-- USER ROLES
CREATE POLICY "Users can see own roles" ON public.user_roles FOR SELECT TO authenticated USING (user_id = auth.uid());
CREATE POLICY "Admins can view all roles" ON public.user_roles FOR SELECT TO authenticated USING (public.is_admin_or_moderator(auth.uid()));
CREATE POLICY "Admins can manage roles" ON public.user_roles FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can update roles" ON public.user_roles FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can delete roles" ON public.user_roles FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- ============================================
-- STORAGE BUCKET for review images
-- ============================================
INSERT INTO storage.buckets (id, name, public) VALUES ('review-images', 'review-images', true);

CREATE POLICY "Anyone can view review images" ON storage.objects FOR SELECT USING (bucket_id = 'review-images');
CREATE POLICY "Auth users can upload review images" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'review-images');
CREATE POLICY "Users can delete own review images" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'review-images' AND auth.uid()::text = (storage.foldername(name))[1]);
