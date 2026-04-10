import Link from 'next/link';
import { type ReactNode } from 'react';

type HeroAsymmetricSplitProps = {
  id?: string;
  headline: ReactNode;
  groupA: string[];
  groupB: string[];
  groupC: string[];
  cta?: {
    label: string;
    href: string;
  };
};

export default function HeroAsymmetricSplit({
  id = 'hero',
  headline,
  groupA,
  groupB,
  groupC,
  cta,
}: HeroAsymmetricSplitProps) {
  return (
    <section className="flex min-w-0 w-full scroll-mt-[var(--header-offset)] items-start bg-[#0A1628]" id={id}>
      <div className="mx-auto w-full min-w-0 max-w-[1280px] px-10 pb-20 pt-[var(--header-offset)] max-md:px-5 max-md:pb-16 lg:pb-20 lg:pt-32 xl:pt-[8.5rem]">
        <div className="grid min-w-0 grid-cols-1 items-start gap-12 md:grid-cols-[37fr_63fr] md:gap-x-10 md:gap-y-0 lg:gap-x-12 xl:gap-x-20">
          <div className="order-1 flex min-w-0 w-full flex-col items-start md:order-1 md:pt-0">
            <h1 className="max-w-[500px] text-balance break-words text-[56px] font-bold leading-[1.02] tracking-[-0.03em] text-white max-md:text-[42px] max-sm:text-[32px]">
              {headline}
            </h1>
          </div>
          <div className="order-2 flex min-w-0 w-full flex-col items-start md:order-2 md:pt-16 md:ml-0 lg:-ml-5 lg:pt-22">
            <div className="max-w-[550px] text-[16px] font-normal leading-[1.56] text-[rgba(194,209,232,0.82)] max-sm:text-[15px]">
              <div className="max-w-[500px] space-y-2 text-[15px] font-normal leading-[1.58] text-[rgba(194,209,232,0.68)]">
                {groupA.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <div className="mt-7 max-w-[510px] space-y-2 text-[16px] font-normal leading-[1.56] text-[rgba(194,209,232,0.74)]">
                {groupB.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <div className="mt-10 max-w-[480px] space-y-2 text-[17px] leading-[1.5] text-white">
                {groupC.map((line) => (
                  <p key={line} className="font-semibold">
                    {line}
                  </p>
                ))}
              </div>
              {cta && (
                <div className="mt-8">
                  <Link
                    href={cta.href}
                    className="inline-flex min-h-11 items-center text-[15px] font-semibold leading-[1.45] tracking-[0.01em] text-white underline-offset-4 transition-colors duration-150 hover:text-white hover:underline max-sm:text-[14px]"
                  >
                    {cta.label}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
