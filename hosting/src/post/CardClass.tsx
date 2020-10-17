import { FunctionComponent } from 'react'
import { ClassPost } from '../types/classPost'

type Props = { classPost: ClassPost }

export const CardBook: FunctionComponent<Props> = ({ classPost }) => {
  return (
    <div className={'rounded-lg p-4 border border-gray-400 flex'}>
      <img
        alt={classPost.title}
        className={'w-32 rounded-lg border'}
        src={classPost.image}
      />
      <div className={'pl-4'}>
        <h1 className={'font-bold text-lg'}>{classPost.title}</h1>
        <h2 className={'pt-1 text-sm'}>{classPost.title_en}</h2>
      </div>
    </div>
  )
}
