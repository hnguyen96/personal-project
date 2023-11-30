import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
export default authMiddleware({
  // Public routes are routes that don't require authentication
  publicRoutes: [
    "/",
    "/sign-in(.*)",
    "/sign-up(.*)",
    "/sso-callback(.*)",
    "/about(.*)",
    "/media(.*)",
  ],
  apiRoutes: [
    "/api/(.*)",
  ],
  async afterAuth(auth, req) {
    if (auth.isPublicRoute) {
      //  For public routes, we don't need to do anything
      return NextResponse.next();
    }

    if (!auth.userId) {
      return NextResponse.json({
        "message": "Unauthorized",
      }, { status: 401 })
    }

    const url = new URL(req.nextUrl.origin);

    if (!auth.userId) {
      //  If user tries to access a private route without being authenticated,
      //  redirect them to the sign in page
      url.pathname = "/sign-in";
      return NextResponse.redirect(url);
    }
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
