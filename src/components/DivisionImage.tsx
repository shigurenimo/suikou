import { FunctionComponent } from 'react'
import { Box, Img } from '@chakra-ui/react'

type Props = {
  alt: string
  src: string
}

export const DivisionImage: FunctionComponent<Props> = ({ alt, src }) => {
  return (
    <Box pt={2}>
      <Img maxWidth={'md'} borderWidth={1} rounded={'lg'} alt={alt} src={src} />
    </Box>
  )
}
