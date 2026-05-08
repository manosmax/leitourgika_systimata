"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/context/LangContext";

export default function Header() {
  const [isDark, setIsDark] = useState(() => 
    typeof window !== "undefined" 
      ? window.matchMedia("(prefers-color-scheme: dark)").matches 
      : true
  );
  const { lang, setLang } = useLang();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-(--border) bg-(--bg) px-8">
      <span className="font-mono text-[0.78rem] tracking-tight text-(--muted) flex flex-col sm:flex-row sm:items-center">
        <span>Operating Systems</span>
        <span className="hidden sm:inline">&nbsp;-&nbsp;</span>
        <span>ECE_ΓΚ702</span>
      </span>
      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={() => setLang(lang === "en" ? "gr" : "en")}
          className="flex items-center gap-2 rounded-full border border-(--border) bg-(--surface) px-3 py-1 font-mono text-[0.7rem] text-(--muted) hover:text-(--text)"
        >
          {lang === "en" ? (
            <>🇬🇷<span className="hidden sm:inline"> ελ</span></>
          ) : (
            <>🇬🇧<span className="hidden sm:inline"> en</span></>
          )}
        </button>
        <button
          onClick={() => setIsDark(!isDark)}
          className="flex items-center gap-2 rounded-full border border-(--border) bg-(--surface) px-3 py-1 font-mono text-[0.7rem] text-(--muted) hover:text-(--text)"
        >
          {isDark ? (
            <>☀️<span className="hidden sm:inline"> light</span></>
          ) : (
            <>🌙<span className="hidden sm:inline"> dark</span></>
          )}
        </button>
      </div>
    </header>
  );
}