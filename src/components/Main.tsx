import { Stack } from "@chakra-ui/react"
import React, { FC, ReactNode } from "react"

type Props = {
  children: ReactNode
}

export const Main: FC<Props> = (props) => {
  return (
    <Stack w={"full"} p={{ base: 4, md: 6 }} spacing={{ base: 4, md: 6 }}>
      {props.children}
    </Stack>
  )
}
