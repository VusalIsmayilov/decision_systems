"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fade = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.65, ease: "easeOut" as const, delay },
});

export default function ModelV2() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section ref={ref} className="bg-white pt-[40px] pb-[100px]">
      <div className="max-w-[940px] mx-auto px-8">

        {/* Top label */}
        <motion.p
          className="mb-6"
          style={{ fontSize: "11px", letterSpacing: "0.12em", color: "#9CA3AF", textTransform: "uppercase" }}
          {...fade(0)}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
          01&nbsp;&nbsp;Model
        </motion.p>

        {/* ── Block 1: Opening statement ── */}
        <motion.p
          className="text-[36px] lg:text-[42px] font-semibold tracking-tight leading-[1.1] text-neutral-950 max-w-[640px] mb-5"
          {...fade(0.08)}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
          We do not operate through fragmented advisory, governance, or delivery efforts.
        </motion.p>

        {/* ── Block 2: Supporting paragraph ── */}
        <motion.p
          className="text-base lg:text-[17px] leading-[1.6] max-w-[460px] mb-[60px]"
          style={{ color: "#6B7280" }}
          {...fade(0.08)}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
          We take ownership of the data and AI function as a single system—where direction,
          structure, and execution operate under unified control.
        </motion.p>

        {/* ── Block 3: Comparison ── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-x-[120px] items-start max-w-[860px] mb-20"
          {...fade(0.16)}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >

          {/* Left — Fragmented (de-emphasised, shifted down) */}
          <div className="md:mt-[8px]">
            <p
              className="mb-4"
              style={{
                fontSize: "11px",
                letterSpacing: "0.12em",
                color: "#9CA3AF",
                textTransform: "uppercase",
              }}
            >
              Fragmented
            </p>
            <p
              className="text-base lg:text-[17px] leading-relaxed max-w-[380px]"
              style={{ color: "#94A3B8", fontWeight: 400, opacity: 0.9 }}
            >
              When these elements are separated, fragmentation persists.
            </p>
          </div>

          {/* Right — Unified system (dominant) */}
          <div>
            <p
              className="mb-4"
              style={{
                fontSize: "11px",
                letterSpacing: "0.12em",
                color: "#9CA3AF",
                textTransform: "uppercase",
              }}
            >
              Unified system
            </p>
            <p
              className="text-base lg:text-[17px] leading-relaxed max-w-[380px]"
              style={{ color: "#111827", fontWeight: 500 }}
            >
              When unified, the system becomes consistent, accountable, and reliable.
            </p>
          </div>

        </motion.div>

        {/* ── Block 4: Conclusion ── */}
        <div className="mt-20">

          <motion.p
            className="text-base lg:text-[17px] font-normal mb-2"
            style={{ color: "#9CA3AF" }}
            {...fade(0.26)}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
          >
            This is not coordination.
          </motion.p>

          <motion.p
            className="text-[28px] lg:text-[30px] tracking-tight leading-[1.1] mb-8"
            style={{ color: "#111827", fontWeight: 600 }}
            {...fade(0.33)}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
          >
            It is full-system ownership.
          </motion.p>

          <motion.p
            className="text-base lg:text-[17px] leading-[1.6] max-w-[460px]"
            style={{ color: "#374151" }}
            {...fade(0.40)}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
          >
            The engagement is defined by control of the system—not by projects or services.
          </motion.p>

        </div>

      </div>
    </section>
  );
}
