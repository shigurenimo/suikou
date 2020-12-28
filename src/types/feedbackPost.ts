import { Content } from './content'

export type FeedbackPost = Content & {
  date: string
  title: string
}
