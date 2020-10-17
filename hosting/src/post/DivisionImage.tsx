import { FunctionComponent } from 'react'

type Props = {
  alt: string
  src: string
}

export const DivisionImage: FunctionComponent<Props> = ({ alt, src }) => {
  return (
    <div className={'pt-2'}>
      <img className={'rounded-lg border max-w-md'} alt={alt} src={src} />
    </div>
  )
}
