import { Box, Stack } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import React, { FunctionComponent } from 'react'
import { CardPost } from '../core/components/CardPost'
import { Main } from '../core/components/Main'
import { SectionHome } from '../core/components/SectionHome'
import { NewsPost } from '../types/newsPost'
import { SiteConfig } from '../types/sitePage'
import { readMdFile } from '../utils/readMdFile'
import { readMdFiles } from '../utils/readMdFiles'

type Props = {
  posts: NewsPost[]
  site: SiteConfig
}

const Index: FunctionComponent<Props> = ({ site, posts }) => {
  return (
    <Main>
      <Head>
        <title>{site.title}</title>
        <meta content={site.description} name={'description'} />
      </Head>
      <SectionHome />
      <Stack
        as={'ul'}
        maxW={'1280px'}
        mx={'auto'}
        w={'full'}
        spacing={{ base: 4, md: 8 }}
      >
        {posts.map((post, i) => (
          <Box as={'li'}>
            <CardPost post={post} key={post.id} />
          </Box>
        ))}
      </Stack>
    </Main>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const newsPosts = await readMdFiles<NewsPost>('news-posts')

  const mediaPosts = await readMdFiles<NewsPost>('media-posts')

  const site = await readMdFile<SiteConfig>('configs', 'site')

  const posts = [...newsPosts, ...mediaPosts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return { props: { posts, site } }
}

export default Index
