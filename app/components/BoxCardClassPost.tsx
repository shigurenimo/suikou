import { Heading, Stack, Text } from "@chakra-ui/react"
import React, { FC } from "react"
import { BoxMarkdown } from "app/components/BoxMarkdown"
import { ClassPost } from "app/types/classPost"

type Props = { post: ClassPost }

export const BoxCardClassPost: FC<Props> = ({ post }) => {
  const hasDate = !post.date.includes("1970")

  const hasContent = post.content.length > 0

  return (
    <Stack rounded={"md"} bg={"gray.700"} spacing={4} boxShadow={"lg"} p={4}>
      <Stack bg={"gray.600"} p={3} rounded={"md"} boxShadow={"lg"} spacing={4}>
        <Stack spacing={1}>
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
      </Stack>
      {hasContent && <BoxMarkdown>{post.content}</BoxMarkdown>}
    </Stack>
  )
}
