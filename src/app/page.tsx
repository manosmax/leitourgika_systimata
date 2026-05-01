"use client";
import { Section } from "@/components/Section";
import Link from "next/link";
import { useLang } from "@/context/LangContext";

const content = {
  en: {
    label: "4th year · Winter semester",
    title: "Operating Systems",
    desc1: "This operating systems course covers the fundamentals of OS design and implementation practices. In the duration of this course, students will get involved in hands-on labs developing modules for the Linux kernel and the xv6 educational operating system, as well as implementing low level parts of an educational OS called SkylOS.",
    desc2: "This course will require a good level of understanding in C programming language as well as some lower level assembly knowledge, though the latter is not strictly expected by all students beforehand. You can find a basic guide in assembly along with some basic assembly exercises here.",
    view: "View Handout",
    handouts: [
      { label: "01 · First Handout", title: "Introduction to the xv6 Kernel & Adding a System Call", desc: "Description of first handout here.", href: "/handouts/xv6-syscall" },
      { label: "02 · Second Handout", title: "Process Scheduling in the xv6 Kernel", desc: "This is the second handout.", href: "/handouts/xv6-chrono-programming" },
      { label: "03 · Third Handout", title: "Development of a Kernel Module", desc: "This is the third handout.", href: "/handouts/kernel-module" },
      { label: "04 · Fourth Handout", title: "Fundamentals of Memory Management in the Linux Kernel", desc: "This is the fourth handout.", href: "/handouts/memory-management" },
      { label: "05 · Fifth Handout", title: "Linux Kernel Character Device Driver Development", desc: "This is the fifth handout.", href: "/handouts/character-device-driver" },
      { label: "06 · Sixth Handout", title: "Implementation of Operating System Interrupts", desc: "This is the sixth handout.", href: "/handouts/interrupts" },
    ],
  },
  gr: {
    label: "4ο έτος · Χειμερινό εξάμηνο",
    title: "Λειτουργικά Συστήματα",
    desc1: "Το μάθημα αυτό καλύπτει τα θεμέλια σχεδιασμού και υλοποίησης λειτουργικών συστημάτων. Κατά τη διάρκειά του, οι φοιτητές θα εμπλακούν σε πρακτικά εργαστήρια ανάπτυξης modules για τον πυρήνα Linux και το εκπαιδευτικό λειτουργικό σύστημα xv6, καθώς και στην υλοποίηση χαμηλού επιπέδου τμημάτων ενός εκπαιδευτικού ΛΣ που ονομάζεται SkylOS.",
    desc2: "Το μάθημα απαιτεί καλή κατανόηση της γλώσσας C καθώς και βασικές γνώσεις assembly, αν και οι τελευταίες δεν απαιτούνται αυστηρά εκ των προτέρων. Μπορείτε να βρείτε έναν βασικό οδηγό assembly μαζί με ασκήσεις εδώ.",
    view: "Προβολή Εργασίας",
    handouts: [
      { label: "01 · Πρώτη Εργασία", title: "Εισαγωγή στον Πυρήνα xv6 & Προσθήκη System Call", desc: "Περιγραφή πρώτης εργασίας.", href: "/handouts/xv6-syscall" },
      { label: "02 · Δεύτερη Εργασία", title: "Χρόνο-προγραμματισμός Διεργασιών στο xv6 Kernel", desc: "Αυτή είναι η δεύτερη εργασία.", href: "/handouts/xv6-chrono-programming" },
      { label: "03 · Τρίτη Εργασία", title: "Εργασία Ανάπτυξης Αρθρώματος Πυρήνα (Kernel Module)", desc: "Αυτή είναι η τρίτη εργασία.", href: "/handouts/kernel-module" },
      { label: "04 · Τέταρτη Εργασία", title: "Βασική Διαχείρηση Μνήμης στο Linux Kernel", desc: "Αυτή είναι η τέταρτη εργασία.", href: "/handouts/memory-management" },
      { label: "05 · Πέμπτη Εργασία", title: "Εργασία Δημιουργίας Character Device Driver στο Linux Kernel", desc: "Αυτή είναι η πέμπτη εργασία.", href: "/handouts/character-device-driver" },
      { label: "06 · Έκτη Εργασία", title: "Υλοποίηση Διακοπών Λειτουργικού συστήματος (Interrupts)", desc: "Αυτή είναι η έκτη εργασία.", href: "/handouts/interrupts" },
    ],
  },
};

export default function Page() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <>
      <div className="mb-14 border-b border-(--border) pb-12">
        <div className="mb-3 font-mono text-[0.7rem] uppercase tracking-widest text-(--accent)">
          {t.label}
        </div>
        <h1 className="mb-4 text-4xl font-light leading-tight">{t.title}</h1>
        <p className="text-(--muted) mb-4">{t.desc1}</p>
        <p className="text-(--muted)">{t.desc2}</p>
      </div>

      {t.handouts.map((h, i) => (
        <Section key={i} label={h.label} title={h.title}>
          <p className="text-(--muted)">
            {h.desc}{" "}
            <Link href={h.href} className="text-(--accent) hover:underline">
              {t.view}
            </Link>
          </p>
          <pre className="mt-4 overflow-x-auto rounded-md border border-(--border) bg-(--surface) p-4 font-mono text-xs">
            <code>npm install next</code>
          </pre>
        </Section>
      ))}
    </>
  );
}