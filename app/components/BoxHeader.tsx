import { Stack, Text } from "@chakra-ui/react"
import React, { FC } from "react"

export const BoxHeader: FC = () => {
  return (
    <Stack p={{ base: 4, md: 8 }}>
      <Text fontSize={"bold"} as={"a"}>
        {"ホーム"}
      </Text>
      <Text ml={4} as={"a"} fontWeight={"bold"}>
        {"メディア"}
      </Text>
      <Text ml={4} as={"a"} fontWeight={"bold"}>
        {"授業"}
      </Text>
      <Text ml={4} as={"a"} fontWeight={"bold"}>
        {"フィードバック"}
      </Text>
    </Stack>
  )
}
