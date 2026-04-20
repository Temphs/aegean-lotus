import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE_NAME = "aegean-auth";
const COOKIE_VALUE = "granted"; // simple token — extend with JWT if needed

// Routes that never need auth
const PUBLIC_PATHS = ["/login", "/api/"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public paths
  if (PUBLIC_PATHS.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  // Allow static files (_next, images, favicon, etc.)
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Check auth cookie
  const auth = request.cookies.get(COOKIE_NAME);
  if (auth?.value === COOKIE_VALUE) {
    return NextResponse.next();
  }

  // Redirect to login
  const loginUrl = request.nextUrl.clone();
  loginUrl.pathname = "/login";
  loginUrl.searchParams.set("from", pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
