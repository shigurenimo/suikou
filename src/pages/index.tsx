import { List, ListItem } from "@chakra-ui/react"
import { GetStaticProps } from "next"
import Head from "next/head"
import React, { FC } from "react"
import { CardPost } from "src/components/CardPost"
import { Main } from "src/components/Main"
import { SectionHome } from "src/components/SectionHome"
import { NewsPost } from "src/types/newsPost"
import { SiteConfig } from "src/types/sitePage"
import { readMdFile } from "src/utils/readMdFile"
import { readMdFiles } from "src/utils/readMdFiles"

type Props = {
  posts: NewsPost[]
  site: SiteConfig
}

const Index: FC<Props> = ({ site, posts }) => {
  return (
    <Main>
      <Head>
        <title>{site.title}</title>
        <meta content={site.description} name={"description"} />
      </Head>
      <SectionHome />
      <List spacing={{ base: 4, md: 6 }}>
        {posts.map((post) => (
          <ListItem key={post.id}>
            <CardPost post={post} key={post.id} />
          </ListItem>
        ))}
      </List>
    </Main>
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
