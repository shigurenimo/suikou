import clsx from 'clsx'
import { FunctionComponent } from 'react'

type Props = {
  href: string
  hasPadding?: boolean
}

export const AnchorURL: FunctionComponent<Props> = ({
  children,
  href,
  hasPadding,
}) => {
  return (
    <a
      className={clsx('rounded text-blue-700 font-bold', hasPadding && 'ml-4')}
      target={'_blank'}
      rel={'noreferrer'}
      href={href}
    >
      {children}
    </a>
  )
}
