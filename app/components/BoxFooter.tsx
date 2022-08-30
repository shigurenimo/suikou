import { Stack, Text } from "@chakra-ui/react"
import React, { FC } from "react"

export const BoxFooter: FC = () => {
  return (
    <Stack>
      <Text fontSize={"sm"} fontWeight={"bold"}>
        {"© 2016 - 2022 suikou.io"}
      </Text>
    </Stack>
  )
}
