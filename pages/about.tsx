import { GetStaticProps } from "next"
import Head from "next/head"
import React, { FC } from "react"
import { BoxArticle } from "app/components/BoxArticle"
import { BoxMarkdown } from "app/components/BoxMarkdown"
import { HeadingPage } from "app/components/HeadingPage"
import { BoxMain } from "app/components/BoxMain"
import { Page } from "app/types/page"
import { SiteConfig } from "app/types/sitePage"
import { readMdFile } from "app/utils/readMdFile"

type Props = {
  page: Page
  site: SiteConfig
}

const About: FC<Props> = (props) => {
  return (
    <BoxMain>
      <Head>
        <title>{`${props.page.title} | ${props.site.title}`}</title>
        <meta content={props.site.description} name={"description"} />
      </Head>
      <BoxArticle>
        <HeadingPage>{props.page.title}</HeadingPage>
        <BoxMarkdown>{props.page.content}</BoxMarkdown>
      </BoxArticle>
    </BoxMain>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const page = await readMdFile<Page>("pages", "about")

  const site = await readMdFile<SiteConfig>("configs", "site")

  return { props: { page, site } }
}

export default About
