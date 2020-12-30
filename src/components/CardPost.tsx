import { FunctionComponent } from 'react'
import ReactMarkdown from 'react-markdown'
import { NewsPost } from '../types/newsPost'
import { toDateText } from '../utils/toDateText'
import { AnchorURL } from './AnchorURL'
import { DivisionImage } from './DivisionImage'

type Props = { post: NewsPost }

export const CardPost: FunctionComponent<Props> = ({ post }) => {
  const hasPDF = post.image && post.image.includes('pdf')

  const hasPNG =
    post.image && (post.image.includes('png') || post.image.includes('jpg'))

  const hasURL = !!post.external_url

  const hasActions = hasPDF || hasURL

  return (
    <div className={'rounded-lg p-4 border border-gray-400 bg-gray-50'}>
      <h1 className={'font-bold text-lg'}>{post.title}</h1>
      <h2 className={'pt-1 text-sm'}>{post.title_en}</h2>
      <p className={'text-sm pt-2'}>{toDateText(post.date)}</p>
      {hasActions && (
        <div className={'pt-2'}>
          {hasPDF && <AnchorURL href={post.image}>{'PDFファイル'}</AnchorURL>}
          {hasURL && (
            <AnchorURL hasPadding={hasPDF} href={post.external_url}>
              {'詳細ページ'}
            </AnchorURL>
          )}
        </div>
      )}
      {hasPNG && <DivisionImage alt={post.title} src={post.image} />}
      {post.content && (
        <ReactMarkdown
          className={'markdown whitespace-pre-wrap'}
          source={post.content}
        />
      )}
    </div>
  )
}
