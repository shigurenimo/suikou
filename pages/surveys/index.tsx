import { List, ListItem } from "@chakra-ui/react"
import { GetStaticProps } from "next"
import Head from "next/head"
import React, { FC } from "react"
import { CardClassPost } from "app/components/CardClassPost"
import { HeadingPage } from "app/components/HeadingPage"
import { Main } from "app/components/Main"
import { ClassPost } from "app/types/classPost"
import { SiteConfig } from "app/types/sitePage"
import { readMdFile } from "app/utils/readMdFile"
import { readMdFiles } from "app/utils/readMdFiles"

type Props = {
  posts: ClassPost[]
  site: SiteConfig
}

const SurveysIndex: FC<Props> = (props) => {
  return (
    <Main>
      <Head>
        <title>{`尾崎次郎基金による東北地方大津波災害調査 | ${props.site.title}`}</title>
        <meta content={props.site.description} name={"description"} />
      </Head>
      <HeadingPage>{"尾崎次郎基金による東北地方大津波災害調査"}</HeadingPage>
      <List spacing={{ base: 4, md: 6 }}>
        {props.posts.map((post) => (
          <ListItem key={post.id}>
            <CardClassPost post={post} />
          </ListItem>
        ))}
      </List>
    </Main>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const unsortedPosts = await readMdFiles<ClassPost>("survey-posts")

  const posts = unsortedPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  const site = await readMdFile<SiteConfig>("configs", "site")

  return { props: { posts, site } }
}

export default SurveysIndex
