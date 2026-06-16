"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarCheck, ArrowRight, ShieldCheck, Star, HeartPulse } from "lucide-react";
import { site, waLink } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-hero-radial pt-28 sm:pt-32"
    >
      {/* Formas suaves decorativas */}
      <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-mint-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-brand-200/40 blur-3xl" />

      <div className="container-px relative grid items-center gap-12 pb-20 pt-10 lg:grid-cols-2 lg:gap-8 lg:pb-28">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            <HeartPulse className="h-4 w-4" />
            Clínica de salud y estética
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 font-display text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl lg:text-[3.4rem]"
          >
            Tu salud, tu estética y tu bienestar en{" "}
            <span className="bg-gradient-to-r from-brand-500 to-mint-500 bg-clip-text text-transparent">
              manos profesionales
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink/65"
          >
            Una clínica moderna con atención personalizada en {""}
            Ciudad del Este. Combinamos tecnología, calidez humana y profesionales
            certificados para cuidar de vos en cada detalle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <CalendarCheck className="h-4 w-4" />
              Reservar por WhatsApp
            </a>
            <a href="#servicios" className="btn-ghost">
              Ver servicios
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex items-center gap-5 text-sm text-ink/60"
          >
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-mint-500" />
              Profesionales certificados
            </span>
            <span className="inline-flex items-center gap-2">
              <Star className="h-5 w-5 text-gold-400" fill="currentColor" />
              4.9 / 5 en reseñas
            </span>
          </motion.div>
        </div>

        {/* Imagen + tarjetas flotantes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/60 shadow-card">
            <Image
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80"
              alt="Profesional de la salud en consultorio moderno"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
          </div>

          {/* Tarjeta flotante superior */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute -left-4 top-10 hidden rounded-2xl border border-white/70 bg-white/90 p-4 shadow-glow backdrop-blur-md sm:block"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-mint-100 text-mint-500">
                <HeartPulse className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-ink">Atención integral</p>
                <p className="text-xs text-ink/55">Salud · Estética · Bienestar</p>
              </div>
            </div>
          </motion.div>

          {/* Tarjeta flotante inferior */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.62 }}
            className="absolute -bottom-5 right-2 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-glow backdrop-blur-md sm:right-6"
          >
            <p className="text-2xl font-bold text-brand-600">+3.500</p>
            <p className="text-xs font-medium text-ink/55">pacientes felices</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
