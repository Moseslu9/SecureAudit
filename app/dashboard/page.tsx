"use client";

import { supabase } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push("/login");
      } else {
        setUser(user);
        setLoading(false);
      }
    };

    getUser();

    // Listen for auth changes (e.g., sign out from another tab)
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT" || !session) {
        router.push("/login");
      } else if (session) {
        setUser(session.user);
        setLoading(false);
      }
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, [router]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <p className="text-xl text-gray-400">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="border-b border-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h2 className="text-2xl font-bold">SecureAudit Dashboard</h2>
          <Button
            onClick={handleSignOut}
            variant="outline"
            className="border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-gray-900"
          >
            Sign Out
          </Button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-8">
        <Card className="p-8 bg-gray-800 border-gray-700">
          <h3 className="text-3xl font-bold mb-4 text-cyan-500">
            Welcome back, {user?.email}!
          </h3>
          <p className="text-xl text-gray-300 mb-6">
            You're securely logged in.
          </p>
          <p className="text-gray-400">
            Next step: Upload your company policies and let AI analyze them for SOC 2 and ISO 27001 compliance gaps.
          </p>
        </Card>
      </div>
    </div>
  );
}