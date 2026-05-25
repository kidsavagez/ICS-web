"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "@/lib/projects";

// Background reel for the hero — SKY US Feed.
const HERO_BG_YOUTUBE_ID = "1y3eXZwY2L4";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);

  // Force the iframe to act like object-fit: cover at 16:9, even when the section
  // overflows past 100vh on mobile (where w-[177.78vh] math breaks).
  useEffect(() => {
    const update = () => {
      const section = sectionRef.current;
      const wrap = videoWrapperRef.current;
      if (!section || !wrap) return;

      const sw = section.clientWidth;
      const sh = section.clientHeight;
      const target = 16 / 9;
      const sectionAspect = sw / sh;

      if (sectionAspect >= target) {
        // Wider than 16:9 — scale by width, height overscans
        wrap.style.width = `${sw}px`;
        wrap.style.height = `${sw / target}px`;
      } else {
        // Taller than 16:9 — scale by height, width overscans
        wrap.style.height = `${sh}px`;
        wrap.style.width = `${sh * target}px`;
      }
    };

    update();
    const ro = new ResizeObserver(update);
    if (sectionRef.current) ro.observe(sectionRef.current);
    return () => ro.disconnect();
  }, []);

  const embedUrl =
    `https://www.youtube.com/embed/${HERO_BG_YOUTUBE_ID}` +
    `?autoplay=1&mute=1&loop=1&playlist=${HERO_BG_YOUTUBE_ID}` +
    `&controls=0&modestbranding=1&playsinline=1&rel=0&showinfo=0` +
    `&iv_load_policy=3&disablekb=1`;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-ink"
    >
      {/* Full-bleed background video — JS-sized to maintain 16:9 cover */}
      <div
        ref={videoWrapperRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      >
        <iframe
          src={embedUrl}
          title="Iago reel"
          allow="autoplay; encrypted-media; picture-in-picture"
          loading="eager"
          className="w-full h-full border-0"
        />
      </div>

      {/* Top vignette — subtle darken behind the headline */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/45 via-transparent to-transparent" />

      {/* Bottom gradient — fades video into ink */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink via-ink/85 to-transparent" />

      {/* Solid ink rest band at the very bottom — guarantees seamless join with the next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 md:h-40 bg-ink pointer-events-none" />

      {/* Content stack */}
      <div className="relative z-10 min-h-screen flex flex-col pt-[88px]">
        {/* Centered text block */}
        <div className="flex-1 max-w-[1440px] mx-auto w-full px-6 md:px-10 flex flex-col items-center justify-center text-center pt-8 pb-12">

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-eyebrow uppercase text-cream/85 mb-6 flex items-center gap-3"
          >
            <span className="w-8 h-px bg-pink" />
            Iago Creative Space
            <span className="w-8 h-px bg-pink" />
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-cream leading-[1.02] tracking-tight max-w-5xl"
            style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
          >
            Visual stories{" "}
            <span className="italic font-light tracking-tighter">&amp;</span>{" "}
            brand films
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-body-lg text-cream/80 max-w-2xl leading-snug"
          >
            A creative studio in Surabaya crafting brand films, ads, and
            documentary work for teams who refuse to be skipped.
          </motion.p>
        </div>

        {/* Cards row — all 6 projects */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[1440px] mx-auto w-full px-6 md:px-10 pb-10 md:pb-14"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {featuredProjects.map((project, i) => (
              <motion.a
                key={project.id}
                href={project.hosted.youtubeUrl ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Watch ${project.client} — ${project.title}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.7 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative aspect-[4/5] rounded-lg overflow-hidden bg-ink/40"
              >
                {project.hosted.poster && (
                  <img
                    src={project.hosted.poster}
                    alt={`${project.client} — ${project.title}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-normal ease-brand group-hover:scale-110"
                    loading="lazy"
                  />
                )}

                {/* Bottom gradient for label legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/30 to-transparent" />

                {/* Card content */}
                <div className="absolute inset-0 p-3 md:p-4 flex items-end justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-eyebrow uppercase text-cream/60 mb-1 truncate">
                      {project.format}
                    </p>
                    <p className="text-cream text-body-sm font-semibold leading-tight truncate">
                      {project.client}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="w-4 h-4 md:w-5 md:h-5 text-cream/80 group-hover:text-pink transition-colors duration-fast shrink-0"
                    strokeWidth={2.25}
                  />
                </div>

                {/* Hover ring */}
                <div className="absolute inset-0 rounded-lg ring-0 ring-pink group-hover:ring-2 transition-all duration-fast" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
