export const toDateText = (text: string) => {
  return text.replace("/", "年").replace("/", "月") + "日"
}
