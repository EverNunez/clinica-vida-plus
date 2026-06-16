import { MapPin, MessageCircle, Instagram } from "lucide-react";
import { navLinks, site, waLink } from "@/lib/site";
import { LogoMark } from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-brand-100 bg-white">
      <div className="container-px grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-10 w-10" />
            <span className="font-display text-lg font-semibold text-ink">
              {site.name}
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/60">
            Clínica moderna de salud, odontología y estética. Cuidamos de vos con
            profesionalismo, tecnología y calidez humana.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-ink">
            Secciones
          </h4>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-ink/60 transition-colors hover:text-brand-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-ink">
            Contacto
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-ink/60">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
              {site.address}
            </li>
            <li>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-brand-600"
              >
                <MessageCircle className="h-4 w-4 text-mint-500" />
                WhatsApp {site.whatsapp.display}
              </a>
            </li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-brand-600"
              >
                <Instagram className="h-4 w-4 text-brand-500" />
                @clinicavidaplus
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-ink">
            Reservá tu turno
          </h4>
          <p className="mt-4 text-sm text-ink/60">
            Agendá tu cita de forma rápida y sencilla por WhatsApp.
          </p>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-4 w-full"
          >
            <MessageCircle className="h-4 w-4" />
            Reservar ahora
          </a>
        </div>
      </div>

      <div className="border-t border-brand-100">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-6 text-center text-xs text-ink/50 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {site.name}. Todos los derechos
            reservados.
          </p>
          <p>Diseño y desarrollo por Ever Núñez.</p>
        </div>
      </div>
    </footer>
  );
}
