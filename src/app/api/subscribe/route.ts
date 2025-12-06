import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { emailSubmissionSchema, isHumanTiming } from "@/lib/validation";
import { isDisposableEmail } from "@/lib/disposable-emails";
import { checkRateLimit, getResetTime } from "@/lib/rate-limit";
import { appendToSheet, isDuplicateEmail } from "@/lib/google-sheets";

// Use Node.js runtime for googleapis compatibility
export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    // 1. Content-Type validation
    const contentType = request.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      return NextResponse.json(
        { error: "Invalid content type" },
        { status: 415 }
      );
    }

    // 2. Get client IP for rate limiting
    const headersList = await headers();
    const forwardedFor = headersList.get("x-forwarded-for");
    const ip = forwardedFor?.split(",")[0]?.trim() || "unknown";

    // 3. Rate limit check
    const { success: rateLimitOk } = checkRateLimit(ip);
    if (!rateLimitOk) {
      const resetSeconds = getResetTime(ip);
      return NextResponse.json(
        {
          error: `Too many requests. Please try again in ${Math.ceil(resetSeconds / 60)} minutes.`,
        },
        { status: 429 }
      );
    }

    // 4. Parse and validate body
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    const result = emailSubmissionSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    const { email, website, _ts } = result.data;

    // 5. Honeypot check - if filled, silently accept (don't reveal detection)
    if (website && website.length > 0) {
      return NextResponse.json({ success: true });
    }

    // 6. Time-based validation
    if (_ts && !isHumanTiming(_ts)) {
      return NextResponse.json(
        { error: "Please try again" },
        { status: 400 }
      );
    }

    // 7. Disposable email check
    if (isDisposableEmail(email)) {
      return NextResponse.json(
        { error: "Please use a work email address" },
        { status: 400 }
      );
    }

    // 8. Duplicate check - silently accept to not reveal email exists
    const isDuplicate = await isDuplicateEmail(email);
    if (isDuplicate) {
      return NextResponse.json({ success: true });
    }

    // 9. Append to Google Sheets
    const referer = headersList.get("referer") || "direct";
    // Mask IP for privacy (keep first segment only)
    const maskedIp = ip !== "unknown" ? ip.split(".")[0] + ".*.*.*" : "unknown";

    await appendToSheet({
      email,
      timestamp: new Date().toISOString(),
      source: referer,
      ip: maskedIp,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    // Log error server-side but don't expose details to client
    console.error("Subscribe API error:", error);
    return NextResponse.json(
      { error: "An error occurred. Please try again." },
      { status: 500 }
    );
  }
}

// Explicitly reject other HTTP methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}

export async function PUT() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}

export async function DELETE() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
