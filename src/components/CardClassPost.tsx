import React, { FunctionComponent } from 'react'
import ReactMarkdown from 'react-markdown'
import { ClassPost } from '../types/classPost'
import { Box, Text } from '@chakra-ui/react'

type Props = { post: ClassPost }

export const CardClassPost: FunctionComponent<Props> = ({ post }) => {
  const hasDate = !post.date.includes('1970')

  return (
    <Box
      rounded={'lg'}
      p={4}
      borderWidth={1}
      borderColor={'gray.400'}
      bg={'gray.50'}
    >
      <Text fontSize={'lg'} fontWeight={'bold'}>
        {post.title}
      </Text>
      <Text pt={2} fontSize={'sm'}>
        {post.title_en}
      </Text>
      {hasDate && (
        <Text fontSize={'sm'} pt={2}>
          {post.date.replace('/', '月').replace('/', '日')}
        </Text>
      )}
      {post.content && (
        <Box
          className={'markdown'}
          whiteSpace={'pre-wrap'}
          pt={2}
          as={ReactMarkdown}
        >
          {post.content}
        </Box>
      )}
    </Box>
  )
}
