const featuredWork = [
  {
    title: "Editorial Features",
    description:
      "Reported and produced stories shaped for clarity, audience connection, and strong narrative pacing.",
    meta: "Writing | Reporting | Production"
  },
  {
    title: "Digital Media",
    description:
      "Social-first packages, short-form concepts, and multimedia pieces built for modern distribution.",
    meta: "Social | Video | Web"
  },
  {
    title: "Brand Storytelling",
    description:
      "Strategic media work that helps people, teams, and organizations communicate with polish and purpose.",
    meta: "Strategy | Voice | Campaigns"
  }
];

const strengths = [
  "Media production",
  "Interviewing",
  "Copywriting",
  "Research",
  "Digital strategy",
  "Audience development"
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8 sm:px-8 lg:px-10">
        <nav className="flex items-center justify-between border-b border-black/10 pb-5 text-sm">
          <a className="font-semibold uppercase tracking-[0.18em]" href="#">
            Liam Lawler
          </a>
          <div className="flex items-center gap-5 text-black/70">
            <a className="transition hover:text-cobalt" href="#work">
              Work
            </a>
            <a className="transition hover:text-cobalt" href="#about">
              About
            </a>
            <a className="transition hover:text-cobalt" href="#contact">
              Contact
            </a>
          </div>
        </nav>

        <div className="grid flex-1 items-center gap-12 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:py-10">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-berry">
              Professional Media Portfolio
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
              Liam Lawler builds sharp, human-centered media stories.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/70">
              A portfolio home for reporting, production, digital storytelling,
              and creative media work. Built to grow as Liam adds published
              pieces, reels, writing samples, and contact links.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                className="rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-cobalt"
                href="#work"
              >
                View Work
              </a>
              <a
                className="rounded-md border border-black/20 px-5 py-3 text-sm font-semibold transition hover:border-cobalt hover:text-cobalt"
                href="mailto:liam@example.com"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-black/10 bg-white/65 p-6 shadow-2xl shadow-cobalt/10">
            <div className="aspect-[4/5] rounded-md bg-[linear-gradient(150deg,#164e63_0%,#eef5f2_44%,#b7791f_100%)] p-5">
              <div className="flex h-full flex-col justify-between rounded-md border border-white/45 bg-white/20 p-5 text-white backdrop-blur-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em]">
                  Featured Focus
                </p>
                <div>
                  <p className="text-3xl font-semibold leading-tight">
                    Reporting, production, and media strategy with a clear
                    editorial point of view.
                  </p>
                  <p className="mt-4 text-sm leading-6 text-white/85">
                    Replace this panel with a portrait, reel still, or featured
                    project image when those assets are ready.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="border-y border-black/10 bg-white/60 py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cobalt">
              Selected Work
            </p>
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl">
              A flexible foundation for Liam&apos;s best media projects.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {featuredWork.map((item) => (
              <article
                className="rounded-lg border border-black/10 bg-white p-6 shadow-sm"
                key={item.title}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brass">
                  {item.meta}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-black/68">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-berry">
              About
            </p>
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl">
              Built for a growing professional identity.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-black/70">
              This starter portfolio gives Liam a polished place to present a
              media background, highlight projects, and direct collaborators to
              the right contact point. The sections are intentionally easy to
              customize as real clips, photography, and case studies are added.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {strengths.map((strength) => (
                <span
                  className="rounded-md border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black/70"
                  key={strength}
                >
                  {strength}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-ink py-12 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-white/55">
              Contact
            </p>
            <h2 className="mt-2 text-2xl font-semibold">Let&apos;s connect.</h2>
          </div>
          <a
            className="w-fit rounded-md bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-paper"
            href="mailto:liam@example.com"
          >
            liam@example.com
          </a>
        </div>
      </footer>
    </main>
  );
}
