import SectionWrapper from '@/components/SectionWrapper';
import { type ReactNode } from 'react';

type FramedCorePeripheralProps = {
  id?: string;
  introLine: string;
  transitionLine: string;
  signalsLeft: string[];
  signalsRight: string[];
  coreHeading: ReactNode;
  coreBody: string[];
  coreConclusion: string;
  bottomLines: string[];
};

export default function FramedCorePeripheral({
  id = 'framed-core-peripheral',
  introLine,
  transitionLine,
  signalsLeft,
  signalsRight,
  coreHeading,
  coreBody,
  coreConclusion,
  bottomLines,
}: FramedCorePeripheralProps) {
  return (
    <SectionWrapper bg="gray" id={id}>
      <div className="mx-auto w-full max-w-[1040px]">
        <div className="mx-auto max-w-[680px] text-center">
          <p className="text-[13px] leading-[1.5] text-[#7A8699]/54">{introLine}</p>
          <p className="mt-4 text-[15px] font-medium leading-[1.45] text-[#0A1628]/72">{transitionLine}</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-[720px] grid-cols-1 gap-x-28 gap-y-4 text-[12px] leading-[1.78] text-[#6F7B90]/58 md:grid-cols-2 md:gap-y-3">
          <div className="space-y-1.5 text-left">
            {signalsLeft.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="space-y-1.5 text-left">
            {signalsRight.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-24 mb-18 max-w-[560px] border border-[rgba(10,22,40,0.14)] bg-white px-10 py-11 shadow-[0_14px_34px_rgba(10,22,40,0.08)] md:px-12 md:py-12">
          <h2 className="text-[24px] font-bold leading-[1.18] tracking-[-0.025em] text-[#0A1628] md:text-[25px]">
            {coreHeading}
          </h2>

          <div className="mt-6 max-w-[470px] space-y-2.5 text-[16px] leading-[1.62] text-[#4C586E] md:text-[17px]">
            {coreBody.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <p className="mt-6 text-[16px] font-semibold leading-[1.48] text-[#0A1628] md:text-[17px]">
            {coreConclusion}
          </p>
        </div>

        <div className="mx-auto mt-18 max-w-[500px] space-y-2.5 text-center text-[13px] leading-[1.58] text-[#5A6478]/82">
          {bottomLines.map((line, index) => (
            <p
              key={line}
              className={index === bottomLines.length - 1 ? 'text-[15px] font-semibold leading-[1.5] text-[#0A1628]' : ''}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
