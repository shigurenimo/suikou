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
  const { readMdFiles } = await import('../../utils/readMdFiles')

  const unsortedPosts = await readMdFiles<NewsPost>('media-posts')

  const posts = unsortedPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  const { readMdFile } = await import('../../utils/readMdFile')

  const site = await readMdFile<SiteConfig>('configs', 'site')

  return { props: { posts, site } }
}

export default ArticlesIndex