import { useRouter } from "next/router";
import { LinkAnchor } from "@/app/components/LinkAnchor";

const links = [
  ["/", "ホーム"],
  ["/nakaza", "仲座 栄三"],
  ["/about", "新力学研究所"],
  ["/access", "アクセス"],
  ["/posts", "お知らせ"],
  ["/articles", "メディア掲載"],
  ["/classes", "eラーニング"],
  ["/feedbacks", "授業の感想"],
  ["/surveys", "東北地方大津波災害調査"],
  ["/books", "書籍"],
] as const;

export function SiteNavigation({ onNavigate }: { onNavigate?(): void }) {
  const { pathname } = useRouter();
  return (
    <nav aria-label="メインナビゲーション" className="flex flex-col gap-1">
      {links.map(([href, label]) => (
        <LinkAnchor
          key={href}
          href={href}
          active={pathname === href || (href !== "/" && pathname.startsWith(`${href}/`))}
          onClick={onNavigate}
        >
          {label}
        </LinkAnchor>
      ))}
    </nav>
  );
}
