"use client";

import { motion } from "framer-motion";

// PSB Academy event film — provides the video bg behind the quote.
const TESTIMONIAL_YOUTUBE_ID = "rB5azC5_TRs";

export function Testimonial() {
  const embedUrl =
    `https://www.youtube.com/embed/${TESTIMONIAL_YOUTUBE_ID}` +
    `?autoplay=1&mute=1&loop=1&playlist=${TESTIMONIAL_YOUTUBE_ID}` +
    `&controls=0&modestbranding=1&playsinline=1&rel=0&showinfo=0` +
    `&iv_load_policy=3&disablekb=1`;

  return (
    <section className="relative bg-ink py-24 md:py-40 overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 pointer-events-none">
        <iframe
          src={embedUrl}
          title="PSB Academy background reel"
          allow="autoplay; encrypted-media; picture-in-picture"
          loading="lazy"
          className="absolute top-1/2 left-1/2 w-[177.78vh] h-[56.25vw] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 border-0"
        />
      </div>

      {/* Overlay: solid ink at top + bottom, video shows through in the middle.
         Top edge matches Process section's solid ink; bottom edge matches Final CTA's solid ink. */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <p className="text-eyebrow uppercase text-pink mb-10">
            A note from a client
          </p>

          <blockquote
            className="font-display text-cream leading-[1.05] tracking-tight mb-12"
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 4rem)" }}
          >
            <span className="text-pink">"</span>
            Iago bring a fresh idea that we never experience before, the result
            are beyond our expectation, can't wait for the next project XOXO
            <span className="text-pink">"</span>
          </blockquote>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-cream/15 flex items-center justify-center">
              <span className="font-display text-cream text-heading-md">W</span>
            </div>
            <div>
              <p className="text-cream font-semibold text-body">Wen Fei — Marketing Lead</p>
              <p className="text-cream/60 text-body-sm uppercase tracking-wider">
                PSB Academy
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
