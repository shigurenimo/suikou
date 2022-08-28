import { Box, Heading, HStack, Stack, Text } from "@chakra-ui/react"
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

  return (
    <Stack rounded={"md"} p={6} bg={"gray.100"} spacing={4}>
      <Stack>
        <Heading as={"h1"} fontSize={"xl"} fontWeight={"bold"}>
          {post.title}
        </Heading>
        <Text fontSize={"sm"}>{post.title_en}</Text>
        <Text fontSize={"sm"}>{toDateText(post.date)}</Text>
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
      {imageFiles.map((imageURL) => (
        <BoxImage alt={post.title} src={imageURL} key={imageURL} />
      ))}
      {post.content && (
        <Box bg={"gray.50"} p={4} rounded={"md"}>
          <BoxMarkdown>{post.content}</BoxMarkdown>
        </Box>
      )}
    </Stack>
  )
}
