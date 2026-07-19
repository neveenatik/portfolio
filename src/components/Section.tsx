import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
};

export default function Section({ id, title, eyebrow, children }: Props) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-20 px-5 py-8 sm:px-6 sm:py-10">
      <div className="mb-5 sm:mb-6">
        {eyebrow && (
          <p className="mb-2 font-mono text-sm text-accent-2">{eyebrow}</p>
        )}
        <h2 className="text-xl font-bold tracking-tight sm:text-2xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}
