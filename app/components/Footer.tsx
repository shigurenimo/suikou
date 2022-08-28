import { Stack, Text } from "@chakra-ui/react"
import React, { FC } from "react"

export const Footer: FC = () => {
  return (
    <Stack>
      <Text fontSize={"sm"} fontWeight={"bold"}>
        {"© 2016 - 2021 suikou.io"}
      </Text>
    </Stack>
  )
}
