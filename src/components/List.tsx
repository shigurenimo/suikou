import { FunctionComponent } from 'react'

export const List: FunctionComponent = ({ children }) => {
  return <ul className={'max-w-screen-xl w-full pt-4 md:pt-8'}>{children}</ul>
}
