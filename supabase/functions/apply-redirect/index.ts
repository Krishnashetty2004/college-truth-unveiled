import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// Allowed origins for CORS - add your production domain here
const ALLOWED_ORIGINS = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://ratemycollege.in",
  "https://www.ratemycollege.in",
  "https://ratemycollege.plutas.in",
];

function getCorsHeaders(origin: string | null) {
  const allowedOrigin = origin && ALLOWED_ORIGINS.some(o => origin.startsWith(o.replace(/\/$/, '')))
    ? origin
    : ALLOWED_ORIGINS[0];

  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
  };
}

// Simple in-memory rate limiting (resets on cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 30; // requests per window
const RATE_WINDOW = 60000; // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return false;
  }

  record.count++;
  return record.count > RATE_LIMIT;
}

Deno.serve(async (req) => {
  const origin = req.headers.get("origin");
  const corsHeaders = getCorsHeaders(origin);

  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Only allow GET requests
  if (req.method !== "GET") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    // Rate limiting by IP
    const clientIP = req.headers.get("x-forwarded-for")?.split(",")[0] ||
                     req.headers.get("cf-connecting-ip") ||
                     "unknown";

    if (isRateLimited(clientIP)) {
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const url = new URL(req.url);
    const opportunityId = url.searchParams.get("id");

    // Validate opportunity ID format
    if (!opportunityId || opportunityId.length > 100 || !/^[\w\-_]+$/.test(opportunityId)) {
      return new Response(
        JSON.stringify({ error: "Invalid opportunity ID" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Create Supabase client with service role for direct table access
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Get the apply URL from the opportunities table
    const { data, error } = await supabase
      .from("opportunities")
      .select("apply_url")
      .eq("id", opportunityId)
      .eq("is_active", true)
      .single();

    if (error || !data || !data.apply_url) {
      return new Response(
        JSON.stringify({ error: "Opportunity not found" }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate the apply URL is a valid URL
    try {
      new URL(data.apply_url);
    } catch {
      console.error("Invalid apply_url in database:", opportunityId);
      return new Response(
        JSON.stringify({ error: "Invalid redirect URL" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Increment the apply count using the RPC function (handles atomically)
    await supabase.rpc("increment_apply_count", { opportunity_id: opportunityId }).catch(err => {
      console.error("Failed to increment apply count:", err);
    });

    // Redirect to the apply URL
    return new Response(null, {
      status: 302,
      headers: {
        ...corsHeaders,
        "Location": data.apply_url,
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    });
  } catch (err) {
    console.error("Error in apply-redirect:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
