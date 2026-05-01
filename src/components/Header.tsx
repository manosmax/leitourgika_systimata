"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/context/LangContext";

export default function Header() {
  const [isDark, setIsDark] = useState(true);
  const { lang, setLang } = useLang();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <header className="sticky top-0 z-50 flex h-13 items-center justify-between border-b border-(--border) bg-(--bg) px-8">
      <span className="font-mono text-[0.78rem] tracking-tight text-(--muted)">
        Operating Systems - ECE_ΓΚ702
      </span>
      <div className="flex items-center gap-2">
        <button
          onClick={() => setLang(lang === "en" ? "gr" : "en")}
          className="flex items-center gap-2 rounded-full border border-(--border) bg-(--surface) px-3 py-1 font-mono text-[0.7rem] text-(--muted) hover:text-(--text)"
        >
          {lang === "en" ? "🇬🇷 ελ" : "🇬🇧 en"}
        </button>
        <button
          onClick={() => setIsDark(!isDark)}
          className="flex items-center gap-2 rounded-full border border-(--border) bg-(--surface) px-3 py-1 font-mono text-[0.7rem] text-(--muted) hover:text-(--text)"
        >
          {isDark ? '☀️ light' : '🌙 dark'}
        </button>
      </div>
    </header>
  );
}