import type { Metadata } from "next";
import Link from "next/link";
import {
  profile,
  skillGroups,
  experience,
  education,
  internships,
  languages,
  hobbies,
} from "@/lib/data";
import PrintButton from "@/components/PrintButton";
import ResumePrintTip from "@/components/ResumePrintTip";
import ThemeToggle from "@/components/ThemeToggle";
import { ArrowIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Résumé — Neveen Atik",
  description: "Résumé of Neveen Atik, Full-Stack Engineer.",
};

export default function ResumePage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 pt-28 pb-20 print:pt-8">
      <div className="mb-8 print:hidden">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowIcon className="h-4 w-4 rotate-180" />
            Back to portfolio
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <PrintButton />
          </div>
        </div>
        <ResumePrintTip />
      </div>

      <article className="rounded-2xl border border-border bg-surface p-8 print:border-0 print:bg-transparent print:p-0">
        {/* Header */}
        <header className="border-b border-border pb-6">
          <h1 className="text-3xl font-bold tracking-tight">{profile.name}</h1>
          <p className="mt-1 text-lg text-accent-2">{profile.role}</p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
            <span>{profile.location}</span>
            <span>{profile.phone}</span>
            <a href={`mailto:${profile.email}`} className="hover:text-foreground">
              {profile.email}
            </a>
            <a href={profile.socials.github} className="hover:text-foreground">
              <span className="print:hidden">github.com/neveenatik</span>
              <span className="hidden print:inline">https://github.com/neveenatik</span>
            </a>
            <a href={profile.socials.linkedin} className="hover:text-foreground">
              <span className="print:hidden">linkedin.com/in/neveen-atik</span>
              <span className="hidden print:inline">https://www.linkedin.com/in/neveen-atik</span>
            </a>
            <a href={profile.socials.portfolio} className="hover:text-foreground">
              <span className="print:hidden">neveenatik.github.io/portfolio</span>
              <span className="hidden print:inline">https://neveenatik.github.io/portfolio/</span>
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

        {/* Internships */}
        <section className="border-t border-border py-6">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-accent-2">
            Internships
          </h2>
          <div className="space-y-5">
            {internships.map((internship) => (
              <div key={`${internship.company}-${internship.role}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold">
                    {internship.role} ·{" "}
                    <span className="text-muted">{internship.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-muted">
                    {internship.period}
                    {internship.location ? ` · ${internship.location}` : ""}
                  </span>
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                  {internship.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section className="border-t border-border py-6">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-accent-2">
            Languages
          </h2>
          <p className="text-sm text-muted">{languages.join(", ")}</p>
        </section>

        {/* Hobbies */}
        <section className="border-t border-border pt-6">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent-2">
            Hobbies
          </h2>
          <p className="text-sm text-muted">{hobbies}</p>
        </section>
      </article>
    </main>
  );
}
