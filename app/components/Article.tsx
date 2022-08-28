import { Stack } from "@chakra-ui/react"
import React, { FC, ReactNode } from "react"

type Props = {
  children: ReactNode
}

export const Article: FC<Props> = (props) => {
  return (
    <Stack maxW={"1280px"} w={"full"} spacing={6} alignItems={"flex-start"}>
      {props.children}
    </Stack>
  )
}
