import type { Metadata } from "next";
import Link from "next/link";
import {
  profile,
  skillGroups,
  experience,
  education,
} from "@/lib/data";
import PrintButton from "@/components/PrintButton";
import { ArrowIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Résumé — Neveen Atik",
  description: "Résumé of Neveen Atik, Software Engineer.",
};

export default function ResumePage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 pt-28 pb-20 print:pt-8">
      <div className="mb-8 flex items-center justify-between gap-4 print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowIcon className="h-4 w-4 rotate-180" />
          Back to portfolio
        </Link>
        <PrintButton />
      </div>

      <article className="rounded-2xl border border-border bg-surface p-8 print:border-0 print:bg-transparent print:p-0">
        {/* Header */}
        <header className="border-b border-border pb-6">
          <h1 className="text-3xl font-bold tracking-tight">{profile.name}</h1>
          <p className="mt-1 text-lg text-accent-2">{profile.role}</p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
            <span>{profile.location}</span>
            <a href={`mailto:${profile.email}`} className="hover:text-foreground">
              {profile.email}
            </a>
            <a href={profile.socials.github} className="hover:text-foreground">
              github.com/neveenatik
            </a>
            <a href={profile.socials.linkedin} className="hover:text-foreground">
              linkedin.com/in/neveen-atik
            </a>
          </div>
        </header>

        {/* Summary */}
        <section className="py-6">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent-2">
            Summary
          </h2>
          <p className="text-sm leading-relaxed text-muted">{profile.about}</p>
        </section>

        {/* Experience */}
        <section className="border-t border-border py-6">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-accent-2">
            Experience
          </h2>
          <div className="space-y-5">
            {experience.map((job) => (
              <div key={`${job.company}-${job.role}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold">
                    {job.role} ·{" "}
                    <span className="text-muted">{job.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-muted">
                    {job.period}
                    {job.location ? ` · ${job.location}` : ""}
                  </span>
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="border-t border-border py-6">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-accent-2">
            Skills
          </h2>
          <div className="space-y-2 text-sm">
            {skillGroups.map((group) => (
              <p key={group.title}>
                <span className="font-medium">{group.title}: </span>
                <span className="text-muted">{group.items.join(", ")}</span>
              </p>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="border-t border-border py-6">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-accent-2">
            Education
          </h2>
          <div className="space-y-3">
            {education.map((ed) => (
              <div key={ed.title}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold">
                    {ed.title} ·{" "}
                    <span className="text-muted">{ed.org}</span>
                  </h3>
                  <span className="font-mono text-xs text-muted">
                    {ed.period}
                  </span>
                </div>
                {ed.note && (
                  <p className="mt-1 text-sm text-muted">{ed.note}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
