import clsx from 'clsx'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { FunctionComponent } from 'react'
import { List } from '../../layout/List'
import { Main } from '../../layout/Main'
import { CardBook } from '../../post/CardBook'
import { Book } from '../../types/book'

type Props = { books: Book[] }

const ArticlesIndex: FunctionComponent<Props> = ({ books }) => {
  return (
    <Main>
      <Head>
        <title>{'書籍'}</title>
      </Head>
      <h1 className={'font-bold text-xl'}>{'書籍'}</h1>
      <List>
        {books.map((book, i) => (
          <li className={clsx(i !== 0 && 'pt-4 md:pt-8')} key={book.id}>
            <CardBook book={book} />
          </li>
        ))}
      </List>
    </Main>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { readContents } = await import('../../helpers/readContents')

  const books = await readContents<Book>('books')

  return { props: { books } }
}

export default ArticlesIndex
