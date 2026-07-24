// Central content for the portfolio. Edit these values to update the site.

export const profile = {
  name: "Neveen Atik",
  role: "Full-Stack Engineer",
  location: "Amsterdam, Netherlands",
  phone: "0687646603",
  // Short one-liner shown under the name in the hero.
  tagline:
    "Building scalable web applications with React, Next.js, Node.js, and GraphQL.",
  // Longer paragraph for the About section.
  about:
    "I am a software engineer with over six years of experience building clean, reliable products. " +
    "I work across React and Next.js frontends and Node.js services with REST and GraphQL APIs, backed by SQL and PostgreSQL. " +
    "I am a fast learner and enjoy picking up new tools when they solve real product needs, including practical AI/ML integrations. I care about thoughtful state management, strong developer experience, and shipping software that holds up in production.",
  email: "nevine.atike@gmail.com",
  socials: {
    portfolio: "https://neveenatik.github.io/portfolio/",
    github: "https://github.com/neveenatik",
    linkedin: "https://www.linkedin.com/in/neveen-atik",
    twitter: "https://twitter.com/neveen_atik",
  },
} as const;

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["JavaScript", "TypeScript", "ReactJS", "NextJS", "React hooks"],
  },
  {
    title: "State Management",
    items: ["Redux", "MobX", "State management frameworks"],
  },
  {
    title: "Backend",
    items: ["Node.js", "RESTful APIs", "GraphQL", "Kafka", "Serverless"],
  },
  {
    title: "Databases",
    items: ["DynamoDB", "PostgresDB"],
  },
  {
    title: "Testing",
    items: ["Jest", "Playwright", "Cypress"],
  },
];

export const languages = ["Arabic", "English", "Dutch", "French"] as const;

export const hobbies =
  "Continuous learning of anything, watching sports, playing video games, painting.";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  repo?: string;
  live?: string;
  featured?: boolean;
  role?: string;
};

export const projects: Project[] = [
  {
    title: "Learning Circles Attendance Bot",
    description:
      "A Telegram bot (Telegraf) that tracks attendance for live and offline learning circles. It also includes a companion website built with Next.js, localized in Arabic and English. Powered by Supabase/Postgres state with a Vercel serverless webhook deployment.",
    tags: ["Next.js", "Node.js", "Telegraf", "Supabase", "Postgres", "Vercel"],
    repo: "https://github.com/neveenatik",
    live: "https://deen-circles-web.vercel.app",
    featured: true,
  },
  {
    title: "Sign Language Translator",
    role: "Developer",
    description:
      "A real-time American Sign Language to text web app that detects hand landmarks with MediaPipe and classifies gestures with a TensorFlow model. It supports both live webcam input and uploaded videos through a Streamlit interface, then returns the predicted letter/word output in real time. I built and deployed the full pipeline and improved landmark normalization to be wrist-relative and scale-invariant, which made predictions more stable across different camera distances and hand positions.",
    tags: ["Python", "TensorFlow", "MediaPipe", "Streamlit", "ML"],
    repo: "https://github.com/neveenatik/sign-language-translator",
    live: "https://sign-language-translator-fscrelmm4dwim24yq5vrgh.streamlit.app/",
    featured: true,
  },
  {
    title: "Invoicing Tool",
    role: "Private",
    description:
      "A JavaScript tool for generating and managing invoices, streamlining a repetitive billing workflow for a shipping/logistics use case. Private client project.",
    tags: ["JavaScript", "Automation", "Private"],
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
    live: "https://neveenatik.github.io/Quizes/",
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
    role: "Full-Stack Software Engineer",
    company: "Abcam",
    period: "Sept 2022 - Present",
    location: "Amsterdam",
    points: [
      "Developed RESTful and GraphQL services powered by Kafka for e-commerce applications.",
      "Worked with the team to migrate from Apollo Server Gateway to a lightweight serverless solution using AWS Lambda and API Gateway to handle GraphQL federation and routing without vendor lock-in, reducing costs after Apollo Gateway became monetized.",
      "Helped improve integrated third-party services such as Avalara and Talon.One.",
      "Integrated micro-frontends with AEM to enhance website functionality.",
      "Delivered clean, efficient code while optimizing performance and bundle size.",
      "Collaborated with cross-functional teams to refine user experience and application design.",
    ],
  },
  {
    role: "Frontend Software Engineer",
    company: "DAZN",
    period: "Jun 2019 - Sept 2022",
    location: "Amsterdam",
    points: [
      "Developed and maintained scalable, cross-browser applications for millions of users.",
      "Integrated multiple global payment solutions such as Adyen, PayPal, Apple Pay, and gift cards to enhance transaction experiences.",
      "Collaborated with teams to implement micro-frontend architecture using React.",
      "Executed testing strategies with Jest, Cypress, and Playwright to ensure software quality.",
      "Optimized performance metrics through monitoring tools like GTM, New Relic, and Sentry.",
    ],
  },
  {
    role: "Contributor / Mentor",
    company: "Hack Your Future",
    period: "Dec 2018 - Nov 2019",
    location: "Amsterdam",
    points: [
      "Collaborated with fellow students on HackYourForecast, a weather API for developers that aggregates global weather data using technologies such as HTML scraping, Node.js, chart libraries, and EJS.",
      "Took primary responsibility for fetching and normalizing data, as well as querying and managing database interactions.",
      "After graduation, supported the community as a mentor, conducting 1:1 sessions when needed and reviewing homework assignments to help students progress.",
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
    title: "Full-Stack Web Development Bootcamp",
    org: "Hack Your Future, Amsterdam",
    period: "Mar 2018 - Nov 2018",
    note: "Intensive course in web development, learning front-end and back-end technologies such as ReactJS, MobX, NodeJS, and Git, as well as teamwork and feedback practices.",
  },
  {
    title: "Bachelor",
    org: "Damascus University, Damascus",
    period: "Sept 2001 - Aug 2008",
    note: "Bachelor degree in Economics and Trade, majored in Banking and Insurance.",
  },
];

export type Internship = {
  role: string;
  company: string;
  period: string;
  location?: string;
  points: string[];
};

export const internships: Internship[] = [
  {
    role: "Frontend Developer",
    company: "Booking.com",
    period: "Jan 2019 - Apr 2019",
    location: "Amsterdam",
    points: [
      "Collaborated with fellow trainees on multiple projects, including building a website from design mock-ups.",
      "Implemented features such as data fetching, search functionality, user authentication, and account management using ReactJS and Redux for state management.",
      "Developed small interactive projects in vanilla JavaScript, including games such as flip-flap cards, slot machines, and drag-and-drop puzzles.",
      "Strengthened soft skills through agile methodologies by participating in stand-ups, backlog refinement, sprint planning, retrospectives, and Scrum ceremonies.",
      "Engaged with stakeholders and improved public speaking through team presentations.",
    ],
  },
];

