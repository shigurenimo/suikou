import { Box, Heading, Stack, Text } from "@chakra-ui/react"
import React, { FunctionComponent } from "react"
import { ClassPost } from "../../types/classPost"
import { BoxMarkdown } from "./BoxMarkdown"

type Props = { post: ClassPost }

export const CardClassPost: FunctionComponent<Props> = ({ post }) => {
  const hasDate = !post.date.includes("1970")

  return (
    <Stack rounded={"md"} p={6} bg={"gray.100"} spacing={4}>
      <Stack>
        <Heading as={"h1"} fontSize={"lg"} fontWeight={"bold"}>
          {post.title}
        </Heading>
        <Text fontSize={"sm"}>{post.title_en}</Text>
        {hasDate && (
          <Text fontSize={"sm"}>
            {post.date.replace("/", "月").replace("/", "日")}
          </Text>
        )}
      </Stack>
      {post.content && (
        <Box bg={"gray.50"} p={4} rounded={"md"}>
          <BoxMarkdown>{post.content}</BoxMarkdown>
        </Box>
      )}
    </Stack>
  )
}
