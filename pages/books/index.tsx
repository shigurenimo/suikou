import { GetStaticProps } from "next";
import Head from "next/head";
import React, { FC } from "react";
import { BoxCardBook } from "@/app/components/BoxCardBook";
import { HeadingPage } from "@/app/components/HeadingPage";
import { BoxMain } from "@/app/components/BoxMain";
import { Book } from "@/app/types/book";
import { SiteConfig } from "@/app/types/sitePage";
import { readMdFile } from "@/app/utils/readMdFile";
import { readMdFiles } from "@/app/utils/readMdFiles";

type Props = {
  posts: Book[];
  site: SiteConfig;
};

const ArticlesIndex: FC<Props> = (props) => {
  return (
    <BoxMain>
      <Head>
        <title>{`書籍 | ${props.site.title}`}</title>
        <meta content={props.site.description} name={"description"} />
      </Head>
      <HeadingPage>{"書籍"}</HeadingPage>
      <ul className={"flex flex-col gap-4 md:gap-8"}>
        {props.posts.map((post) => (
          <li key={post.id}>
            <BoxCardBook book={post} />
          </li>
        ))}
      </ul>
    </BoxMain>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await readMdFiles<Book>("books");

  const site = await readMdFile<SiteConfig>("configs", "site");

  return { props: { posts, site } };
};

export default ArticlesIndex;
