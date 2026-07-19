"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const THEME_EVENT = "themechange";

function subscribe(callback: () => void) {
  window.addEventListener(THEME_EVENT, callback);
  return () => window.removeEventListener(THEME_EVENT, callback);
}

function getSnapshot(): Theme {
  return (
    (document.documentElement.getAttribute("data-theme") as Theme) || "dark"
  );
}

function getServerSnapshot(): Theme {
  return "dark";
}

export default function ResumePrintTip() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <p className="mt-2 text-xs text-muted">
      By keeping this resume digital, you help our planet stay cleaner.
      {theme === "dark" && (
        <>
          {" "}
          If you really need a paper copy, switching to light mode reduces
          environmental impact.
        </>
      )}
    </p>
  );
}