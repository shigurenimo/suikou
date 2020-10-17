import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {
  public static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

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
