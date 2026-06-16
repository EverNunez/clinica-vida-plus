"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

type Props = {
  title: string;
  detail: string;
  before: string;
  after: string;
};

// Tarjeta comparativa con divisor arrastrable (antes / después).
export default function BeforeAfterCard({ title, detail, before, after }: Props) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(2, Math.min(98, pct)));
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-soft transition-shadow hover:shadow-card">
      <div
        ref={ref}
        className="relative aspect-[4/3] w-full cursor-ew-resize select-none touch-none"
        onMouseMove={(e) => dragging.current && updateFromClientX(e.clientX)}
        onMouseDown={(e) => {
          dragging.current = true;
          updateFromClientX(e.clientX);
        }}
        onMouseUp={() => (dragging.current = false)}
        onMouseLeave={() => (dragging.current = false)}
        onTouchStart={() => (dragging.current = true)}
        onTouchMove={(e) => updateFromClientX(e.touches[0].clientX)}
        onTouchEnd={() => (dragging.current = false)}
      >
        {/* Después (fondo) */}
        <Image
          src={after}
          alt={`${title} — después`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
        <span className="absolute right-3 top-3 rounded-full bg-mint-500/90 px-3 py-1 text-xs font-semibold text-white shadow-soft">
          Después
        </span>

        {/* Antes (recortado con clip-path para conservar proporción) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src={before}
            alt={`${title} — antes`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
          <span className="absolute left-3 top-3 rounded-full bg-ink/70 px-3 py-1 text-xs font-semibold text-white shadow-soft">
            Antes
          </span>
        </div>

        {/* Divisor */}
        <div
          className="absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.05)]"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute top-1/2 left-1/2 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-brand-600 shadow-card">
            <MoveHorizontal className="h-4 w-4" />
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
        <p className="mt-1 text-sm text-ink/60">{detail}</p>
      </div>
    </div>
  );
}
