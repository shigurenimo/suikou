import { GetStaticProps } from "next";
import Head from "next/head";
import React, { FC } from "react";
import { BoxCardClassPost } from "@/app/components/BoxCardClassPost";
import { HeadingPage } from "@/app/components/HeadingPage";
import { BoxMain } from "@/app/components/BoxMain";
import { ClassPost } from "@/app/types/classPost";
import { SiteConfig } from "@/app/types/sitePage";
import { readMdFile } from "@/app/utils/readMdFile";
import { readMdFiles } from "@/app/utils/readMdFiles";

type Props = {
  posts: ClassPost[];
  site: SiteConfig;
};

const SurveysIndex: FC<Props> = (props) => {
  return (
    <BoxMain>
      <Head>
        <title>{`尾崎次郎基金による東北地方大津波災害調査 | ${props.site.title}`}</title>
        <meta content={props.site.description} name={"description"} />
      </Head>
      <HeadingPage>{"尾崎次郎基金による東北地方大津波災害調査"}</HeadingPage>
      <ul className={"flex flex-col gap-4 md:gap-8"}>
        {props.posts.map((post) => (
          <li key={post.id}>
            <BoxCardClassPost post={post} />
          </li>
        ))}
      </ul>
    </BoxMain>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const unsortedPosts = await readMdFiles<ClassPost>("survey-posts");

  const posts = unsortedPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const site = await readMdFile<SiteConfig>("configs", "site");

  return { props: { posts, site } };
};

export default SurveysIndex;
