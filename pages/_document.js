import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="keywords" content="mydło, naturalne, pielęgnacja" />
          <meta
            name="description"
            content="Sklep Mydełka Joasi oferuje wysokiej jakości, domowe mydła, wytwarzane z naturalnych i bezpiecznych składników"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
