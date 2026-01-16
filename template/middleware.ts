import { auth } from "@/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
    const isLoggedIn = !!req.auth
    const { pathname } = req.nextUrl

    // Define route patterns
    const isAdminRoute = pathname.startsWith("/admin")
    const isProtectedRoute =
        pathname.startsWith("/dashboard") ||
        pathname.startsWith("/profile") ||
        pathname.startsWith("/api/user")
    const isAuthRoute = pathname.startsWith("/login") || pathname.startsWith("/register")

    // Redirect logged-in users away from auth pages
    if (isLoggedIn && isAuthRoute) {
        return NextResponse.redirect(new URL("/dashboard", req.nextUrl))
    }

    // Redirect unauthenticated users to login
    if (!isLoggedIn && (isProtectedRoute || isAdminRoute)) {
        const loginUrl = new URL("/login", req.nextUrl)
        loginUrl.searchParams.set("callbackUrl", pathname)
        return NextResponse.redirect(loginUrl)
    }

    // Admin routes require additional role check (done in page/API)
    // Middleware passes through; role validation happens server-side

    return NextResponse.next()
})

export const config = {
    matcher: [
        "/admin/:path*",
        "/dashboard/:path*",
        "/profile/:path*",
        "/login",
        "/register",
        "/api/user/:path*",
        "/api/admin/:path*",
    ],
}
