import { FunctionComponent } from 'react'
import { Book } from '../types/book'
import { AnchorURL } from './AnchorURL'
import { Img, Text } from '@chakra-ui/react'

type Props = { book: Book }

export const CardBook: FunctionComponent<Props> = ({ book }) => {
  return (
    <div className={'rounded-lg p-4 border border-gray-400 flex bg-gray-50'}>
      <Img w={32} rounded={'lg'} alt={book.title} src={book.image} />
      <div className={'pl-4'}>
        <Text fontSize={'lg'} fontWeight={'bold'}>
          {book.title}
        </Text>
        <Text fontSize={'sm'}>{book.title_en}</Text>
        <div className={'pt-2'}>
          <AnchorURL href={book.url}>{'購入はこちら'}</AnchorURL>
        </div>
      </div>
    </div>
  )
}
