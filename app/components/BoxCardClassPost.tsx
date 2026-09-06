import { FC } from "react";
import { BoxMarkdown } from "@/app/components/BoxMarkdown";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { ClassPost } from "@/app/types/classPost";
import { toDateText } from "@/app/utils/toDateText";

type Props = { post: ClassPost };

export const BoxCardClassPost: FC<Props> = ({ post }) => (
  <Card>
    <CardHeader>
      <CardTitle>
        <h2>{post.title}</h2>
      </CardTitle>
      {post.title_en && <CardDescription>{post.title_en}</CardDescription>}
      {post.date && !post.date.startsWith("1970/") && (
        <CardDescription>{toDateText(post.date)}</CardDescription>
      )}
    </CardHeader>
    {post.content && (
      <CardContent>
        <BoxMarkdown>{post.content}</BoxMarkdown>
      </CardContent>
    )}
  </Card>
);
