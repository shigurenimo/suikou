import { FunctionComponent } from 'react'
import ReactMarkdown from 'react-markdown'
import { ClassPost } from '../types/classPost'
import { DivisionImage } from './DivisionImage'

type Props = { post: ClassPost }

export const CardClassPost: FunctionComponent<Props> = ({ post }) => {
  return (
    <div className={'rounded-lg p-4 border border-gray-400'}>
      <h1 className={'font-bold text-lg'}>{post.title}</h1>
      <h2 className={'pt-1 text-sm'}>{post.title_en}</h2>
      <p className={'text-sm pt-2'}>
        {post.date.replace('/', '月').replace('/', '日')}
      </p>
      {post.image && <DivisionImage alt={post.title} src={post.image} />}
      {post.content && (
        <ReactMarkdown
          className={'markdown whitespace-pre-wrap'}
          source={post.content}
        />
      )}
    </div>
  )
}
