import SectionWrapper from '@/components/SectionWrapper';
import { type ReactNode } from 'react';

type FragmentedGridItem = {
  text: string;
  column?: 'left' | 'right';
  indent?: 'none' | 'sm' | 'md';
  offsetY?: 'none' | 'sm' | 'md';
  width?: 'normal' | 'wide';
};

type FragmentedGridProps = {
  id?: string;
  heading: ReactNode;
  introRight?: string;
  items?: FragmentedGridItem[];
  conclusionStrong: string;
  conclusionSoft?: string;
};

function getIndentClass(indent?: FragmentedGridItem['indent']) {
  switch (indent) {
    case 'sm':
      return 'md:ml-8';
    case 'md':
      return 'md:ml-14';
    default:
      return '';
  }
}

function getOffsetClass(offsetY?: FragmentedGridItem['offsetY']) {
  switch (offsetY) {
    case 'sm':
      return 'md:mt-5';
    case 'md':
      return 'md:mt-10';
    default:
      return '';
  }
}

function getWidthClass(width?: FragmentedGridItem['width']) {
  switch (width) {
    case 'wide':
      return 'max-w-[460px]';
    default:
      return 'max-w-[430px]';
  }
}

export default function FragmentedGrid({
  id = 'fragmented-grid',
  heading,
  introRight,
  items = [],
  conclusionStrong,
  conclusionSoft,
}: FragmentedGridProps) {
  const leftItems = items.filter((item) => item.column !== 'right');
  const rightItems = items.filter((item) => item.column === 'right');

  return (
    <SectionWrapper bg="white" id={id}>
      <div className="mx-auto w-full max-w-[1040px]">
        {/* TOP */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[58fr_42fr] md:gap-x-12">
          <div className="max-w-[560px]">
            <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0A1628] max-sm:text-[24px]">
              {heading}
            </h2>
          </div>

          {introRight && (
            <div className="max-w-[340px] md:justify-self-end md:pt-1">
              <p className="text-[15px] leading-[1.55] text-[#6B768A] max-sm:text-[14px]">
                {introRight}
              </p>
            </div>
          )}
        </div>

        <div className="mt-10 border-t border-[rgba(10,22,40,0.06)]" />

        {/* FIELD */}
        <div className="mt-8 grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-8 md:gap-y-0">
          <div className="space-y-6">
            {leftItems.map((item) => (
              <div
                key={item.text}
                className={`${getWidthClass(item.width)} ${getIndentClass(item.indent)} ${getOffsetClass(item.offsetY)}`}
              >
                <div className="border border-[rgba(10,22,40,0.08)] bg-[rgba(255,255,255,0.24)] px-5 py-4">
                  <p className="text-[15px] leading-[1.48] text-[#0A1628] max-sm:text-[14px]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6 md:pt-5">
            {rightItems.map((item) => (
              <div
                key={item.text}
                className={`${getWidthClass(item.width)} ${getIndentClass(item.indent)} ${getOffsetClass(item.offsetY)}`}
              >
                <div className="border border-[rgba(10,22,40,0.08)] bg-[rgba(255,255,255,0.24)] px-5 py-4">
                  <p className="text-[15px] leading-[1.48] text-[#0A1628] max-sm:text-[14px]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-[rgba(10,22,40,0.06)]" />

        {/* CONCLUSION */}
        <div className="mt-10 max-w-[560px] md:ml-auto md:pr-6">
          <p className="text-[16px] font-semibold leading-[1.5] text-[#0A1628] max-sm:text-[15px]">
            {conclusionStrong}
          </p>

          {conclusionSoft && (
            <p className="mt-4 text-[15px] leading-[1.55] text-[#6B768A] max-sm:text-[14px]">
              {conclusionSoft}
            </p>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
