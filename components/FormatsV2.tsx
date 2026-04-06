"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const W = "mx-auto max-w-[1280px] px-5 md:px-10";

const fade = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.65, ease: "easeOut" as const, delay },
});

export default function FormatsV2() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section ref={ref} className="bg-neutral-50 py-28 lg:py-36">
      <div className={W}>
        <div className="grid grid-cols-12 gap-x-8">

          <div className="hidden md:block md:col-span-1">
            <span className="text-xs text-neutral-300 tabular-nums">07</span>
          </div>

          <div className="col-span-12 md:col-span-11">

            <motion.p
              className="text-sm text-neutral-400 mb-14"
              {...fade(0)}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
            >
              Engagement Formats
            </motion.p>

            {/* Contrast pair — constant vs variable */}
            <motion.div
              className="mb-20"
              {...fade(0.08)}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
            >
              <p className="text-4xl lg:text-[52px] font-semibold tracking-tight leading-[1.1] text-neutral-950">
                The model remains constant.
              </p>
              <p className="text-4xl lg:text-[52px] font-semibold tracking-tight leading-[1.1] text-neutral-300 mt-2">
                The level of involvement adapts.
              </p>
            </motion.div>

            {/* Three format expressions — distributed across horizontal field */}
            <div className="mb-20">
              <motion.p
                className="text-xl font-medium text-neutral-600 max-w-[340px]"
                {...fade(0.18)}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
              >
                It can be embedded as leadership.
              </motion.p>
              <motion.p
                className="text-xl font-medium text-neutral-600 max-w-[380px] mt-6 md:ml-[24%]"
                {...fade(0.26)}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
              >
                It can operate as oversight across initiatives.
              </motion.p>
              <motion.p
                className="text-xl font-medium text-neutral-600 max-w-[420px] mt-6 md:ml-[46%]"
                {...fade(0.34)}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
              >
                It can focus on targeted intervention where control is required.
              </motion.p>
            </div>

            {/* System invariance */}
            <motion.div
              className="mb-14"
              {...fade(0.44)}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
            >
              <p className="text-base text-neutral-400">
                The format changes based on the situation.
              </p>
              <p className="text-2xl lg:text-3xl font-bold tracking-tight text-neutral-950 mt-4">
                The system does not.
              </p>
            </motion.div>

            <motion.p
              className="text-base text-neutral-500 max-w-[500px]"
              {...fade(0.52)}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
            >
              Ownership, structure, and execution remain aligned under the same model.
            </motion.p>

          </div>
        </div>
      </div>
    </section>
  );
}
