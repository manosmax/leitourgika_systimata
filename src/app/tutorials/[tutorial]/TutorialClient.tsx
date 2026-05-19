"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { ChevronLeft, GripHorizontal } from "lucide-react";
import { MDXProvider } from "@mdx-js/react";
import { useTutorialData } from "@/data/tutorials";
import { useLang } from "@/context/LangContext";

const uiContent = {
  en: {
    back: "Back",
    backHome: "Back to Home",
    source: "Exercise",
    notFound: "Exercise Not Found",
    notFoundDesc: "The requested exercise does not exist.",
  },
  gr: {
    back: "Πισω",
    backHome: "Πισω στην Αρχη",
    source: "Φροντηστηριακη Ασκηση",
    notFound: "Η Άσκηση Δεν Βρέθηκε",
    notFoundDesc: "Η άσκηση που ζητήσατε δεν υπάρχει.",
  },
};

export default function TutorialClient({
  tutorial,
  children,
}: {
  tutorial: string;
  children: React.ReactNode;
}) {
  const { lang } = useLang();
  const t = uiContent[lang];
  const tutorialData = useTutorialData();
  const meta = tutorialData[tutorial as keyof typeof tutorialData];

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

      {/* 3. MDX Content Area */}
      <div
        className="p-8 prose prose-invert max-w-none text-sm leading-relaxed text-(--text) overflow-y-auto"
      >
        <MDXProvider>
          {children}
        </MDXProvider>
      </div>
    </div>
  );
}