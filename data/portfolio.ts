export type SocialLink = {
  label: string;
  href: string;
  thumbnail?: string;
  thumbnailAlt?: string;
  thumbnailObjectPosition?: string;
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
  dates?: string;
  year: string;
  tags: string[];
  cardTags?: string[];
  description: string;
  cardDescription?: string;
  longDescription?: string;
  awards: string[];
  externalLinks: SocialLink[];
  companionProjectSlug?: string;
  companionProjectLabel?: string;
  statusBadge?: string;
  ctaLabel?: string;
  featured?: boolean;
  pageType?: "film" | "website" | "documentary" | "event" | "social" | "gallery";
  socialPosts?: SocialLink[];
  overviewSections?: Array<{
    title: string;
    body: string;
  }>;
};

export const brand = {
  name: "Liam Lawler",
  eyebrow: "LIAM LAWLER'S PORTFOLIO",
  eyebrowDisplay: "LIAM LAWLER\u2019S PORTFOLIO",
  roleHeading:
    "Media Producer \u2022 Director \u2022 Video Editor \u2022 Content Creator",
  intro:
    "Award-winning media creator working across narrative film, documentary, live-event coverage, social media, and transmedia storytelling.",
  resumeHref: "/documents/liam-lawler-resume.pdf",
  showreelHref: "#projects",
  socials: [] as SocialLink[]
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" }
];

export const aboutCopy = [
  "Liam Lawler is a summa cum laude Media Studies graduate from SUNY Purchase with a minor in Film. His work spans narrative filmmaking, documentary, transmedia storytelling, live-event coverage, and social media content. He has experience directing, writing, producing, filming, editing, coordinating festivals, and developing digital campaigns.",
  "His creative approach combines emotionally grounded storytelling with thoughtful visual design. He is pursuing opportunities in production coordination, videography, video editing, television, film production, social media, and creative marketing."
];

export const education = [
  {
    school: "SUNY Purchase College",
    degree: "Bachelor's Degree in Media Studies",
    minor: "Minor in Film",
    graduated: "Graduated May 15, 2026",
    gpa: "GPA: 4.08",
    honor: "Summa Cum Laude"
  }
];

export const experience = [
  {
    title: "Production Assistant / Videographer",
    organization: "AMP Production Company",
    period: "June 2026 - Present",
    bullets: [
      "Captured event coverage for a Wonderland-themed Pride event in New Hope, Pennsylvania, including a live performance by Kim Petras.",
      "Operated a Sony FX6 to film live performances, event highlights, and behind-the-scenes footage.",
      "Currently editing footage for promotional and documentary use.",
      "Provided original footage to a documentary team for inclusion in an upcoming film about the event."
    ]
  },
  {
    title: "Social Media Intern",
    organization: "SUNY Purchase Admissions",
    period: "January 20, 2026 - May 15, 2026",
    bullets: [
      "Created short-form video content for Instagram and TikTok promoting student life and admissions.",
      "Filmed and edited content using CapCut and Canva.",
      "Scheduled posts and reviewed content performance analytics.",
      "Collaborated with the admissions team on digital marketing and audience engagement."
    ]
  },
  {
    title: "Film Festival Coordinator",
    organization: "SUNY Purchase",
    period: "2025 - 2026",
    bullets: [
      "Organized the Film Minor Showcase in 2025 and 2026 and directed the December 2025 Queer Film Fest.",
      "Created submission forms, promotional posters, social media content, screening programs, and film schedules.",
      "Selected screening order and managed projection-booth playback during live events.",
      "Led outreach efforts, coordinated volunteers, gave opening remarks, and managed event logistics.",
      "Produced a podcast documenting the promotional and organizational process behind the Queer Film Fest."
    ]
  }
];

export const projects: Project[] = [
  {
    slug: "shattered-melody",
    title: "Shattered Melody",
    status: "Completed",
    category: "Narrative Short Film",
    completed: "May 12, 2026",
    runtime: "8 minutes 55 seconds",
    thumbnail: "/images/shattered-melody/thumbnail/shattered-melody-thumbnail.png",
    videoEmbedUrl: "https://www.youtube.com/embed/so_J0Z_n-kI",
    gallery: [],
    behindTheScenes: [],
    equipment: ["Canon 90D"],
    software: ["Adobe Premiere Pro"],
    credits: [],
    roles: ["Writer", "Director", "Assistant Cinematographer", "Editor"],
    client: "Independent",
    year: "2026",
    tags: ["Narrative Short Film", "Drama", "Music"],
    description:
      "Shattered Melody follows Marianne Sinclair, a music therapist helping a patient with retrograde amnesia reconnect with the world through music after a hit-and-run accident erased their past.",
    cardDescription:
      "A narrative short about memory, music therapy, and reconnection after a life-altering accident.",
    awards: [],
    externalLinks: [
      {
        label: "Watch Project",
        href: "https://youtu.be/so_J0Z_n-kI"
      }
    ],
    ctaLabel: "Watch Project",
    featured: true,
    pageType: "film"
  },
  {
    slug: "still-processing-film",
    title: "Still Processing",
    displayTitle: "Still Processing",
    status: "Senior Capstone",
    category: "Transmedia Project",
    thumbnail: "/images/still-processing/thumbnail/still-processing-thumbnail.png",
    videoEmbedUrl: "https://www.youtube.com/embed/BwLoKzwATH8",
    websiteEmbedUrl: "https://v0-leo-s-feed.vercel.app/",
    gallery: [],
    behindTheScenes: [],
    equipment: [],
    software: [],
    credits: [],
    roles: ["Director", "Writer", "Producer", "Editor", "Lead Actor"],
    client: "SUNY Purchase Senior Capstone",
    year: "2026",
    tags: [
      "Transmedia Storytelling",
      "Narrative Film",
      "Interactive Media",
      "YouTube",
      "TikTok",
      "Digital Identity"
    ],
    cardTags: ["Transmedia", "Interactive Media", "Narrative Film"],
    description:
      "Still Processing follows Leo, a fitness creator whose online identity begins to fracture under the pressure to remain visible, likable, and consistent. Told across film, YouTube, TikTok, and an interactive website, each platform reveals a different version of Leo and changes how his story is understood.",
    cardDescription:
      "A transmedia senior capstone following a fitness creator whose story unfolds differently across film, YouTube, TikTok, and an interactive website.",
    longDescription:
      "Rather than using social media only as the setting, Still Processing uses each platform as a different form of storytelling. Viewers can enter Leo's story through the short film, his personal YouTube video, his TikTok account, or the interactive website. The version of Leo they encounter changes depending on where they begin.",
    awards: ["Werlinich Senior Project Award — Grant Recipient"],
    externalLinks: [
      {
        label: "Watch Short Film",
        href: "https://youtu.be/BwLoKzwATH8"
      },
      {
        label: "Launch Interactive Experience",
        href: "https://v0-leo-s-feed.vercel.app/"
      },
      {
        label: "Watch YouTube Confessional",
        href: "https://youtu.be/Rna5V-1AlqQ"
      },
      {
        label: "Visit Leo's TikTok",
        href: "https://www.tiktok.com/@leo.lifts"
      }
    ],
    ctaLabel: "Explore Project",
    companionProjectSlug: "still-processing-website",
    companionProjectLabel: "Launch the interactive website",
    featured: true,
    pageType: "film",
    overviewSections: [
      {
        title: "Short Film",
        body:
          "The short film presents a structured narrative about burnout and the growing distance between Leo's online persona and private life."
      },
      {
        title: "YouTube Confessional",
        body:
          "His YouTube video uses direct address and performative vulnerability to create a more intimate, parasocial connection with the viewer."
      },
      {
        title: "Leo's TikTok",
        body:
          "On TikTok, Leo's identity becomes fragmented into short, carefully performed moments designed for attention and engagement."
      },
      {
        title: "Interactive Website",
        body:
          "The website acts as the central entry point, letting visitors choose where they begin and experience how each platform changes their understanding of Leo."
      }
    ]
  },
  {
    slug: "still-processing-website",
    title: "Still Processing",
    displayTitle: "Still Processing — Interactive Narrative Website",
    status: "Senior Capstone",
    category: "Interactive Media / Transmedia Storytelling",
    thumbnail: "/cinematic-production-hero.png",
    websiteEmbedUrl: "https://v0-leo-s-feed.vercel.app/",
    gallery: [],
    behindTheScenes: [],
    equipment: [],
    software: [],
    credits: [],
    roles: [
      "Director",
      "Writer",
      "Producer",
      "Editor",
      "Lead Actor",
      "Interactive Experience Creator"
    ],
    client: "SUNY Purchase Senior Capstone",
    year: "2026",
    tags: ["Interactive Media", "Transmedia Storytelling", "Senior Capstone"],
    description:
      "Still Processing is an interactive transmedia project exploring creator identity, burnout, and algorithmic storytelling through a fictional fitness content creator named Leo. The experience connects an original short film, social-media-style content, YouTube videos, research, and interactive pathways into one narrative world.",
    cardDescription:
      "An interactive narrative website connecting film, social-style media, research, and branching digital pathways.",
    longDescription:
      "The interactive website and short film are two connected parts of the same senior capstone. Together, they create a transmedia narrative about identity, performance, burnout, and the pressures of platform-driven storytelling.",
    awards: [],
    externalLinks: [
      {
        label: "Launch Interactive Experience",
        href: "https://v0-leo-s-feed.vercel.app/"
      },
      {
        label: "Watch the Short Film",
        href: "https://youtu.be/BwLoKzwATH8"
      }
    ],
    ctaLabel: "Launch Experience",
    companionProjectSlug: "still-processing-film",
    companionProjectLabel: "Watch the short film",
    featured: false,
    pageType: "website",
    overviewSections: [
      {
        title: "Transmedia Structure",
        body:
          "The project connects an original short film with a live interactive website, social-media-style content, YouTube videos, research, and branching digital pathways."
      },
      {
        title: "Creative Process",
        body:
          "The experience was built around a fictional fitness content creator named Leo, using platform-native storytelling forms to examine creator identity, burnout, and self-performance."
      },
      {
        title: "Connected Short Film",
        body:
          "The website is designed to be experienced alongside the Still Processing short film, with each work expanding the same senior capstone narrative from a different format."
      },
      {
        title: "Research and Theory",
        body:
          "The project explores how platforms such as TikTok and YouTube shape identity, performance, self-perception, and algorithmic storytelling."
      }
    ]
  },
  {
    slug: "becoming-lola",
    title: "Becoming Lola",
    status: "Published",
    category: "Short Documentary",
    completed: "November 2024",
    dates: "Filmed in Fall 2024",
    published: "May 2025",
    runtime: "10 minutes 34 seconds",
    thumbnail: "/images/becoming-lola/thumbnail/becoming-lola-thumbnail.jpg",
    videoEmbedUrl: "https://www.youtube.com/embed/9VCEMcf4400",
    gallery: [],
    behindTheScenes: [],
    equipment: ["Panasonic DVX", "Canon 90D"],
    software: [],
    credits: [],
    roles: ["Director", "Cinematographer", "Editor"],
    client: "Independent",
    year: "2024 - 2025",
    tags: ["Documentary", "Drag", "Performance"],
    description:
      "Becoming Lola is a short documentary following a transgender drag queen on the road to her electrifying performance at The Night of 1,000 Lolas.",
    cardDescription:
      "A short documentary following Lola on the road to a transformative drag performance.",
    awards: [],
    externalLinks: [
      {
        label: "Watch Project",
        href: "https://youtu.be/9VCEMcf4400"
      }
    ],
    ctaLabel: "Watch Project",
    featured: true,
    pageType: "documentary"
  },
  {
    slug: "wonderland-event-coverage",
    title: "Wonderland Event Coverage",
    status: "In Progress",
    category: "Event Coverage",
    thumbnail: "/cinematic-production-hero.png",
    gallery: [],
    behindTheScenes: [],
    equipment: ["Sony FX6"],
    software: [],
    credits: [],
    roles: ["Production Assistant", "Videographer", "Editor"],
    client: "AMP Production Company",
    year: "2026",
    tags: ["Event Coverage", "Pride", "Live Performance"],
    description:
      "Professional event coverage filmed at a Wonderland-themed Pride event in New Hope, Pennsylvania, including a live performance by Kim Petras. The footage is currently being edited, and selected material was provided to a documentary team for an upcoming film about the event.",
    cardDescription:
      "Event coverage from a Wonderland-themed Pride event in New Hope, Pennsylvania.",
    awards: [],
    externalLinks: [],
    statusBadge: "In Progress",
    featured: true,
    pageType: "event"
  },
  {
    slug: "social-media-internship",
    title: "SUNY Purchase Admissions Social Media Internship",
    status: "Completed",
    category: "Social Media Campaign",
    dates: "January 20, 2026 - May 15, 2026",
    thumbnail: "/images/admissions-internship/thumbnail/admissions-internship-thumbnail.png",
    gallery: [],
    behindTheScenes: [],
    equipment: [],
    software: ["CapCut", "Canva"],
    credits: [],
    roles: ["Social Media Intern"],
    client: "SUNY Purchase Admissions",
    year: "2026",
    tags: ["Social Media", "Instagram", "TikTok", "Admissions"],
    description:
      "A collection of short-form videos created for SUNY Purchase Admissions across Instagram and TikTok. Liam contributed to filming, editing, content planning, scheduling, and analytics.",
    cardDescription:
      "Short-form admissions content created for Instagram and TikTok while supporting planning and analytics.",
    awards: [],
    externalLinks: [],
    socialPosts: [
      {
        label: "Instagram Reel",
        href: "https://www.instagram.com/reel/DaQqmeAJ_VS/?igsh=MXY3ZzZiczl6MHg2MQ==",
        thumbnail: "/images/admissions-internship/posts/post-01.jpg",
        thumbnailAlt: "Two SUNY Purchase students speaking to camera outside a campus building",
        thumbnailObjectPosition: "center"
      },
      {
        label: "Instagram Post",
        href: "https://www.instagram.com/p/DX62IQAjj7Q/?igsh=emYzNHRmdndqNHQ4",
        thumbnail: "/images/admissions-internship/posts/post-02.png",
        thumbnailAlt: "Graduating students posing in caps and gowns outside the Purchase College library",
        thumbnailObjectPosition: "center"
      },
      {
        label: "Instagram Reel",
        href: "https://www.instagram.com/reel/DXwrPU-u8V_/?igsh=YTE4enlicjI3bGo1",
        thumbnail: "/images/admissions-internship/posts/post-03.png",
        thumbnailAlt: "Two students sitting outdoors on campus during a social media interview",
        thumbnailObjectPosition: "center"
      },
      {
        label: "Instagram Reel",
        href: "https://www.instagram.com/reel/DXsD4b6CAUt/?igsh=MXUxdzNiaTBjcmhubg==",
        thumbnail: "/images/admissions-internship/posts/post-04.png",
        thumbnailAlt: "Students waving outside a Purchase College building entrance",
        thumbnailObjectPosition: "center"
      },
      {
        label: "Instagram Reel",
        href: "https://www.instagram.com/reel/DXh0ckjCHhy/?igsh=ZzU2bjZxajZ3YWR0",
        thumbnail: "/images/admissions-internship/posts/post-05.png",
        thumbnailAlt: "Student pointing at the sky on a sunny campus walkway",
        thumbnailObjectPosition: "center"
      },
      {
        label: "Instagram Reel",
        href: "https://www.instagram.com/reel/DXFZhdwCQLo/?igsh=MTV1YTF3Y3dlbjF1aA==",
        thumbnail: "/images/admissions-internship/posts/post-06.jpg",
        thumbnailAlt: "Afrodisiac Day performance footage with two performers on stage",
        thumbnailObjectPosition: "center"
      },
      {
        label: "Instagram Reel",
        href: "https://www.instagram.com/reel/DWrnoWVCeeQ/?igsh=OHRtMXQ0MmQ3azA2",
        thumbnail: "/images/admissions-internship/posts/post-07.png",
        thumbnailAlt: "Two students seated indoors during a campus interview",
        thumbnailObjectPosition: "center"
      },
      {
        label: "Instagram Reel",
        href: "https://www.instagram.com/reel/DWoyVw2jllN/?igsh=dThyNzhwM3JvdGVp",
        thumbnail: "/images/admissions-internship/posts/post-08.png",
        thumbnailAlt: "Accepted Students Day group standing outside a campus building",
        thumbnailObjectPosition: "center"
      },
      {
        label: "Instagram Reel",
        href: "https://www.instagram.com/reel/DWhQhp1icHe/?igsh=MXA0Y29pdTA4aGFiYg==",
        thumbnail: "/images/admissions-internship/posts/post-09.jpg",
        thumbnailAlt: "Students outdoors pointing toward the camera during a campus trend video",
        thumbnailObjectPosition: "center"
      },
      {
        label: "Instagram Reel",
        href: "https://www.instagram.com/reel/DWCLnb6CjG-/?igsh=MWk1aDFmbGpnZXZ2NQ==",
        thumbnail: "/images/admissions-internship/posts/post-10.png",
        thumbnailAlt: "Student standing indoors holding a sign that says the rumors are true",
        thumbnailObjectPosition: "center"
      },
      {
        label: "Instagram Reel",
        href: "https://www.instagram.com/reel/DVb_cwniUby/?igsh=c3h4bWttcW5od2s2",
        thumbnail: "/images/admissions-internship/posts/post-11.jpg",
        thumbnailAlt: "Student named Marcus standing outside on a snowy campus walkway",
        thumbnailObjectPosition: "center"
      },
      {
        label: "Instagram Reel",
        href: "https://www.instagram.com/reel/DUognFaEg2d/?igsh=cG1mdW9uY21hOXY1",
        thumbnail: "/images/admissions-internship/posts/post-12.png",
        thumbnailAlt: "Student seated inside Purchase Broadcast Studios beside an audio console",
        thumbnailObjectPosition: "center"
      },
      {
        label: "Instagram Reel",
        href: "https://www.instagram.com/reel/DYNEmQmOgvN/?igsh=anZ1bHFmdTJjMnl3",
        thumbnail: "/images/admissions-internship/posts/post-13.jpg",
        thumbnailAlt: "Dining hall food clips promoting pancake madness for Purchase students",
        thumbnailObjectPosition: "center"
      }
    ],
    ctaLabel: "View Campaign",
    featured: true,
    pageType: "social"
  },
  {
    slug: "behind-the-scenes-gallery",
    title: "Spring 2025 Short Film Production",
    displayTitle: "Behind-the-Scenes Gallery",
    status: "Spring 2025",
    category: "Behind-the-Scenes Photography",
    thumbnail: "/cinematic-production-hero.png",
    gallery: [],
    behindTheScenes: [],
    equipment: ["Professional Lighting Equipment", "Camera Support and Stabilization Systems"],
    software: [],
    credits: [],
    roles: ["Gaffer"],
    client: "SUNY Purchase Short Film Production",
    year: "2025",
    tags: ["Behind the Scenes", "Gaffing", "Lighting"],
    description:
      "Behind-the-scenes images from a selective short-film production course supporting SUNY Purchase Acting BFA showcase films. Liam worked throughout the semester as a gaffer and gained practical experience with lighting setups, bounce techniques, tube lights, grip equipment, and on-set collaboration.",
    cardDescription:
      "Behind-the-scenes photography and lighting work from a Spring 2025 short-film production course.",
    awards: [],
    externalLinks: [],
    ctaLabel: "View Gallery",
    featured: true,
    pageType: "gallery"
  }
];

export const skillGroups = [
  {
    name: "Software",
    skills: ["Adobe Premiere Pro", "Adobe Audition", "Adobe Photoshop", "CapCut", "Canva"]
  },
  {
    name: "Production",
    skills: [
      "Directing",
      "Producing",
      "Cinematography",
      "Video Editing",
      "Documentary Filmmaking",
      "Narrative Filmmaking",
      "Event Videography",
      "Production Coordination",
      "Gaffing",
      "Lighting",
      "Field Audio Recording",
      "Interview Production",
      "Social Media Content Creation"
    ]
  },
  {
    name: "Equipment",
    skills: [
      "Sony FX6",
      "Panasonic DVX200",
      "Canon 90D",
      "Canon Rebel T7",
      "Professional Lighting Equipment",
      "Field Audio Equipment",
      "Camera Support and Stabilization Systems"
    ]
  }
];

export const awards = [
  "Werlinich Senior Project Award — Grant Recipient, 2026",
  "Outstanding Senior in Media Studies, 2026",
  "Outstanding Junior in Media Studies, 2025",
  "Summa Cum Laude, 2026",
  "Dean's List — Multiple Semesters",
  "Teeny Award — Best Supporting Actor in a Comedy or Drama for Clue, 2022"
];

export const galleryItems: Array<{
  src: string;
  alt: string;
  category: string;
}> = [];

export const clients = [
  "AMP Production Company",
  "SUNY Purchase Admissions",
  "SUNY Purchase Media Studies and Film"
];
