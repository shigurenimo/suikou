import clsx from 'clsx'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { FunctionComponent } from 'react'
import { List } from '../../layout/List'
import { Main } from '../../layout/Main'
import { CardPost } from '../../post/CardPost'
import { Post } from '../../types/post'

type Props = { posts: Post[] }

const NewsIndex: FunctionComponent<Props> = ({ posts }) => {
  return (
    <Main>
      <Head>
        <title>{'お知らせ'}</title>
      </Head>
      <h1 className={'font-bold text-xl'}>{'お知らせ'}</h1>
      <List>
        {posts.map((post, i) => (
          <li className={clsx(i !== 0 && 'pt-4 md:pt-8')} key={post.id}>
            <CardPost post={post} />
          </li>
        ))}
      </List>
    </Main>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { readContents } = await import('../../helpers/readContents')

  const posts = await readContents<Post>('news-posts')

  return { props: { posts } }
}

export default NewsIndex
