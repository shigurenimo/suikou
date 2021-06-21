import {
  Box,
  HStack,
  Stack,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import React, { FunctionComponent } from 'react'
import { Article } from '../components/Article'
import { Main } from '../components/Main'
import { NakazaPage } from '../types/nakazaPage'
import { ProjectPage } from '../types/projectPage'
import { SiteConfig } from '../types/sitePage'
import { readMdFile } from '../utils/readMdFile'

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
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing={{ base: 4, md: 8 }}
        >
          <Stack spacing={{ base: 4, md: 8 }} flex={1}>
            <Text p={8} rounded={'lg'} bg={'gray.100'}>
              <Text textColor={'gray.700'}>{'教授'}</Text>
              <Text pt={1}>
                <HStack>
                  <Text fontWeight={'bold'} fontSize={'2xl'}>
                    {nakazaPage.name}
                  </Text>
                  <Text fontSize={'sm'} pl={4}>
                    {nakazaPage.name_en}
                  </Text>
                </HStack>
              </Text>
              <Text pt={2}>{nakazaPage.email}</Text>
            </Text>
            <Box rounded={'lg'} bg={'gray.100'} p={8}>
              <Text fontWeight={'bold'} fontSize={'lg'}>
                {'略歴'}
              </Text>
              <Stack
                as={'ul'}
                divider={<StackDivider borderColor="gray.200" />}
              >
                {nakazaPage.histories.map((history, index) => (
                  <Box py={4} key={index}>
                    <div>
                      <Text fontWeight={'bold'} as={'span'} fontSize={'2xl'}>
                        {history.year}
                      </Text>
                      <Text ml={2} as={'span'}>
                        {history.text}
                      </Text>
                    </div>
                    <Text pt={2} as={'span'}>
                      {history.text_en}
                    </Text>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Stack>
          <Stack flex={1} spacing={8}>
            <Stack
              p={8}
              rounded={'lg'}
              bg={'gray.100'}
              divider={<StackDivider borderColor="gray.200" />}
            >
              <Text pb={4} whiteSpace={'pre-wrap'}>
                {nakazaPage.description}
              </Text>
              <Text pt={4} whiteSpace={'pre-wrap'}>
                {nakazaPage.description_en}
              </Text>
            </Stack>
            <Stack
              rounded={'lg'}
              spacing={{ base: 4, md: 8 }}
              px={8}
              pt={8}
              bg={'gray.100'}
            >
              <Text fontSize={'lg'} fontWeight={'bold'}>
                {'研究・プロジェクト'}
              </Text>
              <Stack
                as={'ul'}
                divider={<StackDivider borderColor="gray.200" />}
              >
                {projectPage.projects.map((history, index) => (
                  <Box as={'li'}>
                    <Text py={4} textAlgin={'left'} key={index}>
                      {history.title}
                    </Text>
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Article>
    </Main>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const unsoetedNakazaPage = await readMdFile<NakazaPage>('pages', 'nakaza')

  const histories = [...unsoetedNakazaPage.histories]

  histories.reverse()

  const nakazaPage = { ...unsoetedNakazaPage, histories }

  const projectPage = await readMdFile<ProjectPage>('pages', 'project')

  const site = await readMdFile<SiteConfig>('configs', 'site')

  return { props: { nakazaPage, projectPage, site } }
}

export default Nakaza
