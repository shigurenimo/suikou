import { Stack } from "@chakra-ui/react"
import React, { FunctionComponent } from "react"

export const Article: FunctionComponent = ({ children }) => {
  return (
    <Stack maxW={"1280px"} w={"full"} spacing={6}>
      {children}
    </Stack>
  )
}
