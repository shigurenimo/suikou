import Link from "next/link";
import { FC, ReactNode } from "react";
import { cn } from "@/app/lib/utils";
import { buttonVariants } from "@/app/components/ui/button";

type Props = {
  href: string;
  active: boolean;
  children: ReactNode;
  onClick?(): void;
};

export const LinkAnchor: FC<Props> = (props) => {
  return (
    <Link
      data-slot="button"
      href={props.href}
      className={cn(
        buttonVariants({ variant: props.active ? "secondary" : "ghost" }),
        "w-full justify-start",
      )}
      aria-current={props.active ? "page" : undefined}
      onClick={props.onClick}
    >
      {props.children}
    </Link>
  );
};
