import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

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
        <Header />

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