"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/site";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="relative overflow-hidden bg-gradient-to-b from-white to-brand-50/50 py-20 sm:py-28"
    >
      <div className="container-px">
        <SectionHeading
          eyebrow="Testimonios"
          title="Lo que dicen nuestros pacientes"
          subtitle="La confianza de quienes ya viven la experiencia Clínica Vida Plus."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="flex flex-col rounded-3xl border border-brand-100 bg-white p-6 shadow-soft transition-shadow hover:shadow-card"
            >
              <Quote className="h-8 w-8 text-brand-200" fill="currentColor" />
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star
                    key={s}
                    className="h-4 w-4 text-gold-400"
                    fill="currentColor"
                  />
                ))}
              </div>
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-mint-500 text-sm font-semibold text-white">
                  {t.name.charAt(0)}
                </span>
                <span className="text-sm font-semibold text-ink">{t.name}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
