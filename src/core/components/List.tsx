import { Text } from "@chakra-ui/react"
import { FunctionComponent } from "react"

export const List: FunctionComponent = ({ children }) => {
  return (
    <Text maxW={"1280px"} w={"full"} pt={{ base: 4, md: 8 }}>
      {children}
    </Text>
  )
}
