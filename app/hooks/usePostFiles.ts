export const usePostFiles = (
  files: (string | null)[],
  extensions: string[],
) => {
  return files
    .filter((file) => file)
    .filter((file) => {
      return (
        extensions.findIndex((extension) => file.endsWith(extension)) !== -1
      )
    })
}
