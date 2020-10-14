import { GetStaticProps } from 'next'
import Head from 'next/head'
import { FunctionComponent } from 'react'

type NewsPost = {
  date: string
  title_en: string
  title: string
  image: string | null
  external_url: string | null
  content: string | null
  id: string
}

type Props = {
  newsPosts: NewsPost[]
}

const Index: FunctionComponent<Props> = ({ newsPosts }) => {
  return (
    <main>
      <Head>
        <title>Create Next App</title>
      </Head>
      <section>
        <ul>
          {newsPosts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </section>
      <p>{'Home'}</p>
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
