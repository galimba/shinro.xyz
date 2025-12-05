import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get("host") || "";

  // Redirect www to non-www
  if (hostname.startsWith("www.")) {
    const newHostname = hostname.replace("www.", "");
    url.host = newHostname;
    return NextResponse.redirect(url, 301);
  }

  // Force lowercase URLs (except for query params and hash)
  const pathname = url.pathname;
  if (pathname !== pathname.toLowerCase()) {
    url.pathname = pathname.toLowerCase();
    return NextResponse.redirect(url, 301);
  }

  // Remove trailing slashes (except for root)
  if (pathname.length > 1 && pathname.endsWith("/")) {
    url.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except static files and API routes
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
