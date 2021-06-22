import { FunctionComponent } from 'react'
import { Text } from '@chakra-ui/react'

export const HeadingPage: FunctionComponent = ({ children }) => {
  return (
    <Text fontWeight={'bold'} fontSize={'xl'}>
      {children}
    </Text>
  )
}
