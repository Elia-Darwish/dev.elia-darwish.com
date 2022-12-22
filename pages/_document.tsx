import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

import { darkTheme, getCssText } from 'stitches.config'
import { KEY, Themes } from 'state/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
          <Script id="theme-init" strategy="afterInteractive">{`
              const userTheme = localStorage.getItem('${KEY}')
              const prefersDark = !userTheme && window.matchMedia('(prefers-color-scheme: dark)').matches
              if (userTheme === '${Themes.dark}' || prefersDark) {
                document.body.classList.add('${darkTheme}')
              }
            `}</Script>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
