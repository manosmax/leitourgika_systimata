"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, Download, ChevronLeft } from "lucide-react";
import { useDocMetadata } from "@/data/handouts";
import { useLang } from "@/context/LangContext";

const content = {
  en: {
    back: "Back",
    backHome: "Back to Home",
    hide: "Hide",
    view: "View",
    download: "Download",
    source: "Handout Source",
    notFound: "Handout Not Found",
    notFoundDesc: "The requested handout does not exist.",
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

  const meta = docMetadata[handout as string] || {
    title: "Document Viewer",
    description: "Viewing static handout asset."
  };

  if (docMetadata[handout as string] === undefined) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-bg">
        <h1 className="text-2xl font-light text-text mb-4">{t.notFound}</h1>
        <p className="text-muted text-sm mb-8">{t.notFoundDesc}</p>
        <Link href="/" className="flex items-center gap-2 text-(--accent) hover:text-text transition-colors font-mono text-[0.7rem] uppercase tracking-widest border border-border rounded-md px-4 py-2">
          <ChevronLeft size={14} /> {t.backHome}
        </Link>
      </div>
    );
  }
  const pdfPath = `/handouts/${handout}.pdf`;

  return (
    <div className="flex flex-col h-screen bg-bg">
      {/* 1. Header with Controls */}
      <header className="flex items-center justify-between p-4 border-b border-border bg-surface">
        <Link href="/" className="flex items-center gap-2 text-(--accent) hover:text-text transition-colors font-mono text-[1rem] uppercase tracking-widest">
          <ChevronLeft size={20} /> <span className="translate-y-px">{t.back}</span>
        </Link>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-md font-mono text-[0.7rem] uppercase tracking-widest text-(--accent) hover:border-accent transition-all"
          >
            {isVisible ? <EyeOff size={14} /> : <Eye size={14} />}
            {isVisible ? t.hide : t.view}
          </button>

          <Link href={pdfPath} download className="flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-md font-mono text-[0.7rem] uppercase tracking-widest text-(--accent) hover:border-accent transition-all">
            <Download size={14} /> {t.download}
          </Link>
        </div>
      </header>

      {/* 2. Title & Description Block */}
      <div className="p-8 max-w-170">
        <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
          {t.source}: {handout}
        </div>
        <h1 className="text-3xl font-light mb-4 text-text leading-tight">
          {meta.title}
        </h1>
        <p className="text-(--muted) text-sm leading-relaxed max-w-prose">
          {meta.description}
        </p>
      </div>

      {/* 3. PDF Display Area */}
      <div className="flex-1 relative overflow-hidden bg-faint/5 mx-8 mb-8 rounded-lg border border-border">
        {!isVisible ? (
          <div className="flex flex-col items-center justify-center h-full opacity-20">
            <Eye size={48} strokeWidth={1} />
            <p className="mt-4 font-mono text-[10px] uppercase tracking-widest">{t.toggleHint}</p>
          </div>
        ) : (
          <iframe
            src={`${pdfPath}#view=FitH`}
            className="w-full h-full animate-in fade-in slide-in-from-bottom-4 duration-500"
            title={meta.title}
          />
        )}
      </div>
    </div>
  );
}