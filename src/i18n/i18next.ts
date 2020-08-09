import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  lng: "nl",
  debug: process.env.NODE_ENV !== "production",
  resources: {
    nl: {
      translation: {
        key: "hello world",
      },
    },
  },
});

export default i18next;
