export const locales = ["en", "az", "ru"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(s: string): s is Locale {
  return (locales as readonly string[]).includes(s);
}

/** Site path without locale segment, e.g. `/insights`, `/`, `/services#x`. Keeps `?` and `#`. */
export function withLocale(locale: Locale, path: string): string {
  const hashIdx = path.indexOf("#");
  const pathBeforeHash = hashIdx >= 0 ? path.slice(0, hashIdx) : path;
  const hash = hashIdx >= 0 ? path.slice(hashIdx) : "";
  const queryIdx = pathBeforeHash.indexOf("?");
  const pathname =
    queryIdx >= 0 ? pathBeforeHash.slice(0, queryIdx) : pathBeforeHash;
  const query = queryIdx >= 0 ? pathBeforeHash.slice(queryIdx) : "";
  const normalizedPath =
    pathname === "" || pathname === "/"
      ? ""
      : pathname.startsWith("/")
        ? pathname
        : `/${pathname}`;
  return `/${locale}${normalizedPath}${query}${hash}`;
}

/** Pathname from usePathname() → path without `/{locale}` prefix. */
export function stripLocalePrefix(pathname: string): string {
  for (const loc of locales) {
    const prefix = `/${loc}`;
    if (pathname === prefix) return "/";
    if (pathname.startsWith(`${prefix}/`)) {
      return pathname.slice(prefix.length);
    }
  }
  return pathname;
}
