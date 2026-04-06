import ReturnLink from "@/components/ReturnLink";

const W = "max-w-[1280px] mx-auto px-5 md:px-10";

export default function HeroHowWeWork() {
  return (
    <section className="bg-white pt-28 lg:pt-36 pb-24 lg:pb-32">
      <div className={W}>

        <div className="mb-10">
          <ReturnLink />
        </div>

        {/* Eyebrow */}
        <p className="text-sm text-neutral-500 mb-12">How We Work</p>

        {/* Main statement */}
        <h1 className="text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-navy max-w-[680px]">
          The system is<br />
          structured and<br />
          controlled as one.
        </h1>

        {/* Support */}
        <p className="mt-8 text-sm lg:text-base text-neutral-400 max-w-[380px] leading-relaxed">
          Not services. A controlled system.
        </p>

      </div>
    </section>
  );
}
