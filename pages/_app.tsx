import "@fontsource/architects-daughter"
import "@fontsource/lato/100.css"
import "@fontsource/lato/300.css"
import "@fontsource/lato/400.css"
import "@fontsource/lato/700.css"
import "@fontsource/lato/900.css"

import type { AppProps } from 'next/app'
import { globalStyles } from 'stitches.config'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()

  return <Component {...pageProps} />
}

export default MyApp
