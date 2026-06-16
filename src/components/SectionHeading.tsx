import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: Props) {
  return (
    <Reveal>
      <div
        className={
          align === "center"
            ? "mx-auto max-w-2xl text-center"
            : "max-w-2xl text-left"
        }
      >
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="section-title mt-4">{title}</h2>
        {subtitle && (
          <p className="mt-4 text-lg leading-relaxed text-ink/60">{subtitle}</p>
        )}
      </div>
    </Reveal>
  );
}
