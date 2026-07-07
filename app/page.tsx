import Image from "next/image";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

const stats = [
  { value: "360", label: "Media perspective" },
  { value: "4K", label: "Production mindset" },
  { value: "24/7", label: "Social fluency" }
];

const experience = [
  {
    role: "Filmmaker & Producer",
    place: "Independent Creative Work",
    period: "Current",
    detail:
      "Developing short-form films, branded media concepts, production plans, and visual stories from pitch through final delivery."
  },
  {
    role: "Social Media Creator",
    place: "Digital Platforms",
    period: "Current",
    detail:
      "Creating audience-aware video packages, captions, hooks, content calendars, and platform-native edits for fast-moving media channels."
  },
  {
    role: "Media & Production Collaborator",
    place: "Campus, community, and freelance projects",
    period: "Ongoing",
    detail:
      "Supporting shoots, interviews, post-production, creative direction, and story development across film, sports, lifestyle, and culture."
  }
];

const projects = [
  {
    title: "Documentary Short Package",
    category: "Film",
    description:
      "A character-led short film concept built around intimate interviews, controlled natural light, and a patient editorial rhythm.",
    tags: ["Directing", "Interviewing", "Edit"]
  },
  {
    title: "Social Launch Campaign",
    category: "Digital",
    description:
      "A multi-format social rollout with short videos, platform-specific captions, thumbnail direction, and audience testing notes.",
    tags: ["Social", "Strategy", "Analytics"]
  },
  {
    title: "Production Reel System",
    category: "Portfolio",
    description:
      "A modular reel framework for film scenes, behind-the-scenes moments, event coverage, and polished vertical clips.",
    tags: ["Reels", "Motion", "Post"]
  }
];

const awards = [
  "Dean's List recognition - placeholder",
  "Student media showcase selection - placeholder",
  "Community storytelling award - placeholder",
  "Production leadership recognition - placeholder"
];

const technicalSkills = [
  "Premiere Pro",
  "After Effects",
  "DaVinci Resolve",
  "Camera operation",
  "Lighting setup",
  "Audio capture",
  "Social analytics",
  "Content strategy",
  "Scriptwriting",
  "Storyboarding",
  "Interview production",
  "Brand voice"
];

const creativePortfolio = [
  {
    label: "Film Direction",
    copy: "Short-form visual storytelling with an emphasis on mood, momentum, and honest performance."
  },
  {
    label: "Media Production",
    copy: "End-to-end production support for shoots, interviews, event coverage, and editorial packages."
  },
  {
    label: "Social Media",
    copy: "Platform-aware clips and campaign thinking for TikTok, Instagram, YouTube, and emerging formats."
  },
  {
    label: "Post Workflow",
    copy: "Organized selects, rough cuts, sound polish, color direction, captions, and final exports."
  }
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-black text-white">
      <section className="relative min-h-screen border-b border-white/10">
        <Image
          src="/cinematic-production-hero.png"
          alt="Cinematic production equipment lit with emerald studio light"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.58]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0.78)_38%,rgba(0,0,0,0.2)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_18%,rgba(0,208,132,0.28),transparent_32rem)]" />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
          <nav className="animate-rise flex items-center justify-between border-b border-white/10 pb-5 text-sm">
            <a className="font-semibold uppercase tracking-[0.18em]" href="#">
              Liam Lawler
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
              href="/liam-lawler-resume.pdf"
            >
              Resume
            </a>
          </nav>

          <div className="grid flex-1 items-end gap-10 py-12 lg:grid-cols-[1.08fr_0.92fr] lg:pb-20">
            <div className="animate-rise max-w-4xl [animation-delay:120ms]">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-emerald">
                Filmmaking | Media | Social Production
              </p>
              <h1 className="text-balance text-5xl font-semibold leading-[0.96] sm:text-7xl lg:text-8xl">
                Cinematic stories built for screens that move people.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
                Liam Lawler is a filmmaker, media producer, and social-first
                storyteller shaping polished visual work for film, brands,
                digital platforms, and culture-driven audiences.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  className="rounded-md bg-emerald px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:bg-white"
                  href="#projects"
                >
                  View Featured Work
                </a>
                <a
                  className="rounded-md border border-white/22 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:border-emerald hover:text-emerald"
                  href="#contact"
                >
                  Start a Conversation
                </a>
              </div>
            </div>

            <div className="animate-rise grid gap-3 self-end [animation-delay:240ms] sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {stats.map((item) => (
                <div
                  className="rounded-lg border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl"
                  key={item.label}
                >
                  <p className="text-3xl font-semibold text-white">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/58">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-shell">
        <div className="section-kicker">About</div>
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <h2 className="section-title">
            A filmmaker with a producer&apos;s discipline and a creator&apos;s
            instinct for attention.
          </h2>
          <div className="space-y-6 text-lg leading-8 text-white/66">
            <p>
              Liam works across film, digital media, and social platforms,
              bringing together visual taste, organized production, and clear
              audience thinking. His work is built for people who care about
              story, pace, texture, and the details that make a piece feel
              intentional.
            </p>
            <p>
              This portfolio is structured to grow with real clips, reels,
              published pieces, production credits, behind-the-scenes images,
              and campaign results as they become available.
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="section-shell border-y border-white/10 bg-white/[0.03]">
        <div className="section-kicker">Experience</div>
        <div className="grid gap-5">
          {experience.map((item, index) => (
            <article
              className="group grid gap-5 rounded-lg border border-white/10 bg-black p-6 transition duration-300 hover:border-emerald/60 md:grid-cols-[0.28fr_0.72fr]"
              key={item.role}
            >
              <div>
                <p className="text-sm font-semibold text-emerald">
                  0{index + 1}
                </p>
                <p className="mt-3 text-sm text-white/46">{item.period}</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">{item.role}</h3>
                <p className="mt-1 text-sm uppercase tracking-[0.16em] text-white/42">
                  {item.place}
                </p>
                <p className="mt-5 max-w-3xl leading-7 text-white/64">
                  {item.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section-shell">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="section-kicker">Featured Projects</div>
            <h2 className="section-title max-w-3xl">
              Project slots designed for films, campaigns, reels, and production
              case studies.
            </h2>
          </div>
          <p className="max-w-sm leading-7 text-white/54">
            Replace these placeholders with real titles, links, metrics, stills,
            and credits as Liam&apos;s portfolio library expands.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              className="rounded-lg border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald/70 hover:bg-white/[0.07]"
              key={project.title}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">
                {project.category}
              </p>
              <h3 className="mt-6 text-2xl font-semibold">{project.title}</h3>
              <p className="mt-4 leading-7 text-white/62">
                {project.description}
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span className="skill-pill" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell border-y border-white/10 bg-white text-black">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-dark">
              Awards & Honors
            </div>
            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Recognition with room for the real wins.
            </h2>
          </div>
          <div className="grid gap-3">
            {awards.map((award) => (
              <div
                className="rounded-lg border border-black/10 p-5 text-base font-medium"
                key={award}
              >
                {award}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="section-kicker">Technical Skills</div>
        <h2 className="section-title max-w-3xl">
          Tools and production skills for contemporary media workflows.
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {technicalSkills.map((skill) => (
            <div
              className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-4 text-sm font-medium text-white/72"
              key={skill}
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell border-y border-white/10 bg-emerald text-black">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.22em]">
              Creative Portfolio
            </div>
            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Built to hold the work, not bury it.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {creativePortfolio.map((item) => (
              <article
                className="rounded-lg border border-black/12 bg-black/[0.05] p-5"
                key={item.label}
              >
                <h3 className="text-xl font-semibold">{item.label}</h3>
                <p className="mt-3 leading-7 text-black/68">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] p-6 sm:p-8 lg:p-10">
          <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[linear-gradient(90deg,transparent,rgba(0,208,132,0.15))] lg:block" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="section-kicker">Resume Download</div>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Download Liam&apos;s production resume.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-white/62">
                A polished placeholder PDF is included now. Swap in the final
                resume when Liam&apos;s latest credits, links, and references are
                ready.
              </p>
            </div>
            <a
              className="rounded-md bg-white px-6 py-4 text-sm font-semibold text-black transition duration-300 hover:bg-emerald"
              href="/liam-lawler-resume.pdf"
              download
            >
              Download PDF
            </a>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-white/10 bg-black">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_auto] lg:px-10">
          <div>
            <div className="section-kicker">Contact</div>
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">
              Let&apos;s shape the next frame.
            </h2>
            <p className="mt-5 max-w-2xl leading-7 text-white/58">
              For film projects, production support, social media strategy, or
              creative collaborations, reach out and replace this placeholder
              email with Liam&apos;s preferred contact.
            </p>
          </div>
          <div className="flex flex-col gap-3 self-end">
            <a className="contact-link" href="mailto:liam@example.com">
              liam@example.com
            </a>
            <a className="contact-link" href="https://www.linkedin.com/">
              LinkedIn
            </a>
            <a className="contact-link" href="https://www.instagram.com/">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
