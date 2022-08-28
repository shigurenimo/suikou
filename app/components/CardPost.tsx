import { Heading, HStack, Stack, Text } from "@chakra-ui/react"
import React, { FC } from "react"
import { AnchorURL } from "app/components/AnchorURL"
import { BoxImage } from "app/components/BoxImage"
import { BoxMarkdown } from "app/components/BoxMarkdown"
import { usePostFiles } from "app/hooks/usePostFiles"
import { NewsPost } from "app/types/newsPost"
import { toDateText } from "app/utils/toDateText"

type Props = { post: NewsPost }

export const CardPost: FC<Props> = ({ post }) => {
  const imageFiles = usePostFiles(
    [post.file, post.file_a, post.file_b, post.file_c],
    [".png", ".jpg", ".jpeg"],
  )

  const pdfFiles = usePostFiles(
    [post.file, post.file_a, post.file_b, post.file_c],
    [".pdf"],
  )

  const hasURL = !!post.external_url

  const hasActions = pdfFiles.length > 0

  const hasContent = post.content.length > 0

  return (
    <Stack rounded={"md"} bg={"gray.700"} spacing={4} boxShadow={"lg"} p={4}>
      <Stack bg={"gray.600"} p={3} rounded={"md"} boxShadow={"lg"} spacing={4}>
        <Stack spacing={1}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            {toDateText(post.date)}
          </Text>
          <Heading as={"h1"} fontSize={"2xl"} fontWeight={"bold"}>
            {post.title}
          </Heading>
          <Text fontSize={"sm"} opacity={0.8}>
            {post.title_en}
          </Text>
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
              <AnchorURL href={post.external_url}>{"外部リンク"}</AnchorURL>
            )}
          </HStack>
        )}
      </Stack>
      {imageFiles.map((imageURL) => (
        <BoxImage alt={post.title} src={imageURL} key={imageURL} />
      ))}
      {hasContent && <BoxMarkdown>{post.content}</BoxMarkdown>}
    </Stack>
  )
}
