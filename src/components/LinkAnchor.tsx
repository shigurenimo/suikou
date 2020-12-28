import clsx from 'clsx'
import Link from 'next/link'
import { FunctionComponent } from 'react'

type Props = {
  href: string
  active: boolean
}

export const LinkAnchor: FunctionComponent<Props> = ({
  active,
  children,
  href,
}) => {
  return (
    <Link href={href}>
      <a className={clsx(active && 'text-blue-700')}>{children}</a>
    </Link>
  )
}
