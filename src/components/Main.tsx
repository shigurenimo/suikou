import { FunctionComponent } from 'react'
import { Text } from '@chakra-ui/react'

export const Main: FunctionComponent = ({ children }) => {
  return <Text w={'full'}>{children}</Text>
}
