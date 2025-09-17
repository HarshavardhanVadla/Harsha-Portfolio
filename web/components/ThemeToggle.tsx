"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Read the actual DOM class on mount (single source of truth)
  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem("theme");           // "dark" | "light" | null
      const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initial = stored ? stored === "dark" : prefers;

      // Force DOM to match initial
      document.documentElement.classList.toggle("dark", initial);
      setIsDark(initial);
    } catch {
      // fallback: read DOM
      const domDark = document.documentElement.classList.contains("dark");
      setIsDark(domDark);
    }
  }, []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark"); // read DOM, not state
    document.documentElement.classList.toggle("dark", next);
    setIsDark(next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
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
