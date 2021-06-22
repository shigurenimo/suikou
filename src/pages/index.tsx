import clsx from 'clsx'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { FunctionComponent } from 'react'
import { CardPost } from '../components/CardPost'
import { SectionHome } from '../components/SectionHome'
import { NewsPost } from '../types/newsPost'
import { SiteConfig } from '../types/sitePage'
import { readMdFiles } from '../utils/readMdFiles'
import { readMdFile } from '../utils/readMdFile'
import { Box, Text } from '@chakra-ui/react'

type Props = {
  posts: NewsPost[]
  site: SiteConfig
}

const Index: FunctionComponent<Props> = ({ site, posts }) => {
  return (
    <main>
      <Head>
        <title>{site.title}</title>
        <meta content={site.description} name={'description'} />
      </Head>
      <SectionHome />
      <Box as={'ul'} maxWidth={'1280px'} mx={'auto'} w={'full'}>
        {posts.map((post, i) => (
          <Text className={clsx(i !== 0 && 'pt-4 md:pt-8')} key={post.id}>
            <CardPost post={post} />
          </Text>
        ))}
      </Box>
    </main>
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
