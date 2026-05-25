"use client";

import { motion } from "framer-motion";
import { Film, Megaphone, Camera, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Film,
    name: "Brand Films",
    description:
      "Story-driven films that make people feel something — and remember.",
    price: "From IDR 20M",
  },
  {
    icon: Megaphone,
    name: "Advertising",
    description:
      "TVCs, social cutdowns, and campaigns built to convert and travel.",
    price: "From IDR 25M",
  },
  {
    icon: Camera,
    name: "Documentation",
    description:
      "Long-form docs, event coverage, and behind-the-scenes archives.",
    price: "From IDR 15M",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-cream py-20 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16 max-w-4xl"
        >
          <p className="text-eyebrow uppercase text-teal mb-4">What we do</p>
          <h2
            className="font-display text-ink leading-[0.95] tracking-tight uppercase"
            style={{ fontSize: "clamp(2rem, 6vw, 6rem)" }}
          >
            Three things,
            <br />done well.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="bg-bg rounded-lg p-8 md:p-10 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-normal ease-brand flex flex-col"
            >
              <service.icon
                className="w-10 h-10 text-teal mb-6"
                strokeWidth={1.5}
              />
              <h3 className="font-display text-heading-lg text-ink mb-3 leading-tight">
                {service.name}
              </h3>
              <p className="text-body text-muted mb-8 leading-relaxed flex-1">
                {service.description}
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <p className="text-body-sm font-semibold text-pink uppercase tracking-wider">
                  {service.price}
                </p>
                <ArrowUpRight className="w-4 h-4 text-teal" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
