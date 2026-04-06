import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NotFoundContent from "@/components/NotFoundContent";
import { defaultLocale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

/**
 * Root fallback when Next.js does not use `app/[locale]/not-found.tsx`.
 * Matches locale layout chrome so production never shows the default black 404.
 */
export default function GlobalNotFound() {
  const locale = defaultLocale;
  return (
    <>
      <Header locale={locale} />
      <main className="flex-1">
        <NotFoundContent />
      </main>
      <Footer locale={locale} />
    </>
  );
}
