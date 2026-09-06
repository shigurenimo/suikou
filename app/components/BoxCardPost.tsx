import { FC } from "react";
import { ExternalLinkIcon } from "lucide-react";
import { ButtonAnchorURL } from "@/app/components/ButtonAnchorURL";
import { BoxImage } from "@/app/components/BoxImage";
import { BoxMarkdown } from "@/app/components/BoxMarkdown";
import { buttonVariants } from "@/app/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardAction,
} from "@/app/components/ui/card";
import { usePostFiles } from "@/app/hooks/usePostFiles";
import { NewsPost } from "@/app/types/newsPost";
import { toDateText } from "@/app/utils/toDateText";

type Props = { post: NewsPost; href?: string; detail?: boolean };

function getExternalUrl(value: string | null | undefined) {
  try {
    const url = new URL(value ?? "");
    return url.protocol === "https:" || url.protocol === "http:" ? url.href : undefined;
  } catch {
    return undefined;
  }
}

export const BoxCardPost: FC<Props> = ({ post, href, detail = false }) => {
  const files = [post.file, post.file_a, post.file_b, post.file_c];
  const imageFiles = usePostFiles(files, [".png", ".jpg", ".jpeg", ".gif", ".webp"]);
  const pdfFiles = usePostFiles(files, [".pdf"]);
  const externalUrl = getExternalUrl(post.external_url);
  const Heading = detail ? "h1" : "h2";

  return (
    <Card className="min-w-0 rounded-md text-base shadow-lg">
      <CardHeader className="gap-3">
        <div className="min-w-0 space-y-1">
          <p className="text-sm font-bold text-muted-foreground">{toDateText(post.date)}</p>
          <Heading className="text-xl font-bold md:text-2xl">{post.title}</Heading>
          {post.title_en && <CardDescription className="text-sm">{post.title_en}</CardDescription>}
        </div>
        {href && (
          <CardAction>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${post.title}の詳細を開く`}
              className={buttonVariants({ size: "icon", variant: "secondary" })}
            >
              <ExternalLinkIcon />
            </a>
          </CardAction>
        )}
      </CardHeader>
      {(pdfFiles.length > 0 || externalUrl || imageFiles.length > 0 || post.content) && (
        <CardContent className="flex min-w-0 flex-col gap-4">
          {(pdfFiles.length > 0 || externalUrl) && (
            <div className="flex flex-wrap items-center gap-3">
              {pdfFiles.map((fileURL, index) => (
                <ButtonAnchorURL href={fileURL} key={fileURL}>
                  {pdfFiles.length > 1 ? `PDFファイル（その${index + 1}）` : "PDFファイル"}
                </ButtonAnchorURL>
              ))}
              {externalUrl && <ButtonAnchorURL href={externalUrl}>外部リンク</ButtonAnchorURL>}
            </div>
          )}
          {imageFiles.map((imageURL) => (
            <BoxImage alt={post.title} src={imageURL} key={imageURL} />
          ))}
          {post.content && <BoxMarkdown>{post.content}</BoxMarkdown>}
        </CardContent>
      )}
    </Card>
  );
};
