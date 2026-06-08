import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, Home, Users, Leaf, Eye, EyeOff } from "lucide-react";
import smartCityImg from "@/assets/smart-city.jpg";

function SocietyLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-green-dark"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      </div>
      <span className="font-heading text-lg font-semibold tracking-tight">Smart Housing</span>
    </div>
  );
}

function FeatureItem({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof Shield;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3.5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
        <Icon className="h-5 w-5 text-gold" />
      </div>
      <div>
        <h3 className="font-heading text-sm font-semibold text-white">{title}</h3>
        <p className="mt-0.5 text-sm text-white/70">{description}</p>
      </div>
    </div>
  );
}

function GoogleIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="20" height="20">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire up authentication
    console.log("Login attempted:", { email, password });
  };

  const features = [
    {
      icon: Shield,
      title: "Advanced Security",
      description: "24/7 surveillance and smart access control for your peace of mind.",
    },
    {
      icon: Home,
      title: "Smart Home Integration",
      description: "Control lighting, climate, and appliances from anywhere.",
    },
    {
      icon: Users,
      title: "Vibrant Community",
      description: "Connect with neighbors, events, and shared spaces effortlessly.",
    },
    {
      icon: Leaf,
      title: "Green Living",
      description: "Sustainable practices and eco-friendly amenities for a better tomorrow.",
    },
  ];

  return (
    <div className="flex min-h-screen w-full bg-background">
      {/* Left Panel — Visual */}
      <div className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-green-dark lg:flex">
        {/* Background image with overlay */}
        <img
          src={smartCityImg}
          alt="Smart city"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-dark/80 via-primary/70 to-green-dark/90" />

        {/* Decorative shapes */}
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-green-light/20 blur-3xl" />

        <div className="relative z-10 flex flex-col h-full justify-between p-12">
          {/* Top: Logo */}
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-dark"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <span className="font-heading text-lg font-semibold text-white">
                Smart Housing Society
              </span>
            </div>
          </div>

          {/* Middle: Tagline + Features */}
          <div className="space-y-10">
            <div>
              <h2 className="font-heading text-4xl font-bold leading-tight text-white">
                Smart Living,
                <br />
                <span className="text-gold">Better Future</span>
              </h2>
              <p className="mt-3 max-w-sm text-base text-white/80">
                Experience the next generation of community living where technology meets comfort
                and sustainability.
              </p>
            </div>

            <div className="space-y-5">
              {features.map((feature) => (
                <FeatureItem key={feature.title} {...feature} />
              ))}
            </div>
          </div>

          {/* Bottom: stats or quote */}
          <div className="flex gap-8">
            <div>
              <p className="font-heading text-2xl font-bold text-gold">2,500+</p>
              <p className="text-sm text-white/60">Happy Residents</p>
            </div>
            <div>
              <p className="font-heading text-2xl font-bold text-gold">99.9%</p>
              <p className="text-sm text-white/60">Uptime Guarantee</p>
            </div>
            <div>
              <p className="font-heading text-2xl font-bold text-gold">50+</p>
              <p className="text-sm text-white/60">Smart Amenities</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel — Login Form */}
      <div className="flex w-full flex-col items-center justify-center bg-background px-6 py-12 lg:w-1/2">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="mb-8 flex justify-center lg:hidden">
            <SocietyLogo />
          </div>

          {/* Desktop logo */}
          <div className="mb-8 hidden lg:flex lg:justify-center">
            <SocietyLogo />
          </div>

          <div className="text-center">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground">
              Welcome Back
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Enter your credentials to access your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-11"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <Link
                  to="/forgot-password"
                  className="text-xs font-medium text-primary hover:text-primary/80 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-11 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="h-11 w-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold text-base"
            >
              Sign In
            </Button>
          </form>

          <div className="relative mt-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            className="mt-6 h-11 w-full gap-2 bg-white font-medium text-foreground hover:bg-muted border-input"
            onClick={() => {
              // TODO: Wire up Google OAuth
              console.log("Google sign in clicked");
            }}
          >
            <GoogleIcon />
            Google
          </Button>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-primary hover:text-primary/80 hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
