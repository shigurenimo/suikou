import { Heading } from "@chakra-ui/react"
import React, { FC, ReactNode } from "react"

type Props = {
  children: ReactNode
}

export const HeadingPage: FC<Props> = (props) => {
  return (
    <Heading fontWeight={"bold"} fontSize={"xl"}>
      {props.children}
    </Heading>
  )
}
