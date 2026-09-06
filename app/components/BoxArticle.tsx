import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const BoxArticle: FC<Props> = (props) => {
  return <div className={"flex w-full max-w-7xl flex-col items-start gap-8"}>{props.children}</div>;
};
