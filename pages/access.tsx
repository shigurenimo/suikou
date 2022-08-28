import { GetStaticProps } from "next"
import Head from "next/head"
import React, { FC } from "react"
import { Article } from "app/components/Article"
import { BoxMarkdown } from "app/components/BoxMarkdown"
import { HeadingPage } from "app/components/HeadingPage"
import { Main } from "app/components/Main"
import { Page } from "app/types/page"
import { SiteConfig } from "app/types/sitePage"
import { readMdFile } from "app/utils/readMdFile"

type Props = {
  page: Page
  site: SiteConfig
}

const Access: FC<Props> = (props) => {
  return (
    <Main>
      <Head>
        <title>{`${props.page.title} | ${props.site.title}`}</title>
        <meta content={props.site.description} name={"description"} />
      </Head>
      <Article>
        <HeadingPage>{props.page.title}</HeadingPage>
        <BoxMarkdown>{props.page.content}</BoxMarkdown>
      </Article>
    </Main>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const page = await readMdFile<Page>("pages", "access")

  const site = await readMdFile<SiteConfig>("configs", "site")

  return { props: { page, site } }
}

export default Access
