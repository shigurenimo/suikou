import { Content } from './content'

export type ProjectPage = Content & {
  title: string
  projects: Project[]
}

type Project = {
  title: string
}
