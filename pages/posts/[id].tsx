import { GetStaticPaths, GetStaticProps } from "next";
import { FC } from "react";
import { BoxCardPost } from "@/app/components/BoxCardPost";
import { BoxMain } from "@/app/components/BoxMain";
import { NewsPost } from "@/app/types/newsPost";
import { SiteConfig } from "@/app/types/sitePage";
import { readMdFile } from "@/app/utils/readMdFile";
import { readPosts } from "@/app/utils/readPosts";

type Props = { post: NewsPost; site: SiteConfig };
type Paths = { id: string };

const PagePost: FC<Props> = ({ post, site }) => (
  <BoxMain title={`${post.title} | ${site.title}`} description={site.description}>
    <BoxCardPost post={post} detail />
  </BoxMain>
);

export const getStaticPaths: GetStaticPaths<Paths> = async () => {
  const posts = await readPosts();
  const paths = Array.from(new Set(posts.map((post) => post.id))).map((id) => ({ params: { id } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Paths> = async (context) => {
  const posts = await readPosts();
  const post = posts.find((post) => post.id === context.params?.id);
  if (!post) return { notFound: true };
  const site = await readMdFile<SiteConfig>("configs", "site");
  return { props: { post, site } };
};

export default PagePost;
