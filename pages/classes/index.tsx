import { List, ListItem } from "@chakra-ui/react"
import { GetStaticProps } from "next"
import Head from "next/head"
import React, { FC } from "react"
import { BoxCardClassPost } from "app/components/BoxCardClassPost"
import { HeadingPage } from "app/components/HeadingPage"
import { BoxMain } from "app/components/BoxMain"
import { ClassPost } from "app/types/classPost"
import { SiteConfig } from "app/types/sitePage"
import { readMdFile } from "app/utils/readMdFile"
import { readMdFiles } from "app/utils/readMdFiles"

type Props = {
  posts: ClassPost[]
  site: SiteConfig
}

const ArticlesIndex: FC<Props> = (props) => {
  return (
    <BoxMain>
      <Head>
        <title>{`eラーニング | ${props.site.title}`}</title>
        <meta content={props.site.description} name={"description"} />
      </Head>
      <HeadingPage>{"eラーニング"}</HeadingPage>
      <List spacing={{ base: 4, md: 6 }}>
        {props.posts.map((post) => (
          <ListItem key={post.id}>
            <BoxCardClassPost post={post} />
          </ListItem>
        ))}
      </List>
    </BoxMain>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const unsortedPosts = await readMdFiles<ClassPost>("class-posts")

  const posts = unsortedPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  const site = await readMdFile<SiteConfig>("configs", "site")

  return { props: { posts, site } }
}

export default ArticlesIndex
