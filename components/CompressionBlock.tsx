interface CompressionBlockProps {
  children: React.ReactNode;
  maxWidth?: number;
}

export default function CompressionBlock({ children, maxWidth = 560 }: CompressionBlockProps) {
  return (
    <div style={{ maxWidth }} className="flex flex-col gap-6">
      {children}
    </div>
  );
}
