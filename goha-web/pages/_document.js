import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* Aquí van cosas globales como meta tags, fuentes, etc. */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
