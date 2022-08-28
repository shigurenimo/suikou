import { ColorModeScript } from "@chakra-ui/react"
import { theme } from "app/theme"
import Document, { Head, Html, Main, NextScript } from "next/document"
import React from "react"

class MyDocument extends Document {
  public render() {
    return (
      <Html lang={"ja"}>
        <Head>
          <link rel={"preconnect"} href={"https://fonts.googleapis.com"} />
          <link
            rel={"preconnect"}
            href={"https://fonts.gstatic.com"}
            crossOrigin={""}
          />
          <link
            href={
              "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500;700&display=swap"
            }
            rel={"stylesheet"}
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
