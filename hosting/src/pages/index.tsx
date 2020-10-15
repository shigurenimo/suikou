import clsx from 'clsx'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { FunctionComponent } from 'react'
import { DivisionPost } from '../home/DivisionPost'
import { SectionHome } from '../home/SectionHome'
import { NewsPost } from '../types/newsPost'

type Props = {
  newsPosts: NewsPost[]
}

const Index: FunctionComponent<Props> = ({ newsPosts }) => {
  return (
    <main className={'p-4 md:p-8'}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <SectionHome />
      <section>
        <ul className={'max-w-screen-xl mx-auto w-full'}>
          {newsPosts.map((post, i) => (
            <li className={clsx(i !== 0 && 'pt-4 md:pt-16')} key={post.id}>
              <DivisionPost post={post} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { readContents } = await import('../helpers/readContents')

  const newsPosts = await readContents<NewsPost>('news-posts')

  return {
    props: { newsPosts },
  }
}

export default Index
