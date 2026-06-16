"use client";

import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { results } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import BeforeAfterCard from "./BeforeAfterCard";

export default function Results() {
  return (
    <section
      id="resultados"
      className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 to-white py-20 sm:py-28"
    >
      <div className="container-px">
        <SectionHeading
          eyebrow="Antes y Después"
          title="Resultados reales que generan confianza"
          subtitle="Arrastrá el control de cada imagen para comparar el antes y el después de nuestros tratamientos."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {results.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <BeforeAfterCard {...r} />
            </motion.div>
          ))}
        </div>

        <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-ink/50">
          <Info className="h-4 w-4 shrink-0" />
          Los resultados pueden variar según las características y necesidades de
          cada paciente.
        </p>
      </div>
    </section>
  );
}
