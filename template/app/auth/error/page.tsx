import Link from "next/link"

const errorMessages: Record<string, string> = {
    Configuration: "There is a problem with the server configuration.",
    AccessDenied: "You do not have permission to sign in.",
    Verification: "The sign in link is no longer valid.",
    OAuthSignin: "Error in the OAuth sign in flow.",
    OAuthCallback: "Error in the OAuth callback.",
    OAuthCreateAccount: "Could not create OAuth provider account.",
    EmailCreateAccount: "Could not create email provider account.",
    Callback: "Error in the OAuth callback handling.",
    OAuthAccountNotLinked:
        "This email is already associated with another account. Sign in with that account first.",
    EmailSignin: "Check your email for a sign in link.",
    CredentialsSignin: "Invalid credentials.",
    SessionRequired: "You must be signed in to access this page.",
    Default: "An unknown error occurred.",
}

export default function AuthErrorPage({
    searchParams,
}: {
    searchParams: { error?: string }
}) {
    const errorCode = searchParams?.error || "Default"
    const errorMessage = errorMessages[errorCode] || errorMessages.Default

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-950">
            <div className="w-full max-w-md space-y-8 rounded-2xl bg-zinc-900 p-10 shadow-2xl border border-zinc-800">
                <div className="text-center">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-900/30 border border-red-800">
                        <svg
                            className="h-8 w-8 text-red-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-white">
                        Authentication Error
                    </h1>
                    <p className="mt-4 text-sm text-zinc-400">{errorMessage}</p>
                    {errorCode !== "Default" && (
                        <p className="mt-2 text-xs text-zinc-600">
                            Error code: {errorCode}
                        </p>
                    )}
                </div>

                <div className="space-y-4">
                    <Link
                        href="/login"
                        className="block w-full rounded-lg bg-white px-4 py-3 text-center text-sm font-medium text-black transition-colors hover:bg-zinc-200"
                    >
                        Try Again
                    </Link>
                    <Link
                        href="/"
                        className="block w-full rounded-lg border border-zinc-700 px-4 py-3 text-center text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800"
                    >
                        Return Home
                    </Link>
                </div>
            </div>
        </div>
    )
}
