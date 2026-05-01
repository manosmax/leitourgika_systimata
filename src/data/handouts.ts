import { useLang } from "@/context/LangContext";

const docMetadataContent = {
  en: {
    "memory-management": {
      title: "Memory Management",
      description: "This assignment introduces fundamental mechanisms of memory allocation and synchronization within the Linux kernel. It focuses on kernel-space memory management using interfaces such as kmalloc and get_free_pages, as well as synchronization primitives including spinlocks, mutexes, and atomic variables. The objective is to understand low-level memory handling and concurrency control in operating system kernels."
    },
    "interrupts": {
      title: "Interrupts",
      description: "This assignment introduces the implementation of interrupts in an educational operating system (Skyl-OS), focusing on the Interrupt Descriptor Table (IDT) and interrupt handling mechanisms on x86 architecture. Practical tasks include configuring IDT entries, implementing interrupt service routines (e.g., keyboard ISR), and developing a basic system call mechanism. The objective is to understand low-level CPU interrupt processing and OS interaction with hardware."
    },
    "character-device-drivers": {
      title: "Character Device Drivers",
      description: "This assignment introduces Linux character device driver development through kernel module programming. The work demonstrates how device files in /dev map to kernel drivers via the file_operations interface, enabling controlled interaction between user applications and hardware-like abstractions within the Linux kernel."
    },
    "kernel-module": {
      title: "Kernel Module Development in Linux",
      description: "This assignment introduces the development of Linux kernel modules, focusing on process inspection and system-level programming. Through practical exercises, the work emphasizes understanding kernel-space execution, process management, and the traversal of kernel-linked data structures. The objective is to develop familiarity with kernel module programming and low-level operating system internals."
    },
    "xv6-chrono-programming": {
      title: "Chrono-Programming in xv6",
      description: "This assignment focuses on process scheduling in the xv6 operating system kernel. It explores how the scheduler manages CPU time among multiple processes using context switching and introduces the concept of Lottery Scheduling. The goal is to understand how operating systems allocate CPU resources and extend kernel functionality through practical modifications in a simplified Unix-like environment."
    },
    "xv6-syscall": {
      title: "Introduction to the xv6 Kernel & Adding a System Call",
      description: "This assignment focuses on the xv6 kernel, which is a small Unix-v6 based operating system kernel designed for educational purposes. It provides a simplified yet realistic environment for understanding core operating system concepts such as process management, memory management, system calls, and device handling. With approximately 6000 lines of C and assembly code, xv6 allows kernel study and functionality extension, making it an effective platform for learning how operating systems are implemented and how user-space interacts with kernel-space."
    }
  },
  gr: {
    "memory-management": {
      title: "Διαχείριση Μνήμης",
      description: "Αυτή η εργασία εισάγει θεμελιώδεις μηχανισμούς κατανομής μνήμης και συγχρονισμού εντός του πυρήνα Linux. Εστιάζει στη διαχείριση μνήμης χώρου πυρήνα μέσω διεπαφών όπως το kmalloc και το get_free_pages, καθώς και σε πρωτόγονα συγχρονισμού όπως spinlocks, mutexes και ατομικές μεταβλητές. Στόχος είναι η κατανόηση της διαχείρισης μνήμης χαμηλού επιπέδου και ο έλεγχος ταυτοχρονισμού στους πυρήνες λειτουργικών συστημάτων."
    },
    "interrupts": {
      title: "Διακοπές",
      description: "Αυτή η εργασία εισάγει την υλοποίηση διακοπών σε ένα εκπαιδευτικό λειτουργικό σύστημα (Skyl-OS), εστιάζοντας στον Πίνακα Περιγραφών Διακοπών (IDT) και στους μηχανισμούς χειρισμού διακοπών στην αρχιτεκτονική x86. Οι πρακτικές εργασίες περιλαμβάνουν τη ρύθμιση καταχωρήσεων IDT, την υλοποίηση ρουτινών εξυπηρέτησης διακοπών (π.χ. ISR πληκτρολογίου) και την ανάπτυξη βασικού μηχανισμού κλήσεων συστήματος."
    },
    "character-device-drivers": {
      title: "Οδηγοί Χαρακτήρων",
      description: "Αυτή η εργασία εισάγει την ανάπτυξη οδηγών χαρακτήρων Linux μέσω προγραμματισμού kernel module. Η εργασία δείχνει πώς τα αρχεία συσκευών στο /dev αντιστοιχίζονται σε οδηγούς πυρήνα μέσω της διεπαφής file_operations, επιτρέποντας ελεγχόμενη αλληλεπίδραση μεταξύ εφαρμογών χρήστη και αφαιρέσεων υλικού εντός του πυρήνα Linux."
    },
    "kernel-module": {
      title: "Ανάπτυξη Module Πυρήνα στο Linux",
      description: "Αυτή η εργασία εισάγει την ανάπτυξη modules πυρήνα Linux, με έμφαση στην επιθεώρηση διεργασιών και τον προγραμματισμό σε επίπεδο συστήματος. Μέσα από πρακτικές ασκήσεις, η εργασία δίνει έμφαση στην κατανόηση της εκτέλεσης στο χώρο του πυρήνα, της διαχείρισης διεργασιών και της διέλευσης δομών δεδομένων συνδεδεμένης λίστας του πυρήνα."
    },
    "xv6-chrono-programming": {
      title: "Χρονοπρογραμματισμός στο xv6",
      description: "Αυτή η εργασία εστιάζει στον προγραμματισμό διεργασιών στον πυρήνα του λειτουργικού συστήματος xv6. Εξερευνά πώς ο χρονοπρογραμματιστής διαχειρίζεται τον χρόνο CPU μεταξύ πολλών διεργασιών μέσω εναλλαγής πλαισίου και εισάγει την έννοια του Lottery Scheduling. Στόχος είναι η κατανόηση της κατανομής πόρων CPU και η επέκταση της λειτουργικότητας του πυρήνα."
    },
    "xv6-syscall": {
      title: "Εισαγωγή στον Πυρήνα xv6 & Προσθήκη System Call",
      description: "Αυτή η εργασία εστιάζει στον πυρήνα xv6, ένα μικρό λειτουργικό σύστημα βασισμένο στο Unix-v6 σχεδιασμένο για εκπαιδευτικούς σκοπούς. Παρέχει ένα απλοποιημένο αλλά ρεαλιστικό περιβάλλον για την κατανόηση βασικών εννοιών λειτουργικών συστημάτων όπως η διαχείριση διεργασιών, η διαχείριση μνήμης, οι κλήσεις συστήματος και ο χειρισμός συσκευών. Με περίπου 6000 γραμμές κώδικα C και assembly, το xv6 επιτρέπει τη μελέτη και επέκταση του πυρήνα."
    }
  }
};

export function useDocMetadata() {
  const { lang } = useLang();
  return docMetadataContent[lang];
}

export const docMetadata = docMetadataContent.en;