import { FunctionComponent } from 'react'

export const Header: FunctionComponent = () => {
  return (
    <header className={'p-4 md:p-8'}>
      <a className={'font-bold'}>{'ホーム'}</a>
      <a className={'ml-4 font-bold'}>{'メディア'}</a>
      <a className={'ml-4 font-bold'}>{'授業'}</a>
      <a className={'ml-4 font-bold'}>{'フィードバック'}</a>
    </header>
  )
}
