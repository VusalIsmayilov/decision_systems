import Link from 'next/link';
import {
  getNextTopic,
  getTopicOriginBySlug,
  type InsightTopic,
} from '@/lib/insights-topic-data';
import type { Locale } from '@/lib/i18n';
import { withLocale } from '@/lib/i18n';

function InsightTopicDetail({
  topic,
  locale,
}: {
  topic: InsightTopic;
  locale: Locale;
}) {
  const nextTopic = getNextTopic(topic.slug);
  const topicOrigin = getTopicOriginBySlug(topic.slug);
  const L = (path: string) => withLocale(locale, path);

  return (
    <>
      <section className="bg-[#0A1628]">
        <div className="mx-auto w-full max-w-[1280px] px-10 pb-24 pt-24 max-md:px-5 max-md:pb-16 max-md:pt-20 max-sm:pt-28 md:pt-28 lg:pt-32 xl:pt-[8.5rem]">
          <div className="w-full max-w-[1040px]">
          <div className="max-w-[840px]">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-[12px] font-semibold leading-[1.3] tracking-[0.08em] text-[rgba(255,255,255,0.42)] uppercase max-sm:text-[11px]">
                  {topicOrigin.title}
                </p>
                <p className="mt-2 text-[12px] font-normal leading-[1.3] text-[rgba(194,209,232,0.82)]">
                  {topicOrigin.pathLabel}
                </p>
              </div>
              <span className="shrink-0 rounded border border-[rgba(255,255,255,0.18)] px-3 py-1 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.16em] text-[rgba(255,255,255,0.62)]">
                System Insight
              </span>
            </div>
            <h1 className="mt-8 text-[30px] font-bold leading-[1.12] tracking-[-0.015em] text-white max-sm:mt-6 max-sm:text-[24px]">
              {topic.title}
            </h1>
            <p className="mt-4 max-w-[720px] text-[16px] font-normal leading-[1.5] text-[rgba(194,209,232,0.82)] max-sm:text-[15px]">
              {topic.excerpt}
            </p>
            {topic.supportingText && (
              <p className="mt-5 max-w-[760px] text-[15px] font-normal leading-[1.55] text-[rgba(194,209,232,0.78)] max-sm:text-[14px]">
                {topic.supportingText}
              </p>
            )}
          </div>
        </div>
        </div>
      </section>

      <section className="border-t-[3px] border-[#0A1628] bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-10 py-14 max-md:px-5 md:py-16 lg:py-20">
          <div className="max-w-[840px]">
            <div className="flex flex-col">
              {topic.body.sections.map((section, idx) => {
                const isMechanism = section.title === 'Mechanism';
                const isFirst = idx === 0;

                return (
                  <div
                    key={section.title}
                    className={
                      isFirst ? '' : 'mt-9 border-t border-[rgba(10,22,40,0.08)] pt-9'
                    }
                  >
                    {/* Labels act as anchors (not boxed headers) */}
                    <p className="text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.72)]">
                      {section.title}
                    </p>

                    <p
                      className={`mt-3 text-[17px] font-normal leading-[1.48] ${
                        isMechanism
                          ? 'text-[#0A1628] font-semibold leading-[1.65]'
                          : 'text-[rgba(69,82,104,0.84)]'
                      }`}
                    >
                      {section.content}
                    </p>
                  </div>
                );
              })}
            </div>

            {topic.relatedInsights && topic.relatedInsights.length > 0 && (
              <div className="mt-12 border-t border-[rgba(10,22,40,0.08)] pt-10">
                <p className="text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.72)]">
                  Related insights
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  {topic.relatedInsights.map((item) => (
                    <Link
                      key={item.slug}
                      href={L(`/insights?topic=${item.slug}`)}
                      className="group inline-flex items-start text-[16px] font-semibold leading-[1.45] text-[#0A1628] transition-colors hover:text-[#2B5CE6] max-sm:text-[15px]"
                    >
                      <span className="mr-2 text-[rgba(90,100,120,0.72)]">→</span>
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-12 border-t border-[rgba(10,22,40,0.08)] pt-10">
              {nextTopic && (
                <Link
                  href={L(`/insights?topic=${nextTopic.slug}`)}
                  className="group block"
                >
                  <span className="text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.11em] text-[rgba(90,100,120,0.72)]">
                    Next insight →
                  </span>
                  <span className="mt-3 block text-[17px] font-semibold leading-[1.48] text-[#0A1628] transition-colors group-hover:text-[#2B5CE6]">
                    {nextTopic.title}
                  </span>
                </Link>
              )}

              <div className="mt-10 flex justify-end border-t border-[rgba(10,22,40,0.08)] pt-8">
                <Link
                  href={L(topicOrigin.anchorHref)}
                  className="text-right text-[16px] font-medium leading-[1.5] text-[#2B5CE6] transition-colors hover:text-[#1E4AC4] max-sm:text-[15px]"
                >
                  Back to {topicOrigin.title} section →
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default InsightTopicDetail;
