import { Head, Html, Main, NextScript } from "next/document";
import React, { FC } from "react";

const Document: FC = () => {
  return (
    <Html lang={"ja"} className={"dark"}>
      <Head>
        <link rel={"preconnect"} href={"https://fonts.googleapis.com"} />
        <link rel={"preconnect"} href={"https://fonts.gstatic.com"} crossOrigin={""} />
        <link
          href={"https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500;700&display=swap"}
          rel={"stylesheet"}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
