interface FramedCoreProps {
  children: React.ReactNode;
  maxWidth?: number;
  offsetLeft?: boolean;
}

export default function FramedCore({ children, maxWidth = 700, offsetLeft = true }: FramedCoreProps) {
  return (
    <div
      style={{ maxWidth }}
      className={`flex flex-col gap-6 ${offsetLeft ? 'mr-auto' : 'mx-auto'}`}
    >
      {children}
    </div>
  );
}
