import clsx from 'clsx'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { FunctionComponent } from 'react'
import { SectionHome } from '../home/SectionHome'
import { CardPost } from '../post/CardPost'
import { NewsPost } from '../types/newsPost'

type Props = { posts: NewsPost[] }

const Index: FunctionComponent<Props> = ({ posts }) => {
  return (
    <main>
      <Head>
        <title>{'ホーム'}</title>
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
  const { readMdFiles } = await import('../helpers/readMdFiles')

  const newsPosts = await readMdFiles<NewsPost>('news-posts')

  const mediaPosts = await readMdFiles<NewsPost>('media-posts')

  const posts = [...newsPosts, ...mediaPosts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return { props: { posts } }
}

export default Index
