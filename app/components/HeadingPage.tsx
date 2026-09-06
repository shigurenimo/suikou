import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const HeadingPage: FC<Props> = (props) => {
  return <h1 className={"text-xl font-bold"}>{props.children}</h1>;
};
