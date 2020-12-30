import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {
  public render() {
    return (
      <Html lang={'ja'}>
        <Head>
          <link
            href={'https://fonts.googleapis.com/icon?family=Material+Icons'}
            rel={'stylesheet'}
          />
          <link
            href={
              'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap'
            }
            rel={'stylesheet'}
          />
          <script
            async
            src={'https://www.googletagmanager.com/gtag/js?id=G-6ZRNQNDK1C'}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag() { dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', 'G-6ZRNQNDK1C', {
                page_path: window.location.pathname,
              });`,
            }}
          />
        </Head>
        <body className={'p-4 md:p-8'}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
