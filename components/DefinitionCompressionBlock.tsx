import SectionWrapper from '@/components/SectionWrapper';
import Link from 'next/link';
import { type ReactNode } from 'react';

type DefinitionCompressionBlockProps = {
  id?: string;
  heading: ReactNode;
  lead: string;
  body?: string[];
  conclusion: string;
  cta?: { label: string; href: string };
};

export default function DefinitionCompressionBlock({
  id = 'definition-compression-block',
  heading,
  lead,
  body = [],
  conclusion,
  cta,
}: DefinitionCompressionBlockProps) {
  return (
    <SectionWrapper bg="white" id={id}>
      <div className="mx-auto w-full max-w-[1040px]">
        <div className="max-w-[640px]">
          <h2 className="text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0A1628] max-sm:text-[24px]">
            {heading}
          </h2>
        </div>

        <div className="mt-8 border-t border-[rgba(10,22,40,0.06)]" />

        <div className="mt-8 max-w-[820px]">
          <div className="grid grid-cols-1 gap-y-6 md:grid-cols-[34fr_66fr] md:gap-x-10">
            <div className="max-w-[280px]">
              <p className="text-[17px] font-medium leading-[1.55] text-[#0A1628] max-sm:text-[16px]">
                {lead}
              </p>
            </div>

            <div className="max-w-[500px] space-y-4 text-[16px] leading-[1.56] text-[#5A6478] max-sm:text-[15px]">
              {body.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>

          <div className="mt-10 max-w-[500px] md:ml-[34%]">
            <p className="text-[16px] font-medium leading-[1.5] text-[#0A1628] max-sm:text-[15px]">
              {conclusion}
            </p>
          </div>

          {cta && (
            <div className="mt-10 max-w-[500px] md:ml-[34%]">
              <Link
                href={cta.href}
                className="inline-flex min-h-11 items-center text-[15px] font-semibold leading-[1.45] tracking-tight text-[#0A1628] underline-offset-4 transition-colors duration-150 hover:underline max-sm:text-[14px]"
              >
                {cta.label}
              </Link>
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}