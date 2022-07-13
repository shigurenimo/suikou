import { Box, Img } from "@chakra-ui/react"
import { FunctionComponent } from "react"

type Props = {
  alt: string
  src: string
}

export const BoxImage: FunctionComponent<Props> = (props) => {
  return (
    <Box>
      <Img
        maxW={"md"}
        borderWidth={1}
        rounded={"lg"}
        alt={props.alt}
        src={props.src}
      />
    </Box>
  )
}
