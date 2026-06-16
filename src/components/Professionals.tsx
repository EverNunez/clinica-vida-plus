"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { professionals } from "@/lib/site";
import SectionHeading from "./SectionHeading";

export default function Professionals() {
  return (
    <section id="profesionales" className="py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Nuestro equipo"
          title="Profesionales que te acompañan"
          subtitle="Un equipo certificado y cercano, comprometido con tu bienestar en cada consulta."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {professionals.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={p.photo}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/0 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                  <p className="text-sm text-white/80">{p.role}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm leading-relaxed text-ink/60">{p.bio}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700"
                    >
                      <BadgeCheck className="h-3.5 w-3.5" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
