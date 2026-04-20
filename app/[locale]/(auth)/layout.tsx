"use client";
import Image from "next/image";
import { type PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/signup-image.png"
          alt="Background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      {/* Auth form container */}
      <div className="relative z-10 w-full max-w-md p-6 mx-4">
        {children}
      </div>
    </div>
  );
}
