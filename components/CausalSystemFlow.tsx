import { type ReactNode } from 'react';

type FlowNode = {
  id: string;
  label?: ReactNode;
  x: number; // 0–100 (percentage)
  y: number; // 0–100
};

type FlowEdge = {
  from: string;
  to: string;
};

type CausalSystemFlowProps = {
  id?: string;

  // optional framing
  headline?: ReactNode;
  subline?: string;

  // system
  nodes: FlowNode[];
  edges: FlowEdge[];
};

export default function CausalSystemFlow({
  id = 'causal-system-flow',
  headline,
  subline,
  nodes,
  edges,
}: CausalSystemFlowProps) {
  const getNode = (id: string) => nodes.find((n) => n.id === id);

  return (
    <section id={id} className="w-full bg-[#F5F7FA]">
      <div className="mx-auto max-w-[1040px] px-10 py-20 max-md:px-5">

        {/* HEAD */}
        {(headline || subline) && (
          <div className="max-w-[640px]">
            {headline && (
              <h2 className="text-[28px] font-bold leading-[1.15] text-[#0A1628]">
                {headline}
              </h2>
            )}
            {subline && (
              <p className="mt-4 text-[15px] text-[#5A6478]">
                {subline}
              </p>
            )}
          </div>
        )}

        {/* FLOW FIELD */}
        <div className="relative mt-12 h-[420px] w-full overflow-hidden rounded-md bg-white border border-[rgba(10,22,40,0.06)]">

          {/* EDGES */}
          <svg className="absolute inset-0 h-full w-full">
            {edges.map((edge, i) => {
              const from = getNode(edge.from);
              const to = getNode(edge.to);
              if (!from || !to) return null;

              return (
                <line
                  key={i}
                  x1={`${from.x}%`}
                  y1={`${from.y}%`}
                  x2={`${to.x}%`}
                  y2={`${to.y}%`}
                  stroke="#F59E0B"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              );
            })}
          </svg>

          {/* NODES */}
          {nodes.map((node) => (
            <div
              key={node.id}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
              }}
            >
              <div className="rounded-full bg-[#0A1628] text-white px-3 py-1 text-[12px]">
                {node.label || node.id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}