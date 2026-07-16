import { skillGroups } from "@/lib/data";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="02." title="Skills & tools">
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-xl border border-border bg-surface p-6"
          >
            <h3 className="mb-4 text-sm font-semibold text-accent-2">
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-surface-2 px-3 py-1 text-sm text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
