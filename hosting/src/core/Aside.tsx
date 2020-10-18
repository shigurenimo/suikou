import { useRouter } from 'next/router'
import { FunctionComponent } from 'react'
import { Footer } from './Footer'
import { LinkAnchor } from './LinkAnchor'

export const Aside: FunctionComponent = () => {
  const { pathname } = useRouter()

  console.log(pathname)

  return (
    <aside className={'w-full max-w-xs hidden md:block'}>
      <div className={'fixed w-full max-w-xs'}>
        <ul>
          <li>
            <LinkAnchor active={pathname === '/'} href={'/'}>
              {'ホーム'}
            </LinkAnchor>
          </li>
          <li className={'mt-4'}>
            <LinkAnchor active={pathname === '/nakaza'} href={'/nakaza'}>
              {'仲座 栄三'}
            </LinkAnchor>
          </li>
          <li className={'mt-4'}>
            <LinkAnchor active={pathname === '/about'} href={'/about'}>
              {'水圏工学研究室'}
            </LinkAnchor>
          </li>
          <li className={'mt-4'}>
            <LinkAnchor active={pathname === '/access'} href={'/access'}>
              {'アクセス'}
            </LinkAnchor>
          </li>
          <li className={'mt-4'}>
            <LinkAnchor active={pathname.startsWith('/news')} href={'/news'}>
              {'お知らせ'}
            </LinkAnchor>
          </li>
          <li className={'mt-4'}>
            <LinkAnchor
              active={pathname.startsWith('/articles')}
              href={'/articles'}
            >
              {'メディア掲載'}
            </LinkAnchor>
          </li>
          <li className={'mt-4'}>
            <LinkAnchor
              active={pathname.startsWith('/classes')}
              href={'/classes'}
            >
              {'eラーニング'}
            </LinkAnchor>
          </li>
          <li className={'mt-4'}>
            <LinkAnchor
              active={pathname.startsWith('/feedbacks')}
              href={'/feedbacks'}
            >
              {'授業の感想'}
            </LinkAnchor>
          </li>
          <li className={'mt-4'}>
            <LinkAnchor
              active={pathname.startsWith('/surveys')}
              href={'/surveys'}
            >
              {'東北地方大津波災害調査'}
            </LinkAnchor>
          </li>
          <li className={'mt-4'}>
            <LinkAnchor active={pathname.startsWith('/books')} href={'/books'}>
              {'書籍'}
            </LinkAnchor>
          </li>
        </ul>
        <Footer />
      </div>
    </aside>
  )
}
