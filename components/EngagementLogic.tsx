"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const W = "max-w-[1280px] mx-auto px-5 md:px-10";

const fade = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.55, ease: "easeOut" as const, delay },
});

export default function EngagementLogic() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section ref={ref} className="bg-neutral-950 py-24 lg:py-32">
      <div className={W}>
        <div className="grid grid-cols-12 gap-x-8">

          {/* Headline — left anchor, dropped lower than body start */}
          <div className="col-span-12 md:col-span-6 md:mt-36">
            <div className="flex gap-3 mb-5">
              <span className="text-sm text-neutral-600">02</span>
              <span className="text-sm text-neutral-500">Causality</span>
            </div>
            <motion.p
              className="text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.1] text-neutral-50"
              {...fade(0)}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
            >
              The system operates on a fixed logic.
            </motion.p>
          </div>

          {/* Body — primary system, starts at row top */}
          <div className="col-span-12 md:col-span-5 md:col-start-8 mt-12 md:mt-0">
            <div className="max-w-[540px]">

              {/* Unit 1 — Logic block (tight, single compact set) */}
              <motion.div
                className="mb-14"
                {...fade(0.1)}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
              >
                <p className="text-base lg:text-lg leading-relaxed text-neutral-200 font-medium mb-2">
                  Direction is defined first.
                </p>
                <p className="text-base lg:text-lg leading-relaxed text-neutral-300 font-normal mb-2">
                  Structure is established to support it.
                </p>
                <p className="text-base lg:text-lg leading-relaxed text-neutral-300 font-normal">
                  Execution operates within that structure.
                </p>
              </motion.div>

              {/* Unit 2 — Failure block (consequence, low contrast) */}
              <motion.div
                className="space-y-2 mb-16"
                {...fade(0.35)}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
              >
                <p className="text-base lg:text-lg leading-relaxed text-neutral-500 font-normal">
                  Execution without direction disperses effort without outcome.
                </p>
                <p className="text-base lg:text-lg leading-relaxed text-neutral-500 font-normal">
                  Execution without structure creates inconsistency and loss of control.
                </p>
              </motion.div>

              {/* Unit 3 — Control block (dominant cluster, indented together) */}
              <motion.div
                className="md:ml-[80px] mb-20"
                {...fade(0.55)}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
              >
                <p className="text-xl lg:text-2xl font-bold tracking-tight leading-[1.2] text-neutral-50 mb-5">
                  Control exists only when this order is maintained.
                </p>
                <p className="text-base lg:text-lg leading-relaxed text-neutral-500 font-normal mb-1">
                  This is not a preference.
                </p>
                <p className="text-base lg:text-lg leading-relaxed text-neutral-200 font-normal">
                  It is the condition required for the system to function.
                </p>
              </motion.div>

              {/* Final Rule — isolated, conclusive */}
              <motion.p
                className="text-base lg:text-lg font-semibold leading-relaxed text-neutral-100"
                {...fade(0.75)}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
              >
                All work follows this logic—without exception.
              </motion.p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
