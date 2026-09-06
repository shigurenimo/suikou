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
      href={props.href}
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "h-auto min-h-10 justify-start whitespace-normal px-3 py-2 text-sm font-bold",
        props.active && "bg-accent text-accent-foreground",
      )}
      aria-current={props.active ? "page" : undefined}
      onClick={props.onClick}
    >
      {props.children}
    </Link>
  );
};
