import { Stack } from "@chakra-ui/react"
import Head from "next/head"
import React, { FC, ReactNode } from "react"

type Props = {
  children: ReactNode
  title?: string
  description?: string
}

export const BoxMain: FC<Props> = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta content={props.description} name={"description"} />
      </Head>
      <Stack w={"full"} p={{ base: 4, md: 6 }} spacing={{ base: 4, md: 6 }}>
        {props.children}
      </Stack>
    </>
  )
}
