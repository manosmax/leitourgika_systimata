"use client";
import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { ChevronLeft, GripHorizontal } from "lucide-react";
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
  const meta = tutorialData[tutorial as keyof typeof tutorialData]; 

  const [markdown, setMarkdown] = useState<string | null>(null);
  const [contentHeight, setContentHeight] = useState(600);
  const handleRef = useRef<HTMLDivElement>(null);

  const startResize = (e: React.PointerEvent) => {
    e.preventDefault();
    const handle = handleRef.current;
    if (!handle) return;

    const startY = e.clientY;
    const startHeight = contentHeight;

    handle.setPointerCapture(e.pointerId);

    const onMove = (e: PointerEvent) => {
      setContentHeight(Math.max(200, Math.min(1400, startHeight + (e.clientY - startY))));
    };

    const onUp = () => {
      handle.removeEventListener("pointermove", onMove);
      handle.removeEventListener("pointerup", onUp);
    };

    handle.addEventListener("pointermove", onMove);
    handle.addEventListener("pointerup", onUp);
  };

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
    <div className="flex flex-col bg-bg max-w-4xl mx-auto">
      {/* 1. Header */}
      <header className="flex items-center justify-between p-4 border-b border-border bg-surface">
        <Link
          href="/"
          className="flex items-center gap-2 text-(--accent) hover:text-text transition-colors font-mono text-[0.75rem] uppercase tracking-widest"
        >
          <ChevronLeft size={20} /> <span className="translate-y-px">{t.back}</span>
        </Link>
      </header>

      {/* 2. Title & Description */}
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

      {/* 3. Markdown Content Area */}
      <div
        style={{ height: contentHeight }}
        className="relative overflow-y-auto mx-2 sm:mx-4 rounded-lg border border-border bg-surface"
      >
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

      {/* 4. Resize Handle */}
      <div
        ref={handleRef}
        onPointerDown={startResize}
        className="mx-2 sm:mx-4 mb-8 flex items-center justify-center h-6 rounded-b-lg hover:border-accent bg-surface/50 hover:bg-surface cursor-ns-resize transition-all group touch-none"
      >
        <GripHorizontal size={14} className="text-(--muted) group-hover:text-(--accent) transition-colors" />
      </div>
    </div>
  );
}