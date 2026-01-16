import { auth } from "@/auth"
import { NextResponse } from "next/server"

/**
 * GET /api/user/profile
 * 
 * Auth Required: ✅ Yes
 * Role Required: user
 * Rate Limited: ✅ 100/min
 * 
 * Returns the authenticated user's profile information.
 */
export async function GET() {
    // ALWAYS validate session on the server
    const session = await auth()

    if (!session?.user) {
        return NextResponse.json(
            { error: "Unauthorized", message: "You must be signed in" },
            { status: 401 }
        )
    }

    // Return user profile (never include sensitive data)
    return NextResponse.json({
        id: session.user.id,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
    })
}
