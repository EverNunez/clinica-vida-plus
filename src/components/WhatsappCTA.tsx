"use client";

import { motion } from "framer-motion";
import { MessageCircle, Clock, ShieldCheck } from "lucide-react";
import { site, waLink } from "@/lib/site";

export default function WhatsappCTA() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-600 via-brand-500 to-mint-500 px-7 py-14 text-center shadow-card sm:px-12"
        >
          {/* Formas decorativas */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

          <div className="relative mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              <MessageCircle className="h-4 w-4" />
              Reservas por WhatsApp
            </span>
            <h2 className="mt-5 font-display text-3xl font-semibold text-white sm:text-4xl">
              Reservá tu turno de forma rápida
            </h2>
            <p className="mt-4 text-lg text-white/85">
              Consultá la disponibilidad y agendá tu cita en segundos. Te
              respondemos al instante para coordinar el mejor horario para vos.
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 text-base font-semibold text-brand-700 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card"
              >
                <MessageCircle className="h-5 w-5 text-mint-500" />
                Agendar turno por WhatsApp
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-sm text-white/85">
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Respuesta inmediata
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                Atención profesional
              </span>
              <span className="font-semibold">{site.whatsapp.display}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
