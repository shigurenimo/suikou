import { Heading } from "@chakra-ui/react"
import React, { FunctionComponent } from "react"

export const HeadingPage: FunctionComponent = ({ children }) => {
  return (
    <Heading fontWeight={"bold"} fontSize={"xl"}>
      {children}
    </Heading>
  )
}
