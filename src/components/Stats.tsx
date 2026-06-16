"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/site";

export default function Stats() {
  return (
    <section className="container-px -mt-10 pb-4">
      <div className="grid grid-cols-2 gap-4 rounded-3xl border border-brand-100 bg-white/80 p-6 shadow-soft backdrop-blur-md sm:p-8 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-center"
          >
            <p className="font-display text-3xl font-semibold text-brand-600 sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm font-medium text-ink/60">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
