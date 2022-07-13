import { Box } from "@chakra-ui/react"
import { GetStaticProps } from "next"
import Head from "next/head"
import React, { FunctionComponent } from "react"
import { Article } from "../core/components/Article"
import { BoxMarkdown } from "../core/components/BoxMarkdown"
import { HeadingPage } from "../core/components/HeadingPage"
import { Main } from "../core/components/Main"
import { Page } from "../types/page"
import { SiteConfig } from "../types/sitePage"
import { readMdFile } from "../utils/readMdFile"

type Props = {
  page: Page
  site: SiteConfig
}

const Access: FunctionComponent<Props> = ({ page, site }) => {
  return (
    <Main>
      <Head>
        <title>{`${page.title} | ${site.title}`}</title>
        <meta content={site.description} name={"description"} />
      </Head>
      <Article>
        <HeadingPage>{page.title}</HeadingPage>
        <Box>
          <BoxMarkdown>{page.content}</BoxMarkdown>
        </Box>
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
