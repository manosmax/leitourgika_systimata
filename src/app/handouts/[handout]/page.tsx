"use client";
import { useState, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, Download, ChevronLeft, GripHorizontal } from "lucide-react";
import { useDocMetadata } from "@/data/handouts";
import { useLang } from "@/context/LangContext";

const content = {
  en: {
    back: "Back",
    backHome: "Back to Home",
    hide: "Hide",
    view: "View",
    download: "Download",
    source: "Activity Source",
    notFound: "Activity Not Found",
    notFoundDesc: "The requested activity does not exist.",
    toggleHint: "Toggle view to display content",
  },
  gr: {
    back: "Πισω",
    backHome: "Πισω στην Αρχη",
    hide: "Αποκρυψη",
    view: "Προβολη",
    download: "Ληψη",
    source: "Πηγη Δραστηριοτητας",
    notFound: "Η Δραστηριοτητα Δεν Βρεθηκε",
    notFoundDesc: "Η δραστηριοτητα που ζητησατε δεν υπαρχει.",
    toggleHint: "Εναλλαξτε την προβολη για εμφανιση περιεχομενου",
  },
};

export default function PDFPage() {
  const { handout } = useParams();
  const [isVisible, setIsVisible] = useState(true);
  const { lang } = useLang();
  const t = content[lang];
  const docMetadata = useDocMetadata();

  const [pdfHeight, setPdfHeight] = useState(500);
  const handleRef = useRef<HTMLDivElement>(null);

  const startResize = (e: React.PointerEvent) => {
    e.preventDefault();
    const handle = handleRef.current;
    if (!handle) return;

    const startY = e.clientY;
    const startHeight = pdfHeight;

    handle.setPointerCapture(e.pointerId);

    const onMove = (e: PointerEvent) => {
      setPdfHeight(Math.max(200, Math.min(1400, startHeight + (e.clientY - startY))));
    };

    const onUp = () => {
      handle.removeEventListener("pointermove", onMove);
      handle.removeEventListener("pointerup", onUp);
    };

    handle.addEventListener("pointermove", onMove);
    handle.addEventListener("pointerup", onUp);
  };

  const handoutKey = Array.isArray(handout) ? handout[0] : handout as string;
  const meta = (docMetadata as unknown as Record<string, { title: string; description?: string }>)[handoutKey] || {
    title: "Document Viewer",
    description: "Viewing static activity asset.",
  };

  if (!(handoutKey in docMetadata)) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-bg px-4">
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

  const pdfPath = `/handouts/${handout}.pdf`;

  return (
    <div className="flex flex-col bg-bg max-w-4xl mx-auto">
      {/* 1. Header with Controls */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-border bg-surface gap-3">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-(--accent) hover:text-text transition-colors font-mono text-[0.7rem] uppercase tracking-widest shrink-0"
        >
          <ChevronLeft size={16} />
          <span>{t.back}</span>
        </Link>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-surface border border-border rounded-md font-mono text-[0.65rem] uppercase tracking-widest text-(--accent) hover:border-accent transition-all"
          >
            {isVisible ? <EyeOff size={13} /> : <Eye size={13} />}
            <span className="hidden sm:inline">{isVisible ? t.hide : t.view}</span>
          </button>

          <Link
            href={pdfPath}
            download
            className="flex items-center gap-1.5 px-3 py-1.5 bg-surface border border-border rounded-md font-mono text-[0.65rem] uppercase tracking-widest text-(--accent) hover:border-accent transition-all"
          >
            <Download size={13} />
            <span className="hidden sm:inline">{t.download}</span>
          </Link>
        </div>
      </header>

      {/* 2. Title & Description Block */}
      <div className="px-4 pt-6 pb-4 sm:px-8 sm:pt-8">
        <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
          {t.source}: {handout}
        </div>
        <h1 className="text-2xl sm:text-3xl font-light mb-3 text-text leading-tight">
          {meta.title}
        </h1>
        <p className="text-(--muted) text-sm leading-relaxed max-w-prose">
          {meta.description}
        </p>
      </div>

      {/* 3. PDF Display Area */}
      <div
        style={{ height: pdfHeight }}
        className="relative overflow-hidden bg-faint/5 mx-2 sm:mx-4 rounded-lg border border-border"
      >
        {!isVisible ? (
          <div className="flex flex-col items-center justify-center h-full opacity-20">
            <Eye size={48} strokeWidth={1} />
            <p className="mt-4 font-mono text-[10px] uppercase tracking-widest">{t.toggleHint}</p>
          </div>
        ) : (
          <iframe
            src={`${pdfPath}#view=FitH`}
            className="w-full h-full animate-in fade-in slide-in-from-bottom-4 duration-500 sm:scale-100"
            style={{ transformOrigin: "top left" }}
            title={meta.title}
          />
        )}
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