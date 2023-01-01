import type { AppProps } from 'next/app'
import { LazyMotion, domAnimation } from 'framer-motion'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react'

import { Nav } from 'components/Nav'
import { Footer } from 'components/Footer'
import { useFixVh } from 'hooks/useFixVh'

import 'styles/global.css'

// eslint-disable-next-line no-console
console.log(
  "%cI'm going to hunt you down, and inspect your site!",
  'font-family: Lato, sans-serif; font-size: 1.2rem; color: #3867D6',
)

function MyApp({ Component, pageProps }: AppProps) {
  useFixVh()

  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <LazyMotion features={domAnimation}>
        <div className="grid h-full w-full grid-cols-1 grid-rows-[max-content_1fr_max-content] overflow-hidden">
          <Nav />

          <div className="h-full w-full overflow-hidden px-6 md:px-12">
            <Component {...pageProps} />
          </div>

          <Footer />
        </div>
      </LazyMotion>

      <Analytics />
    </>
  )
}

export default MyApp
