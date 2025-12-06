import { z } from "zod";

// RFC 5322 compliant email regex (simplified)
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export const emailSubmissionSchema = z.object({
  email: z
    .string()
    .min(5, "Email too short")
    .max(254, "Email too long")
    .regex(EMAIL_REGEX, "Invalid email format")
    .transform((email) => email.toLowerCase().trim()),
  // Honeypot field - should always be empty for real users
  website: z.string().max(0).optional(),
  // Timestamp for time-based validation
  _ts: z.number().optional(),
});

export type EmailSubmission = z.infer<typeof emailSubmissionSchema>;

/**
 * Check if the form submission timing indicates human behavior.
 * Bots typically submit instantly, humans need at least a few seconds.
 */
export function isHumanTiming(timestamp: number): boolean {
  const now = Date.now();
  const elapsed = now - timestamp;

  // Minimum 3 seconds to fill form (bots are instant)
  // Maximum 1 hour (stale page)
  return elapsed >= 3000 && elapsed <= 3600000;
}
