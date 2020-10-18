import { Content } from './content'

export type NewsPost = Content & {
  date: string
  title_en: string
  title: string
  image: string | null
  external_url: string | null
}
