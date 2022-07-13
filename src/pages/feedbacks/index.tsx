import { List, ListItem } from "@chakra-ui/react"
import { GetStaticProps } from "next"
import Head from "next/head"
import React, { FC } from "react"
import { CardClassPost } from "src/components/CardClassPost"
import { HeadingPage } from "src/components/HeadingPage"
import { Main } from "src/components/Main"
import { ClassPost } from "src/types/classPost"
import { SiteConfig } from "src/types/sitePage"
import { readMdFile } from "src/utils/readMdFile"
import { readMdFiles } from "src/utils/readMdFiles"

type Props = {
  posts: ClassPost[]
  site: SiteConfig
}

const FeedbacksIndex: FC<Props> = ({ posts, site }) => {
  return (
    <Main>
      <Head>
        <title>{`講義の感想 | ${site.title}`}</title>
        <meta content={site.description} name={"description"} />
      </Head>
      <HeadingPage>{"講義の感想"}</HeadingPage>
      <List spacing={{ base: 4, md: 6 }}>
        {posts.map((post) => (
          <ListItem key={post.id}>
            <CardClassPost post={post} />
          </ListItem>
        ))}
      </List>
    </Main>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const unsortedPosts = await readMdFiles<ClassPost>("feedbacks")

  const posts = unsortedPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  const site = await readMdFile<SiteConfig>("configs", "site")

  return { props: { posts, site } }
}

export default FeedbacksIndex
