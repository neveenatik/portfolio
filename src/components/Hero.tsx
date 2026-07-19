import Link from "next/link";
import { profile } from "@/lib/data";
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowIcon } from "./icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="mx-auto flex min-h-[52vh] max-w-5xl flex-col justify-center px-6 pt-24 pb-3 sm:min-h-[56vh]">
        <p className="mb-3 font-mono text-sm text-accent-2">Hi, my name is</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          {profile.name}
        </h1>
        <h2 className="mt-2 text-2xl font-semibold text-muted sm:text-4xl">
          <span className="gradient-text">{profile.role}</span>
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {profile.tagline}
        </p>
        <p className="mt-2 text-sm text-muted">📍 {profile.location}</p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
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

        <div className="mt-6 flex items-center gap-4 text-muted">
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
    </section>
  );
}
