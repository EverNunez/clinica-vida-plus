"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

export default function FloatingWhatsapp() {
  return (
    <motion.a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Reservar turno por WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-mint-500 px-4 py-3.5 text-white shadow-card transition-all duration-300 hover:bg-mint-400"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-mint-500/50" />
      <MessageCircle className="h-6 w-6" />
      <span className="hidden text-sm font-semibold sm:inline">
        Reservar turno
      </span>
    </motion.a>
  );
}
