import { notFound } from "next/navigation";
import InsightTopicDetail from "@/components/InsightTopicDetail";
import { INSIGHTS_TOPICS_BY_SLUG } from "@/lib/insights-topic-data";
import type { Locale } from "@/lib/i18n";

export default async function InsightTopicPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: loc, slug } = await params;
  const locale = loc as Locale;
  const topic = INSIGHTS_TOPICS_BY_SLUG[slug];
  if (!topic) return notFound();

  return <InsightTopicDetail topic={topic} locale={locale} />;
}
