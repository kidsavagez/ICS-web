"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    name: "Brief",
    duration: "4 days",
    description: "We listen hard. No yes-men.",
  },
  {
    num: "02",
    name: "Concept",
    duration: "5 days",
    description: "We pitch 3 routes. You pick.",
  },
  {
    num: "03",
    name: "Pre-prod",
    duration: "1 wk",
    description: "Crew, gear, locations — locked.",
  },
  {
    num: "04",
    name: "Shoot",
    duration: "1-3 days",
    description: "We capture what matters.",
  },
  {
    num: "05",
    name: "Post",
    duration: "5-7 days",
    description: "Final cut, sound, color, deliver.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-ink py-20 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 max-w-4xl"
        >
          <p className="text-eyebrow uppercase text-pink mb-4">How we work</p>
          <h2
            className="font-display text-cream leading-[0.95] tracking-tight uppercase"
            style={{ fontSize: "clamp(2rem, 6vw, 6rem)" }}
          >
            From brief to broadcast,
            <br />in five honest steps.
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6 relative">
          {/* Connecting line — desktop only */}
          <div className="hidden md:block absolute left-0 right-0 top-[14px] h-px bg-cream/15" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              {/* Numbered dot */}
              <div className="flex items-center gap-3 mb-5 bg-ink pr-2 md:w-fit relative z-10">
                <div className="w-7 h-7 rounded-full bg-pink flex items-center justify-center shrink-0">
                  <span className="text-white text-[10px] font-bold uppercase tracking-wider">
                    {step.num}
                  </span>
                </div>
              </div>

              <h3 className="font-display text-heading-md text-cream mb-3 leading-tight">
                {step.name}
              </h3>
              <p className="text-body-sm text-cream/65 mb-4 leading-relaxed max-w-[200px]">
                {step.description}
              </p>
              <p className="text-body-sm font-semibold text-pink uppercase tracking-wider">
                {step.duration}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
