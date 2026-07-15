import Image from "next/image";
import Link from "next/link";
import type { ProjectImage } from "@/components/ProjectImageLightbox";

type SplitHeroImage = ProjectImage & {
  objectPosition?: string;
};

type SplitProjectHeroProps = {
  actions: Array<{
    href: string;
    label: string;
    variant?: "primary" | "secondary";
  }>;
  accent?: "emerald" | "warm";
  description: string;
  images: SplitHeroImage[];
  kicker: string;
  meta: string;
  roles: string;
  title: string;
};

export function SplitProjectHero({
  actions,
  accent = "emerald",
  description,
  images,
  kicker,
  meta,
  roles,
  title
}: SplitProjectHeroProps) {
  const accentClass = accent === "warm" ? "text-[#ff9b62]" : "text-emerald";
  const primaryClass =
    accent === "warm"
      ? "bg-[#ff9b62] text-black hover:bg-white"
      : "bg-emerald text-black hover:bg-white";
  const secondaryClass =
    accent === "warm"
      ? "border-white/22 text-white hover:border-[#ff9b62] hover:text-[#ff9b62]"
      : "border-white/22 text-white hover:border-emerald hover:text-emerald";
  const cycleSeconds = Math.max(images.length * 7, 7);

  return (
    <section className="border-b border-white/10 bg-black">
      <div className="mx-auto flex min-h-[70vh] w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:min-h-screen lg:px-10">
        <nav className="flex items-center justify-between border-b border-white/10 pb-5 text-sm">
          <Link className="font-semibold uppercase tracking-[0.18em]" href="/">
            Liam Lawler
          </Link>
          <Link
            className="text-white/64 transition hover:text-emerald"
            href="/#projects"
          >
            Back to Projects
          </Link>
        </nav>

        <div className="grid flex-1 gap-10 py-12 lg:grid-cols-[0.42fr_0.58fr] lg:items-center lg:py-16">
          <div className="max-w-xl">
            <p
              className={`text-xs font-semibold uppercase tracking-[0.22em] ${accentClass}`}
            >
              {kicker}
            </p>
            <h1 className="mt-5 text-5xl font-semibold leading-none sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/68">
              {description}
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-white/72">
              {meta}
            </p>
            <p className="mt-3 text-sm uppercase tracking-[0.18em] text-white/52">
              {roles}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {actions.map((action) => (
                <a
                  className={`rounded-md px-5 py-3 text-sm font-semibold transition ${
                    action.variant === "secondary"
                      ? `border ${secondaryClass}`
                      : primaryClass
                  }`}
                  href={action.href}
                  key={`${action.label}-${action.href}`}
                >
                  {action.label}
                </a>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/50 lg:aspect-[16/11]">
            {images.map((image, index) => (
              <Image
                alt={image.alt}
                className="project-split-hero-frame object-cover"
                fill
                key={image.src}
                priority={index === 0}
                sizes="(min-width: 1024px) 58vw, 100vw"
                src={image.src}
                style={{
                  animationDelay: `${index * 7}s`,
                  animationDuration: `${cycleSeconds}s`,
                  objectPosition: image.objectPosition ?? "center"
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
