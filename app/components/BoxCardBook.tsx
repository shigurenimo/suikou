import { Box, HStack, Img, Stack, Text } from "@chakra-ui/react"
import React, { FC } from "react"
import { ButtonAnchorURL } from "app/components/ButtonAnchorURL"
import { Book } from "app/types/book"

type Props = { book: Book }

export const BoxCardBook: FC<Props> = ({ book }) => {
  return (
    <HStack rounded={"md"} p={4} bg={"gray.700"} spacing={4}>
      <Img w={32} rounded={"lg"} alt={book.title} src={book.image} />
      <Stack pl={4}>
        <Stack spacing={1}>
          <Text fontSize={"lg"} fontWeight={"bold"}>
            {book.title}
          </Text>
          <Text fontSize={"sm"}>{book.title_en}</Text>
        </Stack>
        <Box pt={2}>
          <ButtonAnchorURL href={book.url}>{"購入はこちら"}</ButtonAnchorURL>
        </Box>
      </Stack>
    </HStack>
  )
}
