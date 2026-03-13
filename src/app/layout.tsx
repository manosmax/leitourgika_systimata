import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Operating Systems - ΓΚ702",
  description: "Operating Systems course materials for the ΓΚ702 class at University of Patras.",
  openGraph: {
    title: "Operating Systems - ΓΚ702",
    description: "Operating Systems course materials for the ΓΚ702 class at University of Patras.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <header className="sticky top-0 z-50 flex h-13 items-center justify-between border-b border-(--border) bg-(--bg) px-8">
          <span className="font-mono text-[0.78rem] tracking-tight text-(--muted)">
            Operating Systems - ΓΚ702
          </span>
          <button className="flex items-center gap-2 rounded-full border border-(--border) bg-(--surface) px-3 py-1 font-mono text-[0.7rem] text-(--muted) hover:text-(--text)">
            ☀️ light
          </button>
        </header>

        <main className="mx-auto max-w-170 px-8 py-16 pb-32">
          {children}
        </main>

        <footer className="border-t border-(--border) p-8 text-center font-mono text-[0.68rem] text-(--faint)">
          Operating Systems - ΓΚ702 | <a href="#" className="underline">Christos Fidas</a>
        </footer>
      </body>
    </html>
  );
}