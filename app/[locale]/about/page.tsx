import SectionWrapper from '@/components/SectionWrapper';
import Link from 'next/link';
import { withLocale, type Locale } from '@/lib/i18n';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: loc } = await params;
  const locale = loc as Locale;
  const L = (path: string) => withLocale(locale, path);

  return (
    <>
      <section className="flex min-w-0 w-full scroll-mt-[var(--header-offset)] items-start bg-[#0A1628]" id="hero">
        <div className="mx-auto w-full min-w-0 max-w-[1280px] px-10 pb-24 pt-[var(--header-offset)] max-md:px-5 max-md:pb-16 lg:pb-24 lg:pt-32 xl:pt-[8.5rem]">
          <p className="mb-10 text-[12px] font-semibold uppercase leading-[1.3] tracking-[0.08em] text-[rgba(255,255,255,0.42)] max-sm:mb-9 max-sm:text-[11px]">
            About
          </p>
          <div className="grid min-w-0 grid-cols-1 items-start gap-12 md:grid-cols-[2fr_3fr] md:gap-x-10 md:gap-y-0 lg:gap-x-12 xl:gap-x-20">
            <div className="order-2 flex min-w-0 max-w-[420px] flex-col gap-6 text-[15px] font-normal leading-[1.5] text-[rgba(194,209,232,0.68)] max-sm:text-[14px] md:order-1 md:translate-y-[2%] md:pt-1">
              <p>The work is limited to one problem:</p>
            </div>
            <div className="order-1 flex min-w-0 w-full flex-col items-start md:order-2 md:translate-y-[2%]">
              <h1 className="text-balance break-words text-[56px] font-bold leading-[1.03] tracking-[-0.03em] text-white max-md:text-[42px] max-sm:text-[32px]">
                Focused on decision systems
              </h1>
              <div className="mt-8 max-w-[520px] text-[16px] font-normal leading-[1.5] text-[rgba(194,209,232,0.82)] max-sm:mt-6 max-sm:text-[15px]">
                <p>defining how recurring decisions operate as structured systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper bg="white" id="position">
        <div className="mx-auto w-full max-w-[1040px]">
          <p className="mb-6 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.68)]">
            Position
          </p>
          <h2 className="max-w-[720px] text-[30px] font-bold leading-[1.12] tracking-[-0.015em] text-[#0A1628] max-sm:text-[24px]">
            Decision structure as a distinct layer
          </h2>
          <div className="mt-9 grid grid-cols-1 items-start gap-10 border-t border-[rgba(10,22,40,0.08)] pt-9 lg:mt-10 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-x-14 lg:gap-y-0 lg:pt-10 xl:gap-x-16">
            <div className="order-2 max-w-[280px] text-[15px] font-normal leading-[1.55] text-[#5A6478] max-sm:max-w-none max-sm:text-[14px] lg:order-1 lg:pt-0.5">
              <p>Organizations invest in data, reporting, and execution.</p>
            </div>
            <div className="order-1 flex max-w-[620px] flex-col gap-6 text-[17px] font-normal leading-[1.55] text-[#5A6478] max-sm:gap-5 max-sm:text-[15px] lg:order-2">
              <p>Yet when decisions repeat, outcomes still vary.</p>
              <p className="font-medium text-[#0A1628]">The gap is not capability.</p>
              <p className="font-medium text-[#0A1628]">It is that the decision itself is not defined.</p>
              <p className="font-semibold text-[#0A1628]">This work focuses on that layer.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="gray" id="background">
        <div className="mx-auto w-full max-w-[640px]">
          <p className="mb-8 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.72)]">
            Background
          </p>
          <h2 className="text-[26px] font-bold leading-[1.22] tracking-[-0.01em] text-[#0A1628] max-sm:text-[21px]">
            Experience in decision, data, and operational structures
          </h2>
          <div className="mt-9 border-t border-[rgba(10,22,40,0.08)] pt-9 text-[17px] font-medium leading-[1.48] text-[rgba(69,82,104,0.84)] max-sm:text-[15px]">
            <p className="text-[#0A1628]">This perspective comes from working inside environments where:</p>
            <p className="mt-7">
              <span className="block">the same decision produced different outcomes</span>
              <span className="block">across teams</span>
            </p>
            <p className="mt-7 pl-6 md:pl-10">shared data did not lead to shared actions</p>
            <p className="mt-7">ownership shifted depending on context</p>
            <p className="mt-7 pl-6 md:pl-10">decisions restarted in every cycle</p>
            <p className="mt-8 text-[#0A1628]">In these conditions, inconsistency is not occasional.</p>
            <p className="mt-6 text-[#0A1628]">It is systemic.</p>
            <p className="mt-8 text-[#0A1628]">
              Defining how decisions actually operate becomes necessary before anything can be improved.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        bg="navy"
        id="continue-to-diagnostic"
        className="!py-24 md:!py-28 lg:!py-28 xl:!py-28 2xl:!py-28"
      >
        <div className="mx-auto w-full max-w-[1040px]">
          <h2 className="max-w-[860px] text-[40px] font-bold leading-[1.08] tracking-[-0.02em] text-white max-md:text-[32px] max-sm:text-[26px]">
            <span className="block">Continue to diagnostic</span>
          </h2>
          <div className="mt-10 border-t border-[rgba(255,255,255,0.12)] pt-10 lg:mt-12 lg:pt-12" />
          <div className="mt-12 flex w-full flex-col items-end lg:mt-14">
            <p className="max-w-[560px] text-right text-[17px] font-medium leading-[1.6] text-[rgba(255,255,255,0.9)] max-sm:text-[15px]">
              Request a Decision Diagnostic
            </p>
            <div className="mt-10 w-full flex justify-end">
              <Link
                href={L('/decision-diagnostic/intake')}
                className="inline-flex min-h-11 max-w-full items-center justify-center bg-[#2B5CE6] px-10 py-3 text-center text-[15px] font-semibold leading-none tracking-[0.02em] text-white transition-colors duration-200 hover:bg-[#1E4AC4] max-sm:px-5 max-sm:text-[13px] max-sm:leading-snug"
                style={{ borderRadius: 0 }}
              >
                Request a Decision Diagnostic
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
