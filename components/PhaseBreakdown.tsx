"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const W = "max-w-[1280px] mx-auto px-5 md:px-10";

const fade = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.55, ease: "easeOut" as const, delay },
});

export default function PhaseBreakdown() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section ref={ref} className="bg-white py-24 lg:py-32">
      <div className={W}>
        <div className="grid grid-cols-12 gap-x-8">

          {/* Rail */}
          <div className="hidden md:flex md:col-span-2 flex-col gap-1 self-start">
            <span className="text-sm text-neutral-400">03</span>
            <span className="text-sm text-neutral-500">Phases</span>
          </div>

          {/* Content */}
          <div className="col-span-12 md:col-span-10">

            {/* Eyebrow */}
            <motion.p
              className="text-sm text-neutral-500 mb-8"
              {...fade(0)}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
            >
              Phase Breakdown
            </motion.p>

            {/* Intro */}
            <motion.p
              className="text-sm leading-relaxed text-neutral-400 max-w-[480px] mb-12"
              {...fade(0.08)}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
            >
              The system is established through a defined progression.
            </motion.p>

            {/* Main lines — same axis, one dominant moment */}
            <div className="mb-24">

              <motion.p
                className="text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-neutral-700"
                {...fade(0.18)}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
              >
                Direction is made explicit.
              </motion.p>

              <motion.p
                className="text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-neutral-700 mt-2"
                {...fade(0.28)}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
              >
                Structure is established to support it.
              </motion.p>

              <motion.p
                className="text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-neutral-700 mt-2"
                {...fade(0.38)}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
              >
                Execution operates within that structure.
              </motion.p>

              {/* Peak — single dominant moment, slight right offset */}
              <motion.p
                className="text-2xl lg:text-[2rem] font-bold tracking-tight leading-[1.15] text-neutral-950 mt-10 md:ml-[72px]"
                {...fade(0.50)}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
              >
                The system then stabilizes into consistent operation.
              </motion.p>

            </div>

            {/* Reinforcement — grouped unit, tighter internal spacing */}
            <motion.div
              className="max-w-[520px]"
              {...fade(0.65)}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
            >
              <p className="text-base lg:text-lg leading-relaxed text-neutral-500 font-normal mb-1">
                Each phase builds on the previous one.
              </p>
              <p className="text-base lg:text-lg leading-relaxed text-neutral-500 font-normal mb-5">
                No phase stands alone.
              </p>
              <p className="text-base lg:text-lg leading-relaxed text-neutral-800 font-bold">
                Control is established progressively—until the system operates as one.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
