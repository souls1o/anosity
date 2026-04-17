type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <article className={`glass glow rounded-2xl p-6 shadow-[0_8px_40px_rgba(2,6,23,0.35)] ${className}`}>
      {children}
    </article>
  );
}
