

# RateMyCollege — Full Product Build Plan

## Overview
India's first anonymous, proof-based, AI-ranked college review platform. Students anonymously review colleges across 12 categories with photo proof. An AI engine (OpenAI API) detects fake reviews, generates trust-weighted rankings, and produces honest summaries no college can manipulate.

**Core principle:** Never take money from colleges. Trust is the moat.

**Tech stack:** React + Vite + Tailwind CSS + Supabase (Auth, Database, Storage, Edge Functions) + OpenAI API

---

## Phase 1: Foundation & Database Schema

### Supabase Setup & Schema (10+ tables)
- **colleges** — 200 seeded colleges with city, state, type, ownership, tier, AI score fields
- **users/profiles** — linked to Supabase Auth, anonymous_alias, college association, verification tier, reputation
- **reviews** — 12-category ratings, title, pros/cons, advice, AI analysis fields (sentiment, authenticity, helpfulness scores)
- **review_images** — up to 5 images per review with type tags (hostel, food, classroom)
- **professors** — name, department, designation, AI scores
- **professor_reviews** — 5 rating categories, tags, difficulty, "would take again"
- **college_stories** — long-form anonymous stories with categories
- **story_comments** — threaded comments
- **helpful_votes** — one vote per user per item
- **reports** — community flagging with reason types
- RLS policies on all tables to protect user anonymity
- SECURITY DEFINER functions to never expose real user IDs publicly

### Google OAuth + Anonymous Identity
- Google sign-in via Supabase Auth
- Auto-generate anonymous aliases on signup (e.g., "Anonymous Owl #4821")
- Deterministic avatar generation
- Optional onboarding: select college, course, year

---

## Phase 2: College Browsing & Profiles

### College Directory Page
- Browse 200 colleges with filters (city, type, ownership, tier)
- Search with fuzzy matching
- College cards showing AI score, review count, key stats

### College Profile Page
- AI-generated overall score + 12 category breakdown with visual bars
- AI-written 200-word honest summary with pros/cons
- "Best for" / "Avoid if" tags, trend indicator (Rising/Declining/Stable)
- Recent reviews feed with image galleries
- Professor listing for that college
- Stories section

---

## Phase 3: Review System

### Multi-Step Review Form
- Rate across 12 categories (1-5 stars each): Placements, Faculty, Curriculum, Hostel, Food, WiFi, Infrastructure, Campus Life, Safety, Location, Admin, Value for Money
- Title, detailed review (50-5000 chars), pros, cons, advice
- Context: course, department, year, reviewer type (student/alumni/parent)
- Image upload (up to 5, 5MB each) with type tagging
- Client-side image compression, EXIF stripping via edge function

### Review Display & Engagement
- Anonymous alias + generated avatar only
- Category ratings visualization, image gallery with lightbox
- Helpful vote button, report button
- 24-hour edit window, AI authenticity badge
- 3+ reports auto-hold for moderation

---

## Phase 4: AI Engine (OpenAI API via Edge Functions)

### Review Analysis Pipeline
- Edge function triggered on every new review
- OpenAI API analyzes for: sentiment score, authenticity score (below 0.4 = flagged), helpfulness score, topic extraction, fake review detection (marketing language, planted reviews)
- Reviews start as "under_review", auto-publish if authentic

### AI College Rankings
- Trust-weighted algorithm: authenticity × 1.0, recency × 0.3, verified student × 0.5 (1.5x weight), has images × 0.3, helpful votes × 0.2
- Category weights: Placements 30%, Faculty 20%, Curriculum 10%, rest distributed
- Minimum 10 reviews to be ranked
- Client-side personalizable weight sliders

### AI Summary & Compare
- Top 50 reviews per college → OpenAI generates 200-word summary, top 5 pros/cons, tags, trend
- Compare 2-3 colleges side-by-side with AI-generated structured comparison

---

## Phase 5: Professor Reviews

### Professor Profiles & Reviews
- Teaching quality, knowledge, approachability, grading fairness, punctuality ratings
- Tags (tough_grader, inspirational, reads_from_slides, etc.)
- "Would take again" percentage, difficulty level
- AI-computed overall score and summary

---

## Phase 6: Stories & Community

### College Stories
- Long-form anonymous stories (100-10,000 chars)
- Category tags, trending algorithm
- Threaded comments, upvote system

---

## Phase 7: Admin & Moderation

### Three-Layer Moderation
- **Layer 1 — AI Auto-Review:** OpenAI analysis on every submission
- **Layer 2 — Community Flagging:** 3+ reports auto-hold
- **Layer 3 — Human Moderation:** Admin dashboard for final decisions

### Admin Dashboard
- Moderation queue, review/story management
- College data management, user management, role assignment
- Analytics overview

---

## Phase 8: Verification & Trust Tiers

- **Unverified** — Google sign-in only (1.0x review weight)
- **Self-declared** — User selects college + course (1.0x, college tag shown)
- **Verified Student** — College email domain verification (1.5x weight, verified badge)

---

## Phase 9: Search, Rankings & Compare Pages

- Global search across colleges, professors, stories
- Rankings page with AI-ranked colleges, filterable by city/type/category
- Compare page: select 2-3 colleges for side-by-side visual + AI comparison

---

## Phase 10: Polish & Legal

- User profile page (own reviews, stories, settings)
- Terms of Service, Privacy Policy, Content Policy, Grievance Officer
- Full mobile responsive design
- College seed data: 200 colleges across Hyderabad, Bangalore, Delhi-NCR, Chennai, Mumbai, Pune, Kolkata, Vizag/AP, Ahmedabad, Jaipur

