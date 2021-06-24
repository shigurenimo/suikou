import { Stack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { FunctionComponent } from 'react'
import { Footer } from './Footer'
import { LinkAnchor } from './LinkAnchor'

export const Aside: FunctionComponent = () => {
  const { pathname } = useRouter()

  return (
    <Stack
      as={'aside'}
      display={{ base: 'none', md: 'block' }}
      w={'100%'}
      maxW={'xs'}
      p={{ base: 4, md: 6 }}
    >
      <Stack pb={4} fontWeight={'bold'}>
        <LinkAnchor active={pathname === '/'} href={'/'}>
          {'ホーム'}
        </LinkAnchor>
      </Stack>
      <Stack paddingBottom={'4'} fontWeight={'bold'}>
        <LinkAnchor active={pathname === '/nakaza'} href={'/nakaza'}>
          {'仲座 栄三'}
        </LinkAnchor>
      </Stack>
      <Stack paddingBottom={'4'} fontWeight={'bold'}>
        <LinkAnchor active={pathname === '/about'} href={'/about'}>
          {'水圏工学研究室'}
        </LinkAnchor>
      </Stack>
      <Stack paddingBottom={'4'} fontWeight={'bold'}>
        <LinkAnchor active={pathname === '/access'} href={'/access'}>
          {'アクセス'}
        </LinkAnchor>
      </Stack>
      <Stack paddingBottom={'4'} fontWeight={'bold'}>
        <LinkAnchor active={pathname.startsWith('/news')} href={'/news'}>
          {'お知らせ'}
        </LinkAnchor>
      </Stack>
      <Stack paddingBottom={'4'} fontWeight={'bold'}>
        <LinkAnchor
          active={pathname.startsWith('/articles')}
          href={'/articles'}
        >
          {'メディア掲載'}
        </LinkAnchor>
      </Stack>
      <Stack paddingBottom={'4'} fontWeight={'bold'}>
        <LinkAnchor active={pathname.startsWith('/classes')} href={'/classes'}>
          {'eラーニング'}
        </LinkAnchor>
      </Stack>
      <Stack paddingBottom={'4'} fontWeight={'bold'}>
        <LinkAnchor
          active={pathname.startsWith('/feedbacks')}
          href={'/feedbacks'}
        >
          {'授業の感想'}
        </LinkAnchor>
      </Stack>
      <Stack paddingBottom={'4'} fontWeight={'bold'}>
        <LinkAnchor active={pathname.startsWith('/surveys')} href={'/surveys'}>
          {'東北地方大津波災害調査'}
        </LinkAnchor>
      </Stack>
      <Stack paddingBottom={'4'} fontWeight={'bold'}>
        <LinkAnchor active={pathname.startsWith('/books')} href={'/books'}>
          {'書籍'}
        </LinkAnchor>
      </Stack>
      <Footer />
    </Stack>
  )
}
