import * as React from "react";
import nl from "./nl.json";
import fr from "./fr.json";
import { useRouter } from "next/router";

export const LanguageContext = React.createContext<"nl" | "fr">("nl");

export function useLanguage() {
  const currentLang = React.useContext(LanguageContext);
  return currentLang;
}

const getValue = (o: {}, p: string) =>
  //@ts-ignore
  p.split(".").reduce((a, v) => a[v], o) as string;

export function useTranslation() {
  const currentLang = useLanguage();

  const translate = React.useCallback(
    (path: string) => {
      const translationFile = currentLang === "nl" ? nl : fr;
      try {
        const value = getValue(translationFile, path);

        if (typeof value !== "string") {
          console.error("Path not found: ", path);
          return path;
        }
        return value;
      } catch (err) {
        console.error("Path not found: ", path);
        return path;
      }
    },
    [currentLang]
  );

  return React.useMemo(() => ({ t: translate }), [translate])
}

export enum LanguageId {
  nl = "1",
  fr = "2",
}

export function useLanguageQueryParam(initialLanguage: "nl" | "fr") {
  const [language, setLanguage] = React.useState(initialLanguage);
  const router = useRouter();

  React.useEffect(() => {
    const query = window.location.search || `?taal_id=${LanguageId[initialLanguage]}`;
    router.replace(`${router.pathname}${query}`, undefined, { shallow: true });
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    const taalId = router.query.taal_id;
    taalId && setLanguage(taalId === LanguageId.nl ? "nl" : "fr");
  }, [router.query.taal_id]);

  return language;
}
