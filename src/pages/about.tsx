import { GetStaticProps } from 'next'
import Head from 'next/head'
import { FunctionComponent } from 'react'
import ReactMarkdown from 'react-markdown'
import { Article } from '../components/Article'
import { HeadingPage } from '../components/HeadingPage'
import { Main } from '../components/Main'
import { Page } from '../types/page'
import { SiteConfig } from '../types/sitePage'

type Props = {
  page: Page
  site: SiteConfig
}

const About: FunctionComponent<Props> = ({ page, site }) => {
  return (
    <Main>
      <Head>
        <title>{`${page.title} | ${site.title}`}</title>
        <meta content={site.description} name={'description'} />
      </Head>
      <Article>
        <HeadingPage>{page.title}</HeadingPage>
        <ReactMarkdown
          className={'markdown whitespace-pre-wrap pt-4 md:pt-8'}
          source={page.content}
        />
      </Article>
    </Main>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { readMdFile } = await import('../utils/readMdFile')

  const page = await readMdFile<Page>('pages', 'about')

  const site = await readMdFile<SiteConfig>('configs', 'site')

  return { props: { page, site } }
}

export default About
