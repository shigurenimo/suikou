import { Content } from './content'

export type NakazaPage = Content & {
  title: string
  name: string
  name_en: string
  description_en: string
  description: string
  external_url: string
  email: string
  histories: history[]
}

type history = {
  text: string
  text_en: string
  year: number
}
