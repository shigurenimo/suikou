import { FC } from "react";
import { BoxMarkdown } from "@/app/components/BoxMarkdown";
import { Card, CardContent, CardDescription, CardHeader } from "@/app/components/ui/card";
import { ClassPost } from "@/app/types/classPost";
import { toDateText } from "@/app/utils/toDateText";

type Props = { post: ClassPost };

export const BoxCardClassPost: FC<Props> = ({ post }) => (
  <Card className="rounded-md text-base shadow-lg">
    <CardHeader>
      <h2 className="text-lg font-bold">{post.title}</h2>
      {post.title_en && <CardDescription className="text-sm">{post.title_en}</CardDescription>}
      {post.date && !post.date.startsWith("1970/") && (
        <p className="text-sm text-muted-foreground">{toDateText(post.date)}</p>
      )}
    </CardHeader>
    {post.content && (
      <CardContent>
        <BoxMarkdown>{post.content}</BoxMarkdown>
      </CardContent>
    )}
  </Card>
);
