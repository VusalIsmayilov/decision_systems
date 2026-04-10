import SectionWrapper from '@/components/SectionWrapper';
import { type ReactNode } from 'react';

type IndexedItem = {
  title: string;
  description: string;
};

type IndexedSystemLayoutProps = {
  id?: string;

  // Top
  heading: ReactNode;
  intro: string;

  // Items
  items?: IndexedItem[];

  // Optional closing block (e.g. after the indexed list)
  closureStrong?: string;
  closureSoft?: string;
};

export default function IndexedSystemLayout({
  id = 'indexed-system-layout',
  heading,
  intro,
  items = [],
  closureStrong,
  closureSoft,
}: IndexedSystemLayoutProps) {
  return (
    <SectionWrapper bg="gray" id={id}>
      <div className="mx-auto w-full max-w-[1040px]">

        {/* HEADER */}
        <div className="max-w-[760px]">
          <h2 className="text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-[#0A1628] max-sm:text-[24px]">
            {heading}
          </h2>

          <p className="mt-4 text-[16px] leading-[1.55] text-[#5A6478] max-sm:text-[15px]">
            {intro}
          </p>
        </div>

        {/* DIVIDER */}
        <div className="mt-10 border-t border-[rgba(10,22,40,0.06)]" />

        {/* LIST */}
        <div className="mt-10 space-y-8">
          {items.map((item, index) => {
            const displayIndex = String(index + 1).padStart(2, '0');

            return (
              <div
                key={item.title}
                className="grid grid-cols-[64px_160px_1fr] gap-x-6 items-start max-md:grid-cols-1 max-md:gap-y-2"
              >
                {/* INDEX */}
                <div className="text-[13px] font-medium text-[#9AA5B1] tracking-[0.08em]">
                  [{displayIndex}]
                </div>

                {/* TITLE */}
                <div className="text-[16px] font-semibold capitalize text-[#0A1628] max-sm:text-[15px]">
                  {item.title}
                </div>

                {/* DESCRIPTION */}
                <div className="text-[16px] leading-[1.55] text-[#5A6478] max-sm:text-[15px]">
                  {item.description}
                </div>
              </div>
            );
          })}
        </div>

        {(closureStrong || closureSoft) && (
          <>
            <div className="mt-10 border-t border-[rgba(10,22,40,0.06)]" />
            <div className="mt-8 flex w-full justify-end">
              <div className="max-w-[520px] text-right">
                {closureStrong && (
                  <p className="text-[16px] font-semibold leading-[1.52] text-[#0A1628] max-sm:text-[15px]">
                    {closureStrong}
                  </p>
                )}
                {closureSoft && (
                  <p className="mt-4 text-[15px] font-normal leading-[1.55] text-[#5A6478] max-sm:text-[14px]">
                    {closureSoft}
                  </p>
                )}
              </div>
            </div>
          </>
        )}

      </div>
    </SectionWrapper>
  );
}
