import { Text } from '@chakra-ui/react'
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
      <Text
        as={'a'}
        cursor={'pointer'}
        textColor={active ? 'purple.500' : null}
      >
        {children}
      </Text>
    </Link>
  )
}
