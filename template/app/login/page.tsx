import { signIn } from "@/auth"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-950">
            <div className="w-full max-w-md space-y-8 rounded-2xl bg-zinc-900 p-10 shadow-2xl border border-zinc-800">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white">Welcome back</h2>
                    <p className="mt-2 text-sm text-zinc-400">Sign in to manage your account</p>
                </div>

                <form
                    action={async () => {
                        "use server"
                        await signIn("google", { redirectTo: "/dashboard" })
                    }}
                >
                    <Button
                        className="w-full bg-white text-black hover:bg-zinc-200 transition-colors py-6 text-lg font-medium"
                    >
                        Sign in with Google
                    </Button>
                </form>

                <p className="text-center text-xs text-zinc-500 uppercase tracking-widest">
                    Secure SSO via Google
                </p>
            </div>
        </div>
    )
}
