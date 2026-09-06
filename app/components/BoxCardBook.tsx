import { FC } from "react";
import { ButtonAnchorURL } from "@/app/components/ButtonAnchorURL";
import { Card, CardContent, CardDescription, CardTitle } from "@/app/components/ui/card";
import { Book } from "@/app/types/book";
import { toPublicPath } from "@/app/utils/toPublicPath";

type Props = { book: Book };

export const BoxCardBook: FC<Props> = ({ book }) => (
  <Card>
    <CardContent className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
      {book.image && (
        <img
          className="h-auto w-32 shrink-0"
          alt={book.title}
          src={toPublicPath(book.image)}
          loading="lazy"
        />
      )}
      <div className="flex min-w-0 flex-col gap-2">
        <CardTitle>
          <h2>{book.title}</h2>
        </CardTitle>
        {book.title_en && <CardDescription>{book.title_en}</CardDescription>}
        {book.url && (
          <div className="pt-2">
            <ButtonAnchorURL href={book.url}>購入はこちら</ButtonAnchorURL>
          </div>
        )}
      </div>
    </CardContent>
  </Card>
);
