import { signIn } from "@/auth"

export default function LoginPage({
    searchParams,
}: {
    searchParams: { callbackUrl?: string; error?: string }
}) {
    const callbackUrl = searchParams?.callbackUrl || "/dashboard"
    const error = searchParams?.error

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-950">
            <div className="w-full max-w-md space-y-8 rounded-2xl bg-zinc-900 p-10 shadow-2xl border border-zinc-800">
                <div className="text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-white">
                        Welcome back
                    </h1>
                    <p className="mt-2 text-sm text-zinc-400">
                        Sign in to access your account
                    </p>
                </div>

                {error && (
                    <div className="rounded-lg bg-red-900/50 p-4 text-sm text-red-200 border border-red-800">
                        {error === "OAuthAccountNotLinked"
                            ? "This email is already associated with another account."
                            : "An error occurred during sign in. Please try again."}
                    </div>
                )}

                <form
                    action={async () => {
                        "use server"
                        await signIn("google", { redirectTo: callbackUrl })
                    }}
                >
                    <button
                        type="submit"
                        className="flex w-full items-center justify-center gap-3 rounded-lg bg-white px-4 py-4 text-lg font-medium text-black transition-all hover:bg-zinc-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-900"
                    >
                        <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                                fill="#4285F4"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                                fill="#34A853"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                                fill="#FBBC05"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            />
                            <path
                                fill="#EA4335"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            />
                        </svg>
                        Sign in with Google
                    </button>
                </form>

                <div className="text-center">
                    <p className="text-xs text-zinc-500 uppercase tracking-widest">
                        Secure authentication via Google
                    </p>
                </div>
            </div>
        </div>
    )
}
