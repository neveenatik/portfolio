import { profile } from "@/lib/data";
import Section from "./Section";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="04." title="Get in touch">
      <div className="rounded-2xl border border-border bg-surface p-6 text-center sm:p-8">
        <p className="mx-auto max-w-lg text-base leading-relaxed text-muted">
          I&apos;m open to new opportunities and interesting projects. Whether you
          have a question or just want to say hi, my inbox is always open.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
        >
          <MailIcon className="h-4 w-4" />
          {profile.email}
        </a>

        <div className="mt-6 flex items-center justify-center gap-5 text-muted">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-foreground">
            <GitHubIcon />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-foreground">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </Section>
  );
}
