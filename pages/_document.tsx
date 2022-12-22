import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

import { darkTheme, getCssText } from 'stitches.config'
import { KEY, Themes } from 'state/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        </Head>

        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              const userTheme = localStorage.getItem('${KEY}')
              const prefersDark = !userTheme && window.matchMedia('(prefers-color-scheme: dark)').matches
              if (userTheme === '${Themes.dark}' || prefersDark) {
                document.body.classList.add('${darkTheme.className}')
              }
            `,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
