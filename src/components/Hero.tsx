import Link from "next/link";
import Image from "next/image";
import { profile } from "@/lib/data";
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowIcon } from "./icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="mx-auto grid min-h-[46vh] max-w-6xl items-center gap-8 px-5 pt-20 pb-2 sm:min-h-[50vh] sm:px-6 md:grid-cols-[260px_1fr] md:gap-10 lg:grid-cols-[300px_1fr]">
        <div className="order-1 md:order-2">
          <p className="mb-2.5 font-mono text-sm text-accent-2">Hi, my name is</p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            {profile.name}
          </h1>
          <h2 className="mt-1.5 text-xl font-semibold text-muted sm:text-3xl">
            <span className="gradient-text">{profile.role}</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            {profile.tagline}
          </p>
          <p className="mt-2 text-sm text-muted">📍 {profile.location}</p>

          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              View my work
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent/50 hover:bg-surface"
            >
              <MailIcon className="h-4 w-4" />
              Contact me
            </a>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent/50 hover:bg-surface"
            >
              Résumé
            </Link>
          </div>

          <div className="mt-5 flex items-center gap-4 text-muted">
            <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-foreground">
              <GitHubIcon />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-foreground">
              <LinkedInIcon />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="transition-colors hover:text-foreground">
              <MailIcon />
            </a>
          </div>
        </div>

        <div className="order-2 mx-auto mt-1 w-[220px] sm:w-[260px] md:order-1 md:mx-0 md:mt-0 md:w-full md:max-w-[300px] md:justify-self-start">
          <div className="rounded-[1.75rem] bg-gradient-to-br from-accent/20 via-transparent to-accent-2/20 p-1">
            <Image
              src="cv-photo.webp"
              alt="Portrait of Neveen Atik"
              width={1400}
              height={1471}
              priority
              unoptimized
              className="h-auto w-full rounded-[1.5rem] border border-border/70 bg-surface shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
