import Link from 'next/link';
import { type ReactNode } from 'react';

type HeroPrincipleStackProps = {
  id?: string;
  headline: ReactNode;
  supportLines: string[];
  cta?: {
    label: string;
    href: string;
  };
};

export default function HeroPrincipleStack({
  id = 'hero',
  headline,
  supportLines,
  cta,
}: HeroPrincipleStackProps) {
  return (
    <section className="flex min-w-0 w-full scroll-mt-[var(--header-offset)] items-start bg-[#0A1628]" id={id}>
      <div className="mx-auto w-full min-w-0 max-w-[1280px] px-10 pb-24 pt-[var(--header-offset)] max-md:px-5 max-md:pb-16 lg:pb-24 lg:pt-32 xl:pt-[8.5rem]">
        <div className="max-w-[560px]">
          <h1 className="text-balance break-words text-[56px] font-bold leading-[1.02] tracking-[-0.03em] text-white max-md:text-[42px] max-sm:text-[32px]">
            {headline}
          </h1>
        </div>

        <div className="mt-10 grid grid-cols-1 items-start gap-8 md:grid-cols-[2fr_3fr] md:gap-x-10 md:gap-y-0 lg:gap-x-12">
          <div />
          <div className="min-w-0 max-w-[560px]">
            <div className="space-y-3 text-[17px] leading-[1.56] max-sm:text-[16px]">
              {supportLines.map((line, index) => (
                <p key={line} className={index === 0 ? 'font-medium text-[rgba(255,255,255,0.9)]' : 'font-normal text-[rgba(194,209,232,0.82)]'}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>

        {cta && (
          <div className="mt-10 md:mt-12">
            <div className="max-w-[560px] md:ml-auto">
              <Link
                href={cta.href}
                className="inline-flex min-h-11 items-center text-[15px] font-semibold leading-[1.45] tracking-tight text-white/92 underline-offset-4 transition-colors duration-150 hover:text-white hover:underline max-sm:text-[14px]"
              >
                {cta.label}
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
