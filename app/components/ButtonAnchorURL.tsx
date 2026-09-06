import { FC, ReactNode } from "react";
import { buttonVariants } from "@/app/components/ui/button";

type Props = { href: string; children: ReactNode };

export const ButtonAnchorURL: FC<Props> = ({ href, children }) => (
  <a
    data-slot="button"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={buttonVariants({ size: "sm" })}
  >
    {children}
  </a>
);
