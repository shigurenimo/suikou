import { Heading, HStack, Stack, StackDivider, Text } from "@chakra-ui/react"
import { GetStaticProps } from "next"
import Head from "next/head"
import React, { FC } from "react"
import { BoxArticle } from "app/components/BoxArticle"
import { BoxMain } from "app/components/BoxMain"
import { NakazaPage } from "app/types/nakazaPage"
import { ProjectPage } from "app/types/projectPage"
import { SiteConfig } from "app/types/sitePage"
import { readMdFile } from "app/utils/readMdFile"

type Props = {
  nakazaPage: NakazaPage
  projectPage: ProjectPage
  site: SiteConfig
}

const Nakaza: FC<Props> = (props) => {
  return (
    <BoxMain>
      <Head>
        <title>{`${props.nakazaPage.title} | ${props.site.title}`}</title>
        <meta content={props.site.description} name={"description"} />
      </Head>
      <BoxArticle>
        <Stack
          direction={{ base: "column", xl: "row" }}
          spacing={{ base: 4, md: 6 }}
        >
          <Stack spacing={{ base: 4, md: 6 }} flex={1}>
            <Stack p={4} rounded={"lg"} bg={"gray.700"}>
              <Text opacity={0.8}>{"教授"}</Text>
              <Stack>
                <HStack>
                  <Heading as={"h1"} fontWeight={"bold"} fontSize={"2xl"}>
                    {props.nakazaPage.name}
                  </Heading>
                  <Text fontSize={"sm"} pl={4}>
                    {props.nakazaPage.name_en}
                  </Text>
                </HStack>
              </Stack>
              <Text>{props.nakazaPage.email}</Text>
            </Stack>
            <Stack rounded={"lg"} bg={"gray.700"} p={4}>
              <Heading as={"h2"} fontWeight={"bold"} fontSize={"lg"}>
                {"略歴"}
              </Heading>
              <Stack
                as={"ul"}
                divider={<StackDivider borderColor={"gray.300"} />}
              >
                {props.nakazaPage.histories.map((history, index) => (
                  <Stack py={2} key={index} spacing={0}>
                    <HStack>
                      <Text fontWeight={"bold"} fontSize={"2xl"}>
                        {history.year}
                      </Text>
                      <Text ml={2}>{history.text}</Text>
                    </HStack>
                    <Text pt={2}>{history.text_en}</Text>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Stack>
          <Stack flex={1} spacing={{ base: 4, md: 6 }}>
            <Stack
              p={4}
              rounded={"lg"}
              bg={"gray.700"}
              divider={<StackDivider borderColor={"gray.300"} />}
            >
              <Text pb={4} whiteSpace={"pre-wrap"}>
                {props.nakazaPage.description.trim()}
              </Text>
              <Text pt={4} whiteSpace={"pre-wrap"}>
                {props.nakazaPage.description_en.trim()}
              </Text>
            </Stack>
            <Stack rounded={"lg"} spacing={4} p={4} bg={"gray.700"}>
              <Heading as={"h2"} fontSize={"lg"} fontWeight={"bold"}>
                {"研究・プロジェクト"}
              </Heading>
              <Stack
                as={"ul"}
                divider={<StackDivider borderColor={"gray.300"} />}
              >
                {props.projectPage.projects.map((history, index) => (
                  <Stack as={"li"} key={index}>
                    <Text py={2} align={"left"}>
                      {history.title}
                    </Text>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </BoxArticle>
    </BoxMain>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const unsoetedNakazaPage = await readMdFile<NakazaPage>("pages", "nakaza")

  const histories = [...unsoetedNakazaPage.histories]

  histories.reverse()

  const nakazaPage = { ...unsoetedNakazaPage, histories }

  const projectPage = await readMdFile<ProjectPage>("pages", "project")

  const site = await readMdFile<SiteConfig>("configs", "site")

  return { props: { nakazaPage, projectPage, site } }
}

export default Nakaza
