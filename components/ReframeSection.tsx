"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const lines = [
  "Data initiatives continue to expand, but they do not translate into consistent decisions.",
  "Ownership exists across teams, yet outcomes remain misaligned.",
  "Reporting activity increases, but decision behavior does not change.",
  "The function operates with visible effort, but without consistent control.",
];

const fade = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.7, ease: "easeOut" as const, delay },
});

export default function ReframeSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });

  return (
    <section ref={ref} className="bg-navy py-16 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10">
        <div className="grid grid-cols-12 gap-x-8">

          {/* Rail */}
          <div className="hidden md:flex md:col-span-2 flex-col gap-1">
            <span className="text-sm text-neutral-600">03</span>
            <span className="text-sm text-neutral-500">Causality</span>
          </div>

          {/* Content */}
          <div className="col-span-12 md:col-span-10">

            {/* ── Desktop / Tablet ── */}
            <div className="hidden md:grid grid-cols-12 gap-x-6 items-start">

              {/* Left — statements */}
              <div className="col-start-1 col-span-5 space-y-4">
                {lines.map((line, i) => (
                  <motion.p
                    key={i}
                    className="text-base lg:text-lg leading-relaxed text-neutral-300 font-normal"
                    {...fade(0.15 + i * 0.13)}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  >
                    {line}
                  </motion.p>
                ))}
              </div>

              {/* Right — heading */}
              <div className="col-start-9 col-span-4">
                <motion.h2
                  className="text-3xl lg:text-4xl font-semibold tracking-tight leading-[1.1] text-neutral-50"
                  {...fade(0)}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                >
                  Why Current<br />Efforts Fail
                </motion.h2>
              </div>

            </div>

            {/* ── Mobile ── */}
            <div className="md:hidden space-y-8">
              <h2 className="text-3xl font-semibold tracking-tight leading-[1.1] text-neutral-50">
                Why Current<br />Efforts Fail
              </h2>
              <div className="space-y-4">
                {lines.map((line, i) => (
                  <p key={i} className="text-base leading-relaxed text-neutral-300 font-normal">
                    {line}
                  </p>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
