import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Under construction",
  robots: { index: false, follow: false },
};

export default function UnderConstructionPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-[#0A1628]">
      <div className="mx-auto flex w-full max-w-[640px] flex-1 flex-col justify-center px-5 py-16 md:px-10 md:py-24">
        <p className="text-[12px] font-semibold uppercase leading-[1.3] tracking-[0.08em] text-[rgba(255,255,255,0.42)]">
          DataOfis Partners
        </p>
        <h1 className="mt-8 text-[40px] font-bold leading-[1.06] tracking-[-0.03em] text-white max-sm:text-[32px]">
          Under construction
        </h1>
        <p className="mt-8 text-[17px] font-normal leading-[1.55] text-[rgba(194,209,232,0.82)] max-sm:text-[16px]">
          We are preparing an updated presence for this address. Access is temporarily limited
          while the system is finalized.
        </p>
        <p className="mt-6 text-[15px] font-normal leading-[1.55] text-[rgba(194,209,232,0.68)] max-sm:text-[14px]">
          For executive inquiries, contact{" "}
          <a
            href="mailto:contact@dataofis.az"
            className="text-[rgba(194,209,232,0.92)] underline decoration-[rgba(255,255,255,0.25)] underline-offset-4 transition-colors hover:text-white hover:decoration-[rgba(255,255,255,0.45)]"
          >
            contact@dataofis.az
          </a>
          .
        </p>
      </div>
    </div>
  );
}
