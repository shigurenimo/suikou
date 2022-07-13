import { Stack, Text } from "@chakra-ui/react"
import React, { FunctionComponent } from "react"

export const Footer: FunctionComponent = () => {
  return (
    <Stack>
      <Text fontSize={"sm"} fontWeight={"bold"}>
        {"© 2016 - 2021 suikou.io"}
      </Text>
    </Stack>
  )
}
