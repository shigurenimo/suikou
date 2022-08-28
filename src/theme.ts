import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  fonts: {
    body: ["Noto Sans JP", "system-ui", "sans-serif"].join(","),
    heading: ["Noto Sans JP", "system-ui", "sans-serif"].join(","),
    mono: ["Menlo", "monospace"].join(","),
  },
  styles: {
    global: {},
  },
})
