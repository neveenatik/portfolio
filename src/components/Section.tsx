import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
};

export default function Section({ id, title, eyebrow, children }: Props) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <div className="mb-10">
        {eyebrow && (
          <p className="mb-2 font-mono text-sm text-accent-2">{eyebrow}</p>
        )}
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}
