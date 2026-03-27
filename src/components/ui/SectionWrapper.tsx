import type { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  bg?: string;
  className?: string;
  labelledBy?: string;
}

export default function SectionWrapper({
  children,
  id,
  bg = "bg-white",
  className = "",
  labelledBy,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-10 lg:py-16 ${bg} ${className}`}
      aria-labelledby={labelledBy}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">{children}</div>
    </section>
  );
}
