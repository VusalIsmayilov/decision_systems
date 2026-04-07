'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

interface SectionWrapperProps {
  bg: 'navy' | 'white' | 'gray';
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  id?: string;
}

const bgMap = {
  navy: 'bg-[#0A1628]',
  white: 'bg-white',
  gray: 'bg-[#E5EDF4]',
};

export default function SectionWrapper({ bg, children, className = '', contentClassName = '', id }: SectionWrapperProps) {
  const ref = useScrollReveal();

  return (
    <section
      id={id}
      className={`${bgMap[bg]} pt-24 pb-12 sm:pb-20 md:py-24 lg:py-28 xl:py-32 2xl:py-[120px] ${id ? 'scroll-mt-[5.5rem]' : ''} ${className}`}
    >
      <div
        ref={ref}
        className={`section-animate max-w-[1280px] mx-auto px-10 max-md:px-5 ${contentClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
