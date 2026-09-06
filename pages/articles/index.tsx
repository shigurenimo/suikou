import { GetStaticProps } from "next";
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

const ArticlesIndex: FC<Props> = (props) => {
  return (
    <BoxMain title={`メディア掲載 | ${props.site.title}`} description={props.site.description}>
      <HeadingPage>{"メディア掲載"}</HeadingPage>
      <ul className={"flex flex-col gap-4 md:gap-8"}>
        {props.posts.map((post) => (
          <li key={post.id}>
            <BoxCardPost post={post} />
          </li>
        ))}
      </ul>
    </BoxMain>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const unsortedPosts = await readMdFiles<NewsPost>("media-posts");

  const posts = unsortedPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const site = await readMdFile<SiteConfig>("configs", "site");

  return { props: { posts, site } };
};

export default ArticlesIndex;
