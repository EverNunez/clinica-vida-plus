"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, ExternalLink } from "lucide-react";
import { site } from "@/lib/site";
import SectionHeading from "./SectionHeading";

export default function Location() {
  return (
    <section id="contacto" className="py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Ubicación y horarios"
          title="Estamos para atenderte"
          subtitle="Visitanos en nuestra clínica o coordiná tu turno con anticipación."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            <div className="flex items-start gap-4 rounded-3xl border border-brand-100 bg-white p-6 shadow-soft">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                <MapPin className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">
                  Dirección
                </h3>
                <p className="mt-1 text-sm text-ink/60">{site.address}</p>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  Ver ubicación en Google Maps
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-3xl border border-brand-100 bg-white p-6 shadow-soft">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-mint-100 text-mint-500">
                <Clock className="h-6 w-6" />
              </span>
              <div className="w-full">
                <h3 className="font-display text-lg font-semibold text-ink">
                  Horarios de atención
                </h3>
                <ul className="mt-2 space-y-2">
                  {site.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex items-center justify-between border-b border-dashed border-brand-100 pb-2 text-sm last:border-0 last:pb-0"
                    >
                      <span className="text-ink/70">{h.day}</span>
                      <span className="font-semibold text-ink">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-3xl border border-brand-100 bg-white p-6 shadow-soft">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gold-300/30 text-gold-500">
                <Phone className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">
                  WhatsApp / Teléfono
                </h3>
                <p className="mt-1 text-sm text-ink/60">{site.whatsapp.display}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-soft"
          >
            <iframe
              title="Ubicación Clínica Vida Plus"
              src={site.mapsEmbed}
              className="h-full min-h-[340px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
