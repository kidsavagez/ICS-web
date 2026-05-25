"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { featuredProjects } from "@/lib/projects";

export function FeaturedWork() {
  return (
    <section id="work" className="bg-bg py-20 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 max-w-4xl"
        >
          <p className="text-eyebrow uppercase text-teal mb-4">
            Selected Work — 2024 / 2025
          </p>
          <h2
            className="font-display text-ink leading-[0.95] tracking-tight uppercase"
            style={{ fontSize: "clamp(2rem, 6vw, 6rem)" }}
          >
            Six films we're proud of.
          </h2>
        </motion.div>

        {/* Project rows — alternating sides */}
        <div className="space-y-20 md:space-y-32">
          {featuredProjects.map((project, i) => {
            const flipped = i % 2 === 1;
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-center"
              >
                {/* Poster */}
                <div className={`md:col-span-7 ${flipped ? "md:order-2" : ""}`}>
                  <a
                    href={project.hosted.youtubeUrl ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Watch ${project.client} — ${project.title}`}
                    className="group block relative aspect-[16/10] rounded-lg overflow-hidden bg-ink"
                  >
                    {project.hosted.poster && (
                      <img
                        src={project.hosted.poster}
                        alt={`${project.client} — ${project.title}`}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-normal ease-brand group-hover:scale-105"
                        loading="lazy"
                      />
                    )}
                    <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors duration-normal" />

                    {/* Play indicator on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-normal">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-pink text-white flex items-center justify-center shadow-card-hover">
                        <Play className="w-6 h-6 ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </a>
                </div>

                {/* Info */}
                <div className={`md:col-span-5 ${flipped ? "md:order-1" : ""}`}>
                  <p className="text-eyebrow uppercase text-pink mb-3 font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="text-eyebrow uppercase text-teal mb-4">
                    {project.format} · {project.year}
                  </p>
                  <h3
                    className="font-display text-ink leading-[1.05] tracking-tight mb-5"
                    style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
                  >
                    {project.client}
                  </h3>
                  {project.description && (
                    <p className="text-body-lg text-muted mb-6 max-w-md leading-snug">
                      {project.description}
                    </p>
                  )}
                  {project.duration && (
                    <p className="text-body-sm text-muted mb-8">
                      Duration · {project.duration}
                    </p>
                  )}
                  <a
                    href={project.hosted.youtubeUrl ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 text-teal hover:text-pink transition-colors text-body-sm font-semibold uppercase tracking-wider"
                  >
                    Watch the film
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-fast group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
