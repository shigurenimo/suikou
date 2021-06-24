import { Content } from './content'

export type NewsPost = Content & {
  date: string
  title_en: string
  title: string
  external_url: string | null
  file: string | null
  file_a: string | null
  file_b: string | null
  file_c: string | null
}
