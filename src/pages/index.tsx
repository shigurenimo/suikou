import clsx from 'clsx'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { FunctionComponent } from 'react'
import { CardPost } from '../components/CardPost'
import { SectionHome } from '../components/SectionHome'
import { NewsPost } from '../types/newsPost'
import { SiteConfig } from '../types/sitePage'

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
      <ul className={'max-w-screen-xl mx-auto w-full'}>
        {posts.map((post, i) => (
          <li className={clsx(i !== 0 && 'pt-4 md:pt-8')} key={post.id}>
            <CardPost post={post} />
          </li>
        ))}
      </ul>
    </main>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { readMdFiles } = await import('../utils/readMdFiles')

  const newsPosts = await readMdFiles<NewsPost>('news-posts')

  const mediaPosts = await readMdFiles<NewsPost>('media-posts')

  const { readMdFile } = await import('../utils/readMdFile')

  const site = await readMdFile<SiteConfig>('configs', 'site')

  const posts = [...newsPosts, ...mediaPosts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return { props: { posts, site } }
}

export default Index
