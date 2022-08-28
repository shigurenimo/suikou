import { promises as fs } from "fs"
import { join } from "path"
import matter from "gray-matter"

export const readMdFiles = async <T extends { type: string }>(
  collectionName: string,
) => {
  const fileNames = await fs.readdir(
    join("public", "collections", collectionName),
  )

  const contents: T[] = []

  for (const fileName of fileNames) {
    const filePath = join("public", "collections", collectionName, fileName)

    const stat = await fs.stat(filePath)

    if (!stat.isFile()) continue

    if (!fileName.endsWith(".md")) continue

    const id = fileName.replace(".md", "")

    const text = await fs.readFile(filePath, "utf-8")

    const file = matter(text)

    const data = file.data as T

    const content = file.content.trim() as string

    contents.push({ ...data, content, id, type: collectionName })
  }

  return contents
}
