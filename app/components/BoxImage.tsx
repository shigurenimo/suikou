import { Box, Img } from "@chakra-ui/react"
import { FC } from "react"

type Props = {
  alt: string
  src: string
}

export const BoxImage: FC<Props> = (props) => {
  return (
    <Box>
      <Img
        maxW={"md"}
        borderWidth={1}
        rounded={"lg"}
        alt={props.alt}
        src={props.src}
        w={"100%"}
      />
    </Box>
  )
}
