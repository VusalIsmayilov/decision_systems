"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const statements = [
  { text: "The same decision produces different outcomes across teams.",         col: "col-start-5 col-span-3", mt: "mt-0"  },
  { text: "Information is available, but decisions do not become consistent.",   col: "col-start-9 col-span-3", mt: "mt-8"  },
  { text: "Priorities shift without a stable reference point.",                  col: "col-start-6 col-span-3", mt: "mt-8"  },
  { text: "Ownership exists, but does not translate into coordinated outcomes.", col: "col-start-8 col-span-3", mt: "mt-16" },
  { text: "Questions repeat, even when answers already exist.",                  col: "col-start-3 col-span-4", mt: "-mt-8" },
];

const fade = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.7, ease: "easeOut" as const, delay },
});

export default function ExecutiveProblemPatterns() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });

  return (
    <section ref={ref} className="bg-neutral-50 pt-16 pb-14 lg:pt-20 lg:pb-[4.5rem]">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10">
        <div className="grid grid-cols-12 gap-x-8">

          {/* Rail */}
          <div className="hidden md:flex md:col-span-2 flex-col gap-1">
            <span className="text-sm text-neutral-400">02</span>
            <span className="text-sm text-neutral-500">Recognition</span>
          </div>

          {/* Content */}
          <div className="col-span-12 md:col-span-10">

            {/* ── Desktop / Tablet ── */}
            <div className="hidden md:grid grid-cols-12 gap-x-6">
              <motion.h2
                className="col-start-1 col-span-3 text-3xl lg:text-4xl font-semibold tracking-tight leading-[1.1] text-neutral-950"
                {...fade(0)}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
              >
                A pattern we see across organizations
              </motion.h2>

              {statements.map((s, i) => (
                <motion.p
                  key={i}
                  className={`${s.col} ${s.mt} text-base lg:text-lg leading-relaxed text-neutral-600 font-normal`}
                  {...fade(0.18 + i * 0.13)}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                >
                  {s.text}
                </motion.p>
              ))}
            </div>

            {/* ── Mobile ── */}
            <div className="md:hidden space-y-8">
              <h2 className="text-3xl font-semibold tracking-tight leading-[1.1] text-neutral-950">
                A pattern we see across organizations
              </h2>
              {statements.map((s, i) => (
                <p key={i} className="text-base leading-relaxed text-neutral-600 font-normal">
                  {s.text}
                </p>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
