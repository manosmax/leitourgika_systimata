import { useLang } from "@/context/LangContext";

const docMetadataContent = {
  en: {
    "memory-management": {
      title: "Memory Management",
    },
    "interrupts": {
      title: "Interrupts",
    },
    "character-device-drivers": {
      title: "Character Device Drivers",
    },
    "kernel-module": {
      title: "Kernel Module Development in Linux"
    },
    "xv6-chrono-programming": {
      title: "Chrono-Programming in xv6"
    },
    "xv6-syscall": {
      title: "Introduction to the xv6 Kernel & Adding a System Call"
    }
  },
  gr: {
    "memory-management": {
      title: "Βασική Διαχείρηση Μνήμης στο Linux Kernel"
    },
    "interrupts": {
      title: "Υλοποίηση Διακοπών Λειτουργικού συστήματος (Interrupts)"
    },
    "character-device-drivers": {
      title: "Εργασία Δημιουργίας Character Device Driver στο Linux Kernel",
    },
    "kernel-module": {
      title: "Εργασία Ανάπτυξης Αρθρώματος Πυρήνα (Kernel Module)"
    },
    "xv6-chrono-programming": {
      title: "Χρόνο-προγραμματισμός Διεργασιών στο xv6 Kernel"
    },
    "xv6-syscall": {
      title: "Εισαγωγή στον Πυρήνα xv6 & Προσθήκη System Call"
    }
  }
};

export function useDocMetadata() {
  const { lang } = useLang();
  return docMetadataContent[lang];
}

export const docMetadata = docMetadataContent.en;