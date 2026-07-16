"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

const EMOJIS = ["🚀", "🎯", "⚡", "🌙", "🔥", "🎨", "🧩", "💎"];

type Card = {
  id: number;
  emoji: string;
  flipped: boolean;
  matched: boolean;
};

// Deterministic ordered deck — identical on server and client, so the initial
// render hydrates cleanly. We shuffle only after mount (see the effect below).
function orderedDeck(): Card[] {
  return [...EMOJIS, ...EMOJIS].map((emoji, id) => ({
    id,
    emoji,
    flipped: false,
    matched: false,
  }));
}

function shuffledDeck(): Card[] {
  const deck = orderedDeck();
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck.map((card, id) => ({ ...card, id }));
}

export default function FlipFlop() {
  const [cards, setCards] = useState<Card[]>(orderedDeck);
  const [picked, setPicked] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [locked, setLocked] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [started, setStarted] = useState(false);

  const won = useMemo(() => cards.every((c) => c.matched), [cards]);

  // Shuffle once on the client after hydration to avoid a server/client mismatch.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only shuffle after mount
    setCards(shuffledDeck());
  }, []);

  // Timer
  useEffect(() => {
    if (!started || won) return;
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [started, won]);

  const reset = useCallback(() => {
    setCards(shuffledDeck());
    setPicked([]);
    setMoves(0);
    setLocked(false);
    setSeconds(0);
    setStarted(false);
  }, []);

  function handlePick(index: number) {
    if (locked) return;
    const card = cards[index];
    if (card.flipped || card.matched) return;
    if (!started) setStarted(true);

    const nextCards = cards.map((c, i) =>
      i === index ? { ...c, flipped: true } : c,
    );
    const nextPicked = [...picked, index];
    setCards(nextCards);
    setPicked(nextPicked);

    if (nextPicked.length === 2) {
      setMoves((m) => m + 1);
      setLocked(true);
      const [a, b] = nextPicked;
      if (nextCards[a].emoji === nextCards[b].emoji) {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c, i) =>
              i === a || i === b ? { ...c, matched: true } : c,
            ),
          );
          setPicked([]);
          setLocked(false);
        }, 400);
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c, i) =>
              i === a || i === b ? { ...c, flipped: false } : c,
            ),
          );
          setPicked([]);
          setLocked(false);
        }, 800);
      }
    }
  }

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="mb-6 flex items-center justify-between gap-4 text-sm">
        <div className="rounded-lg border border-border bg-surface px-4 py-2">
          <span className="block text-xs text-muted">Moves</span>
          <span className="font-mono text-lg font-semibold">{moves}</span>
        </div>
        <div className="rounded-lg border border-border bg-surface px-4 py-2">
          <span className="block text-xs text-muted">Time</span>
          <span className="font-mono text-lg font-semibold">
            {mm}:{ss}
          </span>
        </div>
        <button
          type="button"
          onClick={reset}
          className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
        >
          Restart
        </button>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {cards.map((card, index) => {
          const revealed = card.flipped || card.matched;
          return (
            <button
              key={card.id}
              type="button"
              onClick={() => handlePick(index)}
              aria-label={revealed ? card.emoji : "Hidden card"}
              className="relative aspect-square [perspective:1000px]"
            >
              <span
                className={`absolute inset-0 rounded-xl transition-transform duration-300 [transform-style:preserve-3d] ${
                  revealed ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                {/* Back */}
                <span className="absolute inset-0 grid place-items-center rounded-xl border border-border bg-surface-2 text-2xl [backface-visibility:hidden]">
                  <span className="text-accent/60">?</span>
                </span>
                {/* Front */}
                <span
                  className={`absolute inset-0 grid place-items-center rounded-xl border text-3xl [backface-visibility:hidden] [transform:rotateY(180deg)] ${
                    card.matched
                      ? "border-accent-2/60 bg-accent-2/10"
                      : "border-accent/50 bg-surface"
                  }`}
                >
                  {card.emoji}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {won && (
        <div className="mt-6 rounded-xl border border-accent-2/50 bg-accent-2/10 p-5 text-center">
          <p className="text-lg font-semibold">🎉 You matched them all!</p>
          <p className="mt-1 text-sm text-muted">
            {moves} moves in {mm}:{ss}
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-4 rounded-full bg-accent px-5 py-2 text-sm font-medium text-white"
          >
            Play again
          </button>
        </div>
      )}
    </div>
  );
}
