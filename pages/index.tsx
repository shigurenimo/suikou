import { List, ListItem } from "@chakra-ui/react"
import { GetStaticProps } from "next"
import Head from "next/head"
import React, { FC } from "react"
import { BoxCardPost } from "app/components/BoxCardPost"
import { BoxMain } from "app/components/BoxMain"
import { BoxHome } from "app/components/BoxHome"
import { NewsPost } from "app/types/newsPost"
import { SiteConfig } from "app/types/sitePage"
import { readMdFile } from "app/utils/readMdFile"
import { readMdFiles } from "app/utils/readMdFiles"
import Script from "next/script"

type Props = {
  posts: NewsPost[]
  site: SiteConfig
}

const Index: FC<Props> = (props) => {
  const onOpen = (postId: string) => {
    window.open(`/posts/${postId}`, "_blank")
  }

  return (
    <BoxMain>
      <Head>
        <title>{props.site.title}</title>
        <meta content={props.site.description} name={"description"} />
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" onLoad={() => {
          const anyWindow = window as any
          if (anyWindow.netlifyIdentity === undefined) return
          anyWindow.netlifyIdentity.on("init", (user) => {
            if (!user) {
              anyWindow.netlifyIdentity.on("login", () => {
                document.location.href = "/admin/";
              });
            }
          });
        }}>
        </Script>
      </Head>
      <BoxHome />
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
  const newsPosts = await readMdFiles<NewsPost>("news-posts")

  const mediaPosts = await readMdFiles<NewsPost>("media-posts")

  const site = await readMdFile<SiteConfig>("configs", "site")

  const posts = [...newsPosts, ...mediaPosts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return { props: { posts, site } }
}

export default Index
