"use client";
import { Section } from "@/components/Section";
import Link from "next/link";
import { useLang } from "@/context/LangContext";
import { useEffect, useState } from "react";

const content = {
  en: {
    label: "4th year · Winter semester",
    title: "Operating Systems - ECE_ΓΚ702",
    desc1: "Discover what really powers your computer. This course introduces the core concepts behind modern operating systems, from process and memory management to scheduling, synchronization, and file systems.",
    desc2: "Through a mix of theory and hands-on practice with xv6 and Linux kernel modules and SkylOS educational operating system, you'll explore how software interacts directly with hardware and build real low-level components yourself.",
    desc3: "Final exam (mandatory) + optional assignments for up to +1.5 bonus points (1 extra point for all activity delivery and 0.5 extra points for all tutoral exercises delivery).",
    view: "View Activity",
    viewTutorial: "View Exercise",
    onThisPage: "On this page",
    prerequisite: "Prerequisites",
    handoutsLabel: "Activities",
    tutorialsLabel: "Exercises",
    nav: [
      { id: "intro", label: "Intro" },
      { id: "prerequisites", label: "Prerequisites" },
      { id: "handouts", label: "Activities" },
      { id: "tutorials", label: "Exercises" },
      { id: "assembly", label: "Assembly Quick Guide" },
    ],
    handout0: { label: "00 · Prerequisites", title: "Prerequisites and Virtual Machine Setup Instructions", desc: "A solid foundation in C programming is essential, including pointers, memory management, and modular code development. Familiarity with data structures (e.g., arrays, linked lists, stacks) is expected.Students should also have a good understanding of computer architecture and digital systems, including how the CPU, memory hierarchy, and I/O devices operate. Prior exposure to assembly language and low-level programming concepts is beneficial but not strictly required. Background knowledge from courses such as C Programming (ECE_Y215) and Computer Organization (ECE_Υ423) will be particularly helpful for successfully following the course.", href: "/handouts/memory-management" },
    handouts: [
      { label: "01 · First Activity", title: "Introduction to the xv6 Kernel & Adding a System Call", desc: "This assignment focuses on the xv6 kernel, which is a small Unix-v6 based operating system kernel designed for educational purposes. It provides a simplified yet realistic environment for understanding core operating system concepts such as process management, memory management, system calls, and device handling. With approximately 6000 lines of C and assembly code, xv6 allows kernel study and functionality extension, making it an effective platform for learning how operating systems are implemented and how user-space interacts with kernel-space.", href: "/handouts/xv6-syscall" },
      { label: "02 · Second Activity", title: "Process Scheduling in the xv6 Kernel", desc: "This assignment focuses on process scheduling in the xv6 operating system kernel. It explores how the scheduler manages CPU time among multiple processes using context switching and introduces the concept of Lottery Scheduling. The goal is to understand how operating systems allocate CPU resources and extend kernel functionality through practical modifications in a simplified Unix-like environment.", href: "/handouts/xv6-chrono-programming" },
      { label: "03 · Third Activity", title: "Development of a Kernel Module", desc: "This assignment introduces the development of Linux kernel modules, focusing on process inspection and system-level programming. Through practical exercises, the work emphasizes understanding kernel-space execution, process management, and the traversal of kernel-linked data structures. The objective is to develop familiarity with kernel module programming and low-level operating system internals.", href: "/handouts/kernel-module" },
      { label: "04 · Fourth Activity", title: "Fundamentals of Memory Management in the Linux Kernel", desc: "This assignment introduces the fundamental mechanisms of memory allocation and synchronization in the Linux kernel. It focuses on kernel-space memory management using interfaces such as kmalloc and get_free_pages, as well as synchronization mechanisms. The goal is to provide a solid understanding of low-level memory management and concurrency control within operating system kernels.", href: "/handouts/memory-management" },
      { label: "05 · Fifth Activity", title: "Linux Kernel Character Device Driver Development", desc: "This assignment introduces Linux character device driver development through kernel module programming. The work demonstrates how device files in /dev map to kernel drivers via the file_operations interface, enabling controlled interaction between user applications and hardware-like abstractions within the Linux kernel.", href: "/handouts/character-device-driver" },
      { label: "06 · Sixth Activity", title: "Implementation of Operating System Interrupts", desc: "This assignment introduces the implementation of interrupts in an educational operating system (Skyl-OS), focusing on the Interrupt Descriptor Table (IDT) and interrupt handling mechanisms on x86 architecture. Practical tasks include configuring IDT entries, implementing interrupt service routines (e.g., keyboard ISR), and developing a basic system call mechanism. The objective is to understand low-level CPU interrupt processing and OS interaction with hardware.", href: "/handouts/interrupts" },
    ],
    tutorials: [
      { label: "01 · Exercise", title: "Exercise 1: Thread execution synchronization", desc: "", href: "/tutorials/tutorial_1" },
      { label: "02 · Exercise", title: "Exercise 2: Thread execution synchronization", desc: "", href: "/tutorials/tutorial_2" },
      { label: "03 · Exercise", title: "Exercise 3: The producer-consumer problem", desc: "", href: "/tutorials/tutorial_3" },
    ],
  },
  gr: {
    label: "4⁰ ετος · Χειμερινο εξαμηνο",
    title: "Λειτουργικά Συστήματα - ECE_ΓΚ702",
    desc1: "Ανακάλυψε πώς λειτουργεί πραγματικά ο υπολογιστής σου. Το μάθημα αυτό εισάγει τις βασικές έννοιες των σύγχρονων λειτουργικών συστημάτων, από τη διαχείριση διεργασιών και μνήμης μέχρι τη χρονοδρομολόγηση, τον συγχρονισμό και τα συστήματα αρχείων.",
    desc2: "Μέσα από έναν συνδυασμό θεωρίας και πρακτικής εξάσκησης με τα xv6, Linux kernel modules και το εκπαιδευτικό λειτουργικό σύστημα SkylOS, θα εξερευνήσεις πώς το λογισμικό αλληλεπιδρά άμεσα με το υλικό και θα υλοποιήσεις πραγματικά χαμηλού επιπέδου υποσυστήματα.",
    desc3: "Τελική εξέταση (υποχρεωτική) + προαιρετικές εργασίες έως +1.5 μονάδα bonus (1 επιπλέον μονάδα για την παράδοση όλων των θεωρητικών δραστηριοτήτων και 0.5 επιπλέον μονάδες για την παράδοση όλων των φροντιστηριακών ασκήσεων).",
    view: "Προβολή Εργασίας",
    viewTutorial: "Προβολή Άσκησης",
    onThisPage: "Σε αυτη τη σελιδα",
    prerequisite: "Προαπαιτουμενα",
    handoutsLabel: "Δραστηριοτητες",
    tutorialsLabel: "Φροντηστηριακες Ασκησεις",
    nav: [
      { id: "intro", label: "Εισαγωγη" },
      { id: "prerequisites", label: "Προαπαιτουμενα" },
      { id: "handouts", label: "Δραστηριοτητες" },
      { id: "tutorials", label: "Φροντηστηριακες Ασκησεις" },
      { id: "assembly", label: "Συντομος Οδηγος Assembly" },
    ],
    handout0: { label: "00 · Προαπαιτουμενα", title: "Προαπαιτούμενα και ρύθμιση εικονικού περιβάλλοντος (Virtual Machine)", desc: "Απαιτείται καλή γνώση της γλώσσας προγραμματισμού C, συμπεριλαμβανομένης της χρήσης δεικτών (pointers), της διαχείρισης μνήμης και της ανάπτυξης δομημένου κώδικα. Αναμένεται επίσης εξοικείωση με βασικές δομές δεδομένων (π.χ. πίνακες, συνδεδεμένες λίστες, στοίβες). Είναι σημαντική η κατανόηση βασικών εννοιών αρχιτεκτονικής υπολογιστών και ψηφιακών συστημάτων, όπως η λειτουργία της ΚΜΕ, της ιεραρχίας μνήμης και των συσκευών εισόδου/εξόδου. Εξοικείωση με τη γλώσσα Assembly και έννοιες προγραμματισμού χαμηλού επιπέδου θεωρείται επιθυμητή αλλά όχι απαραίτητη. Γνώσεις από μαθήματα όπως Διαδικαστικός Προγραμματισμός (ECE_Y215) και Οργάνωση Υπολογιστών (ECE_Υ423) θα βοηθήσουν σημαντικά στην παρακολούθηση και κατανόηση του μαθήματος.", href: "" },
    handouts: [
      { label: "01 · Πρωτη Δραστηριοτητα", title: "Εισαγωγή στον Πυρήνα xv6 & Προσθήκη System Call", desc: "Αυτή η εργασία εστιάζει στον πυρήνα xv6, ένα μικρό λειτουργικό σύστημα βασισμένο στο Unix-v6 σχεδιασμένο για εκπαιδευτικούς σκοπούς. Παρέχει ένα απλοποιημένο αλλά ρεαλιστικό περιβάλλον για την κατανόηση βασικών εννοιών λειτουργικών συστημάτων όπως η διαχείριση διεργασιών, η διαχείριση μνήμης, οι κλήσεις συστήματος και ο χειρισμός συσκευών. Με περίπου 6000 γραμμές κώδικα C και assembly, το xv6 επιτρέπει τη μελέτη και επέκταση του πυρήνα (kernel).", href: "/handouts/xv6-syscall" },
      { label: "02 · Δευτερη Δραστηριοτητα", title: "Χρόνο-προγραμματισμός Διεργασιών στο xv6 Kernel", desc: "Αυτή η εργασία εστιάζει στον προγραμματισμό διεργασιών στον πυρήνα του λειτουργικού συστήματος xv6. Εξερευνά πώς ο χρονοπρογραμματιστής διαχειρίζεται τον χρόνο CPU μεταξύ πολλών διεργασιών μέσω εναλλαγής πλαισίου και εισάγει την έννοια του Lottery Scheduling. Στόχος είναι η κατανόηση της κατανομής πόρων CPU και η επέκταση της λειτουργικότητας του πυρήνα.", href: "/handouts/xv6-chrono-programming" },
      { label: "03 · Τριτη Δραστηριοτητα", title: "Εργασία Ανάπτυξης Αρθρώματος Πυρήνα (Kernel Module)", desc: "Αυτή η εργασία εισάγει την ανάπτυξη modules πυρήνα Linux, με έμφαση στην επιθεώρηση διεργασιών και τον προγραμματισμό σε επίπεδο συστήματος. Μέσα από πρακτικές ασκήσεις, η εργασία δίνει έμφαση στην κατανόηση της εκτέλεσης στο χώρο του πυρήνα, της διαχείρισης διεργασιών και μηχανισμων χαμηλού επιπέδου των λειτουργικών συστημάτων.", href: "/handouts/kernel-module" },
      { label: "04 · Τεταρτη Δραστηριοτητα", title: "Βασική Διαχείρηση Μνήμης στο Linux Kernel", desc: "Αυτή η εργασία εισάγει τους βασικούς μηχανισμούς διαχείρισης μνήμης και συγχρονισμού στον πυρήνα του Linux. Εστιάζει στη διαχείριση μνήμης σε χώρο πυρήνα (kernel space), χρησιμοποιώντας διεπαφές όπως οι kmalloc και get_free_pages, καθώς και σε μηχανισμούς συγχρονισμού. Στόχος είναι η κατανόηση της διαχείρισης μνήμης χαμηλού επιπέδου και του ελέγχου ταυτόχρονης εκτέλεσης (concurrency) σε πυρήνες λειτουργικών συστημάτων.", href: "/handouts/memory-management" },
      { label: "05 · Πεμπτη Δραστηριοτητα", title: "Εργασία Δημιουργίας Character Device Driver στο Linux Kernel", desc: "Αυτή η εργασία εισάγει την ανάπτυξη οδηγών χαρακτήρων Linux μέσω προγραμματισμού kernel module. Η εργασία δείχνει πώς τα αρχεία συσκευών στο /dev αντιστοιχίζονται σε οδηγούς πυρήνα μέσω της διεπαφής file_operations, επιτρέποντας ελεγχόμενη αλληλεπίδραση μεταξύ εφαρμογών χρήστη και αφαιρέσεων υλικού εντός του πυρήνα Linux.", href: "/handouts/character-device-driver" },
      { label: "06 · Εκτη Δραστηριοτητα", title: "Υλοποίηση Διακοπών Λειτουργικού συστήματος (Interrupts)", desc: "Αυτή η εργασία εισάγει την υλοποίηση διακοπών σε ένα εκπαιδευτικό λειτουργικό σύστημα (Skyl-OS), εστιάζοντας στον Πίνακα Περιγραφών Διακοπών (IDT) και στους μηχανισμούς χειρισμού διακοπών στην αρχιτεκτονική x86. Οι πρακτικές εργασίες περιλαμβάνουν τη ρύθμιση καταχωρήσεων IDT, την υλοποίηση ρουτινών εξυπηρέτησης διακοπών (π.χ. ISR πληκτρολογίου) και την ανάπτυξη βασικού μηχανισμού κλήσεων συστήματος.", href: "/handouts/interrupts" },
    ],
    tutorials: [
      { label: "01 · Φροντηστηριακη Ασκηση", title: "Άσκηση 1: Το πρόβλημα του παραγωγού-καταναλωτή", desc: "", href: "/tutorials/tutorial_1" },
      { label: "02 · Φροντηστηριακη Ασκηση", title: "Άσκηση 2: Συγχρονισμός εκτέλεσης νημάτων", desc: "", href: "/tutorials/tutorial_2" },
      { label: "03 · Φροντηστηριακη Ασκηση", title: "Άσκηση 3: Το πρόβλημα του παραγωγού-καταναλωτή", desc: "", href: "/tutorials/tutorial_3" },
    ],
  },
};

const sectionIds = ["intro", "prerequisites", "handouts", "tutorials", "assembly"];
const HEADER_OFFSET = 96;

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Page() {
  const { lang } = useLang();
  const t = content[lang];
  const h0 = t.handout0;

  const [activeId, setActiveId] = useState("intro");

  useEffect(() => {
    const handleScroll = () => {
      const trigger = window.scrollY + window.innerHeight * 0.3;
      let best = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= trigger) best = id;
      }
      setActiveId(best);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex gap-12 mt-8">

      {/* ── Sticky side nav ── */}
      <aside className="hidden xl:flex flex-col sticky top-24 self-start w-[250px] shrink-0">
        <span className="mb-3 font-mono text-[0.65rem] uppercase tracking-widest text-(--muted)">
          {t.onThisPage}
        </span>
        <nav className="flex flex-col gap-1 border-l border-(--border)">
          {t.nav.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={[
                "text-left pl-4 py-1 font-mono text-[0.7rem] uppercase tracking-widest transition-colors border-l-2 -ml-px",
                activeId === item.id
                  ? "border-(--accent) text-(--accent)"
                  : "border-transparent text-(--muted) hover:text-(--text)",
              ].join(" ")}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* ── Main content ── */}
      <div className="flex-1 min-w-0">

        {/* Hero / intro */}
        <div id="intro" className="mb-14 border-b border-(--border) pb-12">
          <div className="px-4">
            <div className="mb-3 font-mono text-[0.7rem] uppercase tracking-widest text-(--accent)">
              {t.label}
            </div>
            <h1 className="mb-4 text-3xl font-light leading-tight">{t.title}</h1>
            <p className="text-(--muted) mb-4">{t.desc1}</p>
            <p className="text-(--muted) mb-6">{t.desc2}</p>
          </div>

          {/* Assessment callout */}
          <div className="mb-1 rounded-lg border border-(--accent) bg-(--surface) p-8">
            <span className="block mb-2 font-mono text-[0.7rem] uppercase tracking-widest text-(--accent)">
              {lang === "gr" ? "Αξιολογηση" : "Assessment"}
            </span>
            <p className="text-(--muted) text-sm leading-relaxed mt-4">{t.desc3}</p>
          </div>
        </div>

        {/* Prerequisites */}
        <div id="prerequisites">
          <div className="mb-16 rounded-lg border border-(--accent) bg-(--surface) p-8">
            <div className="mb-2 font-mono text-[0.7rem] uppercase tracking-widest text-(--accent)">
              {h0.label}
            </div>
            <h2 className="mb-3 text-2xl font-light text-(--text) leading-tight">{h0.title}</h2>
            <p className="text-(--muted) text-sm leading-relaxed mb-4">{h0.desc}</p>
            {h0.href && (
              <Link href={h0.href} className="text-(--accent) hover:underline underline sm:no-underline font-mono text-[0.7rem] uppercase tracking-widest">
                {t.view}
              </Link>
            )}
          </div>
        </div>

        {/* Handouts */}
        <div id="handouts" className="mt-4 px-4">
          <div className="mb-8 font-mono text-[0.7rem] uppercase tracking-widest text-(--accent)">
            {t.handoutsLabel}
          </div>
          {t.handouts.map((h, i) => (
            <Section key={i} label={h.label} title={h.title}>
              <p className="text-(--muted) mb-4">{h.desc}</p>
              <Link href={h.href} className="text-(--accent) hover:underline underline sm:no-underline font-mono text-[0.7rem] uppercase tracking-widest">
                {t.view}
              </Link>
            </Section>
          ))}
        </div>

        {/* Tutorial Exercises */}
        <div id="tutorials" className="mb-6 border-t border-(--border) pt-12 px-4">
          <div className="mb-6 font-mono text-[0.7rem] uppercase tracking-widest text-(--accent)">
            {t.tutorialsLabel}
          </div>
          {t.tutorials.map((tut, i) => (
            <Section key={i} label={tut.label} title={tut.title}>
              {tut.desc && <p className="text-(--muted) mb-4">{tut.desc}</p>}
              <Link href={tut.href} className="text-(--accent) hover:underline underline sm:no-underline font-mono text-[0.7rem] uppercase tracking-widest">
                {t.viewTutorial}
              </Link>
            </Section>
          ))}
        </div>

        {/* Assembly Quick Guide */}
        <div id="assembly" className="border-t border-(--border) pt-12 px-4">
          <div className="mb-2 font-mono text-[0.7rem] uppercase tracking-widest text-(--accent)">
            {lang === "gr" ? "Συντομος Οδηγος Assembly" : "Assembly Quick Guide"}
          </div>
<div className="space-y-6 text-(--muted)">
  <p>
    This quick guide covers the essential x86 Assembly concepts needed for
    Operating Systems assignments involving xv6, Linux kernel modules, and
    interrupt handling.
  </p>

  <div className="grid gap-4 md:grid-cols-2">
    <div className="rounded-lg border border-(--border) p-4">
      <h3 className="mb-2 text-(--text) font-medium">CPU Registers</h3>
      <ul className="text-sm space-y-1">
        <li><code>EAX/RAX</code> – Accumulator / return value</li>
        <li><code>EBX/RBX</code> – General-purpose register</li>
        <li><code>ECX/RCX</code> – Counter register</li>
        <li><code>EDX/RDX</code> – Data register</li>
        <li><code>ESP/RSP</code> – Stack pointer</li>
        <li><code>EBP/RBP</code> – Base/frame pointer</li>
      </ul>
    </div>

    <div className="rounded-lg border border-(--border) p-4">
      <h3 className="mb-2 text-(--text) font-medium">Memory Addressing</h3>
      <ul className="text-sm space-y-1">
        <li><code>mov eax, 5</code> → immediate value</li>
        <li><code>mov eax, ebx</code> → register to register</li>
        <li><code>mov eax, [ebx]</code> → load from memory</li>
        <li><code>mov [ebx], eax</code> → store to memory</li>
      </ul>
    </div>

    <div className="rounded-lg border border-(--border) p-4">
      <h3 className="mb-2 text-(--text) font-medium">Common Instructions</h3>
      <ul className="text-sm space-y-1">
        <li><code>mov</code> – copy data</li>
        <li><code>add</code>, <code>sub</code> – arithmetic</li>
        <li><code>cmp</code> – compare values</li>
        <li><code>jmp</code>, <code>je</code>, <code>jne</code> – branching</li>
        <li><code>call</code>, <code>ret</code> – function calls</li>
      </ul>
    </div>

    <div className="rounded-lg border border-(--border) p-4">
      <h3 className="mb-2 text-(--text) font-medium">Stack Operations</h3>
      <ul className="text-sm space-y-1">
        <li><code>push reg</code> – save value on stack</li>
        <li><code>pop reg</code> – restore value</li>
        <li>Stack grows toward lower memory addresses</li>
        <li>Used during interrupts and function calls</li>
      </ul>
    </div>
  </div>

  <div className="rounded-lg border border-(--accent) bg-(--surface) p-6">
    <h3 className="mb-3 text-(--text) font-medium">
      Topics Most Relevant to This Course
    </h3>
    <ul className="list-disc pl-5 space-y-2 text-sm">
      <li>System call invocation and kernel transitions.</li>
      <li>Context switching and process scheduling.</li>
      <li>Interrupt Service Routines (ISRs) and the IDT.</li>
      <li>Stack frames and function call conventions.</li>
      <li>Reading xv6 and Linux kernel assembly snippets.</li>
    </ul>
  </div>
</div>
        </div>

      </div>
      <aside className="hidden xl:flex flex-col sticky top-24 self-start min-w-[180px] shrink-0">
      </aside>
    </div>
  );
}
