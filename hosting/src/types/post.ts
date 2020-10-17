import { Content } from './content'

export type Post = Content & {
  date: string
  title_en: string
  title: string
  image: string | null
  external_url: string | null
}
