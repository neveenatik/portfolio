import { profile } from "@/lib/data";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" eyebrow="01." title="About me">
      <div className="grid gap-8 md:grid-cols-3">
        <p className="text-base leading-relaxed text-muted md:col-span-2">
          {profile.about}
        </p>
        <ul className="space-y-3 text-sm">
          <li className="rounded-lg border border-border bg-surface px-4 py-3">
            <span className="block text-muted">Role</span>
            <span className="font-medium">{profile.role}</span>
          </li>
          <li className="rounded-lg border border-border bg-surface px-4 py-3">
            <span className="block text-muted">Based in</span>
            <span className="font-medium">{profile.location}</span>
          </li>
          <li className="rounded-lg border border-border bg-surface px-4 py-3">
            <span className="block text-muted">Focus</span>
            <span className="font-medium">Full-stack web</span>
          </li>
        </ul>
      </div>
    </Section>
  );
}
