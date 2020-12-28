import { GetStaticProps } from 'next'
import Head from 'next/head'
import { FunctionComponent } from 'react'
import { Article } from '../components/Article'
import { Main } from '../components/Main'
import { NakazaPage } from '../types/nakazaPage'
import { ProjectPage } from '../types/projectPage'
import { SiteConfig } from '../types/sitePage'

type Props = {
  nakazaPage: NakazaPage
  projectPage: ProjectPage
  site: SiteConfig
}

const Nakaza: FunctionComponent<Props> = ({
  nakazaPage,
  projectPage,
  site,
}) => {
  return (
    <Main>
      <Head>
        <title>{`${nakazaPage.title} | ${site.title}`}</title>
        <meta content={site.description} name={'description'} />
      </Head>
      <Article>
        <div className={'md:flex'}>
          <div className={'flex-1'}>
            <div className={'p-4 border rounded-lg bg-gray-50'}>
              <h1 className={'text-gray-700'}>{'教授'}</h1>
              <h1 className={'pt-1'}>
                <span className={'text-lg font-bold'}>{nakazaPage.name}</span>
                <span className={'text-sm pl-4'}>{nakazaPage.name_en}</span>
              </h1>
              <p className={'pt-2'}>{nakazaPage.email}</p>
            </div>
            <div
              className={'border px-4 pt-4 rounded-lg bg-gray-50 mt-4 md:mt-8'}
            >
              <h2 className={'font-bold text-lg'}>{'略歴'}</h2>
              <ul className={'divide-y'}>
                {nakazaPage.histories.map((history, index) => (
                  <li className={'py-4'} key={index}>
                    <div>
                      <span className={'font-bold'}>{history.year}</span>
                      <span className={'ml-2'}>{history.text}</span>
                    </div>
                    <span className={'pt-2'}>{history.text_en}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={'flex-1 md:ml-8'}>
            <div className={'p-4 border rounded-lg bg-gray-50 divide-y'}>
              <p className={'whitespace-pre-wrap pb-4'}>
                {nakazaPage.description}
              </p>
              <p className={'whitespace-pre-wrap pt-4'}>
                {nakazaPage.description_en}
              </p>
            </div>
            <div
              className={'px-4 pt-4 border rounded-lg bg-gray-50 mt-4 md:mt-8'}
            >
              <h2 className={'font-bold text-lg'}>{'研究・プロジェクト'}</h2>
              <ul className={'divide-y'}>
                {projectPage.projects.map((history, index) => (
                  <li className={'py-4'} key={index}>
                    <span>{history.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Article>
    </Main>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { readMdFile } = await import('../utils/readMdFile')

  const unsoetedNakazaPage = await readMdFile<NakazaPage>('pages', 'nakaza')

  const histories = [...unsoetedNakazaPage.histories]

  histories.reverse()

  const nakazaPage = { ...unsoetedNakazaPage, histories }

  const projectPage = await readMdFile<ProjectPage>('pages', 'project')

  const site = await readMdFile<SiteConfig>('configs', 'site')

  return { props: { nakazaPage, projectPage, site } }
}

export default Nakaza
