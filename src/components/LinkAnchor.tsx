import { Text } from "@chakra-ui/react"
import Link from "next/link"
import { FC, ReactNode } from "react"

type Props = {
  href: string
  active: boolean
  children: ReactNode
}

export const LinkAnchor: FC<Props> = (props) => {
  return (
    <Link href={props.href}>
      <Text
        as={"a"}
        cursor={"pointer"}
        textColor={props.active ? "purple.500" : null}
      >
        {props.children}
      </Text>
    </Link>
  )
}
