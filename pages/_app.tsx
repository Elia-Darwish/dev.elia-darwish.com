import '@fontsource/raleway/300.css'
import '@fontsource/raleway/400.css'
import '@fontsource/raleway/500.css'
import '@fontsource/raleway/700.css'
import '@fontsource/raleway/900.css'

import '@fontsource/lato/100.css'
import '@fontsource/lato/300.css'
import '@fontsource/lato/400.css'
import '@fontsource/lato/700.css'
import '@fontsource/lato/900.css'

import type { AppProps } from 'next/app'
import { LazyMotion, domAnimation } from 'framer-motion'
import { Fragment } from 'react'
import Script from 'next/script'
import Head from 'next/head'

import { Nav } from 'components/Nav'
import { Box, Grid } from 'components/primitives'
import { globalStyles, theme } from 'stitches.config'
import { Footer } from 'components/Footer'
import { useFixVh } from 'hooks/useFixVh'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()
  useFixVh()

  return (
    <Fragment>
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
        <Grid
          css={{
            size: '$full',
            overflow: 'hidden',
            gridCols: 1,
            gridTemplateRows: 'max-content 1fr max-content',
          }}
        >
          <Nav />

          <Box css={{ paddingX: '$8', size: '$full', overflow: 'hidden', '@md': { paddingX: '$12' } }}>
            <Component {...pageProps} />
          </Box>

          <Footer />
        </Grid>
      </LazyMotion>
    </Fragment>
  )
}

export default MyApp
