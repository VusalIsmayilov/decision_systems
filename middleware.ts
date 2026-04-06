import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isLocale } from "@/lib/i18n";
import {
  isGatedHostname,
  UNDER_CONSTRUCTION_PATH,
} from "@/lib/site-gate";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host");
  const { pathname } = request.nextUrl;

  if (isGatedHostname(host)) {
    if (pathname === UNDER_CONSTRUCTION_PATH) {
      return NextResponse.next();
    }
    const url = request.nextUrl.clone();
    url.pathname = UNDER_CONSTRUCTION_PATH;
    return NextResponse.rewrite(url);
  }

  /* Internal route only exists for gated rewrites — avoid /en/under-construction 404 on live hosts */
  if (pathname === UNDER_CONSTRUCTION_PATH) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}`;
    return NextResponse.redirect(url);
  }

  const parts = pathname.split("/").filter(Boolean);
  const first = parts[0];

  if (first && isLocale(first)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  const suffix = pathname === "/" ? "" : pathname;
  url.pathname = `/${defaultLocale}${suffix}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
