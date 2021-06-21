import clsx from 'clsx'
import React, { FunctionComponent } from 'react'
import { Box, Button, Link } from '@chakra-ui/react'

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
    <Button
      as={'a'}
      fontWeight={'bold'}
      textColor={'blue'}
      rounded={'md'}
      target={'_blank'}
      rel={'noreferrer'}
      href={href}
    >
      {children}
    </Button>
  )
}
