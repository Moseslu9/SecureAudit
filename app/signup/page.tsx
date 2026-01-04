"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { supabase } from "@/lib/supabase/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUp() {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setErrorMsg(error.message);
      setLoading(false);
    } else {
      router.push("/dashboard");
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <Card className="w-full max-w-md p-8 bg-gray-800 border-gray-700">
        <h1 className="text-3xl font-bold text-center mb-8">Create Account</h1>

        {errorMsg && (
          <p className="text-red-500 text-center mb-4 bg-red-900/20 p-3 rounded">
            {errorMsg}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            name="email"
            type="email"
            placeholder="you@company.com"
            required
            className="bg-gray-700 border-gray-600"
          />
          <Input
            name="password"
            type="password"
            placeholder="Choose a strong password"
            required
            minLength={6}
            className="bg-gray-700 border-gray-600"
          />
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-semibold"
          >
            {loading ? "Creating..." : "Sign Up"}
          </Button>
        </form>

        <p className="text-center text-gray-400 mt-6">
          Already have an account? <Link href="/login" className="text-cyan-500 hover:underline">Log in</Link>
        </p>
      </Card>
    </div>
  );
}