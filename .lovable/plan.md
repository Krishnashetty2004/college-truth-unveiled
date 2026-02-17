

# College Directory Page + 200 College Seed Data

## What We're Building

Two things in one step:
1. **Seed the database** with 200 real Indian colleges across 10 cities
2. **Build a full College Directory page** with search, filters, and college cards

---

## Step 1: Seed 200 Colleges

Insert ~200 colleges into the `colleges` table using SQL INSERT statements via the data insertion tool. Each college includes:
- Name, short name, city, state
- Type (engineering, medical, management, etc.)
- Ownership (government, private, deemed, autonomous)
- Tier (tier_1, tier_2, tier_3)
- Established year, estimated student population

### City Distribution (~20 per city)
- **Hyderabad** (~25): IIIT-H, BITS Pilani Hyd, JNTU, Osmania, CBIT, VNR VJIET, Malla Reddy colleges, Mahindra University, ISB, NALSAR, etc.
- **Bangalore** (~25): IISc, IIM-B, RVCE, BMS, PES, Christ, Jain, MSRIT, DSCE, CMR, REVA, etc.
- **Delhi-NCR** (~25): IIT Delhi, JNU, DU colleges, DTU, NSUT, Amity, SRM AP, Galgotias, Bennett, Sharda, etc.
- **Chennai** (~20): IIT Madras, Anna University, SRM, VIT Chennai, Loyola, MCC, Sathyabama, Jeppiaar, etc.
- **Mumbai** (~20): IIT Bombay, VJTI, SPIT, DJ Sanghvi, Thadomal, NMIMS, KC College, Xavier's, etc.
- **Pune** (~20): COEP, VIT Pune, Symbiosis, MIT Pune, PICT, Sinhgad colleges, Fergusson, etc.
- **Kolkata** (~15): IIT Kharagpur area, Jadavpur, Presidency, IIEST, Heritage, Techno India, etc.
- **Vizag/AP** (~15): AU, GITAM, Centurion, Raghu, ANITS, MVGR, etc.
- **Ahmedabad** (~15): IIM-A, DAIICT, Nirma, LD Engineering, CEPT, Gujarat University, etc.
- **Jaipur** (~15): MNIT, IIS University, Manipal Jaipur, JECRC, Poornima, Amity Jaipur, etc.

This will be done via multiple SQL INSERT calls (batched to stay within limits).

---

## Step 2: College Directory Page

### New Files
- **`src/pages/Colleges.tsx`** — Full rewrite of the placeholder page
- **`src/hooks/useColleges.ts`** — React Query hook for fetching/filtering colleges from the database

### Page Features

**Header Section**
- Page title "College Directory" with subtitle
- Total college count badge
- Reuses the nav from Index.tsx pattern (will extract a shared Navbar component)

**Search Bar**
- Full-width search input with search icon
- Debounced text search (searches college name and short_name using Supabase `ilike`)
- URL query param support (e.g., `/colleges?city=Hyderabad` from homepage links)

**Filter Bar (horizontal, responsive)**
- **City filter** — Select dropdown with all 10 cities + "All Cities"
- **Type filter** — Select dropdown: Engineering, Medical, Management, Law, etc.
- **Ownership filter** — Select dropdown: Government, Private, Deemed, Autonomous
- **Tier filter** — Select dropdown: Tier 1, Tier 2, Tier 3
- Active filter count badge
- "Clear All" button when filters are active

**College Cards Grid**
- Responsive grid: 1 column mobile, 2 tablet, 3 desktop
- Each card shows:
  - College name + short name
  - City, State badges
  - Type + Ownership + Tier badges (color-coded: green=Tier 1, blue=Tier 2, orange=Tier 3)
  - AI Overall Score (circular progress or score display) — will show "No reviews yet" initially
  - Total reviews count
  - Established year
  - Student population (if available)
  - "View Details" link (routes to `/colleges/:id` — page built later)

**Empty & Loading States**
- Skeleton loading cards while fetching
- Empty state with illustration when no colleges match filters
- Error state with retry button

**Pagination**
- Show 20 colleges per page
- Previous/Next buttons with page indicator
- Uses Supabase `.range()` for server-side pagination

### Technical Details

**`src/hooks/useColleges.ts`**
```typescript
// Uses @tanstack/react-query with queryKey including all filter params
// Fetches from supabase.from('colleges').select('*')
// Applies .ilike('name', '%search%') for search
// Applies .eq('city', city) etc. for filters
// Applies .range(from, to) for pagination
// Applies .order('name', { ascending: true })
```

**URL State Sync**
- Filters sync to URL search params using `useSearchParams`
- Allows direct linking like `/colleges?city=Hyderabad&type=engineering`
- City links from homepage will pre-filter automatically

### Shared Navbar Component
- Extract the nav from `Index.tsx` into `src/components/Navbar.tsx`
- Reuse across Colleges page (and all future pages)

---

## Summary of Files Changed/Created

| File | Action |
|------|--------|
| Database (colleges table) | INSERT ~200 colleges via data tool |
| `src/components/Navbar.tsx` | NEW — shared navigation component |
| `src/hooks/useColleges.ts` | NEW — React Query hook for college data |
| `src/pages/Colleges.tsx` | REWRITE — full directory page |
| `src/pages/Index.tsx` | EDIT — use shared Navbar |

