import { FC, ReactNode } from "react";
import { buttonVariants } from "@/app/components/ui/button";
import { cn } from "@/app/lib/utils";

type Props = { href: string; children: ReactNode };

export const ButtonAnchorURL: FC<Props> = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      buttonVariants({ size: "sm" }),
      "h-auto min-h-9 max-w-full whitespace-normal py-2 text-center font-bold",
    )}
  >
    {children}
  </a>
);
