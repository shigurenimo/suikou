import clsx from 'clsx'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { FunctionComponent } from 'react'
import { HeadingPage } from '../../core/HeadingPage'
import { List } from '../../core/List'
import { Main } from '../../core/Main'
import { CardClassPost } from '../../post/CardClassPost'
import { ClassPost } from '../../types/classPost'

type Props = { posts: ClassPost[] }

const SurveysIndex: FunctionComponent<Props> = ({ posts }) => {
  return (
    <Main>
      <Head>
        <title>{'尾崎次郎基金による東北地方大津波災害調査'}</title>
      </Head>
      <HeadingPage>{'尾崎次郎基金による東北地方大津波災害調査'}</HeadingPage>
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
  const { readMdFiles } = await import('../../helpers/readMdFiles')

  const unsortedPosts = await readMdFiles<ClassPost>('survey-posts')

  const posts = unsortedPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return { props: { posts } }
}

export default SurveysIndex
