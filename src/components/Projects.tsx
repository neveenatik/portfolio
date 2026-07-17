import { projects } from "@/lib/data";
import Link from "next/link";
import Section from "./Section";
import { GitHubIcon, ExternalIcon } from "./icons";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="03." title="Projects">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className={`group flex flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/40 ${
              project.featured ? "sm:col-span-1" : ""
            }`}
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                {project.role && (
                  <span className="w-fit rounded-full bg-surface-2 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-muted">
                    {project.role}
                  </span>
                )}
              </div>
              <div className="flex shrink-0 items-center gap-3 text-muted">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} repository`}
                    className="transition-colors hover:text-foreground"
                  >
                    <GitHubIcon className="h-5 w-5" />
                  </a>
                )}
                {project.live &&
                  (project.live.startsWith("/") ? (
                    <Link
                      href={project.live}
                      aria-label={`${project.title} live demo`}
                      className="transition-colors hover:text-foreground"
                    >
                      <ExternalIcon className="h-5 w-5" />
                    </Link>
                  ) : (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} live site`}
                      className="transition-colors hover:text-foreground"
                    >
                      <ExternalIcon className="h-5 w-5" />
                    </a>
                  ))}
              </div>
            </div>

            <p className="flex-1 text-sm leading-relaxed text-muted">
              {project.description}
            </p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-surface-2 px-2.5 py-1 font-mono text-xs text-accent-2"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
