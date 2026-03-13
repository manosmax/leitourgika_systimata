"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, Download, ChevronLeft } from "lucide-react";
import { docMetadata } from "@/data/handouts";

export default function PDFPage() {
  const { handout } = useParams();
  const [isVisible, setIsVisible] = useState(true);
  
  // Lookup metadata based on the URL parameter
  const meta = docMetadata[handout as string] || {
    title: "Document Viewer",
    description: "Viewing static handout asset."
  };

  const pdfPath = `/handouts/${handout}.pdf`;

  return (
    <div className="flex flex-col h-screen bg-bg">
      {/* 1. Header with Controls */}
      <header className="flex items-center justify-between p-4 border-b border-border bg-surface">
        <Link href="/" className="flex items-center gap-2 text-muted hover:text-text transition-colors font-mono text-xs">
          <ChevronLeft size={14} /> Back
        </Link>
        
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setIsVisible(!isVisible)}
            className={`flex items-center gap-2 px-4 py-2 border rounded-md text-xs font-mono transition-all
              ${isVisible ? "bg-accent text-white border-accent" : "bg-surface text-muted border-border hover:border-faint"}`}
          >
            {isVisible ? <EyeOff size={14} /> : <Eye size={14} />}
            {isVisible ? "Hide" : "View"}
          </button>

          <Link href={pdfPath} download className="flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-md text-xs font-mono text-muted hover:border-faint">
            <Download size={14} /> Download
          </Link>
        </div>
      </header>

      {/* 2. Title & Description Block */}
      <div className="p-8 max-w-170">
        <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
          Handout Source: {handout}
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
            <p className="mt-4 font-mono text-[10px] uppercase tracking-widest">Toggle view to display content</p>
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