import Link from 'next/link'
import { FunctionComponent } from 'react'
import { Footer } from './Footer'

export const Aside: FunctionComponent = () => {
  return (
    <aside className={'w-full max-w-xs hidden md:block'}>
      <div className={'fixed w-full max-w-xs'}>
        <ul>
          <li>
            <Link href={'/'}>
              <a>{'ホーム'}</a>
            </Link>
          </li>
          <li className={'mt-4'}>
            <Link href={'/about'}>
              <a>{'研究室について'}</a>
            </Link>
          </li>
          <li className={'mt-4'}>
            <Link href={'/members'}>
              <a>{'私について'}</a>
            </Link>
          </li>
          <li className={'mt-4'}>
            <Link href={'/news'}>
              <a>{'お知らせ'}</a>
            </Link>
          </li>
          <li className={'mt-4'}>
            <Link href={'/articles'}>
              <a>{'メディア掲載'}</a>
            </Link>
          </li>
          <li className={'mt-4'}>
            <Link href={'/books'}>
              <a>{'書籍'}</a>
            </Link>
          </li>
          <li className={'mt-4'}>
            <Link href={'/classes'}>
              <a>{'eラーニング'}</a>
            </Link>
          </li>
        </ul>
        <Footer />
      </div>
    </aside>
  )
}
