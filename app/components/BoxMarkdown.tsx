import React, { FC, ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import { toPublicPath } from "@/app/utils/toPublicPath";

type Props = {
  children: ReactNode;
};

export const BoxMarkdown: FC<Props> = (props) => {
  if (typeof props.children !== "string") {
    return <>{props.children}</>;
  }

  return (
    <ReactMarkdown
      components={{
        li(props) {
          return <li className={"ml-4 mt-2 text-sm md:ml-6 md:text-base"}>{props.children}</li>;
        },
        ul(props) {
          return <ul className={"mt-4 ml-0 list-disc"}>{props.children}</ul>;
        },
        ol(props) {
          return <ol className={"mt-4 ml-0 list-decimal"}>{props.children}</ol>;
        },
        h1(props) {
          const isFirst = props.node?.position?.start.line === 1;
          return (
            <h1
              className={
                isFirst ? "text-xl font-bold md:text-2xl" : "mt-12 text-xl font-bold md:text-2xl"
              }
            >
              {props.children}
            </h1>
          );
        },
        h2(props) {
          const isFirst = props.node?.position?.start.line === 1;
          return (
            <h2
              className={
                isFirst ? "text-lg font-bold md:text-xl" : "mt-6 text-lg font-bold md:text-xl"
              }
            >
              {props.children}
            </h2>
          );
        },
        h3(props) {
          return <h3 className={"mt-4 text-base font-bold md:text-lg"}>{props.children}</h3>;
        },
        p(props) {
          const isFirst = props.node?.position?.start.line === 1;
          return (
            <p
              className={
                isFirst
                  ? "whitespace-pre-wrap leading-normal"
                  : "mt-4 whitespace-pre-wrap leading-normal"
              }
            >
              {props.children}
            </p>
          );
        },
        a(props) {
          return (
            <a
              className={"font-bold break-all text-blue-400 underline underline-offset-4"}
              href={props.href && toPublicPath(props.href)}
              rel={"noopener noreferrer"}
              target={"_blank"}
            >
              {props.children}
            </a>
          );
        },
        img({ node: _node, src, ...props }) {
          return (
            <img
              {...props}
              src={typeof src === "string" ? toPublicPath(src) : src}
              className={"my-4 h-auto w-full max-w-lg rounded-lg"}
              loading="lazy"
            />
          );
        },
        blockquote(props) {
          return (
            <blockquote className={"mt-4"}>
              <div className={"border-l-8 pl-4 pb-4"}>{props.children}</div>
            </blockquote>
          );
        },
      }}
    >
      {props.children}
    </ReactMarkdown>
  );
};
