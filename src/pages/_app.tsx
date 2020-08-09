import { AppProps } from "next/app";
import * as React from "react";
import "../css/index.css";
import "../i18n/i18next";

// see: https://nextjs.org/docs/advanced-features/custom-app
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
