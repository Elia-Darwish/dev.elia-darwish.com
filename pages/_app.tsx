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

import { Nav } from 'components/Nav'
import { Box, Grid } from 'components/primitives'
import { globalStyles } from 'stitches.config'
import { Footer } from 'components/Footer'
import { useFixVh } from 'hooks/useFixVh'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()
  useFixVh()

  return (
    <Fragment>
      <Script src="/theme-init.js" strategy="beforeInteractive" />

      <LazyMotion features={domAnimation}>
        <Grid css={{ size: '$full', overflow: 'hidden', gridCols: 1, gridTemplateRows: 'max-content 1fr max-content' }}>
          <Nav />

          <Box css={{ paddingX: '$12', size: '$full', overflow: 'hidden' }}>
            <Component {...pageProps} />
          </Box>

          <Footer />
        </Grid>
      </LazyMotion>
    </Fragment>
  )
}

export default MyApp
