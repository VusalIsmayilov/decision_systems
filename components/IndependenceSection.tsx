"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const W = "max-w-[1280px] mx-auto px-5 md:px-10";

const fade = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.55, ease: "easeOut" as const, delay },
});

export default function IndependenceSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section ref={ref} className="bg-neutral-950 py-24 lg:py-32">
      <div className={W}>
        <div className="grid grid-cols-12 gap-x-8">

          {/* Rail */}
          <div className="hidden md:flex md:col-span-2 flex-col gap-1 self-start">
            <span className="text-sm text-neutral-600">06</span>
            <span className="text-sm text-neutral-500">Independence</span>
          </div>

          {/* Content */}
          <div className="col-span-12 md:col-span-10">

            {/* Eyebrow — spans both zones */}
            <motion.p
              className="text-sm text-neutral-500 mb-12"
              {...fade(0)}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
            >
              Independence
            </motion.p>

            {/* Two-zone layout */}
            <div className="flex flex-col md:flex-row items-start gap-y-12 md:gap-y-0 md:gap-x-16">

              {/* LEFT — principle anchor */}
              <div className="w-full md:w-[38%] md:shrink-0 md:pt-0">
                <motion.p
                  className="text-3xl lg:text-4xl font-semibold tracking-tight leading-[1.1] text-neutral-50"
                  {...fade(0.08)}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                >
                  Control requires independence.
                </motion.p>
              </div>

              {/* RIGHT — system behavior clusters */}
              <div className="w-full md:flex-1">

                {/* Cluster 1 — contamination, base alignment, tight */}
                <motion.p
                  className="text-xl lg:text-2xl font-semibold tracking-tight leading-[1.25] text-neutral-400 max-w-[540px] mb-14"
                  {...fade(0.22)}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                >
                  When those responsible for delivery influence direction or structure, control is compromised.
                </motion.p>

                {/* Cluster 2 — distortion, shifted right, more space above */}
                <motion.p
                  className="text-xl lg:text-2xl font-semibold tracking-tight leading-[1.25] text-neutral-400 max-w-[480px] md:ml-[80px] mb-20"
                  {...fade(0.36)}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                >
                  Decisions shift toward delivery convenience rather than system integrity.
                </motion.p>

                {/* Cluster 3 — intervention, left edge, turning point */}
                <motion.p
                  className="text-xl lg:text-2xl font-bold tracking-tight leading-[1.2] text-neutral-50 max-w-[480px] mb-8"
                  {...fade(0.52)}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                >
                  Independence separates ownership from execution.
                </motion.p>

                {/* Cluster 4 — result, shifted right, subordinate */}
                <motion.p
                  className="text-base lg:text-lg leading-relaxed text-neutral-400 font-normal max-w-[400px] md:ml-[64px]"
                  {...fade(0.64)}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                >
                  This preserves objectivity, protects structure, and ensures the system operates under control—not influence.
                </motion.p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
