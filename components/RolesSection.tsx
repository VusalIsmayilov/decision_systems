"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const W = "max-w-[1280px] mx-auto px-5 md:px-10";

const fade = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.55, ease: "easeOut" as const, delay },
});

// Horizontal gaps and vertical offsets — intentionally irregular
const layers = [
  { label: "Direction",    mr: "md:mr-16", mt: "md:mt-0"  },
  { label: "Structure",    mr: "md:mr-24", mt: "md:mt-5"  },
  { label: "Execution",    mr: "md:mr-10", mt: "md:mt-2"  },
  { label: "System Design",mr: "",         mt: "md:mt-9"  },
];

export default function RolesSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section ref={ref} className="bg-neutral-50 py-24 lg:py-32">
      <div className={W}>
        <div className="grid grid-cols-12 gap-x-8">

          {/* Rail */}
          <div className="hidden md:flex md:col-span-2 flex-col gap-1 self-start">
            <span className="text-sm text-neutral-400">04</span>
            <span className="text-sm text-neutral-500">Roles</span>
          </div>

          {/* Content */}
          <div className="col-span-12 md:col-span-10">

            {/* Eyebrow */}
            <motion.p
              className="text-sm text-neutral-500 mb-8"
              {...fade(0)}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
            >
              Roles
            </motion.p>

            {/* Intro */}
            <motion.div
              className="max-w-[480px] mb-16 space-y-2"
              {...fade(0.08)}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
            >
              <p className="text-base lg:text-lg leading-relaxed text-neutral-600">
                The system operates through clearly defined ownership layers.
              </p>
              <p className="text-base lg:text-lg leading-relaxed text-neutral-600">
                Each layer has a distinct responsibility.
              </p>
            </motion.div>

            {/* Ownership labels — placed anchors, irregular offsets */}
            <div className="flex flex-wrap items-start mb-24">
              {layers.map((layer, i) => (
                <motion.p
                  key={i}
                  className={`text-xl lg:text-2xl font-semibold tracking-tight text-neutral-950 ${layer.mr} ${layer.mt}`}
                  {...fade(0.22 + i * 0.1)}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                >
                  {layer.label}
                </motion.p>
              ))}
            </div>

            {/* Governing principle */}
            <motion.p
              className="text-2xl lg:text-3xl font-bold tracking-tight text-neutral-950 mb-12"
              {...fade(0.65)}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
            >
              No overlap. No ambiguity.
            </motion.p>

            {/* Reinforcement — offset right, tighter */}
            <motion.div
              className="max-w-[480px] md:ml-[200px] space-y-2"
              {...fade(0.78)}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
            >
              <p className="text-base lg:text-lg leading-relaxed text-neutral-600 font-normal">
                Ownership is structured to ensure coordination across direction, structure, execution, and system design.
              </p>
              <p className="text-base lg:text-lg leading-relaxed text-neutral-800 font-semibold">
                Together, these ownership layers ensure the system operates as a single coordinated system under control.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
