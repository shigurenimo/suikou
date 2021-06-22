import React, { FunctionComponent } from 'react'
import ReactMarkdown from 'react-markdown'
import { NewsPost } from '../types/newsPost'
import { toDateText } from '../utils/toDateText'
import { AnchorURL } from './AnchorURL'
import { DivisionImage } from './DivisionImage'
import { Box, HStack, Text } from '@chakra-ui/react'

type Props = { post: NewsPost }

export const CardPost: FunctionComponent<Props> = ({ post }) => {
  const hasPdfC = post.image && post.image.includes('pdf')

  const hasPdfD = post.image_a && post.image_a.includes('pdf')

  const hasPdfA = post.file && post.file.includes('pdf')

  const hasPdfB = post.file_a && post.file_a.includes('pdf')

  const hasPdf = hasPdfA || hasPdfB || hasPdfC || hasPdfD

  const hasPNG =
    post.image && (post.image.includes('png') || post.image.includes('jpg'))

  const hasURL = !!post.external_url

  const hasActions = hasPdf || hasURL

  return (
    <Box rounded={'lg'} p={8} bg={'gray.100'}>
      <Text fontSize={'lg'} fontWeight={'bold'}>
        {post.title}
      </Text>
      <Text pt={1} fontSize={'sm'}>
        {post.title_en}
      </Text>
      <Text fontSize={'sm'} pt={2}>
        {toDateText(post.date)}
      </Text>
      {hasActions && (
        <HStack pt={2}>
          {hasPdfA && (
            <AnchorURL href={post.file.replace('public/', '')}>
              {'PDFファイル'}
            </AnchorURL>
          )}
          {hasPdfB && (
            <AnchorURL href={post.file_a.replace('public/', '')}>
              {'PDFファイル'}
            </AnchorURL>
          )}
          {hasPdfC && (
            <AnchorURL href={post.image.replace('public/', '')}>
              {'PDFファイル'}
            </AnchorURL>
          )}
          {hasPdfD && (
            <AnchorURL href={post.image_a.replace('public/', '')}>
              {'PDFファイル'}
            </AnchorURL>
          )}
          {hasURL && (
            <AnchorURL hasPadding={hasPdf} href={post.external_url}>
              {'外部リンク'}
            </AnchorURL>
          )}
        </HStack>
      )}
      {hasPNG && <DivisionImage alt={post.title} src={post.image} />}
      {post.content && (
        <Box className={'markdown'} whiteSpace={'pre-wrap'} as={ReactMarkdown}>
          {post.content}
        </Box>
      )}
    </Box>
  )
}
