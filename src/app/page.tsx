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
    viewTutorial: "View Exercise",
    prerequisite: "Prerequisites",
    tutorialsLabel: "Tutorial Exercises",
    handout0: { label: "00 · Prerequisites", title: "Add Prerequisite and Instructions for VM", desc: "#todo ", href: "/handouts/memory-management" },
    handouts: [
      { label: "01 · First Handout", title: "Introduction to the xv6 Kernel & Adding a System Call", desc: "This assignment focuses on the xv6 kernel, which is a small Unix-v6 based operating system kernel designed for educational purposes. It provides a simplified yet realistic environment for understanding core operating system concepts such as process management, memory management, system calls, and device handling. With approximately 6000 lines of C and assembly code, xv6 allows kernel study and functionality extension, making it an effective platform for learning how operating systems are implemented and how user-space interacts with kernel-space.", href: "/handouts/xv6-syscall" },
      { label: "02 · Second Handout", title: "Process Scheduling in the xv6 Kernel", desc: "This assignment focuses on process scheduling in the xv6 operating system kernel. It explores how the scheduler manages CPU time among multiple processes using context switching and introduces the concept of Lottery Scheduling. The goal is to understand how operating systems allocate CPU resources and extend kernel functionality through practical modifications in a simplified Unix-like environment.", href: "/handouts/xv6-chrono-programming" },
      { label: "03 · Third Handout", title: "Development of a Kernel Module", desc: "This assignment introduces the development of Linux kernel modules, focusing on process inspection and system-level programming. Through practical exercises, the work emphasizes understanding kernel-space execution, process management, and the traversal of kernel-linked data structures. The objective is to develop familiarity with kernel module programming and low-level operating system internals.", href: "/handouts/kernel-module" },
      { label: "04 · Fourth Handout", title: "Fundamentals of Memory Management in the Linux Kernel", desc: "This assignment introduces fundamental mechanisms of memory allocation and synchronization within the Linux kernel. It focuses on kernel-space memory management using interfaces such as kmalloc and get_free_pages, as well as synchronization primitives including spinlocks, mutexes, and atomic variables. The objective is to understand low-level memory handling and concurrency control in operating system kernels.", href: "/handouts/memory-management" },
      { label: "05 · Fifth Handout", title: "Linux Kernel Character Device Driver Development", desc: "This assignment introduces Linux character device driver development through kernel module programming. The work demonstrates how device files in /dev map to kernel drivers via the file_operations interface, enabling controlled interaction between user applications and hardware-like abstractions within the Linux kernel.", href: "/handouts/character-device-driver" },
      { label: "06 · Sixth Handout", title: "Implementation of Operating System Interrupts", desc: "This assignment introduces the implementation of interrupts in an educational operating system (Skyl-OS), focusing on the Interrupt Descriptor Table (IDT) and interrupt handling mechanisms on x86 architecture. Practical tasks include configuring IDT entries, implementing interrupt service routines (e.g., keyboard ISR), and developing a basic system call mechanism. The objective is to understand low-level CPU interrupt processing and OS interaction with hardware.", href: "/handouts/interrupts" },
    ],
    tutorials: [
      { label: "01 · Tutorial Exercise", title: "Exercise 1: Thread execution sychronization", desc: "", href: "/tutorials/tutorial_1" },
      { label: "02 · Tutorial Exercise", title: "Exercise 2: Thread execution sychronization", desc: "", href: "/tutorials/tutorial_2" },
      { label: "03 · Tutorial Exercise", title: "Exercise 3: The producer-consumer problem", desc: "", href: "/tutorials/tutorial_3" },
    ],
  },
  gr: {
    label: "4ο έτος · Χειμερινό εξάμηνο",
    title: "Λειτουργικά Συστήματα",
    desc1: "Το μάθημα αυτό καλύπτει τα θεμέλια σχεδιασμού και υλοποίησης λειτουργικών συστημάτων. Κατά τη διάρκειά του, οι φοιτητές θα εμπλακούν σε πρακτικά εργαστήρια ανάπτυξης modules για τον πυρήνα Linux και το εκπαιδευτικό λειτουργικό σύστημα xv6, καθώς και στην υλοποίηση χαμηλού επιπέδου τμημάτων ενός εκπαιδευτικού ΛΣ που ονομάζεται SkylOS.",
    desc2: "Το μάθημα απαιτεί καλή κατανόηση της γλώσσας C καθώς και βασικές γνώσεις assembly, αν και οι τελευταίες δεν απαιτούνται αυστηρά εκ των προτέρων. Μπορείτε να βρείτε έναν βασικό οδηγό assembly μαζί με ασκήσεις εδώ.",
    view: "Προβολή Εργασίας",
    viewTutorial: "Προβολή Άσκησης",
    prerequisite: "Προαπαιτούμενα",
    tutorialsLabel: "Ασκήσεις Εργαστηρίου",
    handout0: { label: "00 · Προαπαιτούμενα", title: "", desc: "", href: "" },
    handouts: [
      { label: "01 · Πρώτη Εργασία", title: "Εισαγωγή στον Πυρήνα xv6 & Προσθήκη System Call", desc: "Αυτή η εργασία εστιάζει στον πυρήνα xv6, ένα μικρό λειτουργικό σύστημα βασισμένο στο Unix-v6 σχεδιασμένο για εκπαιδευτικούς σκοπούς. Παρέχει ένα απλοποιημένο αλλά ρεαλιστικό περιβάλλον για την κατανόηση βασικών εννοιών λειτουργικών συστημάτων όπως η διαχείριση διεργασιών, η διαχείριση μνήμης, οι κλήσεις συστήματος και ο χειρισμός συσκευών. Με περίπου 6000 γραμμές κώδικα C και assembly, το xv6 επιτρέπει τη μελέτη και επέκταση του πυρήνα (kernel).", href: "/handouts/xv6-syscall" },
      { label: "02 · Δεύτερη Εργασία", title: "Χρόνο-προγραμματισμός Διεργασιών στο xv6 Kernel", desc: "Αυτή η εργασία εστιάζει στον προγραμματισμό διεργασιών στον πυρήνα του λειτουργικού συστήματος xv6. Εξερευνά πώς ο χρονοπρογραμματιστής διαχειρίζεται τον χρόνο CPU μεταξύ πολλών διεργασιών μέσω εναλλαγής πλαισίου και εισάγει την έννοια του Lottery Scheduling. Στόχος είναι η κατανόηση της κατανομής πόρων CPU και η επέκταση της λειτουργικότητας του πυρήνα.", href: "/handouts/xv6-chrono-programming" },
      { label: "03 · Τρίτη Εργασία", title: "Εργασία Ανάπτυξης Αρθρώματος Πυρήνα (Kernel Module)", desc: "Αυτή η εργασία εισάγει την ανάπτυξη modules πυρήνα Linux, με έμφαση στην επιθεώρηση διεργασιών και τον προγραμματισμό σε επίπεδο συστήματος. Μέσα από πρακτικές ασκήσεις, η εργασία δίνει έμφαση στην κατανόηση της εκτέλεσης στο χώρο του πυρήνα, της διαχείρισης διεργασιών και της διέλευσης δομών δεδομένων συνδεδεμένης λίστας του πυρήνα.", href: "/handouts/kernel-module" },
      { label: "04 · Τέταρτη Εργασία", title: "Βασική Διαχείρηση Μνήμης στο Linux Kernel", desc: "Αυτή η εργασία εισάγει θεμελιώδεις μηχανισμούς κατανομής μνήμης και συγχρονισμού εντός του πυρήνα Linux. Εστιάζει στη διαχείριση μνήμης χώρου πυρήνα μέσω διεπαφών όπως το kmalloc και το get_free_pages, καθώς και σε πρωτόγονα συγχρονισμού όπως spinlocks, mutexes και ατομικές μεταβλητές. Στόχος είναι η κατανόηση της διαχείρισης μνήμης χαμηλού επιπέδου και ο έλεγχος ταυτοχρονισμού στους πυρήνες λειτουργικών συστημάτων.", href: "/handouts/memory-management" },
      { label: "05 · Πέμπτη Εργασία", title: "Εργασία Δημιουργίας Character Device Driver στο Linux Kernel", desc: "Αυτή η εργασία εισάγει την ανάπτυξη οδηγών χαρακτήρων Linux μέσω προγραμματισμού kernel module. Η εργασία δείχνει πώς τα αρχεία συσκευών στο /dev αντιστοιχίζονται σε οδηγούς πυρήνα μέσω της διεπαφής file_operations, επιτρέποντας ελεγχόμενη αλληλεπίδραση μεταξύ εφαρμογών χρήστη και αφαιρέσεων υλικού εντός του πυρήνα Linux.", href: "/handouts/character-device-driver" },
      { label: "06 · Έκτη Εργασία", title: "Υλοποίηση Διακοπών Λειτουργικού συστήματος (Interrupts)", desc: "Αυτή η εργασία εισάγει την υλοποίηση διακοπών σε ένα εκπαιδευτικό λειτουργικό σύστημα (Skyl-OS), εστιάζοντας στον Πίνακα Περιγραφών Διακοπών (IDT) και στους μηχανισμούς χειρισμού διακοπών στην αρχιτεκτονική x86. Οι πρακτικές εργασίες περιλαμβάνουν τη ρύθμιση καταχωρήσεων IDT, την υλοποίηση ρουτινών εξυπηρέτησης διακοπών (π.χ. ISR πληκτρολογίου) και την ανάπτυξη βασικού μηχανισμού κλήσεων συστήματος.", href: "/handouts/interrupts" },
    ],
    tutorials: [
      { label: "01 · Άσκηση Εργαστηρίου", title: "Άσκηση 1: Το πρόβλημα του παραγωγού-καταναλωτή", desc: "", href: "/tutorials/tutorial_1" },
      { label: "02 · Άσκηση Εργαστηρίου", title: "Άσκηση 2: Συγχρονισμός εκτέλεσης νημάτων", desc: "", href: "/tutorials/tutorial_2" },
      { label: "03 · Άσκηση Εργαστηρίου", title: "Άσκηση 3: Το πρόβλημα του παραγωγού-καταναλωτή", desc: "", href: "/tutorials/tutorial_3" },
    ],
  },
};

export default function Page() {
  const { lang } = useLang();
  const t = content[lang];
  const h0 = t.handout0;

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

      <div className="mb-16 rounded-lg border border-(--accent) bg-(--surface) p-8">
        <div className="mb-2 font-mono text-[0.7rem] uppercase tracking-widest text-(--accent)">
          {h0.label}
        </div>
        <h2 className="mb-3 text-2xl font-light text-(--text) leading-tight">{h0.title}</h2>
        <p className="text-(--muted) text-sm leading-relaxed mb-4">{h0.desc}</p>
        {h0.href && (
          <Link href={h0.href} className="text-(--accent) hover:underline font-mono text-[0.7rem] uppercase tracking-widest">
            {t.view}
          </Link>
        )}
      </div>

      {t.handouts.map((h, i) => (
        <Section key={i} label={h.label} title={h.title}>
          <p className="text-(--muted)">
            {h.desc}{" "}
            <Link href={h.href} className="text-(--accent) hover:underline">
              {t.view}
            </Link>
          </p>
        </Section>
      ))}

      <div className="mt-20 mb-6 border-t border-(--border) pt-12">
        <div className="mb-2 font-mono text-[0.7rem] uppercase tracking-widest text-(--accent)">
          {t.tutorialsLabel}
        </div>
      </div>

      {t.tutorials.map((tut, i) => (
        <Section key={i} label={tut.label} title={tut.title}>
          <p className="text-(--muted)">
            {tut.desc}{" "}
            <Link href={tut.href} className="text-(--accent) hover:underline">
              {t.viewTutorial}
            </Link>
          </p>
        </Section>
      ))}
    </>
  );
}