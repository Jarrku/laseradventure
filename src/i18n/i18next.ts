import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import nl from "./nl.json";
// import fr from './fr.json';

i18next.use(initReactI18next).init({
  lng: "nl",
  fallbackLng: "nl",
  debug: process.env.NODE_ENV !== "production",
  resources: {
    nl: {
      translation: nl,
    },
    fr: {
      translation: nl,
    }
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
