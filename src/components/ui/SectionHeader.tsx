import type { ReactNode } from 'react';
import RevealLines from './RevealLines';
import FadeInWrapper from './FadeInWrapper';

interface SectionHeaderProps {
  label: string;
  title: string[];
  intro?: ReactNode;
  className?: string;
}

/** Left rail carries the label; the heading and intro sit in the wide column. */
export default function SectionHeader({ label, title, intro, className = '' }: SectionHeaderProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 mb-14 md:mb-20 ${className}`}>
      <FadeInWrapper className="md:col-span-3 md:pt-4">
        <p className="rail-label">{label}</p>
      </FadeInWrapper>
      <div className="md:col-span-9">
        <RevealLines lines={title} className="heading-xl" />
        {intro && (
          <FadeInWrapper delay={0.2}>
            <div className="mt-6 md:mt-8 text-[17px] leading-[1.7] text-muted max-w-[60ch]">{intro}</div>
          </FadeInWrapper>
        )}
      </div>
    </div>
  );
}
