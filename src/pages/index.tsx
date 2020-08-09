import Head from "next/head";
import * as React from "react";
// import { Page } from "../components/Page";
// import { useLanguageQueryParam, LanguageContext } from "../i18n/i18n";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <Head>
        <title>VAR</title>
        <meta name="description" content="VAR pre landing page"></meta>
      </Head>
      <div>{t("key")}</div>
    </div>
  );
}
