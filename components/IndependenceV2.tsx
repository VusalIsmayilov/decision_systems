"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const W = "mx-auto max-w-[1280px] px-5 md:px-10";

const fade = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.65, ease: "easeOut" as const, delay },
});

export default function IndependenceV2() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section ref={ref} className="bg-white py-28 lg:py-36 border-t border-neutral-100">
      <div className={W}>
        <div className="grid grid-cols-12 gap-x-8">

          <div className="hidden md:block md:col-span-1">
            <span className="text-xs text-neutral-300 tabular-nums">06</span>
          </div>

          <div className="col-span-12 md:col-span-11">

            <motion.p
              className="text-sm text-neutral-400 mb-14"
              {...fade(0)}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
            >
              Independence
            </motion.p>

            <div className="flex flex-col md:flex-row items-start gap-y-16 md:gap-x-24">

              {/* LEFT — principle anchor */}
              <div className="md:w-[38%] md:shrink-0">
                <motion.p
                  className="text-4xl lg:text-[44px] font-semibold tracking-tight leading-[1.1] text-neutral-950"
                  {...fade(0.08)}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                >
                  Control requires independence.
                </motion.p>
              </div>

              {/* RIGHT — behavior clusters */}
              <div className="md:flex-1 space-y-10">
                <motion.p
                  className="text-xl font-normal leading-relaxed text-neutral-500 max-w-[480px]"
                  {...fade(0.18)}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                >
                  When those responsible for delivery influence direction or structure,
                  control is compromised.
                </motion.p>

                <motion.p
                  className="text-xl font-normal leading-relaxed text-neutral-500 max-w-[440px]"
                  {...fade(0.28)}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                >
                  Decisions shift toward delivery convenience rather than system integrity.
                </motion.p>

                <motion.p
                  className="text-2xl font-semibold tracking-tight leading-[1.2] text-neutral-950 max-w-[440px]"
                  {...fade(0.38)}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                >
                  Independence separates ownership from execution.
                </motion.p>

                <motion.p
                  className="text-base leading-relaxed text-neutral-400 max-w-[380px]"
                  {...fade(0.48)}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                >
                  This preserves objectivity, protects structure, and ensures the system
                  operates under control—not influence.
                </motion.p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
