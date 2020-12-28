import { FunctionComponent } from 'react'
import { Book } from '../types/book'
import { AnchorURL } from './AnchorURL'

type Props = { book: Book }

export const CardBook: FunctionComponent<Props> = ({ book }) => {
  return (
    <div className={'rounded-lg p-4 border border-gray-400 flex bg-gray-50'}>
      <img
        alt={book.title}
        className={'w-32 rounded-lg border'}
        src={book.image}
      />
      <div className={'pl-4'}>
        <h1 className={'font-bold text-lg'}>{book.title}</h1>
        <h2 className={'pt-1 text-sm'}>{book.title_en}</h2>
        <div className={'pt-2'}>
          <AnchorURL href={book.url}>{'購入はこちら'}</AnchorURL>
        </div>
      </div>
    </div>
  )
}
