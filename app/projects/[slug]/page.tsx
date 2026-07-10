import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";
import type { Project } from "@/data/portfolio";
import { GalleryLightbox } from "@/components/GalleryLightbox";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);

  return {
    title: project
      ? `${project.displayTitle ?? project.title} | Liam Lawler`
      : "Project | Liam Lawler"
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  const details: [string, string][] = [];
  const addDetail = (label: string, value?: string) => {
    if (value) {
      details.push([label, value]);
    }
  };

  addDetail("Status", project.status);
  addDetail("Category", project.category);
  addDetail("Roles", project.roles.join(", "));
  addDetail("Company", project.client);
  addDetail("Dates", project.dates);
  addDetail("Year", project.year);
  addDetail("Completed", project.completed);
  addDetail("Published", project.published);
  addDetail("Runtime", project.runtime);

  if (project.slug === "still-processing-website") {
    return <InteractiveWebsitePage details={details} project={project} />;
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(0,208,132,0.22),transparent_32rem)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-10">
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

          <div className="grid gap-10 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald">
                {project.category}
              </p>
              <h1 className="mt-5 text-5xl font-semibold leading-none sm:text-7xl">
                {project.displayTitle ?? project.title}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/64">
                {project.description}
              </p>
              {project.statusBadge ? (
                <p className="mt-6 inline-flex rounded-md border border-emerald/50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald">
                  {project.statusBadge}
                </p>
              ) : null}
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-white/10">
              {/* TODO: Replace with the final hero still for this project. */}
              <Image
                alt={`${project.title} hero image`}
                className="object-cover"
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                src={project.thumbnail}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-5 md:grid-cols-3">
          {details.map(([label, value]) => (
            <div
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
              key={label}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">
                {label}
              </p>
              <p className="mt-3 text-lg text-white/76">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-3xl font-semibold">Project Overview</h2>
            <p className="mt-5 leading-8 text-white/64">
              {project.longDescription ?? project.description}
            </p>
            {project.videoEmbedUrl || project.websiteEmbedUrl ? (
              <div className="mt-8 aspect-video overflow-hidden rounded-lg border border-white/10 bg-black/60">
                {/* TODO: Add project.videoEmbedUrl or project.websiteEmbedUrl in data/portfolio.ts when media is available. */}
              {project.videoEmbedUrl ? (
                <iframe
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                  src={project.videoEmbedUrl}
                  title={`${project.title} video`}
                />
              ) : project.websiteEmbedUrl ? (
                <iframe
                  className="h-full w-full"
                  src={project.websiteEmbedUrl}
                  title={`${project.title} interactive website`}
                />
              ) : null}
              </div>
            ) : null}
            {project.companionProjectSlug ? (
              <Link
                className="mt-5 inline-flex rounded-md border border-white/20 px-4 py-3 text-sm font-semibold text-white transition hover:border-emerald hover:text-emerald"
                href={`/projects/${project.companionProjectSlug}`}
              >
                {project.companionProjectLabel}
              </Link>
            ) : null}
          </article>

          <aside className="grid gap-4">
            <DetailList title="Equipment Used" items={project.equipment} />
            <DetailList title="Software" items={project.software} />
            <DetailList title="Credits" items={project.credits} />
            <DetailList title="Awards" items={project.awards} />
            <ExternalLinks links={project.externalLinks} />
          </aside>
        </div>

        {project.socialPosts?.length ? (
          <div className="mt-10">
            <h2 className="text-3xl font-semibold">Campaign Posts</h2>
            <p className="mt-4 max-w-3xl leading-7 text-white/58">
              Each post is part of the SUNY Purchase Admissions campaign.
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {project.socialPosts.map((post, index) => (
                <article
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
                  key={`${post.label}-${post.href}`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">
                    Post {index + 1}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold">{post.label}</h3>
                  {/* TODO: Add per-post role, production process, editing, planning, and strategy details when supplied. */}
                  <a
                    className="mt-5 inline-flex rounded-md bg-emerald px-4 py-3 text-sm font-semibold text-black transition hover:bg-white"
                    href={post.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Watch Project
                  </a>
                </article>
              ))}
            </div>
          </div>
        ) : null}

        {project.gallery.length ? (
          <div className="mt-10">
          <h2 className="text-3xl font-semibold">Gallery</h2>
          <GalleryLightbox
            items={project.gallery.map((image, index) => ({
              src: image,
              alt: `${project.title} gallery image ${index + 1}`,
              category: project.category
            }))}
          />
          </div>
        ) : null}

        {project.behindTheScenes.length ? (
          <div className="mt-10">
          <h2 className="text-3xl font-semibold">Behind the Scenes</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {project.behindTheScenes.map((image, index) => (
              <div
                className="relative aspect-[16/10] overflow-hidden rounded-lg border border-white/10"
                key={`${image}-bts-${index}`}
              >
                {/* TODO: Replace behind-the-scenes paths in data/portfolio.ts. */}
                <Image
                  alt={`${project.title} behind-the-scenes image ${index + 1}`}
                  className="object-cover"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  src={image}
                />
              </div>
            ))}
          </div>
          </div>
        ) : null}
      </section>
    </main>
  );
}

function InteractiveWebsitePage({
  details,
  project
}: {
  details: [string, string][];
  project: Project;
}) {
  const launchUrl = project.websiteEmbedUrl ?? project.externalLinks[0]?.href;
  const shortFilmHref = `/projects/${project.companionProjectSlug}`;

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-screen border-b border-white/10">
        <Image
          alt={`${project.title} interactive project preview`}
          className="object-cover opacity-[0.4]"
          fill
          priority
          sizes="100vw"
          src={project.thumbnail}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0.86)_46%,rgba(0,0,0,0.42)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(0,208,132,0.28),transparent_34rem)]" />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
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

          <div className="grid flex-1 items-end gap-10 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:pb-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald">
                {project.category}
              </p>
              <h1 className="mt-5 text-5xl font-semibold leading-none sm:text-7xl">
                {project.displayTitle ?? project.title}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/66">
                {project.description}
              </p>
              <p className="mt-6 inline-flex rounded-md border border-emerald/50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald">
                Werlinich Senior Project Award — Grant Recipient
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                {launchUrl ? (
                  <a
                    className="rounded-md bg-emerald px-5 py-3 text-sm font-semibold text-black transition hover:bg-white"
                    href={launchUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Launch Interactive Experience
                  </a>
                ) : null}
                <Link
                  className="rounded-md border border-white/22 px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald hover:text-emerald"
                  href={shortFilmHref}
                >
                  Watch the Short Film
                </Link>
              </div>
            </div>

            <BrowserPreview project={project} />
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-5 md:grid-cols-3">
          {details.map(([label, value]) => (
            <div
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
              key={label}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">
                {label}
              </p>
              <p className="mt-3 text-lg text-white/76">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <ProjectTextSection
            body={project.longDescription ?? project.description}
            title="Project Overview"
          />
          <ProjectTextSection
            body={project.roles.join(", ")}
            title="My Roles"
          />
          {project.overviewSections?.map((section) => (
            <ProjectTextSection
              body={section.body}
              key={section.title}
              title={section.title}
            />
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-white/10 bg-white/[0.04] p-6">
          <h2 className="text-3xl font-semibold">Connected Senior Capstone</h2>
          <p className="mt-5 max-w-3xl leading-8 text-white/64">
            The interactive website and short film are two connected parts of
            the same Still Processing senior capstone. The website expands the
            story world through interactive pathways, while the short film
            anchors the narrative in a cinematic format.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {launchUrl ? (
              <a
                className="rounded-md bg-emerald px-5 py-3 text-sm font-semibold text-black transition hover:bg-white"
                href={launchUrl}
                rel="noreferrer"
                target="_blank"
              >
                Launch Interactive Experience
              </a>
            ) : null}
            <Link
              className="rounded-md border border-white/22 px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald hover:text-emerald"
              href={shortFilmHref}
            >
              Watch the Short Film
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function BrowserPreview({ project }: { project: Project }) {
  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-emerald/10 backdrop-blur-xl">
      <div className="flex items-center gap-2 border-b border-white/10 px-2 pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald" />
        <span className="ml-3 truncate rounded-md border border-white/10 px-3 py-1 text-xs text-white/48">
          v0-leo-s-feed.vercel.app
        </span>
      </div>
      <div className="relative mt-3 aspect-[16/10] overflow-hidden rounded-md border border-white/10 bg-black">
        <Image
          alt={`${project.title} website preview`}
          className="object-cover opacity-[0.72] lg:hidden"
          fill
          sizes="100vw"
          src={project.thumbnail}
        />
        {project.websiteEmbedUrl ? (
          <iframe
            className="hidden h-full w-full lg:block"
            src={project.websiteEmbedUrl}
            title={`${project.title} live website preview`}
          />
        ) : null}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-5 lg:hidden">
          <p className="text-sm leading-6 text-white/70">
            Open the live site for the full interactive experience.
          </p>
        </div>
      </div>
    </div>
  );
}

function ProjectTextSection({ body, title }: { body: string; title: string }) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-4 leading-8 text-white/64">{body}</p>
    </article>
  );
}

function ExternalLinks({
  links
}: {
  links: Array<{ label: string; href: string }>;
}) {
  if (!links.length) {
    return null;
  }

  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
      <h2 className="text-xl font-semibold">External Links</h2>
      <div className="mt-4 grid gap-2">
        {links.map((link) => (
          <a
            className="rounded-md border border-white/12 px-3 py-2 text-sm leading-6 text-white/70 transition hover:border-emerald hover:text-emerald"
            href={link.href}
            key={`${link.label}-${link.href}`}
            rel="noreferrer"
            target="_blank"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  if (!items.length) {
    return null;
  }

  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
      <h2 className="text-xl font-semibold">{title}</h2>
      <ul className="mt-4 grid gap-2 text-sm leading-6 text-white/62">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
