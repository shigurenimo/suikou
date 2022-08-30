import { List, ListItem } from "@chakra-ui/react"
import { GetStaticProps } from "next"
import Head from "next/head"
import React, { FC } from "react"
import { BoxCardPost } from "app/components/BoxCardPost"
import { HeadingPage } from "app/components/HeadingPage"
import { BoxMain } from "app/components/BoxMain"
import { NewsPost } from "app/types/newsPost"
import { SiteConfig } from "app/types/sitePage"
import { readMdFile } from "app/utils/readMdFile"
import { readMdFiles } from "app/utils/readMdFiles"

type Props = {
  posts: NewsPost[]
  site: SiteConfig
}

const PagePosts: FC<Props> = (props) => {
  const onOpen = (postId: string) => {
    window.open(`/posts/${postId}`, "_blank")
  }

  return (
    <BoxMain>
      <Head>
        <title>{`お知らせ | ${props.site.title}`}</title>
        <meta content={props.site.description} name={"description"} />
      </Head>
      <HeadingPage>{"お知らせ"}</HeadingPage>
      <List spacing={{ base: 4, md: 6 }}>
        {props.posts.map((post) => (
          <ListItem key={post.id}>
            <BoxCardPost
              post={post}
              onOpen={() => {
                onOpen(post.id)
              }}
            />
          </ListItem>
        ))}
      </List>
    </BoxMain>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const unsortedPosts = await readMdFiles<NewsPost>("news-posts")

  const posts = unsortedPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  const site = await readMdFile<SiteConfig>("configs", "site")

  return { props: { posts, site } }
}

export default PagePosts
