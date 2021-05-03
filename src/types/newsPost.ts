import { Content } from './content'

export type NewsPost = Content & {
  date: string
  title_en: string
  title: string
  image: string | null
  image_a: string | null
  external_url: string | null
  file: string | null
  file_a: string | null
}
