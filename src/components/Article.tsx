import { FunctionComponent } from 'react'

export const Article: FunctionComponent = ({ children }) => {
  return <article className={'max-w-screen-xl w-full'}>{children}</article>
}
