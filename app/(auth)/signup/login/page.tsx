import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { supabase } from "@/lib/supabase/client";
import Link from "next/link";

export default function Login() {
  async function handleLogin(formData: FormData) {
    "use server";
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return { error: error.message };
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <Card className="w-full max-w-md p-8 bg-gray-800 border-gray-700">
        <h1 className="text-3xl font-bold text-center mb-8">Welcome Back</h1>
        <form action={handleLogin} className="space-y-6">
          <div>
            <Input
              name="email"
              type="email"
              placeholder="you@company.com"
              required
              className="bg-gray-700 border-gray-600"
            />
          </div>
          <div>
            <Input
              name="password"
              type="password"
              placeholder="Your password"
              required
              className="bg-gray-700 border-gray-600"
            />
          </div>
          <Button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-semibold">
            Log In
          </Button>
        </form>
        <p className="text-center text-gray-400 mt-6">
          No account?{" "}
          <Link href="/signup" className="text-cyan-500 hover:underline">
            Sign up
          </Link>
        </p>
      </Card>
    </div>
  );
}