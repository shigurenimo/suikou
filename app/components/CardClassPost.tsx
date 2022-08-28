import { Box, Heading, Stack, Text } from "@chakra-ui/react"
import React, { FC } from "react"
import { BoxMarkdown } from "app/components/BoxMarkdown"
import { ClassPost } from "app/types/classPost"

type Props = { post: ClassPost }

export const CardClassPost: FC<Props> = ({ post }) => {
  const hasDate = !post.date.includes("1970")

  return (
    <Stack rounded={"md"} p={6} bg={"gray.700"} spacing={4}>
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
        <Box bg={"gray.600"} p={4} rounded={"md"}>
          <BoxMarkdown>{post.content}</BoxMarkdown>
        </Box>
      )}
    </Stack>
  )
}
