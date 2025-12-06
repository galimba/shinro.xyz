/**
 * In-memory rate limiter using sliding window algorithm.
 * Note: This resets on cold starts and doesn't share state across instances.
 * Suitable for low-traffic applications or as a basic protection layer.
 */

interface RateLimitRecord {
  count: number;
  windowStart: number;
}

// Store rate limit records per IP
const rateLimitStore = new Map<string, RateLimitRecord>();

// Configuration
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5; // 5 requests per window

// Cleanup old entries periodically to prevent memory leaks
const CLEANUP_INTERVAL_MS = 5 * 60 * 1000; // 5 minutes

let lastCleanup = Date.now();

function cleanupStaleEntries(): void {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;

  lastCleanup = now;
  const cutoff = now - WINDOW_MS;

  for (const [ip, record] of rateLimitStore.entries()) {
    if (record.windowStart < cutoff) {
      rateLimitStore.delete(ip);
    }
  }
}

/**
 * Check if a request from the given IP should be allowed.
 * @param ip - The client IP address
 * @returns Object with success (boolean) and remaining (number of requests left)
 */
export function checkRateLimit(ip: string): {
  success: boolean;
  remaining: number;
} {
  // Run cleanup occasionally
  cleanupStaleEntries();

  const now = Date.now();
  const record = rateLimitStore.get(ip);

  // No record exists - create new window
  if (!record) {
    rateLimitStore.set(ip, { count: 1, windowStart: now });
    return { success: true, remaining: MAX_REQUESTS - 1 };
  }

  // Window has expired - reset
  if (now - record.windowStart >= WINDOW_MS) {
    rateLimitStore.set(ip, { count: 1, windowStart: now });
    return { success: true, remaining: MAX_REQUESTS - 1 };
  }

  // Within window - check count
  if (record.count >= MAX_REQUESTS) {
    return { success: false, remaining: 0 };
  }

  // Increment and allow
  record.count++;
  return { success: true, remaining: MAX_REQUESTS - record.count };
}

/**
 * Get the remaining time (in seconds) until the rate limit window resets.
 */
export function getResetTime(ip: string): number {
  const record = rateLimitStore.get(ip);
  if (!record) return 0;

  const now = Date.now();
  const elapsed = now - record.windowStart;
  const remaining = WINDOW_MS - elapsed;

  return Math.max(0, Math.ceil(remaining / 1000));
}
