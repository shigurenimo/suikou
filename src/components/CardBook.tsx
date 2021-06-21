import React, { FunctionComponent } from 'react'
import { Book } from '../types/book'
import { AnchorURL } from './AnchorURL'
import { Img, Text, Box, HStack } from '@chakra-ui/react'

type Props = { book: Book }

export const CardBook: FunctionComponent<Props> = ({ book }) => {
  return (
    <HStack
      rounded={'lg'}
      p={4}
      borderColor={'gray.400'}
      borderWidth={1}
      bg={'gray.50'}
    >
      <Img w={32} rounded={'lg'} alt={book.title} src={book.image} />
      <Box pl={4}>
        <Text fontSize={'lg'} fontWeight={'bold'}>
          {book.title}
        </Text>
        <Text fontSize={'sm'}>{book.title_en}</Text>
        <Box pt={2}>
          <AnchorURL href={book.url}>{'購入はこちら'}</AnchorURL>
        </Box>
      </Box>
    </HStack>
  )
}
