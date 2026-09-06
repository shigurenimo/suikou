import { GetStaticProps } from "next";
import Head from "next/head";
import React, { FC } from "react";
import { BoxCardPost } from "@/app/components/BoxCardPost";
import { BoxMain } from "@/app/components/BoxMain";
import { BoxHome } from "@/app/components/BoxHome";
import { NewsPost } from "@/app/types/newsPost";
import { SiteConfig } from "@/app/types/sitePage";
import { readMdFile } from "@/app/utils/readMdFile";
import { readPosts } from "@/app/utils/readPosts";

type Props = {
  posts: NewsPost[];
  site: SiteConfig;
};

const Index: FC<Props> = (props) => {
  return (
    <BoxMain>
      <Head>
        <title>{props.site.title}</title>
        <meta content={props.site.description} name={"description"} />
      </Head>
      <BoxHome />
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
  const unsortedPosts = await readPosts();

  const site = await readMdFile<SiteConfig>("configs", "site");

  const posts = unsortedPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return { props: { posts, site } };
};

export default Index;
