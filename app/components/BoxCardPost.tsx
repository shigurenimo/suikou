import { Box, Heading, HStack, IconButton, Stack, Text } from "@chakra-ui/react"
import React, { FC } from "react"
import { ButtonAnchorURL } from "app/components/ButtonAnchorURL"
import { BoxImage } from "app/components/BoxImage"
import { BoxMarkdown } from "app/components/BoxMarkdown"
import { usePostFiles } from "app/hooks/usePostFiles"
import { NewsPost } from "app/types/newsPost"
import { toDateText } from "app/utils/toDateText"
import { BiLinkExternal } from "react-icons/bi"

type Props = {
  post: NewsPost
  onOpen?(): void
}

export const BoxCardPost: FC<Props> = (props) => {
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

  const hasContent = props.post.content.length > 0

  const hasLink = typeof props.onOpen !== "undefined"

  return (
    <Stack rounded={"md"} bg={"gray.700"} spacing={4} boxShadow={"lg"} p={4}>
      <Box
        bg={"gray.600"}
        p={3}
        boxShadow={"lg"}
        overflow={"hidden"}
        rounded={"md"}
      >
        <Stack direction={"row"} spacing={0} justifyContent={"space-between"}>
          <Stack>
            <Stack spacing={1}>
              <Text fontSize={"sm"} fontWeight={"bold"}>
                {toDateText(props.post.date)}
              </Text>
              <Heading as={"h1"} fontSize={"2xl"} fontWeight={"bold"}>
                {props.post.title}
              </Heading>
              <Text fontSize={"sm"} opacity={0.8}>
                {props.post.title_en}
              </Text>
            </Stack>
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
          </Stack>
          {hasLink && (
            <Stack>
              <IconButton
                aria-label={"リンクを開く"}
                icon={<BiLinkExternal />}
                onClick={props.onOpen}
              />
            </Stack>
          )}
        </Stack>
      </Box>
      {imageFiles.map((imageURL) => (
        <BoxImage alt={props.post.title} src={imageURL} key={imageURL} />
      ))}
      {hasContent && <BoxMarkdown>{props.post.content}</BoxMarkdown>}
    </Stack>
  )
}
