import Link from "next/link";
import { withLocale, type Locale } from "@/lib/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  const L = (path: string) => withLocale(locale, path);

  return (
    <footer className="bg-navy border-t border-[rgba(255,255,255,0.12)] mt-12 md:mt-16">
      <div className="mx-auto min-w-0 max-w-[1280px] px-5 md:px-10 pt-12 lg:pt-14 pb-8 lg:pb-10">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-10 lg:gap-14">
          {/* Left — brand */}
          <div className="flex flex-col gap-1.5 text-left">
            <Link
              href={L("/")}
              className="w-fit text-base font-semibold tracking-tight text-white transition-colors hover:text-[rgba(255,255,255,0.88)]"
            >
              DataOfis
            </Link>
            <Link
              href={L("/decision-systems")}
              className="w-fit text-sm font-normal leading-snug text-[rgba(255,255,255,0.58)] transition-colors hover:text-[rgba(255,255,255,0.72)]"
            >
              Decision Systems
            </Link>
          </div>

          {/* Middle — very light */}
          <nav
            className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center text-xs font-normal text-[rgba(255,255,255,0.3)] md:self-start md:pt-0.5"
            aria-label="Footer links"
          >
            <Link
              href={L("/decision-systems")}
              className="inline-flex min-h-11 items-center transition-colors hover:text-[rgba(255,255,255,0.48)]"
            >
              Decision Systems
            </Link>
            <span className="inline-flex min-h-11 items-center text-[rgba(255,255,255,0.18)]" aria-hidden>
              ·
            </span>
            <Link
              href={L("/about")}
              className="inline-flex min-h-11 items-center transition-colors hover:text-[rgba(255,255,255,0.48)]"
            >
              About
            </Link>
          </nav>

          {/* Right — location, email, LinkedIn */}
          <div className="flex flex-col gap-1.5 md:items-end md:text-right">
            <span className="text-sm text-[rgba(255,255,255,0.62)]">Baku, Azerbaijan</span>
            <a
              href="mailto:contact@dataofis.az"
              className="w-fit text-sm text-[rgba(255,255,255,0.78)] transition-colors hover:text-[rgba(255,255,255,0.92)] md:ml-auto"
            >
              contact@dataofis.az
            </a>
            <a
              href="https://www.linkedin.com/company/dataofis"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit text-xs text-[rgba(255,255,255,0.45)] transition-colors hover:text-[rgba(255,255,255,0.65)] md:ml-auto"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-[rgba(255,255,255,0.12)] pt-6">
          <p className="text-sm text-[rgba(255,255,255,0.55)]">© DataOfis | Decision Systems</p>
        </div>
      </div>
    </footer>
  );
}
