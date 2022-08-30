import { Box, Heading, HStack, Stack, Text } from "@chakra-ui/react"
import { GetStaticPaths, GetStaticProps } from "next"
import { FC } from "react"
import { ButtonAnchorURL } from "app/components/ButtonAnchorURL"
import { BoxImage } from "app/components/BoxImage"
import { BoxMarkdown } from "app/components/BoxMarkdown"
import { usePostFiles } from "app/hooks/usePostFiles"
import { NewsPost } from "app/types/newsPost"
import { readMdFiles } from "app/utils/readMdFiles"
import { toDateText } from "app/utils/toDateText"
import { BoxMain } from "app/components/BoxMain"

type Props = {
  post: NewsPost
}

type Paths = {
  id: string
}

const PagePost: FC<Props> = (props) => {
  const imageFiles = usePostFiles(
    [props.post.file, props.post.file_a, props.post.file_b, props.post.file_c],
    [".png", ".jpg", ".jpeg"],
  )

  const pdfFiles = usePostFiles(
    [props.post.file, props.post.file_a, props.post.file_b, props.post.file_c],
    [".pdf"],
  )

  const hasURL = !!props.post.external_url

  const hasActions = pdfFiles.length > 0

  // <Main />
  return (
    <BoxMain>
      <Stack rounded={"md"} bg={"gray.700"} spacing={4} boxShadow={"lg"} p={4}>
        <Box
          bg={"gray.600"}
          p={3}
          boxShadow={"lg"}
          overflow={"hidden"}
          rounded={"md"}
        >
          <Stack>
            <Heading as={"h1"} fontSize={"xl"} fontWeight={"bold"}>
              {props.post.title}
            </Heading>
            <Text fontSize={"sm"}>{props.post.title_en}</Text>
            <Text fontSize={"sm"}>{toDateText(props.post.date)}</Text>
          </Stack>
        </Box>
        {hasActions && (
          <HStack spacing={4}>
            {pdfFiles.map((fileURL, index) => (
              <ButtonAnchorURL
                href={fileURL.replace("public/", "")}
                key={fileURL}
              >
                {pdfFiles.length > 1
                  ? `PDFファイル（その${index + 1}）`
                  : "PDFファイル"}
              </ButtonAnchorURL>
            ))}
            {hasURL && (
              <ButtonAnchorURL href={props.post.external_url}>
                {"外部リンク"}
              </ButtonAnchorURL>
            )}
          </HStack>
        )}
        {imageFiles.map((imageURL) => (
          <BoxImage alt={props.post.title} src={imageURL} key={imageURL} />
        ))}
        {props.post.content && <BoxMarkdown>{props.post.content}</BoxMarkdown>}
      </Stack>
    </BoxMain>
  )
}

export const getStaticPaths: GetStaticPaths<Paths> = async () => {
  const posts = await readMdFiles<NewsPost>("news-posts")

  const paths = posts.map((post) => {
    return { params: { id: post.id } }
  })

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props, Paths> = async (context) => {
  const posts = await readMdFiles<NewsPost>("news-posts")

  const post = posts.find((post) => {
    return post.id === context.params.id
  })

  return { props: { post } }
}

export default PagePost
