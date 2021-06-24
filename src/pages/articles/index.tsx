import { List, ListItem } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import React, { FunctionComponent } from 'react'
import { CardPost } from '../../core/components/CardPost'
import { HeadingPage } from '../../core/components/HeadingPage'
import { Main } from '../../core/components/Main'
import { NewsPost } from '../../types/newsPost'
import { SiteConfig } from '../../types/sitePage'
import { readMdFile } from '../../utils/readMdFile'
import { readMdFiles } from '../../utils/readMdFiles'

type Props = {
  posts: NewsPost[]
  site: SiteConfig
}

const ArticlesIndex: FunctionComponent<Props> = ({ posts, site }) => {
  return (
    <Main>
      <Head>
        <title>{`メディア掲載 | ${site.title}`}</title>
        <meta content={site.description} name={'description'} />
      </Head>
      <HeadingPage>{'メディア掲載'}</HeadingPage>
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
  const unsortedPosts = await readMdFiles<NewsPost>('media-posts')

  const posts = unsortedPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  const site = await readMdFile<SiteConfig>('configs', 'site')

  return { props: { posts, site } }
}

export default ArticlesIndex
