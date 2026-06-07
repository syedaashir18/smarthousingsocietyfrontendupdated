"use client";

import { useState } from "react";
import { Eye, EyeOff, Shield, Home, Users, Leaf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-12 text-white overflow-hidden">
        <div className="absolute inset-0 bg-green-900 z-0" />
        <div className="absolute inset-0 z-0 bg-[url('/images/smart-city.jpg')] bg-cover bg-center opacity-30" />
        <div className="relative z-10">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo" width={50} height={50} className="object-contain" />
            <span className="font-bold text-lg">Smart Housing Society</span>
          </div>
          <div className="mt-16">
            <h1 className="text-4xl font-bold">Smart Living,</h1>
            <h1 className="text-4xl font-bold text-yellow-400">Better Future</h1>
            <p className="text-green-200 mt-4 text-sm leading-relaxed">
              Experience the next generation of community living where technology meets comfort and
              sustainability.
            </p>
          </div>
          <div className="mt-12 space-y-6">
            {[
              {
                icon: Shield,
                title: "Advanced Security",
                desc: "24/7 surveillance and smart access control for your peace of mind.",
              },
              {
                icon: Home,
                title: "Smart Home Integration",
                desc: "Control lighting, climate, and appliances from anywhere.",
              },
              {
                icon: Users,
                title: "Vibrant Community",
                desc: "Connect with neighbors, events, and shared spaces effortlessly.",
              },
              {
                icon: Leaf,
                title: "Green Living",
                desc: "Sustainable practices and eco-friendly amenities for a better tomorrow.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-green-700/50 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-green-300" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{title}</p>
                  <p className="text-green-300 text-xs mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-6">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo" width={45} height={45} className="object-contain" />
            <span className="font-bold text-lg">Smart Housing</span>
          </div>
          <div>
            <h2 className="text-3xl font-bold">Welcome Back</h2>
            <p className="text-gray-500 text-sm mt-1">
              Enter your credentials to access your account
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label className="text-sm font-medium text-gray-700">Password</label>
                <Link href="/forgot-password" className="text-sm text-green-700 hover:underline">
                  Forgot Password?
                </Link>
              </div>
              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <button className="w-full bg-green-800 text-white rounded-lg py-3 font-semibold hover:bg-green-700">
              Sign In
            </button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-xs text-gray-400 uppercase">
                <span className="bg-white px-2">OR CONTINUE WITH</span>
              </div>
            </div>
            <button className="w-full border rounded-lg py-3 text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-50">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
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
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </button>
          </div>
          <p className="text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link href="/signup" className="text-green-700 font-medium hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
