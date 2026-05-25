"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type SvgProps = { className?: string };

function InstagramIcon({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function LinkedinIcon({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const SOCIALS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/iagocreativespace",
    Icon: InstagramIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/iagocreativespace/",
    Icon: LinkedinIcon,
  },
];

const CONTACT_EMAIL = "iagocreativespace@gmail.com";

export function FinalCTA() {
  return (
    <section id="contact" className="bg-ink py-24 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="font-display text-cream leading-[0.95] tracking-tight uppercase mb-8"
            style={{ fontSize: "clamp(2.25rem, 7vw, 7rem)" }}
          >
            Let's make
            <br />
            <span className="italic font-light">something</span> good.
          </h2>

          <p className="text-body-lg text-cream/70 max-w-xl mx-auto mb-12 leading-snug">
            Tell us what you're working on. We'll reply within 24 hours with
            three honest thoughts on how to make it watchable.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 md:mb-20">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 bg-pink hover:bg-pink-600 text-white rounded-full px-8 py-4 text-body font-semibold uppercase tracking-wider transition-colors duration-fast ease-brand"
            >
              Start a project
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-cream/80 hover:text-pink transition-colors text-body-sm tracking-wider font-semibold break-all"
            >
              or email us → {CONTACT_EMAIL}
            </a>
          </div>

          {/* Social links */}
          <div className="border-t border-cream/10 pt-10 md:pt-12 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <p className="text-eyebrow uppercase text-cream/40">Follow us</p>
            <div className="flex items-center gap-8 md:gap-10">
              {SOCIALS.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-cream/70 hover:text-pink transition-colors duration-fast ease-brand text-body-sm uppercase tracking-wider font-semibold"
                >
                  <Icon className="w-4 h-4" />
                  {name}
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-fast group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
