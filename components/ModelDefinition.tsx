"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const W = "max-w-[1280px] mx-auto px-5 md:px-10";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: "easeOut" as const, delay },
});

export default function ModelDefinition() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section ref={ref} className="bg-navy py-24 lg:py-32">
      <div className={W}>
        <div className="grid grid-cols-12 gap-x-8">

          {/* Rail */}
          <div className="hidden md:flex md:col-span-2 flex-col gap-1">
            <span className="text-sm text-neutral-700">01</span>
            <span className="text-sm text-neutral-600">Model</span>
          </div>

          {/* Content — no global width wrapper; each block controls its own width */}
          <div className="col-span-12 md:col-span-10">

            {/* Headline — dominant horizontal anchor, fills full content width */}
            <motion.p
              className="text-3xl lg:text-[2.65rem] font-bold tracking-tight leading-[1.05] text-neutral-50 mb-6"
              {...fadeUp(0)}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            >
              We do not operate through fragmented advisory, governance, or delivery efforts.
            </motion.p>

            {/* Body — wide secondary plane, lower contrast */}
            <motion.p
              className="text-lg lg:text-xl font-normal leading-[1.55] text-neutral-400 max-w-[660px] mb-28"
              {...fadeUp(0.1)}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            >
              We take ownership of the data and AI function as a single system—where direction, structure, and execution operate under unified control.
            </motion.p>

            {/* Anchor A — left, structural context (quiet) */}
            <motion.div
              className="max-w-[300px] md:ml-[8px] mb-8"
              {...fadeUp(0.2)}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            >
              <p className="text-base leading-relaxed text-neutral-500">
                When these elements are separated, fragmentation persists.
              </p>
              <p className="text-base leading-relaxed text-neutral-500 mt-4">
                When unified, the system becomes consistent, accountable, and reliable.
              </p>
            </motion.div>

            {/* Anchor B — right, center of gravity */}
            <motion.div
              className="md:ml-[40%] mb-24"
              {...fadeUp(0.32)}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            >
              <p className="text-2xl lg:text-3xl font-normal leading-[1.15] text-neutral-700">
                This is not coordination.
              </p>
              <p className="text-3xl lg:text-[2.15rem] font-bold leading-[1.1] text-neutral-50 mt-2">
                It is full-system ownership.
              </p>
            </motion.div>

            {/* Anchor C — lower left, detached conclusion */}
            <motion.p
              className="text-lg font-bold leading-[1.4] text-neutral-100 max-w-[500px] md:ml-[44px]"
              {...fadeUp(0.44)}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            >
              The engagement is defined by control of the system—not by projects or services.
            </motion.p>

          </div>
        </div>
      </div>
    </section>
  );
}
