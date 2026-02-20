/**
 * Client-side rate limiting and request protection utilities
 */

// In-memory store for rate limiting (resets on page refresh)
const requestCounts = new Map<string, { count: number; resetTime: number }>();

interface RateLimitConfig {
  maxRequests: number;
  windowMs: number; // milliseconds
}

const DEFAULT_LIMITS: Record<string, RateLimitConfig> = {
  review: { maxRequests: 5, windowMs: 60 * 60 * 1000 }, // 5 per hour
  story: { maxRequests: 3, windowMs: 60 * 60 * 1000 }, // 3 per hour
  comment: { maxRequests: 20, windowMs: 60 * 60 * 1000 }, // 20 per hour
  vote: { maxRequests: 50, windowMs: 60 * 60 * 1000 }, // 50 per hour
  report: { maxRequests: 10, windowMs: 60 * 60 * 1000 }, // 10 per hour
  search: { maxRequests: 60, windowMs: 60 * 1000 }, // 60 per minute
  default: { maxRequests: 100, windowMs: 60 * 1000 }, // 100 per minute
};

/**
 * Check if an action is rate limited
 */
export function isRateLimited(action: string, userId?: string): boolean {
  const key = `${action}:${userId || 'anonymous'}`;
  const config = DEFAULT_LIMITS[action] || DEFAULT_LIMITS.default;
  const now = Date.now();

  const current = requestCounts.get(key);

  if (!current || now > current.resetTime) {
    // Reset or initialize
    requestCounts.set(key, { count: 1, resetTime: now + config.windowMs });
    return false;
  }

  if (current.count >= config.maxRequests) {
    return true; // Rate limited
  }

  current.count++;
  return false;
}

/**
 * Get remaining requests for an action
 */
export function getRemainingRequests(action: string, userId?: string): number {
  const key = `${action}:${userId || 'anonymous'}`;
  const config = DEFAULT_LIMITS[action] || DEFAULT_LIMITS.default;
  const now = Date.now();

  const current = requestCounts.get(key);

  if (!current || now > current.resetTime) {
    return config.maxRequests;
  }

  return Math.max(0, config.maxRequests - current.count);
}

/**
 * Get time until rate limit resets (in seconds)
 */
export function getResetTime(action: string, userId?: string): number {
  const key = `${action}:${userId || 'anonymous'}`;
  const current = requestCounts.get(key);

  if (!current) return 0;

  const remaining = current.resetTime - Date.now();
  return Math.max(0, Math.ceil(remaining / 1000));
}

/**
 * Debounce function - prevents rapid repeated calls
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle function - limits execution rate
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Simple honeypot detection - returns true if bot suspected
 */
export function detectBot(formData: {
  honeypot?: string;
  submissionTime?: number;
}): boolean {
  // If honeypot field is filled, it's likely a bot
  if (formData.honeypot && formData.honeypot.length > 0) {
    return true;
  }

  // If form was submitted too quickly (< 3 seconds), likely a bot
  if (formData.submissionTime && formData.submissionTime < 3000) {
    return true;
  }

  return false;
}

/**
 * Sanitize user input - strip dangerous content
 */
export function sanitizeInput(input: string): string {
  if (!input) return '';

  return input
    // Remove script tags
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    // Remove event handlers
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '')
    // Remove javascript: URLs
    .replace(/javascript:/gi, '')
    // Remove data: URLs (can be used for XSS)
    .replace(/data:/gi, '')
    // Trim whitespace
    .trim();
}

/**
 * Validate content length
 */
export function validateContentLength(
  content: string,
  minLength: number,
  maxLength: number
): { valid: boolean; error?: string } {
  const length = content.trim().length;

  if (length < minLength) {
    return { valid: false, error: `Minimum ${minLength} characters required` };
  }

  if (length > maxLength) {
    return { valid: false, error: `Maximum ${maxLength} characters allowed` };
  }

  return { valid: true };
}
