import { supabase } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

async function getUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

export default async function Dashboard() {
  const user = await getUser();

  if (!user) {
    return <div>Unauthorized</div>;
  }

  async function handleSignOut() {
    "use server";
    await supabase.auth.signOut();
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="border-b border-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <form action={handleSignOut}>
            <Button variant="outline">Sign Out</Button>
          </form>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto p-8">
        <Card className="p-8 bg-gray-800 border-gray-700">
          <h3 className="text-2xl font-bold mb-4">Welcome, {user.email}</h3>
          <p className="text-gray-300">
            Your SecureAudit dashboard is under construction. Compliance scanner coming next!
          </p>
        </Card>
      </div>
    </div>
  );
}