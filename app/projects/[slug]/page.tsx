import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";
import type { Project } from "@/data/portfolio";
import { GalleryLightbox } from "@/components/GalleryLightbox";
import {
  ProjectImageLightbox,
  type ProjectImage
} from "@/components/ProjectImageLightbox";
import { SplitProjectHero } from "@/components/SplitProjectHero";

const shatteredMelodyHeroImages: ProjectImage[] = [
  {
    src: "/images/shattered-melody/Stills/establishing marianne phillip piano.jpg",
    alt: "Marianne and Phillip seated near a piano in Shattered Melody",
    objectPosition: "center"
  },
  {
    src: "/images/shattered-melody/Stills/Marianne at piano.jpg",
    alt: "Marianne seated at a piano in Shattered Melody"
  },
  {
    src: "/images/shattered-melody/Stills/Phillip close up.jpg",
    alt: "Close-up of Phillip in Shattered Melody"
  },
  {
    src: "/images/shattered-melody/Stills/window scene.jpg",
    alt: "Window scene from Shattered Melody"
  },
  {
    src: "/images/shattered-melody/Stills/piano hands.jpg",
    alt: "Hands playing piano in Shattered Melody"
  }
];

const shatteredMelodyStills: ProjectImage[] = [
  {
    src: "/images/shattered-melody/Stills/doorway scene.jpg",
    alt: "Doorway scene from Shattered Melody"
  },
  {
    src: "/images/shattered-melody/Stills/establishing marianne phillip piano.jpg",
    alt: "Establishing shot of Marianne and Phillip at the piano"
  },
  {
    src: "/images/shattered-melody/Stills/Marianne at piano.jpg",
    alt: "Marianne seated at the piano"
  },
  {
    src: "/images/shattered-melody/Stills/marianne closeup.jpg",
    alt: "Close-up of Marianne"
  },
  {
    src: "/images/shattered-melody/Stills/marianne phillip piano.jpg",
    alt: "Marianne and Phillip at the piano"
  },
  {
    src: "/images/shattered-melody/Stills/marianne window close up phillip.jpg",
    alt: "Marianne near a window with Phillip"
  },
  {
    src: "/images/shattered-melody/Stills/over shoulder phillip marianne alic.jpg",
    alt: "Over-the-shoulder shot of Phillip and Marianne"
  },
  {
    src: "/images/shattered-melody/Stills/Phillip close up.jpg",
    alt: "Close-up of Phillip"
  },
  {
    src: "/images/shattered-melody/Stills/Phillip with Honda.jpg",
    alt: "Phillip standing near a Honda"
  },
  {
    src: "/images/shattered-melody/Stills/piano hands.jpg",
    alt: "Hands on piano keys"
  },
  {
    src: "/images/shattered-melody/Stills/window scene.jpg",
    alt: "Window scene from Shattered Melody"
  }
];

const shatteredMelodyBehindTheScenes: ProjectImage[] = [
  {
    src: "/images/shattered-melody/behind the scenes/TSM Set.PNG",
    alt: "Production setup for Shattered Melody",
    caption: "Production setup"
  },
  {
    src: "/images/shattered-melody/behind the scenes/liam fix marianne hair.PNG",
    alt: "Hair adjustment between takes on Shattered Melody",
    caption: "Hair adjustment between takes"
  },
  {
    src: "/images/shattered-melody/behind the scenes/liam with slate.PNG",
    alt: "Slate before filming Shattered Melody",
    caption: "Slate before filming"
  }
];

const becomingLolaHeroImages: ProjectImage[] = [
  {
    src: "/images/becoming-lola/stills/01-mirror-profile.jpg.PNG",
    alt: "Lola reflected in a mirror during Becoming Lola"
  },
  {
    src: "/images/becoming-lola/stills/02-red-jacket.jpg.PNG",
    alt: "Lola in a red jacket in Becoming Lola"
  },
  {
    src: "/images/becoming-lola/stills/03-eye-makeup.jpg.PNG",
    alt: "Eye makeup close-up from Becoming Lola"
  },
  {
    src: "/images/becoming-lola/stills/04-stage-performance.jpg.PNG",
    alt: "Stage performance from Becoming Lola"
  }
];

const becomingLolaStills: ProjectImage[] = [
  {
    src: "/images/becoming-lola/stills/01-foundation-bottle.jpg.PNG",
    alt: "Foundation bottle from Becoming Lola"
  },
  {
    src: "/images/becoming-lola/stills/01-mirror-profile.jpg.PNG",
    alt: "Lola reflected in a mirror during Becoming Lola"
  },
  {
    src: "/images/becoming-lola/stills/02- eyeliner-application.PNG",
    alt: "Eyeliner application from Becoming Lola"
  },
  {
    src: "/images/becoming-lola/stills/02-red-jacket.jpg.PNG",
    alt: "Lola in a red jacket in Becoming Lola"
  },
  {
    src: "/images/becoming-lola/stills/03-blue-hair-gems.PNG",
    alt: "Blue hair and gems detail from Becoming Lola"
  },
  {
    src: "/images/becoming-lola/stills/03-eye-makeup.jpg.PNG",
    alt: "Eye makeup close-up from Becoming Lola"
  },
  {
    src: "/images/becoming-lola/stills/04-preparation closeup.PNG",
    alt: "Preparation close-up from Becoming Lola"
  },
  {
    src: "/images/becoming-lola/stills/04-stage-performance.jpg.PNG",
    alt: "Stage performance from Becoming Lola"
  },
  {
    src: "/images/becoming-lola/stills/05-eyebrow-prep.PNG",
    alt: "Eyebrow preparation from Becoming Lola"
  },
  {
    src: "/images/becoming-lola/stills/06-Lola-drawing.PNG",
    alt: "Drawing of Lola from Becoming Lola"
  },
  {
    src: "/images/becoming-lola/stills/07-stage-performance.PNG",
    alt: "Stage performance from Becoming Lola"
  }
];

const stillProcessingStills: ProjectImage[] = [
  {
    src: "/images/still-processing/stills/01-morning and coffee.PNG",
    alt: "A phone showing Leo's fitness content beside an iced coffee and breakfast plate"
  },
  {
    src: "/images/still-processing/stills/02-leo looking at phone.PNG",
    alt: "Leo looking directly at his phone in his bedroom"
  },
  {
    src: "/images/still-processing/stills/03-leo-makes-tiktok.PNG",
    alt: "A phone screen showing Leo recording a TikTok-style video"
  },
  {
    src: "/images/still-processing/stills/04-leo recording tiktok.PNG",
    alt: "Leo seated beside a ring light while recording short-form content"
  },
  {
    src: "/images/still-processing/stills/05- leo filming workout chest press.PNG",
    alt: "Leo filming himself during a chest press workout in a gym"
  },
  {
    src: "/images/still-processing/stills/06-leo stacking weights.PNG",
    alt: "A phone filming Leo as he stacks weights in the gym"
  },
  {
    src: "/images/still-processing/stills/07-leo notification.PNG",
    alt: "Leo wearing headphones while a notification appears over his phone"
  },
  {
    src: "/images/still-processing/stills/08-editing yt video.PNG",
    alt: "Leo editing a YouTube video at his desk"
  },
  {
    src: "/images/still-processing/stills/09-OTS yt edit.PNG",
    alt: "Over-the-shoulder view of Leo editing video footage on a laptop"
  },
  {
    src: "/images/still-processing/stills/10-hate comments.PNG",
    alt: "A phone screen showing negative comments on a social media post"
  },
  {
    src: "/images/still-processing/stills/11-leo CU reaction shot.PNG",
    alt: "Extreme close-up of Leo's eyes reacting to something on screen"
  },
  {
    src: "/images/still-processing/stills/12- CU hate comments.PNG",
    alt: "Close-up of negative comments displayed on a phone screen"
  },
  {
    src: "/images/still-processing/stills/13- burnout.PNG",
    alt: "Leo sitting at his desk with his head resting on his hand"
  },
  {
    src: "/images/still-processing/stills/14-video by 6pm.PNG",
    alt: "Notebook schedule showing a video deadline"
  },
  {
    src: "/images/still-processing/stills/15- notes on tiktok.PNG",
    alt: "Leo looking at his phone beside handwritten TikTok notes"
  },
  {
    src: "/images/still-processing/stills/16-tiktok inspo.PNG",
    alt: "A phone playing a TikTok video beside handwritten content notes"
  },
  {
    src: "/images/still-processing/stills/17-posting tiktok.PNG",
    alt: "Leo's phone showing a social media posting screen"
  },
  {
    src: "/images/still-processing/stills/18-recording presentation tiktok.PNG",
    alt: "Leo holding up his phone while recording a TikTok-style clip"
  },
  {
    src: "/images/still-processing/stills/19-frustrated presentation tiktok.PNG",
    alt: "Leo hunched over in frustration while filming content"
  },
  {
    src: "/images/still-processing/stills/20-leo reaction.PNG",
    alt: "Leo reacting while holding his phone"
  },
  {
    src: "/images/still-processing/stills/21-tel when someone forcing it.PNG",
    alt: "A phone screen showing a comment about someone forcing content"
  },
  {
    src: "/images/still-processing/stills/22- CU phone.PNG",
    alt: "Close-up of Leo's phone lying face down"
  },
  {
    src: "/images/still-processing/stills/23- side profile light.PNG",
    alt: "Side profile of Leo standing near bright window light"
  },
  {
    src: "/images/still-processing/stills/24- burnout yt video setup.PNG",
    alt: "Leo seated in front of a camera for a YouTube-style video"
  },
  {
    src: "/images/still-processing/stills/25- whiteboard reminder.PNG",
    alt: "Whiteboard schedule with YouTube and TikTok reminders"
  },
  {
    src: "/images/still-processing/stills/26- sideeye.PNG",
    alt: "Close-up of Leo glancing sideways with concern"
  },
  {
    src: "/images/still-processing/stills/27- shocked leo.PNG",
    alt: "Leo looking shocked while holding his phone"
  },
  {
    src: "/images/still-processing/stills/28- cu tear drop.PNG",
    alt: "Close-up of tears in Leo's eyes"
  },
  {
    src: "/images/still-processing/stills/29- overwhelmed.PNG",
    alt: "Leo smiling tensely while looking overwhelmed"
  },
  {
    src: "/images/still-processing/stills/30- frustration.PNG",
    alt: "Leo grabbing his hair in frustration in his bedroom"
  },
  {
    src: "/images/still-processing/stills/31- filming breakdown.PNG",
    alt: "A phone camera recording Leo during a breakdown"
  },
  {
    src: "/images/still-processing/stills/32- phone POV breakdown.PNG",
    alt: "Phone point of view of Leo sitting on the floor during a breakdown"
  },
  {
    src: "/images/still-processing/stills/33- watching himself cry.PNG",
    alt: "Leo watching emotional footage of himself on his phone"
  }
];

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

  if (project.slug === "still-processing-film") {
    return <StillProcessingProjectPage details={details} project={project} />;
  }

  if (project.slug === "still-processing-website") {
    return <InteractiveWebsitePage details={details} project={project} />;
  }

  if (project.slug === "shattered-melody") {
    return <ShatteredMelodyProjectPage project={project} />;
  }

  if (project.slug === "becoming-lola") {
    return <BecomingLolaProjectPage project={project} />;
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
            {project.thumbnail ? (
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-white/10">
                <Image
                  alt={`${project.title} hero image`}
                  className="object-cover"
                  fill
                  priority
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  src={project.thumbnail}
                />
              </div>
            ) : null}
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

function StillProcessingProjectPage({
  details,
  project
}: {
  details: [string, string][];
  project: Project;
}) {
  const shortFilmUrl = "https://youtu.be/BwLoKzwATH8";
  const confessionalUrl = "https://youtu.be/Rna5V-1AlqQ";
  const tiktokUrl = "https://www.tiktok.com/@leo.lifts";
  const launchUrl = "https://v0-leo-s-feed.vercel.app/";
  const recognition = project.awards[0];
  const platformCards = [
    {
      title: "Narrative Short Film",
      description:
        "The central narrative follows Leo as the pressure to maintain his online identity begins affecting his creativity, relationships, and sense of self.",
      href: "#watch-short-film",
      label: "Watch Short Film"
    },
    {
      title: "YouTube Confessional",
      description:
        "A direct-to-camera video in which Leo speaks more openly about posting, burnout, authenticity, and the pressure to keep performing for an audience.",
      href: confessionalUrl,
      label: "Watch YouTube Video",
      external: true
    },
    {
      title: "Leo's TikTok",
      description:
        "A fictional creator account that presents Leo through short, polished, and fragmented performances shaped by trends, visibility, and engagement.",
      href: tiktokUrl,
      label: "Visit TikTok Channel",
      external: true
    },
    {
      title: "Interactive Website",
      description:
        "The central entry point for the project, allowing visitors to choose where they begin and experience how a different platform changes their understanding of Leo.",
      href: launchUrl,
      label: "Launch Interactive Experience",
      external: true
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(0,208,132,0.2),transparent_34rem)]" />
        <div className="relative z-10 mx-auto flex min-h-[78vh] w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
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

          <div className="grid flex-1 items-center gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald">
                {project.category}
              </p>
              <h1 className="mt-5 text-5xl font-semibold leading-none sm:text-7xl">
                {project.title}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
                {project.description}
              </p>
              {recognition ? (
                <p className="mt-6 inline-flex rounded-md border border-emerald/50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald">
                  {recognition}
                </p>
              ) : null}
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  className="rounded-md bg-emerald px-5 py-3 text-sm font-semibold text-black transition hover:bg-white"
                  href={launchUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Launch Interactive Experience
                </a>
                <a
                  className="rounded-md border border-white/22 px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald hover:text-emerald"
                  href="#watch-short-film"
                >
                  Watch Short Film
                </a>
              </div>
            </div>

            <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/50">
              <Image
                alt="Still Processing poster image showing Leo across film, phone, and workout scenes"
                className="object-cover"
                fill
                priority
                sizes="(min-width: 1024px) 52vw, 100vw"
                src={project.thumbnail}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div>
          <div className="section-kicker">One Character, Four Platforms</div>
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <h2 className="section-title">The platform is part of the story.</h2>
            </div>
            <div>
              <p className="text-lg leading-8 text-white/66">
                {project.longDescription ?? project.description}
              </p>
              <p className="mt-5 text-lg leading-8 text-white/66">
                The short film presents a structured narrative about burnout and
                the growing distance between Leo&apos;s online persona and private
                life. His YouTube video uses direct address and performative
                vulnerability to create a more intimate, parasocial connection
                with the viewer. On TikTok, Leo&apos;s identity becomes fragmented
                into short, carefully performed moments designed for attention
                and engagement.
              </p>
              <p className="mt-5 text-lg leading-8 text-white/66">
                Together, the platforms demonstrate the project&apos;s central
                idea: the medium does not simply deliver the story. The medium
                shapes its meaning.
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {platformCards.map((card) => (
                  <article
                    className="flex flex-col rounded-lg border border-white/10 bg-white/[0.04] p-5"
                    key={card.title}
                  >
                    <h3 className="text-2xl font-semibold">{card.title}</h3>
                    <p className="mt-4 flex-1 leading-7 text-white/64">
                      {card.description}
                    </p>
                    <a
                      className="mt-6 inline-flex w-fit rounded-md border border-white/20 px-4 py-3 text-sm font-semibold text-white transition hover:border-emerald hover:text-emerald"
                      href={card.href}
                      rel={card.external ? "noopener noreferrer" : undefined}
                      target={card.external ? "_blank" : undefined}
                    >
                      {card.label}
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="watch-short-film"
        className="section-shell border-y border-white/10 bg-white/[0.03]"
      >
        <div>
          <div className="section-kicker">Still Processing — Short Film</div>
          <div className="grid gap-8 lg:grid-cols-[0.72fr_0.28fr] lg:items-end">
            <h2 className="section-title max-w-4xl">Watch Short Film</h2>
            <p className="leading-7 text-white/58">
              The narrative film serves as the project&apos;s central storyline,
              following Leo as the identity he performs online becomes
              increasingly difficult to separate from his private life.
            </p>
          </div>
          <div className="mt-8 aspect-video overflow-hidden rounded-lg border border-white/10 bg-black">
            <iframe
              allow="fullscreen; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
              src={project.videoEmbedUrl}
              title="Still Processing short film"
            />
          </div>
          <a
            className="mt-5 inline-flex rounded-md border border-white/20 px-4 py-3 text-sm font-semibold text-white transition hover:border-emerald hover:text-emerald"
            href={shortFilmUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Open Short Film on YouTube
          </a>
        </div>
      </section>

      <section className="section-shell">
        <div>
          <div className="section-kicker">Leo&apos;s YouTube Confessional</div>
          <div className="grid gap-8 lg:grid-cols-[0.72fr_0.28fr] lg:items-end">
            <h2 className="section-title max-w-4xl">
              Leo&apos;s YouTube Confessional
            </h2>
            <p className="leading-7 text-white/58">
              Presented as a personal upload from Leo&apos;s own channel, the
              video blurs the line between honest self-reflection and the
              performance of authenticity expected from online creators.
            </p>
          </div>
          <div className="mt-8 aspect-video overflow-hidden rounded-lg border border-white/10 bg-black">
            <iframe
              allow="fullscreen; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
              src="https://www.youtube.com/embed/Rna5V-1AlqQ"
              title="Leo's YouTube confessional"
            />
          </div>
          <a
            className="mt-5 inline-flex rounded-md border border-white/20 px-4 py-3 text-sm font-semibold text-white transition hover:border-emerald hover:text-emerald"
            href={confessionalUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Open on YouTube
          </a>
        </div>
      </section>

      <section className="section-shell border-y border-white/10 bg-white/[0.03]">
        <div>
          <div className="section-kicker">Film Stills</div>
          <h2 className="section-title max-w-4xl">
            Selected frames from the narrative short film.
          </h2>
          <ProjectImageLightbox images={stillProcessingStills} />
        </div>
      </section>

      <section className="section-shell">
        <div>
          <div className="section-kicker">Project Details</div>
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
            {recognition ? (
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">
                  Recognition
                </p>
                <p className="mt-3 text-lg text-white/76">{recognition}</p>
              </div>
            ) : null}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span className="skill-pill" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          {launchUrl ? (
            <a
              className="mt-8 inline-flex rounded-md bg-emerald px-5 py-3 text-sm font-semibold text-black transition hover:bg-white"
              href={launchUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              Launch Interactive Experience
            </a>
          ) : null}
        </div>
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

function ShatteredMelodyProjectPage({ project }: { project: Project }) {
  const youtubeLink = project.externalLinks.find((link) =>
    link.href.includes("youtu")
  );
  const relatedProjects = projects
    .filter((item) => item.slug !== project.slug)
    .filter((item) => item.featured)
    .slice(0, 3);
  const productionDetails = [
    ["Title", project.title],
    ["Category", project.category],
    ["Completed", project.completed],
    ["Runtime", "8 minutes 55 seconds"],
    ["Roles", project.roles.join(", ")],
    ["Camera", project.equipment.join(", ")],
    ["Editing Software", project.software.join(", ")]
  ].filter((detail): detail is [string, string] => Boolean(detail[1]));

  return (
    <main className="min-h-screen bg-black text-white">
      <SplitProjectHero
        actions={[
          { href: "#watch-film", label: "Watch Full Film" },
          {
            href: "#behind-the-scenes",
            label: "Behind the Scenes",
            variant: "secondary"
          }
        ]}
        description="After a hit-and-run leaves a young man with retrograde amnesia, a music therapist uses melody to help him reconnect with the memories that may reveal what happened."
        images={shatteredMelodyHeroImages}
        kicker="Narrative Short Film"
        meta="2026 • 8m 55s • Narrative Short Film"
        roles="Writer • Director • Assistant Cinematographer • Editor"
        title="SHATTERED MELODY"
      />

      <section id="watch-film" className="section-shell">
        <div>
          <div className="section-kicker">Watch Full Film</div>
          <div className="grid gap-8 lg:grid-cols-[0.72fr_0.28fr] lg:items-end">
            <h2 className="section-title max-w-4xl">Shattered Melody</h2>
            <p className="leading-7 text-white/58">
              Watch the completed short film below. A YouTube link is available
              as a secondary fallback.
            </p>
          </div>
          <div className="mt-8 aspect-video overflow-hidden rounded-lg border border-white/10 bg-black">
            <iframe
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
              src={project.videoEmbedUrl}
              title="Shattered Melody short film"
            />
          </div>
          {youtubeLink ? (
            <a
              className="mt-5 inline-flex rounded-md border border-white/20 px-4 py-3 text-sm font-semibold text-white transition hover:border-emerald hover:text-emerald"
              href={youtubeLink.href}
              rel="noreferrer"
              target="_blank"
            >
              Watch on YouTube
            </a>
          ) : null}
        </div>
      </section>

      <section className="section-shell border-y border-white/10 bg-white/[0.03]">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <div className="section-kicker">Synopsis</div>
            <h2 className="section-title">Memory, music, and reconnection.</h2>
          </div>
          <p className="text-lg leading-8 text-white/66">
            Shattered Melody follows Marianne Sinclair, a music therapist
            helping a patient with retrograde amnesia reconnect with the world
            through music after a hit-and-run accident erased their past.
          </p>
        </div>
      </section>

      <section className="section-shell">
        <div>
          <div className="section-kicker">Roles and Production Details</div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {productionDetails.map(([label, value]) => (
              <article
                className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
                key={label}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">
                  {label}
                </p>
                <p className="mt-3 leading-7 text-white/74">{value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell border-y border-white/10 bg-white/[0.03]">
        <div>
          <div className="section-kicker">Production Stills Gallery</div>
          <h2 className="section-title max-w-4xl">
            Selected frames from Shattered Melody.
          </h2>
          <ProjectImageLightbox images={shatteredMelodyStills} variant="masonry" />
        </div>
      </section>

      <section id="behind-the-scenes" className="section-shell">
        <div>
          <div className="section-kicker">Behind the Scenes</div>
          <h2 className="section-title max-w-4xl">Behind the Scenes</h2>
          <p className="mt-5 max-w-3xl leading-8 text-white/64">
            Behind-the-scenes images from the production of Shattered Melody,
            documenting the collaborative process from setup through filming.
          </p>
          <ProjectImageLightbox images={shatteredMelodyBehindTheScenes} />
        </div>
      </section>

      {project.credits.length ? (
        <section className="section-shell border-y border-white/10 bg-white/[0.03]">
          <div>
            <div className="section-kicker">Credits</div>
            <div className="grid gap-3 md:grid-cols-2">
              {project.credits.map((credit) => (
                <div
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-5 text-white/70"
                  key={credit}
                >
                  {credit}
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-shell">
        <div>
          <div className="section-kicker">Related Projects</div>
          <h2 className="section-title max-w-4xl">More selected work.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {relatedProjects.map((item) => (
              <Link
                className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-1 hover:border-emerald/70"
                href={`/projects/${item.slug}`}
                key={item.slug}
              >
                {item.thumbnail ? (
                  <span className="relative block aspect-[16/10]">
                    <Image
                      alt={`${item.title} project thumbnail`}
                      className="object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      src={item.thumbnail}
                    />
                  </span>
                ) : null}
                <span className="block p-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">
                    {item.category}
                  </span>
                  <span className="mt-3 block text-xl font-semibold">
                    {item.displayTitle ?? item.title}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function BecomingLolaProjectPage({ project }: { project: Project }) {
  const youtubeLink = project.externalLinks.find((link) =>
    link.href.includes("youtu")
  );
  const relatedProjects = projects
    .filter((item) => item.slug !== project.slug)
    .filter((item) => item.featured)
    .slice(0, 3);
  const productionDetails = [
    ["Title", project.title],
    ["Category", project.category],
    ["Production", "Filmed in Fall 2024"],
    ["Published", project.published],
    ["Runtime", project.runtime],
    ["Roles", project.roles.join(", ")],
    ["Equipment", project.equipment.join(", ")]
  ].filter((detail): detail is [string, string] => Boolean(detail[1]));

  return (
    <main className="min-h-screen bg-black text-white">
      <SplitProjectHero
        accent="warm"
        actions={[
          { href: "#watch-documentary", label: "Watch Documentary" },
          { href: "#stills-gallery", label: "View Stills", variant: "secondary" }
        ]}
        description="A short documentary following a transgender drag queen on the road to her electrifying performance at The Night of 1,000 Lolas."
        images={becomingLolaHeroImages}
        kicker="Short Documentary"
        meta="2024–2025 • Documentary • 10m 34s"
        roles="Director • Cinematographer • Editor"
        title="BECOMING LOLA"
      />

      <section id="watch-documentary" className="section-shell">
        <div>
          <div className="lola-kicker">Watch Documentary</div>
          <div className="grid gap-8 lg:grid-cols-[0.72fr_0.28fr] lg:items-end">
            <h2 className="section-title max-w-4xl">Becoming Lola</h2>
            <p className="leading-7 text-white/58">
              Watch the completed documentary through the embedded YouTube film.
            </p>
          </div>
          <div className="mt-8 aspect-video overflow-hidden rounded-lg border border-white/10 bg-black">
            <iframe
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
              src={project.videoEmbedUrl}
              title="Becoming Lola documentary"
            />
          </div>
          {youtubeLink ? (
            <a
              className="mt-5 inline-flex rounded-md border border-white/20 px-4 py-3 text-sm font-semibold text-white transition hover:border-[#ff9b62] hover:text-[#ff9b62]"
              href={youtubeLink.href}
              rel="noreferrer"
              target="_blank"
            >
              Open on YouTube
            </a>
          ) : null}
        </div>
      </section>

      <section className="section-shell border-y border-white/10 bg-white/[0.03]">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <div className="lola-kicker">Project Overview</div>
            <h2 className="section-title">
              A road to performance, identity, and transformation.
            </h2>
          </div>
          <p className="text-lg leading-8 text-white/66">
            Becoming Lola is a short documentary following a transgender drag
            queen on the road to her electrifying performance at The Night of
            1,000 Lolas.
          </p>
        </div>
      </section>

      <section className="section-shell">
        <div>
          <div className="lola-kicker">Roles and Equipment</div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {productionDetails.map(([label, value]) => (
              <article
                className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
                key={label}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff9b62]">
                  {label}
                </p>
                <p className="mt-3 leading-7 text-white/74">{value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="stills-gallery"
        className="section-shell border-y border-white/10 bg-white/[0.03]"
      >
        <div>
          <div className="lola-kicker">Stills Gallery</div>
          <h2 className="section-title max-w-4xl">
            Selected moments from Becoming Lola.
          </h2>
          <ProjectImageLightbox images={becomingLolaStills} />
        </div>
      </section>

      <section className="section-shell">
        <div>
          <div className="lola-kicker">Related Projects</div>
          <h2 className="section-title max-w-4xl">More selected work.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {relatedProjects.map((item) => (
              <Link
                className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-1 hover:border-[#ff9b62]/70"
                href={`/projects/${item.slug}`}
                key={item.slug}
              >
                {item.thumbnail ? (
                  <span className="relative block aspect-[16/10]">
                    <Image
                      alt={`${item.title} project thumbnail`}
                      className="object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      src={item.thumbnail}
                    />
                  </span>
                ) : null}
                <span className="block p-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff9b62]">
                    {item.category}
                  </span>
                  <span className="mt-3 block text-xl font-semibold">
                    {item.displayTitle ?? item.title}
                  </span>
                </span>
              </Link>
            ))}
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
