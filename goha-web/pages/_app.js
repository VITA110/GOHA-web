import Head from 'next/head'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>GOHA - International Operating Solutions</title>
        <meta
          name="description"
          content="Impulsamos operaciones con tecnologías adaptadas a las exigencias de tu industria. Trabajamos con marcas reconocidas."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}
