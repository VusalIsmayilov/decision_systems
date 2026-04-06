"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const W = "max-w-[1280px] mx-auto px-5 md:px-10";

const fade = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.55, ease: "easeOut" as const, delay },
});

export default function EngagementPaths() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section ref={ref} className="bg-navy py-24 lg:py-32">
      <div className={W}>
        <div className="grid grid-cols-12 gap-x-8">

          {/* Rail */}
          <div className="hidden md:flex md:col-span-2 flex-col gap-1 self-start">
            <span className="text-sm text-neutral-600">08</span>
            <span className="text-sm text-neutral-500">Engagement Paths</span>
          </div>

          {/* Content */}
          <div className="col-span-12 md:col-span-10">

            {/* Eyebrow */}
            <motion.p
              className="text-sm text-neutral-500 mb-10"
              {...fade(0)}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
            >
              Engagement Paths
            </motion.p>

            {/* Headline */}
            <motion.p
              className="text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-neutral-50 mb-20"
              {...fade(0.08)}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
            >
              Organizations enter from different starting points.
            </motion.p>

            {/* Entry points — diagonal top-left → center → bottom-right */}
            <div className="mb-16">
              <motion.p
                className="text-xl lg:text-2xl font-semibold tracking-tight leading-[1.2] text-neutral-200"
                {...fade(0.22)}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
              >
                a direction gap,
              </motion.p>
              <motion.p
                className="text-xl lg:text-2xl font-semibold tracking-tight leading-[1.2] text-neutral-200 mt-6 md:ml-[26%]"
                {...fade(0.32)}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
              >
                a control gap,
              </motion.p>
              <motion.p
                className="text-xl lg:text-2xl font-semibold tracking-tight leading-[1.2] text-neutral-200 mt-6 md:ml-[50%]"
                {...fade(0.42)}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
              >
                or an execution alignment gap.
              </motion.p>
            </div>

            {/* Entry vs Destination — left anchor / center-right anchor */}
            <div className="mb-32">
              <motion.p
                className="text-base lg:text-lg leading-relaxed text-neutral-400 font-normal"
                {...fade(0.56)}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
              >
                The entry point differs.
              </motion.p>
              <motion.p
                className="text-xl lg:text-2xl font-semibold tracking-tight leading-[1.2] text-neutral-100 mt-4 md:ml-[36%]"
                {...fade(0.66)}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
              >
                The destination does not.
              </motion.p>
            </div>

            {/* Convergence — centered, everything above flows into this */}
            <motion.p
              className="text-xl lg:text-2xl font-semibold tracking-tight leading-[1.2] text-neutral-50 text-center"
              {...fade(0.80)}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
            >
              All paths converge into a single controlled system.
            </motion.p>

          </div>
        </div>
      </div>
    </section>
  );
}
