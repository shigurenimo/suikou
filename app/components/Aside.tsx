import { Stack } from "@chakra-ui/react"
import { useRouter } from "next/router"
import React, { FC } from "react"
import { Footer } from "app/components/Footer"
import { LinkAnchor } from "app/components/LinkAnchor"

export const Aside: FC = () => {
  const { pathname } = useRouter()

  return (
    <Stack
      as={"aside"}
      position={"sticky"}
      top={0}
      display={{ base: "none", md: "block" }}
      minW={"14rem"}
      h={"100%"}
      py={{ base: 4, md: 6 }}
      pl={{ base: 4, md: 6 }}
    >
      <Stack pb={4} fontWeight={"bold"}>
        <LinkAnchor active={pathname === "/"} href={"/"}>
          {"ホーム"}
        </LinkAnchor>
      </Stack>
      <Stack paddingBottom={"4"} fontWeight={"bold"}>
        <LinkAnchor active={pathname === "/nakaza"} href={"/nakaza"}>
          {"仲座 栄三"}
        </LinkAnchor>
      </Stack>
      <Stack paddingBottom={"4"} fontWeight={"bold"}>
        <LinkAnchor active={pathname === "/about"} href={"/about"}>
          {"水圏工学研究室"}
        </LinkAnchor>
      </Stack>
      <Stack paddingBottom={"4"} fontWeight={"bold"}>
        <LinkAnchor active={pathname === "/access"} href={"/access"}>
          {"アクセス"}
        </LinkAnchor>
      </Stack>
      <Stack paddingBottom={"4"} fontWeight={"bold"}>
        <LinkAnchor active={pathname.startsWith("/posts")} href={"/posts"}>
          {"お知らせ"}
        </LinkAnchor>
      </Stack>
      <Stack paddingBottom={"4"} fontWeight={"bold"}>
        <LinkAnchor
          active={pathname.startsWith("/articles")}
          href={"/articles"}
        >
          {"メディア掲載"}
        </LinkAnchor>
      </Stack>
      <Stack paddingBottom={"4"} fontWeight={"bold"}>
        <LinkAnchor active={pathname.startsWith("/classes")} href={"/classes"}>
          {"eラーニング"}
        </LinkAnchor>
      </Stack>
      <Stack paddingBottom={"4"} fontWeight={"bold"}>
        <LinkAnchor
          active={pathname.startsWith("/feedbacks")}
          href={"/feedbacks"}
        >
          {"授業の感想"}
        </LinkAnchor>
      </Stack>
      <Stack paddingBottom={"4"} fontWeight={"bold"}>
        <LinkAnchor active={pathname.startsWith("/surveys")} href={"/surveys"}>
          {"東北地方大津波災害調査"}
        </LinkAnchor>
      </Stack>
      <Stack paddingBottom={"4"} fontWeight={"bold"}>
        <LinkAnchor active={pathname.startsWith("/books")} href={"/books"}>
          {"書籍"}
        </LinkAnchor>
      </Stack>
      <Footer />
    </Stack>
  )
}
