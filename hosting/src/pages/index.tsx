import clsx from 'clsx'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { FunctionComponent } from 'react'
import { SectionHome } from '../home/SectionHome'
import { CardPost } from '../post/CardPost'
import { Post } from '../types/post'

type Props = { posts: Post[] }

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
  const { readContents } = await import('../helpers/readContents')

  const newsPosts = await readContents<Post>('news-posts')

  const mediaPosts = await readContents<Post>('media-posts')

  const posts = [...newsPosts, ...mediaPosts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return { props: { posts } }
}

export default Index
