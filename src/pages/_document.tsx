import Document, { Html, Head, Main, NextScript } from "next/document";
import * as React from "react";
import "../i18n/i18next";

export default class MyDocument extends Document<{ lang: string }> {
  // static async getInitialProps(ctx: DocumentContext) {
  //   const initialProps = await Document.getInitialProps(ctx);

  //   const { pathname } = ctx;
  //   const lang = pathname.startsWith("/fr") ? "fr" : "nl";

  //   return {
  //     ...initialProps,
  //     lang,
  //   };
  // }

  render() {
    return (
      <Html lang="nl">
        <Head>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <body className="bg-var-coconutWhite">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
