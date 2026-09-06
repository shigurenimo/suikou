import Head from "next/head";
import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  title?: string;
  description?: string;
};

export const BoxMain: FC<Props> = (props) => {
  return (
    <>
      <Head>
        {props.title && <title>{props.title}</title>}
        {props.description && <meta content={props.description} name={"description"} />}
      </Head>
      <main
        className={
          "flex min-w-0 flex-1 flex-col gap-4 p-4 [overflow-wrap:anywhere] md:gap-6 md:p-6"
        }
      >
        {props.children}
      </main>
    </>
  );
};
