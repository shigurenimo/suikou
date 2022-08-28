import { Box, Heading, HStack, Stack, Text } from "@chakra-ui/react"
import { GetStaticPaths, GetStaticProps } from "next"
import { FC } from "react"
import { AnchorURL } from "app/components/AnchorURL"
import { BoxImage } from "app/components/BoxImage"
import { BoxMarkdown } from "app/components/BoxMarkdown"
import { usePostFiles } from "app/hooks/usePostFiles"
import { NewsPost } from "app/types/newsPost"
import { readMdFiles } from "app/utils/readMdFiles"
import { toDateText } from "app/utils/toDateText"

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
    <Stack rounded={"md"} p={6} spacing={4}>
      <Stack>
        <Heading as={"h1"} fontSize={"xl"} fontWeight={"bold"}>
          {props.post.title}
        </Heading>
        <Text fontSize={"sm"}>{props.post.title_en}</Text>
        <Text fontSize={"sm"}>{toDateText(props.post.date)}</Text>
      </Stack>
      {hasActions && (
        <HStack spacing={4}>
          {pdfFiles.map((fileURL, index) => (
            <AnchorURL href={fileURL.replace("public/", "")} key={fileURL}>
              {pdfFiles.length > 1
                ? `PDFファイル（その${index + 1}）`
                : "PDFファイル"}
            </AnchorURL>
          ))}
          {hasURL && (
            <AnchorURL href={props.post.external_url}>{"外部リンク"}</AnchorURL>
          )}
        </HStack>
      )}
      {imageFiles.map((imageURL) => (
        <BoxImage alt={props.post.title} src={imageURL} key={imageURL} />
      ))}
      {props.post.content && (
        <Box bg={"gray.600"} p={4} rounded={"md"}>
          <BoxMarkdown>{props.post.content}</BoxMarkdown>
        </Box>
      )}
    </Stack>
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
