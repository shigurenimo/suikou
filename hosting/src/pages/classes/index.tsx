import clsx from 'clsx'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { FunctionComponent } from 'react'
import { List } from '../../layout/List'
import { Main } from '../../layout/Main'
import { CardClassPost } from '../../post/CardClassPost'
import { ClassPost } from '../../types/classPost'

type Props = { posts: ClassPost[] }

const ArticlesIndex: FunctionComponent<Props> = ({ posts }) => {
  return (
    <Main>
      <Head>
        <title>{'メディア掲載'}</title>
      </Head>
      <h1 className={'font-bold text-xl'}>{'メディア掲載'}</h1>
      <List>
        {posts.map((post, i) => (
          <li className={clsx(i !== 0 && 'pt-4 md:pt-8')} key={post.id}>
            <CardClassPost post={post} />
          </li>
        ))}
      </List>
    </Main>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { readContents } = await import('../../helpers/readContents')

  const posts = await readContents<ClassPost>('class-posts')

  return { props: { posts } }
}

export default ArticlesIndex