import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import * as React from "react";

export default class MyDocument extends Document<{ lang: string }> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    const { pathname } = ctx;
    const lang = pathname.startsWith("/fr") ? "fr" : "nl";

    return {
      ...initialProps,
      lang,
    };
  }

  render() {
    return (
      <Html lang={this.props.lang}>
        <Head>
          <link rel="icon" href="/favicon.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&family=Titillium+Web:wght@300;400;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-var-coconutWhite">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
