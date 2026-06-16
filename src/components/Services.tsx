"use client";

import { motion } from "framer-motion";
import {
  Smile,
  Sparkles,
  Droplets,
  Flower2,
  Zap,
  Stethoscope,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { services, waLink } from "@/lib/site";
import SectionHeading from "./SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  Tooth: Smile,
  Sparkles,
  Droplets,
  Flower2,
  Zap,
  Stethoscope,
};

export default function Services() {
  return (
    <section id="servicios" className="py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Nuestros servicios"
          title="Cuidamos tu salud y tu estética"
          subtitle="Tratamientos modernos y personalizados, realizados por especialistas, con la última tecnología y el máximo confort."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Sparkles;
            return (
              <motion.article
                key={service.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group relative flex flex-col rounded-3xl border border-brand-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-card"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-50 to-mint-100 text-brand-600 transition-colors group-hover:from-brand-100 group-hover:to-mint-200">
                  <Icon className="h-7 w-7" strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  {service.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">
                  {service.description}
                </p>
                <a
                  href={waLink(
                    `Hola, me gustaría consultar sobre el servicio de ${service.name} en Clínica Vida Plus.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                >
                  Consultar
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
