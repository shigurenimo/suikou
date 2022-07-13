import { Button } from "@chakra-ui/react"
import React, { FunctionComponent } from "react"

type Props = {
  href: string
}

export const AnchorURL: FunctionComponent<Props> = ({ children, href }) => {
  return (
    <Button
      as={"a"}
      fontWeight={"bold"}
      rounded={"md"}
      target={"_blank"}
      rel={"noreferrer"}
      href={href}
      colorScheme={"purple"}
      size={"sm"}
      variant={"solid"}
    >
      {children}
    </Button>
  )
}
