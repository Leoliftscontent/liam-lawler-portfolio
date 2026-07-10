export type SocialLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  displayTitle?: string;
  status: string;
  category: string;
  completed?: string;
  published?: string;
  runtime?: string;
  thumbnail: string;
  videoEmbedUrl?: string;
  websiteEmbedUrl?: string;
  gallery: string[];
  behindTheScenes: string[];
  equipment: string[];
  software: string[];
  credits: string[];
  roles: string[];
  client: string;
  year: string;
  tags: string[];
  description: string;
  longDescription?: string;
  awards: string[];
  externalLinks: SocialLink[];
  companionProjectSlug?: string;
  companionProjectLabel?: string;
  statusBadge?: string;
  featured?: boolean;
  pageType?: "film" | "website" | "documentary" | "event" | "social" | "gallery";
  socialPosts?: SocialLink[];
};

// TODO: Replace the placeholders below with Liam's real contact links, portrait, and reel.
export const brand = {
  name: "Liam Lawler",
  title: "Filmmaker, editor, producer, and content creator",
  email: "TODO: add your preferred email",
  emailHref: "#todo-email",
  resumeHref: "/liam-lawler-resume.pdf",
  portraitSrc: "",
  demoReelEmbedUrl: "",
  showreelHref: "#projects",
  socials: [
    { label: "LinkedIn", href: "#todo-linkedin" },
    { label: "Instagram", href: "#todo-instagram" },
    { label: "Vimeo", href: "#todo-vimeo" },
    { label: "IMDb", href: "#todo-imdb" }
  ]
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" }
];

export const heroStats = [
  { value: "TODO", label: "Add reel runtime, festival count, or key metric" },
  { value: "TODO", label: "Add production specialty or signature format" },
  { value: "TODO", label: "Add social reach, client count, or body of work" }
];

export const aboutBlocks = [
  {
    title: "My Story",
    body:
      "Liam Lawler is a filmmaker, editor, producer, and content creator building cinematic work across narrative film, documentary, and digital media. TODO: add the personal origin story behind your creative path."
  },
  {
    title: "SUNY Purchase",
    body:
      "Liam is a Media Studies graduate from SUNY Purchase. TODO: add graduation year, capstone context, relevant coursework, mentors, and the projects that shaped your voice."
  },
  {
    title: "Filmmaking Philosophy",
    body:
      "As an award-winning filmmaker, director, editor, and producer, Liam is passionate about cinematic storytelling that feels emotionally specific and formally intentional. TODO: add your philosophy around story, image, sound, performance, and collaboration."
  },
  {
    title: "Career Direction",
    body:
      "Liam specializes in work that bridges documentary, narrative film, and digital platforms. TODO: add the roles, collaborators, production environments, and long-term career goals you want this portfolio to attract."
  }
];

export const specializations = [
  "TODO: documentary production",
  "TODO: branded content",
  "TODO: social-first video",
  "TODO: editing and post-production",
  "TODO: on-set production",
  "TODO: creative direction"
];

export const experience = [
  {
    title: "Independent Filmmaker",
    organization: "TODO: add production company, personal brand, or independent credit context",
    period: "TODO: add dates",
    detail:
      "TODO: describe your independent film work, responsibilities, formats, and strongest examples."
  },
  {
    title: "Media Studies Graduate",
    organization: "SUNY Purchase",
    period: "TODO: add graduation date",
    detail:
      "TODO: summarize your Media Studies background, capstone work, production courses, and creative focus."
  },
  {
    title: "Creative / Production Role",
    organization: "Wonderland Pride",
    period: "TODO: add dates",
    detail:
      "TODO: describe your actual role, deliverables, event/media work, and measurable responsibilities."
  },
  {
    title: "Content / Operations Role",
    organization: "Nikki's Snack Bar",
    period: "TODO: add dates",
    detail:
      "TODO: add the real work you did here, including media, customer-facing, operational, or leadership duties."
  },
  {
    title: "Content / Hospitality Role",
    organization: "Cherry's on the Bay",
    period: "TODO: add dates",
    detail:
      "TODO: add the real work you did here, especially anything connected to content, events, community, or production."
  },
  {
    title: "Freelance Production Work",
    organization: "TODO: add clients, collaborators, or project types",
    period: "TODO: add dates",
    detail:
      "TODO: summarize freelance production responsibilities, crew roles, deliverables, and notable collaborations."
  }
];

// TODO: Replace the shared placeholder thumbnail with real stills/posters for each project.
// YouTube embed format: https://www.youtube.com/embed/VIDEO_ID
export const projects: Project[] = [
  {
    slug: "shattered-melody",
    title: "Shattered Melody",
    status: "Completed",
    category: "Narrative Short Film",
    completed: "May 2026",
    runtime: "8m 55s",
    thumbnail: "/cinematic-production-hero.png",
    videoEmbedUrl: "https://www.youtube.com/embed/so_J0Z_n-kI",
    gallery: ["/cinematic-production-hero.png"],
    behindTheScenes: ["/cinematic-production-hero.png"],
    equipment: ["Canon 90D"],
    software: ["Adobe Premiere Pro"],
    credits: ["TODO: add collaborators and full credits"],
    roles: ["Writer", "Director", "Assistant Cinematographer", "Editor"],
    client: "Independent / student film",
    year: "2026",
    tags: ["Film", "Narrative", "Short"],
    description:
      "Shattered Melody follows Marianne Sinclair, a music therapist helping a patient suffering from retrograde amnesia reconnect with their memories through music after a devastating hit-and-run accident.",
    longDescription:
      "TODO: Add a director's statement, production notes, visual approach, editing process, and reflections on the finished short.",
    awards: ["TODO: add awards or remove this item"],
    externalLinks: [
      {
        label: "Watch Project",
        href: "https://youtu.be/so_J0Z_n-kI?is=S8AzCtqBAcw2JS7U"
      }
    ],
    featured: true,
    pageType: "film"
  },
  {
    slug: "still-processing-film",
    title: "Still Processing",
    displayTitle: "Still Processing: Film",
    status: "Senior Capstone",
    category: "Narrative Short Film",
    thumbnail: "/cinematic-production-hero.png",
    videoEmbedUrl: "https://www.youtube.com/embed/BwLoKzwATH8",
    gallery: ["/cinematic-production-hero.png"],
    behindTheScenes: ["/cinematic-production-hero.png"],
    equipment: ["TODO: camera", "TODO: lenses", "TODO: audio", "TODO: lighting"],
    software: ["TODO: editing software", "TODO: color/audio tools"],
    credits: ["TODO: add senior film credits"],
    roles: ["Director", "Writer", "Producer", "Editor", "Lead Actor"],
    client: "SUNY Purchase senior capstone",
    year: "TODO: add year",
    tags: ["Narrative", "Senior Capstone", "Transmedia"],
    description:
      "The narrative short film side of Still Processing, Liam's senior capstone exploring how modern platforms like TikTok and YouTube shape identity and self-perception through transmedia storytelling.",
    longDescription:
      "TODO: Add the film logline, capstone goals, performance approach, production process, and how the film connects to the interactive website.",
    awards: ["TODO: add awards or remove this item"],
    externalLinks: [
      {
        label: "Watch Project",
        href: "https://youtu.be/BwLoKzwATH8?is=gsb6WlTNhj0vkNbC"
      }
    ],
    companionProjectSlug: "still-processing-website",
    companionProjectLabel: "Explore the interactive website",
    featured: true,
    pageType: "film"
  },
  {
    slug: "still-processing-website",
    title: "Still Processing",
    displayTitle: "Still Processing: Interactive Website",
    status: "Senior Capstone",
    category: "Interactive Narrative Website",
    thumbnail: "/cinematic-production-hero.png",
    videoEmbedUrl: "",
    websiteEmbedUrl: "https://v0-leo-s-feed.vercel.app/",
    gallery: ["/cinematic-production-hero.png"],
    behindTheScenes: ["/cinematic-production-hero.png"],
    equipment: ["TODO: add tools, software, and production tech used"],
    software: ["TODO: add web tools, design tools, and production software"],
    credits: ["TODO: add collaborators or solo project credit"],
    roles: ["TODO: add Liam's interactive project role"],
    client: "SUNY Purchase senior project",
    year: "TODO: add year",
    tags: ["Interactive", "Senior Capstone", "Transmedia"],
    description:
      "The interactive website side of Still Processing, extending the senior capstone into a transmedia experience about identity, self-perception, and modern platforms.",
    longDescription:
      "TODO: Describe the website structure, interaction design, platform references, visual language, and how it connects back to the narrative film.",
    awards: ["TODO: add awards or remove this item"],
    externalLinks: [
      {
        label: "Watch Project",
        href: "https://v0-leo-s-feed.vercel.app/"
      }
    ],
    companionProjectSlug: "still-processing-film",
    companionProjectLabel: "Watch the narrative film",
    featured: false,
    pageType: "website"
  },
  {
    slug: "becoming-lola",
    title: "Becoming Lola",
    status: "Published",
    category: "Documentary",
    completed: "Fall 2024",
    published: "May 2025",
    runtime: "10m 34s",
    thumbnail: "/cinematic-production-hero.png",
    videoEmbedUrl: "https://www.youtube.com/embed/9VCEMcf4400",
    gallery: ["/cinematic-production-hero.png"],
    behindTheScenes: ["/cinematic-production-hero.png"],
    equipment: ["Panasonic DVX200", "Canon 90D"],
    software: ["TODO: editing software", "TODO: color/audio tools"],
    credits: ["TODO: add documentary credits"],
    roles: ["Director", "Cinematographer", "Editor"],
    client: "Independent documentary",
    year: "2024-2025",
    tags: ["Documentary", "Drag", "Performance"],
    description:
      'A documentary following a transgender drag queen preparing for her electrifying performance "The Night of 1,000 Lolas."',
    longDescription:
      "TODO: Add production context, relationship with the subject, interview/visual approach, edit process, and publication notes.",
    awards: ["TODO: add awards or remove this item"],
    externalLinks: [
      {
        label: "Watch Project",
        href: "https://youtu.be/9VCEMcf4400?is=bfhBOGVTUdxSb0FW"
      }
    ],
    featured: true,
    pageType: "documentary"
  },
  {
    slug: "wonderland-event-coverage",
    title: "Wonderland Event Coverage",
    status: "In Progress",
    category: "Event Coverage",
    thumbnail: "/cinematic-production-hero.png",
    videoEmbedUrl: "",
    gallery: ["/cinematic-production-hero.png"],
    behindTheScenes: ["/cinematic-production-hero.png"],
    equipment: ["Sony FX3"],
    software: ["TODO: editing software"],
    credits: ["AMP Production Company", "TODO: add documentary team credits"],
    roles: ["Production Assistant", "Videographer"],
    client: "AMP Production Company",
    year: "TODO: add year",
    tags: ["Event Coverage", "Pride", "In Progress"],
    description:
      "Filmed event coverage at the Wonderland-themed Pride event in New Hope, Pennsylvania, including performances by Kim Petras. Footage is currently being edited and used within an upcoming documentary produced by the documentary team.",
    longDescription:
      "TODO: Add more context about the event, production needs, shot responsibilities, editing status, and how the footage supports the upcoming documentary.",
    awards: ["TODO: add recognition or remove this item"],
    externalLinks: [{ label: "Watch Project", href: "#todo-wonderland-link" }],
    statusBadge: "IN PROGRESS",
    featured: true,
    pageType: "event"
  },
  {
    slug: "social-media-internship",
    title: "SUNY Purchase Admissions Social Media Internship",
    status: "Social media internship",
    category: "Short-form Social Campaign",
    thumbnail: "/cinematic-production-hero.png",
    videoEmbedUrl: "",
    gallery: ["/cinematic-production-hero.png"],
    behindTheScenes: ["/cinematic-production-hero.png"],
    equipment: ["TODO: camera/phone used", "TODO: editing software", "TODO: analytics tools"],
    software: ["TODO: editing apps", "TODO: scheduling/analytics platforms"],
    credits: ["TODO: add organization, supervisor, and collaborators if appropriate"],
    roles: ["TODO: add Liam's internship title and responsibilities"],
    client: "SUNY Purchase Admissions",
    year: "TODO: add year",
    tags: ["Social Media", "Instagram", "Short-form Video", "Internship"],
    description:
      "During Liam's internship, he created short-form content for Instagram and TikTok promoting SUNY Purchase. This page presents the work as one cohesive campaign rather than isolated posts.",
    longDescription:
      "TODO: Add campaign goals, target audiences, planning process, editing approach, publishing cadence, performance notes, and what Liam learned from the internship.",
    awards: ["TODO: add performance highlights or remove this item"],
    socialPosts: [
      {
        label: "Instagram reel 1",
        href: "https://www.instagram.com/reel/DaQqmeAJ_VS/?igsh=MXY3ZzZiczl6MHg2MQ=="
      },
      {
        label: "Instagram post",
        href: "https://www.instagram.com/p/DX62IQAjj7Q/?igsh=emYzNHRmdndqNHQ4"
      },
      {
        label: "Instagram reel 2",
        href: "https://www.instagram.com/reel/DXwrPU-u8V_/?igsh=YTE4enlicjI3bGo1"
      },
      {
        label: "Instagram reel 3",
        href: "https://www.instagram.com/reel/DXsD4b6CAUt/?igsh=MXUxdzNiaTBjcmhubg=="
      },
      {
        label: "Instagram reel 4",
        href: "https://www.instagram.com/reel/DXh0ckjCHhy/?igsh=ZzU2bjZxajZ3YWR0"
      },
      {
        label: "Instagram reel 5",
        href: "https://www.instagram.com/reel/DXFZhdwCQLo/?igsh=MTV1YTF3Y3dlbjF1aA=="
      },
      {
        label: "Instagram reel 6",
        href: "https://www.instagram.com/reel/DWrnoWVCeeQ/?igsh=OHRtMXQ0MmQ3azA2"
      },
      {
        label: "Instagram reel 7",
        href: "https://www.instagram.com/reel/DWoyVw2jllN/?igsh=dThyNzhwM3JvdGVp"
      },
      {
        label: "Instagram reel 8",
        href: "https://www.instagram.com/reel/DWhQhp1icHe/?igsh=MXA0Y29pdTA4aGFiYg=="
      },
      {
        label: "Instagram reel 9",
        href: "https://www.instagram.com/reel/DWCLnb6CjG-/?igsh=MWk1aDFmbGpnZXZ2NQ=="
      },
      {
        label: "Instagram reel 10",
        href: "https://www.instagram.com/reel/DVb_cwniUby/?igsh=c3h4bWttcW5od2s2"
      },
      {
        label: "Instagram reel 11",
        href: "https://www.instagram.com/reel/DUognFaEg2d/?igsh=cG1mdW9uY21hOXY1"
      },
      {
        label: "Instagram reel 12",
        href: "https://www.instagram.com/reel/DYNEmQmOgvN/?igsh=anZ1bHFmdTJjMnl3"
      }
    ],
    externalLinks: [
      {
        label: "Watch Project",
        href: "https://www.instagram.com/reel/DaQqmeAJ_VS/?igsh=MXY3ZzZiczl6MHg2MQ=="
      }
    ],
    featured: true,
    pageType: "social"
  },
  {
    slug: "behind-the-scenes-gallery",
    title: "Behind the Scenes Gallery",
    status: "Spring 2025",
    category: "Behind-the-Scenes Photography",
    thumbnail: "/cinematic-production-hero.png",
    videoEmbedUrl: "",
    gallery: ["/cinematic-production-hero.png", "/cinematic-production-hero.png", "/cinematic-production-hero.png"],
    behindTheScenes: ["/cinematic-production-hero.png", "/cinematic-production-hero.png", "/cinematic-production-hero.png"],
    equipment: ["TODO: lighting kit", "TODO: grip gear", "TODO: camera support"],
    software: ["TODO: photo editing software"],
    credits: ["TODO: add crew and class production credits"],
    roles: ["Gaffer"],
    client: "Spring 2025 Short Film Production",
    year: "2025",
    tags: ["Behind the Scenes", "Gaffing", "Production"],
    description:
      "Behind-the-scenes photography from Spring 2025 Short Film Production. Liam served primarily as Gaffer.",
    longDescription:
      "TODO: Add lighting diagrams, gaffing notes, equipment breakdowns, crew information, and production-photo captions.",
    awards: ["TODO: add relevant recognition or remove this item"],
    externalLinks: [{ label: "Watch Project", href: "#gallery" }],
    featured: true,
    pageType: "gallery"
  }
];

export const skillGroups = [
  {
    name: "Production",
    skills: ["TODO: producing", "TODO: directing", "TODO: lighting", "TODO: camera operation"]
  },
  {
    name: "Editing",
    skills: ["TODO: Premiere Pro", "TODO: pacing", "TODO: short-form edits", "TODO: story edits"]
  },
  {
    name: "Color",
    skills: ["TODO: DaVinci Resolve", "TODO: color correction", "TODO: look development"]
  },
  {
    name: "Audio",
    skills: ["TODO: field audio", "TODO: dialogue cleanup", "TODO: sound design"]
  },
  {
    name: "Photography",
    skills: ["TODO: BTS photography", "TODO: portraits", "TODO: event coverage"]
  },
  {
    name: "Social Media",
    skills: ["TODO: Instagram", "TODO: TikTok", "TODO: YouTube", "TODO: content calendars"]
  },
  {
    name: "Creative Direction",
    skills: ["TODO: visual concepts", "TODO: moodboards", "TODO: campaign ideas"]
  },
  {
    name: "Software",
    skills: ["TODO: Adobe CC", "TODO: Resolve", "TODO: Frame.io", "TODO: CapCut"]
  }
];

export const awards = [
  {
    title: "TODO: Award or honor title",
    organization: "TODO: awarding organization",
    year: "TODO: year",
    detail: "TODO: add context or remove this item until real information is ready."
  },
  {
    title: "TODO: Award or honor title",
    organization: "TODO: awarding organization",
    year: "TODO: year",
    detail: "TODO: add context or remove this item until real information is ready."
  }
];

export const galleryItems = [
  {
    src: "/cinematic-production-hero.png",
    alt: "TODO: add behind-the-scenes photo from short film production class, Spring 2025",
    category: "Short Film Production - Spring 2025"
  },
  {
    src: "/cinematic-production-hero.png",
    alt: "TODO: add production still from short film production class, Spring 2025",
    category: "Production stills"
  },
  {
    src: "/cinematic-production-hero.png",
    alt: "TODO: add on-set photo from short film production class, Spring 2025",
    category: "On set"
  }
];

export const clients = [
  "Wonderland Pride",
  "Nikki's Snack Bar",
  "Cherry's on the Bay",
  "TODO: add organization",
  "TODO: add client",
  "TODO: add collaborator"
];

export const testimonials = [
  {
    quote: "TODO: add a real testimonial quote.",
    name: "TODO: person's name",
    role: "TODO: title / organization"
  },
  {
    quote: "TODO: add a real testimonial quote.",
    name: "TODO: person's name",
    role: "TODO: title / organization"
  }
];
