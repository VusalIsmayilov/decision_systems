import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { withLocale, type Locale } from "@/lib/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="bg-navy border-t border-[rgba(255,255,255,0.12)] mt-12 md:mt-16">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 pt-12 lg:pt-14 pb-8 lg:pb-10">

        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <nav
            className="flex flex-wrap gap-x-8 gap-y-2 text-sm font-normal text-[rgba(255,255,255,0.65)]"
            aria-label="Site structure"
          >
            <Link href={withLocale(locale, "/decision-systems")} className="hover:text-[rgba(255,255,255,0.9)] transition-colors">
              Decision Systems
            </Link>
            <Link href={withLocale(locale, "/about")} className="hover:text-[rgba(255,255,255,0.9)] transition-colors">
              About
            </Link>
          </nav>
          <Link
            href={withLocale(locale, "/decision-diagnostic/intake")}
            className="inline-flex min-h-11 items-center justify-center self-start bg-[#2B5CE6] px-7 py-3 text-center text-[13px] font-semibold leading-none tracking-[0.02em] text-white transition-colors duration-200 hover:bg-[#1E4AC4] sm:self-auto"
            style={{ borderRadius: 0 }}
          >
            → Diagnostic
          </Link>
        </div>

        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">

          {/* Left — brand + contact */}
          <div className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-[rgba(255,255,255,0.65)]">DataOfis Decision Systems Design</span>
            <span className="text-sm text-[rgba(255,255,255,0.65)]">Baku, Azerbaijan</span>
            <a
              href="mailto:contact@dataofis.az"
              className="text-sm text-[rgba(255,255,255,0.75)] hover:text-[rgba(255,255,255,0.9)] transition-colors"
            >
              contact@dataofis.az
            </a>
          </div>

          {/* Right — LinkedIn + language */}
          <div className="flex flex-col items-start gap-5 sm:items-end">
            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/company/dataofis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[rgba(255,255,255,0.75)] hover:text-[rgba(255,255,255,0.9)] transition-colors"
              >
                LinkedIn
              </a>

              <LanguageSwitcher />
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-[rgba(255,255,255,0.12)] mt-8" />

        {/* Legal */}
        <p className="mt-5 text-sm text-[rgba(255,255,255,0.65)]">
          © DataOfis Decision Systems Design. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
