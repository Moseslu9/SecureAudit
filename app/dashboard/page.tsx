import { redirect } from "next/navigation";
import { getUser } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export default async function Dashboard() {
  const user = await getUser();  // ← await here

  if (!user) {
    redirect("/login");
  }

  async function handleSignOut() {
    "use server";
    const supabase = createServerSupabaseClient();
    await supabase.auth.signOut();
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="border-b border-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h2 className="text-2xl font-bold">SecureAudit Dashboard</h2>
          <form action={handleSignOut}>
            <Button variant="outline" className="border-cyan-500 text-cyan-500">
              Sign Out
            </Button>
          </form>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto p-8">
        <Card className="p-8 bg-gray-800 border-gray-700">
          <h3 className="text-3xl font-bold mb-4 text-cyan-500">
            Welcome back, {user.email}!
          </h3>
          <p className="text-xl text-gray-300 mb-6">
            You're securely logged in. Your compliance audit tools are ready.
          </p>
          <p className="text-gray-400">
            Next: Upload your company policies and let AI find the gaps for SOC 2 / ISO 27001.
          </p>
        </Card>
      </div>
    </div>
  );
}