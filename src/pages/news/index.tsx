import clsx from 'clsx'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { FunctionComponent } from 'react'
import { CardPost } from '../../components/CardPost'
import { HeadingPage } from '../../components/HeadingPage'
import { List } from '../../components/List'
import { Main } from '../../components/Main'
import { NewsPost } from '../../types/newsPost'
import { SiteConfig } from '../../types/sitePage'
import { readMdFile } from '../../utils/readMdFile'
import { readMdFiles } from '../../utils/readMdFiles'

type Props = {
  posts: NewsPost[]
  site: SiteConfig
}

const NewsIndex: FunctionComponent<Props> = ({ posts, site }) => {
  return (
    <Main>
      <Head>
        <title>{`お知らせ | ${site.title}`}</title>
        <meta content={site.description} name={'description'} />
      </Head>
      <HeadingPage>{'お知らせ'}</HeadingPage>
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
  const unsortedPosts = await readMdFiles<NewsPost>('news-posts')

  const posts = unsortedPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  const site = await readMdFile<SiteConfig>('configs', 'site')

  return { props: { posts, site } }
}

export default NewsIndex
