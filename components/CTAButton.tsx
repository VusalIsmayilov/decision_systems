import Link from 'next/link';

interface CTAButtonProps {
  text: string;
  href: string;
}

export default function CTAButton({ text, href }: CTAButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-11 max-w-full items-center justify-center bg-[#2B5CE6] px-8 py-3 text-center text-[15px] font-semibold leading-none tracking-[0.02em] text-white transition-colors duration-200 hover:bg-[#1E4AC4] max-sm:px-5 max-sm:text-[14px]"
      style={{ borderRadius: 0 }}
    >
      {text}
    </Link>
  );
}
