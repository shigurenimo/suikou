import { FunctionComponent } from 'react'

export const HeadingPage: FunctionComponent = ({ children }) => {
  return <h1 className={'font-bold text-xl'}>{children}</h1>
}
