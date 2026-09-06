import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const BoxArticle: FC<Props> = (props) => {
  return (
    <div className={"flex w-full max-w-[1280px] flex-col items-start gap-6"}>{props.children}</div>
  );
};
