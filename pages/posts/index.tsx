import { GetStaticProps } from "next";
import Head from "next/head";
import React, { FC } from "react";
import { BoxCardPost } from "@/app/components/BoxCardPost";
import { HeadingPage } from "@/app/components/HeadingPage";
import { BoxMain } from "@/app/components/BoxMain";
import { NewsPost } from "@/app/types/newsPost";
import { SiteConfig } from "@/app/types/sitePage";
import { readMdFile } from "@/app/utils/readMdFile";
import { readMdFiles } from "@/app/utils/readMdFiles";

type Props = {
  posts: NewsPost[];
  site: SiteConfig;
};

const PagePosts: FC<Props> = (props) => {
  return (
    <BoxMain>
      <Head>
        <title>{`お知らせ | ${props.site.title}`}</title>
        <meta content={props.site.description} name={"description"} />
      </Head>
      <HeadingPage>{"お知らせ"}</HeadingPage>
      <ul className={"flex flex-col gap-4 md:gap-8"}>
        {props.posts.map((post) => (
          <li key={post.id}>
            <BoxCardPost post={post} href={`/posts/${post.id}`} />
          </li>
        ))}
      </ul>
    </BoxMain>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const unsortedPosts = await readMdFiles<NewsPost>("news-posts");

  const posts = unsortedPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const site = await readMdFile<SiteConfig>("configs", "site");

  return { props: { posts, site } };
};

export default PagePosts;
