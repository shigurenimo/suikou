import { GetStaticProps } from 'next'
import Head from 'next/head'
import { FunctionComponent } from 'react'
import { Article } from '../core/Article'
import { Main } from '../core/Main'
import { NakazaPage } from '../types/nakazaPage'
import { ProjectPage } from '../types/projectPage'

type Props = {
  nakazaPage: NakazaPage
  projectPage: ProjectPage
}

const Nakaza: FunctionComponent<Props> = ({ nakazaPage, projectPage }) => {
  const histories = [...nakazaPage.histories]

  histories.reverse()

  return (
    <Main>
      <Head>
        <title>{nakazaPage.title}</title>
      </Head>
      <Article>
        <div className={'md:flex'}>
          <div className={'flex-1'}>
            <div className={'p-4 border rounded-lg'}>
              <h1 className={'text-gray-700'}>{'教授'}</h1>
              <h1 className={'pt-1'}>
                <span className={'text-lg font-bold'}>{nakazaPage.name}</span>
                <span className={'text-sm pl-4'}>{nakazaPage.name_en}</span>
              </h1>
              <p className={'pt-2'}>{nakazaPage.email}</p>
            </div>
            <div className={'border px-4 pt-4 rounded-lg mt-4 md:mt-8'}>
              <h2 className={'font-bold text-lg'}>{'略歴'}</h2>
              <ul className={'divide-y'}>
                {histories.map((history, index) => (
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
            <div className={'p-4 border rounded-lg divide-y'}>
              <p className={'whitespace-pre-wrap pb-4'}>
                {nakazaPage.description}
              </p>
              <p className={'whitespace-pre-wrap pt-4'}>
                {nakazaPage.description_en}
              </p>
            </div>
            <div className={'px-4 pt-4 border rounded-lg mt-4 md:mt-8'}>
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
  const { readMdFile } = await import('../helpers/readMdFile')

  const nakazaPage = await readMdFile<NakazaPage>('pages', 'nakaza')

  const projectPage = await readMdFile<ProjectPage>('pages', 'project')

  return { props: { nakazaPage, projectPage } }
}

export default Nakaza
