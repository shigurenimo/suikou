import { Box, HStack, Img, Text } from "@chakra-ui/react"
import React, { FC } from "react"
import { AnchorURL } from "app/components/AnchorURL"
import { Book } from "app/types/book"

type Props = { book: Book }

export const CardBook: FC<Props> = ({ book }) => {
  return (
    <HStack rounded={"md"} p={6} bg={"gray.700"} spacing={4}>
      <Img w={32} rounded={"lg"} alt={book.title} src={book.image} />
      <Box pl={4}>
        <Text fontSize={"lg"} fontWeight={"bold"}>
          {book.title}
        </Text>
        <Text fontSize={"sm"}>{book.title_en}</Text>
        <Box pt={2}>
          <AnchorURL href={book.url}>{"購入はこちら"}</AnchorURL>
        </Box>
      </Box>
    </HStack>
  )
}
