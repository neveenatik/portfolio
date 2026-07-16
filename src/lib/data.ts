// Central content for the portfolio. Edit these values to update the site.

export const profile = {
  name: "Neveen Atik",
  role: "Software Engineer",
  location: "Amsterdam, Netherlands",
  // Short one-liner shown under the name in the hero.
  tagline:
    "Full-stack engineer building reliable web apps with React, Next.js and Node.js.",
  // Longer paragraph for the About section.
  about:
    "I'm a software engineer who enjoys turning ideas into clean, maintainable products. " +
    "I work across the stack — from React and Next.js front-ends to Node.js services with REST and GraphQL APIs, " +
    "backed by SQL and Postgres. I care about thoughtful state management, good developer experience, and shipping things that hold up in production.",
  email: "nevine.atike@gmail.com",
  socials: {
    github: "https://github.com/neveenatik",
    linkedin: "https://www.linkedin.com/in/neveen-atik",
    twitter: "https://twitter.com/neveen_atik",
  },
} as const;

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML & CSS", "Tailwind CSS"],
  },
  {
    title: "State & Data Fetching",
    items: ["Redux", "MobX", "React Query", "Apollo / GraphQL client"],
  },
  {
    title: "Backend",
    items: ["Node.js", "REST APIs", "GraphQL APIs", "Express", "Serverless"],
  },
  {
    title: "Data",
    items: ["SQL", "PostgreSQL", "Supabase", "Data modeling"],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  repo?: string;
  live?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Qur'an Circle Attendance Bot",
    description:
      "A Telegram bot (Telegraf) that tracks attendance for live and offline study sessions. Arabic UI, Supabase/Postgres state, and a Vercel serverless webhook deployment.",
    tags: ["Node.js", "Telegraf", "Supabase", "Postgres", "Vercel"],
    repo: "https://github.com/neveenatik",
    featured: true,
  },
  {
    title: "Sign Language Translator",
    description:
      "An application that translates sign language, exploring computer vision and interactive UI to make communication more accessible.",
    tags: ["JavaScript", "Machine Learning", "UI"],
    repo: "https://github.com/neveenatik",
    featured: true,
  },
  {
    title: "Invoicing (PostNL)",
    description:
      "A JavaScript tool for generating and managing invoices, streamlining a repetitive billing workflow.",
    tags: ["JavaScript", "Automation"],
    repo: "https://github.com/neveenatik/invoicing-postnl",
  },
  {
    title: "Flip-Flop",
    description:
      "A simple flip-flop memory card game built in vanilla JavaScript — modernized here with React, TypeScript and CSS 3D transforms. Playable live.",
    tags: ["React", "TypeScript", "Game"],
    repo: "https://github.com/neveenatik/flip-flop",
    live: "/games/flip-flop",
    featured: true,
  },
  {
    title: "Quizzes",
    description:
      "An interactive quiz application built with JavaScript, letting users answer questions and track their score.",
    tags: ["JavaScript", "Quiz"],
    repo: "https://github.com/neveenatik/Quizes",
  },
  {
    title: "HackYourForecast",
    description:
      "A weather forecast app built with a team during Hack Your Future, consuming a weather API to display conditions.",
    tags: ["JavaScript", "API", "Teamwork"],
    repo: "https://github.com/HackYourForecast/hackyourforecast",
  },
];

// ---------------------------------------------------------------------------
// Résumé content. These are placeholders — edit the titles, dates and bullets
// to match your real experience.
// ---------------------------------------------------------------------------

export type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    company: "Abcam",
    period: "Present",
    location: "Amsterdam, NL",
    points: [
      "Build and maintain full-stack web features with React, Next.js and Node.js.",
      "Design and consume REST and GraphQL APIs backed by SQL / PostgreSQL.",
      "Collaborate in a cross-functional team, focusing on maintainable, well-tested code.",
    ],
  },
  {
    role: "Front-end / Full-stack Developer",
    company: "Freelance & Open Source",
    period: "Earlier",
    points: [
      "Delivered React applications with Redux, MobX and React Query for state and data fetching.",
      "Built small products and tools (invoicing automation, browser games, quiz apps).",
    ],
  },
];

export type Education = {
  title: string;
  org: string;
  period: string;
  note?: string;
};

export const education: Education[] = [
  {
    title: "Full-stack Web Development",
    org: "HackYourFuture",
    period: "Bootcamp",
    note: "Intensive program covering JavaScript, React, Node.js and databases.",
  },
];

