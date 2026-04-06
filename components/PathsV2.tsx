"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const W = "mx-auto max-w-[1280px] px-5 md:px-10";

const fade = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.65, ease: "easeOut" as const, delay },
});

export default function PathsV2() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section ref={ref} className="bg-white py-28 lg:py-36 border-t border-neutral-100">
      <div className={W}>
        <div className="grid grid-cols-12 gap-x-8">

          <div className="hidden md:block md:col-span-1">
            <span className="text-xs text-neutral-300 tabular-nums">08</span>
          </div>

          <div className="col-span-12 md:col-span-11">

            <motion.p
              className="text-sm text-neutral-400 mb-14"
              {...fade(0)}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
            >
              Engagement Paths
            </motion.p>

            <motion.p
              className="text-3xl lg:text-4xl font-semibold tracking-tight leading-[1.15] text-neutral-950 max-w-[520px] mb-20"
              {...fade(0.08)}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
            >
              Organizations enter from different starting points.
            </motion.p>

            {/* Entry points — diagonal top-left → bottom-right */}
            <div className="mb-16">
              <motion.p
                className="text-2xl font-medium tracking-tight text-neutral-600"
                {...fade(0.18)}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
              >
                a direction gap,
              </motion.p>
              <motion.p
                className="text-2xl font-medium tracking-tight text-neutral-600 mt-5 md:ml-[22%]"
                {...fade(0.26)}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
              >
                a control gap,
              </motion.p>
              <motion.p
                className="text-2xl font-medium tracking-tight text-neutral-600 mt-5 md:ml-[42%]"
                {...fade(0.34)}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
              >
                or an execution alignment gap.
              </motion.p>
            </div>

            {/* Entry vs Destination */}
            <div className="mb-24">
              <motion.p
                className="text-base text-neutral-400"
                {...fade(0.44)}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
              >
                The entry point differs.
              </motion.p>
              <motion.p
                className="text-xl font-semibold tracking-tight text-neutral-950 mt-4 md:ml-[28%]"
                {...fade(0.52)}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
              >
                The destination does not.
              </motion.p>
            </div>

            {/* Convergence — centered, definitive */}
            <motion.p
              className="text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.2] text-neutral-950 text-center"
              {...fade(0.62)}
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
