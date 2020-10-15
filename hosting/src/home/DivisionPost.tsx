import clsx from 'clsx'
import { FunctionComponent } from 'react'
import { NewsPost } from '../types/newsPost'

type Props = { post: NewsPost }

export const DivisionPost: FunctionComponent<Props> = ({ post }) => {
  const hasPDF = post.image && post.image.includes('pdf')

  const hasPNG =
    post.image && (post.image.includes('png') || post.image.includes('jpg'))

  const hasExternalURL = post.external_url !== null

  const hasActions = hasPDF || hasExternalURL

  return (
    <div className={'bg-gray-100 rounded-lg p-4'}>
      <p className={'text-sm'}>
        {post.date.replace('/', '月').replace('/', '日')}
      </p>
      <h2 className={'pt-1'}>{post.title_en}</h2>
      <h1 className={'font-bold text-lg pt-1'}>{post.title}</h1>
      {hasActions && (
        <div className={'pt-4'}>
          {hasPDF && (
            <a
              className={'rounded text-blue-700 font-bold'}
              target={'_blank'}
              rel={'noreferrer'}
              href={post.image}
            >
              {'PDFファイル'}
            </a>
          )}
          {hasExternalURL && (
            <a
              className={clsx(
                'rounded text-blue-700 font-bold',
                hasPDF && 'ml-4'
              )}
              target={'_blank'}
              rel={'noreferrer'}
              href={post.external_url}
            >
              {'詳細ページ'}
            </a>
          )}
        </div>
      )}
      {hasPNG && (
        <div className={'pt-4'}>
          <img className={'rounded border'} alt={post.id} src={post.image} />
        </div>
      )}
      {post.content && (
        <p className={'whitespace-pre-wrap pt-4'}>{post.content}</p>
      )}
    </div>
  )
}
