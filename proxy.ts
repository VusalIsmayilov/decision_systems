import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isLocale } from "@/lib/i18n";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const parts = pathname.split("/").filter(Boolean);
  const first = parts[0];

  // Keep internal API routes outside locale redirects.
  if (first === "api") {
    return NextResponse.next();
  }

  // Insights page is intentionally hidden: redirect all direct requests to locale home.
  if (first && isLocale(first) && parts[1] === "insights") {
    const url = request.nextUrl.clone();
    url.pathname = `/${first}`;
    return NextResponse.redirect(url);
  }

  if (first === "insights") {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}`;
    return NextResponse.redirect(url);
  }

  if (first && isLocale(first)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  const suffix = pathname === "/" ? "" : pathname;
  url.pathname = `/${defaultLocale}${suffix}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
