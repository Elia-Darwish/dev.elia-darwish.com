import type { AppProps } from 'next/app'
import { LazyMotion, domAnimation } from 'framer-motion'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react'

import { Nav } from 'components/Nav'
import { Box, Grid } from 'components/primitives'
import { globalStyles, Themes } from 'stitches.config'
import { Footer } from 'components/Footer'
import { useFixVh } from 'hooks/useFixVh'
import { ThemeProvider } from 'state/theme'

// eslint-disable-next-line no-console
console.log(
  "%cI'm going to hunt you down, and inspect your site!",
  'font-family: Lato, sans-serif; font-size: 1.5rem; color: #3867D6',
)

function MyApp({ Component, pageProps }: AppProps<{ theme: Themes | null }>) {
  globalStyles()
  useFixVh()

  return (
    <>
      <ThemeProvider initial={pageProps.theme}>
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

              backgroundColor: '$bg',
              backgroundImage: 'url(/images/bg/bg.svg)',
              backgroundSize: '12px',
              backgroundRepeat: 'repeat',

              transition: '$color',
            }}
          >
            <Nav />

            <Box css={{ paddingX: '$8', size: '$full', overflow: 'hidden', '@md': { paddingX: '$12' } }}>
              <Component {...pageProps} />
            </Box>

            <Footer />
          </Grid>
        </LazyMotion>
      </ThemeProvider>
      <Analytics />
    </>
  )
}

export default MyApp
