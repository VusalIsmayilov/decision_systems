import ExecutiveDataReviewRequestForm from "@/components/ExecutiveDataReviewRequestForm";

const LINKEDIN_COMPANY = "https://www.linkedin.com/company/dataofis";

/** Inline text / link accent on light backgrounds (matches Home § Operating Model) */
const linkAccent =
  "text-[#2B5CE6] transition-colors hover:text-[#1E4AC4]";

export const metadata = {
  title: "Executive Data Review — Contact",
  description:
    "Schedule an Executive Data Review: request form and direct contact for a focused executive assessment of your data function.",
};

export default function ExecutiveDataReviewPage() {
  return (
    <div className="bg-white">
      {/* Hero — cap height on large screens only; tablet keeps full copy (no overflow clip) */}
      <section className="mb-6 bg-[#0A1628] lg:max-h-[420px] lg:overflow-hidden">
        <div className="mx-auto w-full max-w-[1280px] px-10 pb-10 pt-16 max-md:px-5 max-sm:pb-8 max-sm:pt-12 md:pb-10 md:pt-20">
          <div className="mx-auto w-full max-w-[1040px]">
            <div className="mx-auto w-full max-xl:max-w-[720px]">
              <p className="mb-3 text-[11px] font-semibold uppercase leading-[1.3] tracking-[0.08em] text-[rgba(255,255,255,0.42)] max-sm:text-[10px]">
                Executive Data Review
              </p>
              <h1 className="max-w-[640px] text-balance text-[24px] font-bold leading-[1.12] tracking-[-0.02em] text-white max-sm:text-[22px] md:text-[28px] lg:text-[32px]">
                Schedule Executive Data Review
              </h1>
              <p className="mt-3 max-w-[560px] text-[15px] font-normal leading-[1.45] text-[rgba(194,209,232,0.88)] max-sm:text-[14px] md:mt-4 md:max-w-[600px] md:text-[15px] md:leading-snug lg:text-[16px]">
                Continue with a focused executive assessment of whether your data
                function operates under control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form + direct contact + boundary — tight vertical rhythm (no SectionWrapper 140px padding) */}
      <section
        id="request-submission"
        className="scroll-mt-[5.5rem] border-t border-[rgba(10,22,40,0.08)] bg-white"
      >
        <div className="mx-auto w-full max-w-[1280px] px-10 pb-6 pt-8 max-md:px-5 max-sm:pt-6 md:pb-8 md:pt-8">
          <div className="mx-auto w-full max-w-[1040px]">
            <div className="mx-auto w-full max-xl:max-w-[720px]">
              <p className="mb-4 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.68)]">
                Request
              </p>
              <div className="w-full border border-[rgba(10,22,40,0.08)] bg-white px-5 pb-12 pt-8 max-sm:px-4 max-sm:pb-10 max-sm:pt-6 md:px-8 md:pb-12 md:pt-8 xl:max-w-[720px]">
                <ExecutiveDataReviewRequestForm />
              </div>

              {/* Direct contact — immediately under form */}
              <div className="mt-8 flex flex-col gap-5 border-t border-[rgba(10,22,40,0.08)] pt-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                <div>
                  <p className="mb-2 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.72)]">
                    Email
                  </p>
                  <a
                    href="mailto:contact@dataofis.az"
                    className={`inline-block text-[16px] font-medium leading-[1.5] max-sm:text-[15px] ${linkAccent}`}
                  >
                    contact@dataofis.az
                  </a>
                </div>
                <div className="sm:text-right">
                  <p className="mb-2 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.72)]">
                    LinkedIn
                  </p>
                  <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[16px] font-medium leading-[1.5] text-[#0A1628] sm:justify-end max-sm:text-[15px]">
                    <a
                      href={LINKEDIN_COMPANY}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkAccent}
                    >
                      EN
                    </a>
                    <span className="text-[rgba(10,22,40,0.35)]">/</span>
                    <a
                      href={LINKEDIN_COMPANY}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkAccent}
                    >
                      AZ
                    </a>
                    <span className="text-[rgba(10,22,40,0.35)]">/</span>
                    <a
                      href={LINKEDIN_COMPANY}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkAccent}
                    >
                      RU
                    </a>
                  </p>
                </div>
              </div>

              {/* Bottom boundary line — no large framed block */}
              <div className="mt-6 border-t border-[rgba(10,22,40,0.12)] pt-4">
                <p className="text-[15px] font-medium leading-[1.5] text-[rgba(10,22,40,0.75)] max-sm:text-[14px]">
                  Not applicable for tooling, delivery-only, or advisory requests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
