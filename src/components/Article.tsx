import { FunctionComponent } from 'react'
import { Box } from '@chakra-ui/react'

export const Article: FunctionComponent = ({ children }) => {
  return (
    <Box maxWidth={'1280px'} w={'full'}>
      {children}
    </Box>
  )
}
