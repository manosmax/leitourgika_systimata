import { useLang } from "@/context/LangContext";

const tutorialData = {
  en: {
    "tutorial_1": {
      title: "Introduction to C & Compilation Basics",
      description: "",
    },
    "tutorial_2": {
      title: "Exercise 2: Thread execution sychronization",
      description: "",
    },
    "tutorial_3": {
      title: "Exercise 3: The producer-consumer problem",
      description: "",
    },
  },
  gr: {
    "tutorial_1": {
      title: "Εισαγωγή στη C & Βασικές Αρχές Μεταγλώττισης",
      description: "",
    },
    "tutorial_2": {
      title: "Άσκηση 2: Συγχρονισμός εκτέλεσης νημάτων",
      description: "",
    },
    "tutorial_3": {
      title: "Άσκηση 3: Το πρόβλημα του παραγωγού-καταναλωτή",
      description: "",
    },
  },
};

export function useTutorialData() {
  const { lang } = useLang();
  return tutorialData[lang];
}