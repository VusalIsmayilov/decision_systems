"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const W = "max-w-[1280px] mx-auto px-5 md:px-10";

const fade = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.55, ease: "easeOut" as const, delay },
});

export default function ControlModel() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section ref={ref} className="bg-navy py-24 lg:py-32">
      <div className={W}>
        <div className="grid grid-cols-12 gap-x-8">

          {/* Rail */}
          <div className="hidden md:flex md:col-span-2 flex-col gap-1 self-start">
            <span className="text-sm text-neutral-600">05</span>
            <span className="text-sm text-neutral-500">Control Model</span>
          </div>

          {/* Content — no global width wrapper; blocks control their own */}
          <div className="col-span-12 md:col-span-10">

            {/* Eyebrow */}
            <motion.p
              className="text-sm text-neutral-500 mb-10"
              {...fade(0)}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
            >
              Control Model
            </motion.p>

            {/* Headline — primary anchor */}
            <motion.p
              className="text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-neutral-50 max-w-[560px] mb-20"
              {...fade(0.08)}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
            >
              Control is established through ownership and enforced through structure.
            </motion.p>

            {/* Failure — two conditions on same horizontal plane */}
            <div className="flex items-start mb-28">
              <motion.p
                className="text-xl lg:text-2xl font-semibold tracking-tight leading-[1.25] text-neutral-400 max-w-[280px]"
                {...fade(0.22)}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
              >
                When ownership is unclear, decisions drift.
              </motion.p>
              <motion.p
                className="text-xl lg:text-2xl font-semibold tracking-tight leading-[1.25] text-neutral-400 max-w-[280px] ml-[110px]"
                {...fade(0.36)}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
              >
                When structure is weak, execution diverges.
              </motion.p>
            </div>

            {/* Resolution — shifted right, decisive close */}
            <motion.div
              className="md:ml-[60px]"
              {...fade(0.55)}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
            >
              <p className="text-2xl lg:text-3xl font-bold tracking-tight leading-[1.15] text-neutral-200">
                It is not an overlay.
              </p>
              <p className="text-2xl lg:text-3xl font-bold tracking-tight leading-[1.15] text-neutral-50 mt-2">
                It is how the system operates.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
