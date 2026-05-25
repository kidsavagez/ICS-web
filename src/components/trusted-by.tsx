"use client";

import { motion } from "framer-motion";
import { featuredProjects } from "@/lib/projects";

export function TrustedBy() {
  const clients = Array.from(new Set(featuredProjects.map((p) => p.client)));
  // Duplicate the list so the marquee can loop seamlessly.
  const marqueeList = [...clients, ...clients];

  return (
    <section
      id="clients"
      className="relative bg-ink py-16 md:py-24 overflow-hidden"
    >
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-eyebrow uppercase text-pink mb-10 md:mb-14 text-center relative z-10"
      >
        Trusted by teams who hire us back
      </motion.p>

      {/* Marquee row — edges masked so text fades in/out cleanly */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee gap-x-16 md:gap-x-24 will-change-transform">
          {marqueeList.map((client, i) => (
            <span
              key={`${client}-${i}`}
              className="font-display text-cream/70 hover:text-cream transition-colors duration-fast tracking-wide uppercase whitespace-nowrap"
              style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
            >
              {client}
              <span className="text-pink ml-16 md:ml-24">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
