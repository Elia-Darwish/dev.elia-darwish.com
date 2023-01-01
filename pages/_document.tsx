import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

import { KEY, THEMES } from 'state/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />

        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              const userTheme = localStorage.getItem('${KEY}')
              const prefersDark = !userTheme && window.matchMedia('(prefers-color-scheme: dark)').matches
              if (userTheme === '${THEMES.dark}' || prefersDark) {
                document.documentElement.classList.add('${THEMES.dark}')
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
