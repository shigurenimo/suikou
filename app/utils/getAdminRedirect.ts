export function getAdminRedirect(href: string) {
  const url = new URL(href);
  const hash = new URLSearchParams(url.hash.slice(1));
  const hasIdentityToken = [
    "invite_token",
    "confirmation_token",
    "recovery_token",
    "access_token",
  ].some((key) => hash.has(key));
  if (!hasIdentityToken || url.pathname === "/admin" || url.pathname.startsWith("/admin/"))
    return null;
  const target = new URL("/admin/", url.origin);
  target.hash = url.hash;
  return target.href;
}
