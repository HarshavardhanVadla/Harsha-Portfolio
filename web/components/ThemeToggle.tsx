"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem("theme");
      const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const dark = stored ? stored === "dark" : prefers;
      document.documentElement.classList.toggle("dark", dark);
      setIsDark(dark);
    } catch {}
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-full border border-zinc-300 px-3 py-1.5 text-sm hover:bg-zinc-100
                 dark:border-zinc-700 dark:hover:bg-zinc-800"
    >
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
