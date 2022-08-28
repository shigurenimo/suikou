import { promises as fs } from "fs"
import { join } from "path"
import matter from "gray-matter"

export const readMdFile = async <T extends { type: string }>(
  collectionName: string,
  fileName: string,
) => {
  const filePath = join(
    "public",
    "collections",
    collectionName,
    `${fileName}.md`,
  )

  const stat = await fs.stat(filePath)

  if (!stat.isFile()) {
    throw new Error("not found")
  }

  const id = fileName

  const text = await fs.readFile(filePath, "utf-8")

  const file = matter(text)

  const data = file.data as T

  const content = file.content.trim() as string

  return { ...data, content, id, type: collectionName }
}
