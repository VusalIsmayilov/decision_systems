"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const W = "max-w-[1280px] mx-auto px-5 md:px-10";

const fade = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.55, ease: "easeOut" as const, delay },
});

export default function EngagementFormats() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section ref={ref} className="bg-white py-24 lg:py-32">
      <div className={W}>
        <div className="grid grid-cols-12 gap-x-8">

          {/* Rail */}
          <div className="hidden md:flex md:col-span-2 flex-col gap-1 self-start">
            <span className="text-sm text-neutral-400">07</span>
            <span className="text-sm text-neutral-500">Engagement Formats</span>
          </div>

          {/* Content — no global width wrapper */}
          <div className="col-span-12 md:col-span-10">

            {/* Eyebrow */}
            <motion.p
              className="text-sm text-neutral-500 mb-10"
              {...fade(0)}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
            >
              Engagement Formats
            </motion.p>

            {/* Opening contrast — tight single block */}
            <motion.div className="mb-20" {...fade(0.08)} animate={inView ? { opacity: 1 } : { opacity: 0 }}>
              <p className="text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-neutral-950">
                The model remains constant.
              </p>
              <p className="text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15] text-neutral-400 mt-2">
                The level of involvement adapts.
              </p>
            </motion.div>

            {/* Format expressions — distributed across horizontal field */}
            <div className="mb-24">
              <motion.p
                className="text-xl lg:text-2xl font-medium tracking-tight leading-[1.3] text-neutral-700 max-w-[340px]"
                {...fade(0.26)}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
              >
                It can be embedded as leadership.
              </motion.p>
              <motion.p
                className="text-xl lg:text-2xl font-medium tracking-tight leading-[1.3] text-neutral-700 max-w-[380px] md:ml-[28%] mt-8"
                {...fade(0.38)}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
              >
                It can operate as oversight across initiatives.
              </motion.p>
              <motion.p
                className="text-xl lg:text-2xl font-medium tracking-tight leading-[1.3] text-neutral-700 max-w-[420px] md:ml-[54%] mt-8"
                {...fade(0.50)}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
              >
                It can focus on targeted intervention where control is required.
              </motion.p>
            </div>

            {/* Contrast block — variable then invariant principle */}
            <div className="mb-20">
              <motion.p
                className="text-base lg:text-lg leading-relaxed text-neutral-400 font-normal"
                {...fade(0.64)}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
              >
                The format changes based on the situation.
              </motion.p>
              <motion.p
                className="text-xl lg:text-2xl font-bold tracking-tight leading-[1.2] text-neutral-950 mt-6"
                {...fade(0.72)}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
              >
                The system does not.
              </motion.p>
            </div>

            {/* Final baseline */}
            <motion.p
              className="text-base lg:text-lg leading-relaxed text-neutral-700 font-medium max-w-[520px]"
              {...fade(0.82)}
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
