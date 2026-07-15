import Image from "next/image";
import Link from "next/link";
import type { ProjectImage } from "./ProjectImageLightbox";

const heroMeta = [
  "2024\u20132025 \u2022 Documentary \u2022 10m 34s",
  "Director \u2022 Cinematographer \u2022 Editor"
];

export function BecomingLolaHero({ images }: { images: ProjectImage[] }) {
  return (
    <section className="relative min-h-[70vh] overflow-hidden border-b border-white/10 lg:min-h-screen">
      <div className="absolute inset-0 motion-safe:animate-lola-parallax">
        {images.map((image, index) => (
          <Image
            alt={image.alt}
            className="lola-hero-frame object-cover"
            fill
            key={image.src}
            priority={index === 0}
            sizes="100vw"
            src={image.src}
            style={{
              animationDelay: `${index * 7}s`
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#060101_0%,rgba(15,4,4,0.9)_42%,rgba(0,0,0,0.42)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(245,91,36,0.24),transparent_34rem)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[70vh] w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:min-h-screen lg:px-10">
        <nav className="flex items-center justify-between border-b border-white/10 pb-5 text-sm">
          <Link className="font-semibold uppercase tracking-[0.18em]" href="/">
            Liam Lawler
          </Link>
          <Link
            className="text-white/64 transition hover:text-[#ff9b62]"
            href="/#projects"
          >
            Back to Projects
          </Link>
        </nav>

        <div className="flex flex-1 items-end py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl animate-rise">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ff9b62]">
              Short Documentary
            </p>
            <h1 className="mt-5 text-5xl font-semibold leading-none sm:text-7xl lg:text-8xl">
              BECOMING LOLA
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72">
              A short documentary following a transgender drag queen on the road
              to her electrifying performance at The Night of 1,000 Lolas.
            </p>
            <div className="mt-6 grid gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-white/64 sm:flex sm:flex-wrap">
              {heroMeta.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                className="rounded-md bg-[#ff9b62] px-5 py-3 text-sm font-semibold text-black transition hover:bg-white"
                href="#watch-documentary"
              >
                Watch Documentary
              </a>
              <a
                className="rounded-md border border-white/22 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#ff9b62] hover:text-[#ff9b62]"
                href="#stills-gallery"
              >
                View Stills
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
