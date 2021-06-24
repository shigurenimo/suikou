import { FunctionComponent } from 'react'
import { Box, Text } from '@chakra-ui/react'

export const List: FunctionComponent = ({ children }) => {
  return (
    <Text maxW={'1280px'} w={'full'} pt={{ base: 4, md: 8 }}>
      {children}
    </Text>
  )
}
