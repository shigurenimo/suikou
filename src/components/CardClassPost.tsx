import { FunctionComponent } from 'react'
import ReactMarkdown from 'react-markdown'
import { ClassPost } from '../types/classPost'

type Props = { post: ClassPost }

export const CardClassPost: FunctionComponent<Props> = ({ post }) => {
  const hasDate = !post.date.includes('1970')

  return (
    <div className={'rounded-lg p-4 border border-gray-400 bg-gray-50'}>
      <h1 className={'font-bold text-lg'}>{post.title}</h1>
      <h2 className={'pt-2 text-sm'}>{post.title_en}</h2>
      {hasDate && (
        <p className={'text-sm pt-2'}>
          {post.date.replace('/', '月').replace('/', '日')}
        </p>
      )}
      {post.content && (
        <ReactMarkdown
          className={'markdown whitespace-pre-wrap pt-2'}
          source={post.content}
        />
      )}
    </div>
  )
}
