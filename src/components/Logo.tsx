import { site } from "@/lib/site";

type LogoMarkProps = {
  className?: string;
};

// Isotipo: corazón (cuidado/salud) con una cruz médica calada que deja ver
// el degradado de fondo. Limpio, premium y reconocible en tamaños chicos.
export function LogoMark({ className = "h-10 w-10" }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label={`${site.name} logo`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="vidaplus-grad"
          x1="4"
          y1="4"
          x2="44"
          y2="44"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#4aadc6" />
          <stop offset="0.55" stopColor="#2c91ad" />
          <stop offset="1" stopColor="#2fa37a" />
        </linearGradient>
      </defs>

      {/* Fondo squircle con degradado */}
      <rect x="2" y="2" width="44" height="44" rx="14" fill="url(#vidaplus-grad)" />

      {/* Corazón blanco */}
      <path
        d="M24 35.5c-.7 0-1.3-.25-1.85-.66C16.6 30.7 11.5 26.4 11.5 20.8c0-3.7 2.85-6.3 6.1-6.3 2.45 0 4.7 1.45 6.4 3.7 1.7-2.25 3.95-3.7 6.4-3.7 3.25 0 6.1 2.6 6.1 6.3 0 5.6-5.1 9.9-10.65 14.04-.55.41-1.15.66-1.85.66Z"
        fill="#ffffff"
      />

      {/* Cruz médica calada (deja ver el degradado del fondo) */}
      <rect x="21.5" y="16.4" width="5" height="14" rx="2.5" fill="url(#vidaplus-grad)" />
      <rect x="17" y="20.9" width="14" height="5" rx="2.5" fill="url(#vidaplus-grad)" />
    </svg>
  );
}

type LogoProps = {
  className?: string;
  markClassName?: string;
  /** Muestra el nombre + tagline al lado del isotipo. */
  showText?: boolean;
};

export default function Logo({
  className,
  markClassName,
  showText = true,
}: LogoProps) {
  return (
    <span className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark className={markClassName ?? "h-10 w-10 drop-shadow-sm"} />
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg font-semibold text-ink">
            {site.name}
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-brand-500">
            {site.tagline}
          </span>
        </span>
      )}
    </span>
  );
}
