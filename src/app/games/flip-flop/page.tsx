import type { Metadata } from "next";
import Link from "next/link";
import FlipFlop from "@/components/FlipFlop";
import { ArrowIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Flip-Flop — Memory Game | Neveen Atik",
  description:
    "A modern take on the classic flip-flop memory card game, rebuilt with React and TypeScript.",
};

export default function FlipFlopPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-6 pt-28 pb-20">
      <Link
        href="/#projects"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
      >
        <ArrowIcon className="h-4 w-4 rotate-180" />
        Back to portfolio
      </Link>

      <header className="mb-10">
        <p className="mb-2 font-mono text-sm text-accent-2">Live demo</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Flip-Flop
        </h1>
        <p className="mt-3 max-w-xl text-muted">
          A modernized version of my early vanilla-JS card game — now rebuilt
          with React, TypeScript and CSS 3D transforms. Match all eight pairs in
          as few moves as you can.
        </p>
      </header>

      <FlipFlop />
    </main>
  );
}
