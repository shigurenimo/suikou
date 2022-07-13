import { Stack } from "@chakra-ui/react"
import React, { FunctionComponent } from "react"

export const Main: FunctionComponent = ({ children }) => {
  return (
    <Stack w={"full"} p={{ base: 4, md: 6 }} spacing={{ base: 4, md: 6 }}>
      {children}
    </Stack>
  )
}
