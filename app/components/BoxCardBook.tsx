import { FC } from "react";
import { ButtonAnchorURL } from "@/app/components/ButtonAnchorURL";
import { Card, CardContent } from "@/app/components/ui/card";
import { Book } from "@/app/types/book";
import { toPublicPath } from "@/app/utils/toPublicPath";

type Props = { book: Book };

export const BoxCardBook: FC<Props> = ({ book }) => (
  <Card className="rounded-md text-base">
    <CardContent className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
      {book.image && (
        <img
          className="h-auto w-32 shrink-0 rounded-lg"
          alt={book.title}
          src={toPublicPath(book.image)}
          loading="lazy"
        />
      )}
      <div className="flex min-w-0 flex-col gap-2">
        <h2 className="text-lg font-bold">{book.title}</h2>
        {book.title_en && <p className="text-sm text-muted-foreground">{book.title_en}</p>}
        {book.url && (
          <div className="pt-2">
            <ButtonAnchorURL href={book.url}>購入はこちら</ButtonAnchorURL>
          </div>
        )}
      </div>
    </CardContent>
  </Card>
);
