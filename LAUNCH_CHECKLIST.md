# Launch Checklist - RateMyCollege

## Security Audit Summary

Last audit: February 19, 2026

---

## Critical Security Items

### 1. Apply URLs Protection ✅ SECURE
- [x] `apply_url` is **NOT exposed** to frontend
- [x] Frontend queries `opportunities_public` view (excludes apply_url)
- [x] Apply redirect happens via secure edge function
- [x] Users only see job ID, never the actual URL

**Verification:**
```bash
# This should NOT return apply_url
curl "https://zodataynxezekloikuhw.supabase.co/rest/v1/opportunities_public?select=*&limit=1" \
  -H "apikey: YOUR_ANON_KEY"
```

### 2. CORS Configuration ✅ FIXED
- [x] `apply-redirect` function restricted to allowed origins
- [x] Rate limiting implemented (30 req/min per IP)
- [x] Input validation on opportunity ID

**Allowed Origins (update in `supabase/functions/apply-redirect/index.ts`):**
```typescript
const ALLOWED_ORIGINS = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://ratemycollege.in",
  "https://www.ratemycollege.in",
];
```

### 3. Environment Variables ✅ SECURE
- [x] `.env` is in `.gitignore`
- [x] No secrets committed to git
- [x] Supabase anon key is safe to expose (designed to be public)
- [x] Service role key only used in edge functions (server-side)

### 4. Row Level Security (RLS) ✅ SECURE
| Table | Policy | Status |
|-------|--------|--------|
| `colleges` | Public read, admin write | ✅ |
| `reviews` | Published only visible, auth users can create | ✅ |
| `college_stories` | Published only visible, auth users can create | ✅ |
| `opportunities` | Active only via view, admin write | ✅ |
| `profiles` | Own profile only | ✅ |
| `user_roles` | Admin only | ✅ |

### 5. Edge Functions Security

| Function | CORS | Rate Limit | Auth Required | Status |
|----------|------|------------|---------------|--------|
| `apply-redirect` | Restricted | ✅ 30/min | No (public) | ✅ |
| `moderate-content` | Wildcard | ❌ | No | ⚠️ Fix before launch |
| `seed-stories` | Wildcard | ❌ | No | ⚠️ Remove for production |

---

## Pre-Launch Checklist

### Database
- [ ] Run all migrations in production
- [ ] Verify RLS policies are enabled
- [ ] Test anonymous user access (should only see published content)
- [ ] Verify `apply_url` is NOT in any API response

### Edge Functions
- [ ] Deploy `apply-redirect` with CORS fix
- [ ] Update ALLOWED_ORIGINS with production domain
- [ ] **DELETE or disable `seed-stories` function** (creates fake users!)
- [ ] Add authentication to `moderate-content` function

### Frontend
- [ ] Update `.env` with production Supabase URL
- [ ] Verify no `console.log` with sensitive data
- [ ] Test all filters (India, Remote, Department, etc.)
- [ ] Test apply button redirects correctly

### DNS & Hosting
- [ ] Configure production domain
- [ ] Enable HTTPS (automatic on Vercel/Netlify)
- [ ] Add domain to Supabase allowed origins

---

## Security Tests to Run

### 1. Test Apply URL is Hidden
```bash
# Should NOT contain apply_url field
curl "https://YOUR_PROJECT.supabase.co/rest/v1/opportunities_public?select=*&limit=1" \
  -H "apikey: YOUR_ANON_KEY" | grep apply_url
# Expected: No match found
```

### 2. Test CORS Restriction
```bash
# Should fail from unauthorized origin
curl -X OPTIONS "https://YOUR_PROJECT.supabase.co/functions/v1/apply-redirect" \
  -H "Origin: https://malicious-site.com" \
  -H "Access-Control-Request-Method: GET"
# Expected: No Access-Control-Allow-Origin header for malicious origin
```

### 3. Test Rate Limiting
```bash
# Run 35 requests quickly - should get 429 after 30
for i in {1..35}; do
  curl -s "https://YOUR_PROJECT.supabase.co/functions/v1/apply-redirect?id=test" -o /dev/null -w "%{http_code}\n"
done
# Expected: Last 5 should return 429
```

### 4. Test RLS Policies
```bash
# Anonymous user should NOT be able to insert
curl -X POST "https://YOUR_PROJECT.supabase.co/rest/v1/opportunities" \
  -H "apikey: YOUR_ANON_KEY" \
  -H "Content-Type: application/json" \
  -d '{"company":"Test","title":"Test","apply_url":"http://test.com"}'
# Expected: 401 or 403 error
```

---

## Data Exposure Checklist

| Data Type | Exposed to Frontend | Should Be Exposed? | Status |
|-----------|--------------------|--------------------|--------|
| Apply URLs | ❌ No | ❌ No | ✅ |
| User emails | ❌ No | ❌ No | ✅ |
| User passwords | ❌ No | ❌ No | ✅ |
| Service role key | ❌ No | ❌ No | ✅ |
| Published reviews | ✅ Yes | ✅ Yes | ✅ |
| Published stories | ✅ Yes | ✅ Yes | ✅ |
| College data | ✅ Yes | ✅ Yes | ✅ |
| Opportunities (public view) | ✅ Yes | ✅ Yes | ✅ |

---

## Post-Launch Monitoring

- [ ] Set up error logging (Sentry/LogRocket)
- [ ] Monitor edge function invocations in Supabase dashboard
- [ ] Set up alerts for unusual traffic patterns
- [ ] Review access logs weekly

---

## Emergency Procedures

### If Apply URLs Get Exposed:
1. Immediately regenerate all Supabase API keys
2. Update frontend with new keys
3. Audit database access logs
4. Notify affected companies if needed

### If Rate Limiting Fails:
1. Temporarily disable the edge function
2. Add IP blocking at Cloudflare/CDN level
3. Investigate and fix rate limiting code

---

## Sign-off

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Developer | | | |
| Security Review | | | |
| Product Owner | | | |

---

**Note:** This checklist should be reviewed before every production deployment.
