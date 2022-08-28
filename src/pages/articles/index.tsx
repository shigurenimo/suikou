import { List, ListItem } from "@chakra-ui/react"
import { GetStaticProps } from "next"
import React, { FC } from "react"
import { CardPost } from "src/components/CardPost"
import { HeadingPage } from "src/components/HeadingPage"
import { Main } from "src/components/Main"
import { NewsPost } from "src/types/newsPost"
import { SiteConfig } from "src/types/sitePage"
import { readMdFile } from "src/utils/readMdFile"
import { readMdFiles } from "src/utils/readMdFiles"

type Props = {
  posts: NewsPost[]
  site: SiteConfig
}

const ArticlesIndex: FC<Props> = ({ posts, site }) => {
  return (
    <Main title={`メディア掲載 | ${site.title}`} description={site.description}>
      <HeadingPage>{"メディア掲載"}</HeadingPage>
      <List spacing={{ base: 4, md: 6 }}>
        {posts.map((post) => (
          <ListItem key={post.id}>
            <CardPost post={post} />
          </ListItem>
        ))}
      </List>
    </Main>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const unsortedPosts = await readMdFiles<NewsPost>("media-posts")

  const posts = unsortedPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  const site = await readMdFile<SiteConfig>("configs", "site")

  return { props: { posts, site } }
}

export default ArticlesIndex
