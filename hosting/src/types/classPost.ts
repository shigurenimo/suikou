import { Content } from './content'

export type ClassPost = Content & {
  date: string
  title_en: string
  title: string
  image: string | null
  url: string | null
}
