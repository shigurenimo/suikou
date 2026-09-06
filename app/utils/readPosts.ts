import { NewsPost } from "@/app/types/newsPost";
import { readMdFiles } from "@/app/utils/readMdFiles";

export const readPosts = async () => {
  const [news, media] = await Promise.all([
    readMdFiles<NewsPost>("news-posts"),
    readMdFiles<NewsPost>("media-posts"),
  ]);
  return [...news, ...media];
};
