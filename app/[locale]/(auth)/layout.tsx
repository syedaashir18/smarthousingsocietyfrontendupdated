"use client";
import Image from "next/image";
import { type PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* 70% Image Area - hidden on smaller screens, visible on lg and above */}
      <div className="hidden lg:block lg:w-[65%] relative h-full">
        <Image
          src="/images/signup-image.png"
          alt="Background"
          fill
          priority
          className="object-cover"
          sizes="70vw"
        />
      </div>

      {/* 30% Form Area - scrolls independently if content is too tall */}
      <div className="w-full lg:w-[35%] flex items-center justify-center p-6 sm:p-10 h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
}
