import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  aboutCopy,
  awards,
  brand,
  clients,
  education,
  experience,
  galleryItems,
  navItems,
  projects,
  skillGroups
} from "@/data/portfolio";
import { GalleryLightbox } from "./GalleryLightbox";

const featuredProjects = projects.filter((project) => project.featured);

function SectionHeading({
  kicker,
  title,
  copy,
  dark = false
}: {
  kicker: string;
  title: string;
  copy?: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div>
        <div
          className={
            dark
              ? "mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-dark"
              : "section-kicker"
          }
        >
          {kicker}
        </div>
        <h2
          className={
            dark
              ? "text-4xl font-semibold leading-tight sm:text-5xl"
              : "section-title max-w-3xl"
          }
        >
          {title}
        </h2>
      </div>
      {copy ? (
        <p
          className={
            dark
              ? "max-w-sm leading-7 text-black/60"
              : "max-w-sm leading-7 text-white/54"
          }
        >
          {copy}
        </p>
      ) : null}
    </div>
  );
}

function ActionLink({
  href,
  children,
  variant = "primary",
  download = false
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  download?: boolean;
}) {
  const className =
    variant === "primary"
      ? "rounded-md bg-emerald px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:bg-white"
      : "rounded-md border border-white/22 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:border-emerald hover:text-emerald";

  return (
    <a className={className} download={download} href={href}>
      {children}
    </a>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen border-b border-white/10">
      <Image
        src="/cinematic-production-hero.png"
        alt="Cinematic production equipment lit with emerald studio light"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-[0.52]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0.8)_42%,rgba(0,0,0,0.24)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_18%,rgba(0,208,132,0.26),transparent_32rem)]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <nav className="animate-rise flex items-center justify-between border-b border-white/10 pb-5 text-sm">
          <a className="font-semibold uppercase tracking-[0.18em]" href="#">
            {brand.name}
          </a>
          <div className="hidden items-center gap-6 text-white/64 md:flex">
            {navItems.map((item) => (
              <a
                className="transition duration-300 hover:text-emerald"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            className="rounded-md border border-white/18 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/82 transition duration-300 hover:border-emerald hover:text-emerald"
            href="#contact"
          >
            Contact
          </a>
        </nav>

        <div className="grid flex-1 items-end gap-10 py-12 lg:grid-cols-[1fr_0.86fr] lg:pb-20">
          <div className="animate-rise max-w-4xl [animation-delay:120ms]">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-emerald">
              {brand.title}
            </p>
            <h1 className="text-balance text-5xl font-semibold leading-[0.96] sm:text-7xl lg:text-8xl">
              {brand.heroCopy}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
              {brand.heroSupport}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ActionLink href={brand.showreelHref}>
                View Featured Work
              </ActionLink>
              {brand.resumeHref ? (
                <ActionLink download href={brand.resumeHref} variant="secondary">
                  Download Resume
                </ActionLink>
              ) : null}
            </div>
          </div>

          <div className="animate-rise rounded-lg border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl [animation-delay:240ms]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald">
              Creative Portfolio
            </p>
            <p className="mt-4 text-2xl font-semibold leading-tight">
              Narrative films, documentary work, event coverage, and social-first
              content.
            </p>
            <p className="mt-4 leading-7 text-white/58">
              Explore selected projects, production details, and connected
              project pages below.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <div className="section-kicker">About</div>
      <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
        <h2 className="section-title">
          Cinematic storytelling across film, live events, and digital media.
        </h2>
        <div className="grid gap-5">
          {aboutCopy.map((paragraph) => (
            <p className="text-lg leading-8 text-white/66" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EducationSection() {
  return (
    <section className="section-shell border-y border-white/10 bg-white/[0.03]">
      <SectionHeading
        kicker="Education"
        title="Academic foundation in media studies and film."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((item) => (
          <article
            className="rounded-lg border border-white/10 bg-black p-6"
            key={item.school}
          >
            <h3 className="text-2xl font-semibold">{item.school}</h3>
            <div className="mt-5 grid gap-2 leading-7 text-white/64">
              <p>{item.degree}</p>
              <p>{item.minor}</p>
              <p>{item.graduated}</p>
              <p>{item.gpa}</p>
              <p>{item.honor}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        kicker="Professional Experience"
        title="Production, social media, and festival coordination experience."
      />
      <div className="grid gap-5">
        {experience.map((item, index) => (
          <article
            className="group grid gap-5 rounded-lg border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:border-emerald/60 md:grid-cols-[0.28fr_0.72fr]"
            key={`${item.title}-${item.organization}`}
          >
            <div>
              <p className="text-sm font-semibold text-emerald">
                0{index + 1}
              </p>
              <p className="mt-3 text-sm text-white/46">{item.period}</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm uppercase tracking-[0.16em] text-white/42">
                {item.organization}
              </p>
              <ul className="mt-5 grid gap-3 leading-7 text-white/64">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        kicker="Featured Projects"
        title="Featured work across narrative film, documentary, events, and social media."
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <Link
            className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] transition duration-300 hover:-translate-y-1 hover:border-emerald/70 hover:bg-white/[0.07]"
            href={`/projects/${project.slug}`}
            key={project.slug}
          >
            <span className="relative block aspect-[16/10] overflow-hidden border-b border-white/10">
              {/* TODO: Replace project.thumbnail with a real still, poster frame, or campaign image. */}
              <Image
                alt={`${project.title} thumbnail`}
                className="object-cover opacity-[0.78] transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                src={project.thumbnail}
              />
            </span>
            <span className="block p-6">
              <span className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">
                  {project.category}
                </span>
                {project.statusBadge ? (
                  <span className="rounded-md border border-emerald/40 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-emerald">
                    {project.statusBadge}
                  </span>
                ) : null}
              </span>
              <span className="mt-5 block text-2xl font-semibold">
                {project.displayTitle ?? project.title}
              </span>
              <span className="mt-4 block leading-7 text-white/62">
                {project.description}
              </span>
              <span className="mt-6 grid gap-2 text-sm text-white/50">
                {project.roles.length ? (
                  <span>Roles: {project.roles.join(", ")}</span>
                ) : null}
                <span>{project.year}</span>
              </span>
              <span className="mt-7 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span className="skill-pill" key={tag}>
                    {tag}
                  </span>
                ))}
              </span>
              <span className="mt-7 inline-flex rounded-md bg-emerald px-4 py-3 text-sm font-semibold text-black transition group-hover:bg-white">
                {project.statusBadge ?? "Watch Project"}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function AwardsSection() {
  return (
    <section className="section-shell border-y border-white/10 bg-white text-black">
      <SectionHeading
        dark
        kicker="Awards & Honors"
        title="Recognition and academic honors."
      />
      <div className="grid gap-3 md:grid-cols-2">
        {awards.map((award) => (
          <div
            className="rounded-lg border border-black/10 p-5 text-base font-medium"
            key={award}
          >
            {award}
          </div>
        ))}
      </div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section className="section-shell">
      <SectionHeading
        kicker="Technical Skills"
        title="Confirmed software, production, and equipment experience."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <article
            className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
            key={group.name}
          >
            <h3 className="text-xl font-semibold">{group.name}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span className="skill-pill" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function GallerySection() {
  if (!galleryItems.length) {
    return null;
  }

  return (
    <section id="gallery" className="section-shell">
      <SectionHeading
        kicker="Behind-the-Scenes Gallery"
        title="Production photography and on-set process."
      />
      <GalleryLightbox items={galleryItems} />
    </section>
  );
}

export function ClientsSection() {
  return (
    <section className="section-shell border-y border-white/10 bg-emerald text-black">
      <SectionHeading
        dark
        kicker="Clients & Organizations"
        title="Organizations connected to Liam's creative and production work."
      />
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {clients.map((client) => (
          <div
            className="rounded-lg border border-black/12 bg-black/[0.05] p-5 text-sm font-semibold uppercase tracking-[0.12em]"
            key={client}
          >
            {client}
          </div>
        ))}
      </div>
    </section>
  );
}

export function ResumeSection() {
  return (
    <section id="resume" className="section-shell">
      <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] p-6 sm:p-8 lg:p-10">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[linear-gradient(90deg,transparent,rgba(0,208,132,0.15))] lg:block" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="section-kicker">Resume</div>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Resume download
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/62">
              A downloadable resume will be available here once the final PDF is
              added.
            </p>
          </div>
          {brand.resumeHref ? (
            <a
              className="rounded-md bg-white px-6 py-4 text-sm font-semibold text-black transition duration-300 hover:bg-emerald"
              download
              href={brand.resumeHref}
            >
              Download Resume
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  const contactLinks = brand.socials;

  return (
    <footer id="contact" className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_auto] lg:px-10">
        <div>
          <div className="section-kicker">Contact</div>
          <h2 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">
            Let&apos;s shape the next frame.
          </h2>
          <p className="mt-5 max-w-2xl leading-7 text-white/58">
            For production, editing, event coverage, social media, and creative
            media opportunities, connect with Liam through the available
            professional links.
          </p>
        </div>
        {contactLinks.length ? (
          <div className="flex flex-col gap-3 self-end">
            {contactLinks.map((link) => (
              <a className="contact-link" href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </footer>
  );
}
