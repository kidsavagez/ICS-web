"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[88px] bg-transparent">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 h-full flex items-center justify-between">
        <Link
          href="/"
          aria-label="Iago Creative Space — Home"
          className="flex items-center text-cream"
        >
          {/* Drop the PNG at public/logos/iago-logo.png. The page is dark end-to-end now,
              so a cream/reversed logo variant will read best. */}
          <img
            src="/logos/iago-logo.png"
            alt="Iago Creative Space"
            className="h-12 w-auto"
          />
        </Link>

        <Link
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-body-sm font-semibold uppercase tracking-wider transition-colors duration-fast ease-brand backdrop-blur-sm bg-cream/15 hover:bg-cream text-cream hover:text-teal"
        >
          Get in touch
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </header>
  );
}
