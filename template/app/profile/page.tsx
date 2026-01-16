import { auth, signOut } from "@/auth"
import { redirect } from "next/navigation"

export default async function ProfilePage() {
    const session = await auth()

    if (!session?.user) {
        redirect("/login")
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-950">
            <div className="w-full max-w-lg space-y-8 rounded-2xl bg-zinc-900 p-10 shadow-2xl border border-zinc-800">
                <div className="flex items-center gap-6">
                    {session.user.image && (
                        <img
                            src={session.user.image}
                            alt="Profile"
                            className="h-20 w-20 rounded-full border-2 border-zinc-700"
                        />
                    )}
                    <div>
                        <h1 className="text-2xl font-bold text-white">
                            {session.user.name}
                        </h1>
                        <p className="text-sm text-zinc-400">{session.user.email}</p>
                    </div>
                </div>

                <div className="border-t border-zinc-800 pt-6">
                    <h2 className="text-lg font-semibold text-white mb-4">
                        Account Settings
                    </h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-zinc-400">User ID</span>
                            <code className="text-xs text-zinc-500 bg-zinc-800 px-2 py-1 rounded">
                                {session.user.id}
                            </code>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-zinc-400">Auth Provider</span>
                            <span className="text-sm text-zinc-300">Google</span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-zinc-800 pt-6 space-y-4">
                    <form
                        action={async () => {
                            "use server"
                            await signOut({ redirectTo: "/" })
                        }}
                    >
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-zinc-800 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
                        >
                            Sign Out
                        </button>
                    </form>

                    <button
                        type="button"
                        className="w-full rounded-lg border border-red-800 bg-red-900/20 px-4 py-3 text-sm font-medium text-red-400 transition-colors hover:bg-red-900/40"
                    >
                        Delete Account
                    </button>
                    <p className="text-xs text-zinc-500 text-center">
                        This action is irreversible and will delete all your data.
                    </p>
                </div>
            </div>
        </div>
    )
}
