"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { ChevronLeft } from "lucide-react";
import { useTutorialData } from "@/data/tutorials";
import { useLang } from "@/context/LangContext";

const content = {
  en: {
    back: "Back",
    backHome: "Back to Home",
    source: "Tutorial Exercise",
    notFound: "Exercise Not Found",
    notFoundDesc: "The requested tutorial exercise does not exist.",
    loading: "Loading...",
  },
  gr: {
    back: "Πισω",
    backHome: "Πισω στην Αρχη",
    source: "Φροντηστηριακη Ασκηση",
    notFound: "Η Άσκηση Δεν Βρέθηκε",
    notFoundDesc: "Η άσκηση που ζητήσατε δεν υπάρχει.",
    loading: "Φόρτωση...",
  },
};

export default function TutorialPage() {
  const { tutorial } = useParams();
  const { lang } = useLang();
  const t = content[lang];
  const tutorialData = useTutorialData();
  const meta = tutorialData[tutorial as string];

  const [markdown, setMarkdown] = useState<string | null>(null);

  useEffect(() => {
    if (!meta) return;
    fetch(`/tutorials/${tutorial}.md`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.text();
      })
      .then(setMarkdown)
      .catch(() => setMarkdown("Could not load content."));
  }, [tutorial, meta]);

  if (!meta) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-bg">
        <h1 className="text-2xl font-light text-text mb-4">{t.notFound}</h1>
        <p className="text-muted text-sm mb-8">{t.notFoundDesc}</p>
        <Link
          href="/"
          className="flex items-center gap-2 text-(--accent) hover:text-text transition-colors font-mono text-[0.7rem] uppercase tracking-widest border border-border rounded-md px-4 py-2"
        >
          <ChevronLeft size={14} /> {t.backHome}
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-bg">
      {/* Header */}
      <header className="flex items-center p-4 border-b border-border bg-surface">
        <Link
          href="/"
          className="flex items-center gap-2 text-(--accent) hover:text-text transition-colors font-mono text-[1rem] uppercase tracking-widest"
        >
          <ChevronLeft size={20} /> <span className="translate-y-px">{t.back}</span>
        </Link>
      </header>

      {/* Title & Description */}
      <div className="p-8 max-w-170">
        <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
          {t.source}: {tutorial}
        </div>
        <h1 className="text-3xl font-light mb-4 text-text leading-tight">
          {meta.title}
        </h1>
        <p className="text-(--muted) text-sm leading-relaxed max-w-prose">
          {meta.description}
        </p>
      </div>

      {/* Markdown Content Area */}
      <div className="flex-1 overflow-y-auto mx-8 mb-8 rounded-lg border border-border bg-surface">
        <div className="p-8 prose prose-invert max-w-none text-sm leading-relaxed text-(--text)">
          {markdown === null ? (
            <p className="text-(--muted) font-mono text-xs uppercase tracking-widest animate-pulse">
              {t.loading}
            </p>
          ) : (
            <ReactMarkdown>{markdown}</ReactMarkdown>
          )}
        </div>
      </div>
    </div>
  );
}