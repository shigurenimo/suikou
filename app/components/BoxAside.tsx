import { BoxFooter } from "@/app/components/BoxFooter";
import { SiteNavigation } from "@/app/components/SiteNavigation";

export function BoxAside() {
  return (
    <aside className="sticky top-0 hidden h-dvh w-60 shrink-0 self-start overflow-y-auto p-6 pr-0 md:flex md:flex-col md:gap-6">
      <SiteNavigation />
      <BoxFooter />
    </aside>
  );
}
