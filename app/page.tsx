import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
//import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import Link from "next/link";

import { Shield, Zap, CheckCircle, ArrowRight, Lock } from "lucide-react";

export default function Home() {
  return (
    <>
     {/* Updated Navbar */}
<nav className="border-b border-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      <div className="flex items-center space-x-3">
        <Shield className="h-8 w-8 text-cyan-500" />
        <span className="text-xl font-bold">SecureAudit</span>
      </div>
      <div className="flex items-center space-x-6">
        <Link href="#features" className="text-gray-300 hover:text-white transition">Features</Link>
        <Link href="/login" className="text-gray-300 hover:text-white transition">Log In</Link>
        <Button asChild>
          <Link href="/signup">Get Started</Link>
        </Button>
      </div>
    </div>
  </div>
</nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Get Compliance-Ready<br />
            <span className="text-cyan-500">Without the Headache</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            SecureAudit uses AI to scan your policies, tools, and setups — then shows you exactly what’s missing for SOC 2, ISO 27001, and more. Built for startups and small teams who can’t afford $20K+ audits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="your@company.com"
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
            />
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-semibold">
              Join Waitlist <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">No credit card required • Launching Q1 2026</p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-gray-900 border-gray-700">
              <Zap className="h-12 w-12 text-cyan-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Instant Gap Analysis</h3>
              <p className="text-gray-400">Upload your policies and connect your tools. AI finds missing controls in minutes.</p>
            </Card>
            <Card className="p-8 bg-gray-900 border-gray-700">
              <CheckCircle className="h-12 w-12 text-cyan-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Step-by-Step Fixes</h3>
              <p className="text-gray-400">Get clear templates, recommendations, and evidence collection guidance.</p>
            </Card>
            <Card className="p-8 bg-gray-900 border-gray-700">
              <Lock className="h-12 w-12 text-cyan-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Audit-Ready Reports</h3>
              <p className="text-gray-400">Export everything your auditor needs — organized and professional.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800 text-center text-gray-500">
        <p>© 2026 SecureAudit. Built for founders who move fast.</p>
      </footer>
    </>
  );
}