import { Button } from "@chakra-ui/react"
import React, { FC, ReactNode } from "react"

type Props = {
  href: string
  children: ReactNode
}

export const AnchorURL: FC<Props> = (props) => {
  return (
    <Button
      as={"a"}
      fontWeight={"bold"}
      rounded={"md"}
      target={"_blank"}
      rel={"noreferrer"}
      href={props.href}
      colorScheme={"blue"}
      size={"sm"}
      variant={"solid"}
    >
      {props.children}
    </Button>
  )
}
