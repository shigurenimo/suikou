import { Content } from "./content"

export type Book = Content & {
  image: string | null
  title: string
  title_en: string
  url: string
}
