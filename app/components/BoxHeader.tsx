import { useState } from "react";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { BoxFooter } from "@/app/components/BoxFooter";
import { SiteNavigation } from "@/app/components/SiteNavigation";
import { Button } from "@/app/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/sheet";

export function BoxHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between gap-4 border-b bg-background p-4 md:hidden">
      <Link href="/" className="text-sm font-bold">
        仲座栄三 新力学研究所
      </Link>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger render={<Button variant="outline" size="icon" aria-label="メニューを開く" />}>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side="left" className="overflow-y-auto">
          <SheetHeader>
            <SheetTitle>メニュー</SheetTitle>
            <SheetDescription>仲座栄三 新力学研究所</SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-8 px-4 pb-8">
            <SiteNavigation onNavigate={() => setOpen(false)} />
            <BoxFooter />
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
