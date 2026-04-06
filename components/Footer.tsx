import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { withLocale, type Locale } from "@/lib/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="bg-navy border-t border-[rgba(255,255,255,0.12)] mt-12 md:mt-16">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 pt-12 lg:pt-14 pb-8 lg:pb-10">

        <nav
          className="mb-10 flex flex-wrap gap-x-8 gap-y-2 text-sm font-normal text-[rgba(255,255,255,0.65)]"
          aria-label="Site structure"
        >
          <Link href={withLocale(locale, "/")} className="hover:text-[rgba(255,255,255,0.9)] transition-colors">
            Decision Problem
          </Link>
          <Link href={withLocale(locale, "/decision-systems")} className="hover:text-[rgba(255,255,255,0.9)] transition-colors">
            Decision Systems
          </Link>
          <Link href={withLocale(locale, "/decision-systems-design")} className="hover:text-[rgba(255,255,255,0.9)] transition-colors">
            Systems Design
          </Link>
          <Link href={withLocale(locale, "/how-decisions-are-structured")} className="hover:text-[rgba(255,255,255,0.9)] transition-colors">
            How Decisions Are Structured
          </Link>
          <Link href={withLocale(locale, "/decision-systems-in-practice")} className="hover:text-[rgba(255,255,255,0.9)] transition-colors">
            In Practice
          </Link>
          <Link href={withLocale(locale, "/decision-diagnostic/intake")} className="hover:text-[rgba(255,255,255,0.9)] transition-colors">
            Diagnostic
          </Link>
          <Link href={withLocale(locale, "/about")} className="hover:text-[rgba(255,255,255,0.9)] transition-colors">
            About
          </Link>
          <Link href={withLocale(locale, "/insights")} className="hover:text-[rgba(255,255,255,0.9)] transition-colors">
            Insights
          </Link>
        </nav>

        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">

          {/* Left — brand + contact */}
          <div className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-[rgba(255,255,255,0.65)]">DataOfis Partners</span>
            <span className="text-sm text-[rgba(255,255,255,0.65)]">Baku, Azerbaijan</span>
            <a
              href="mailto:contact@dataofis.az"
              className="text-sm text-[rgba(255,255,255,0.75)] hover:text-[rgba(255,255,255,0.9)] transition-colors"
            >
              contact@dataofis.az
            </a>
          </div>

          {/* Right — LinkedIn + language */}
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

        {/* Divider */}
        <div className="border-t border-[rgba(255,255,255,0.12)] mt-8" />

        {/* Legal */}
        <p className="mt-5 text-sm text-[rgba(255,255,255,0.65)]">
          © DataOfis Partners. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
