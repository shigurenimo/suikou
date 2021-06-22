import { FunctionComponent } from 'react'
import { Text } from '@chakra-ui/react'

export const Footer: FunctionComponent = () => {
  return (
    <Text mt={4}>
      <Text fontSize={'sm'} fontWeight={'bold'}>
        {'© 2016 - 2021 suikou.io'}
      </Text>
    </Text>
  )
}
