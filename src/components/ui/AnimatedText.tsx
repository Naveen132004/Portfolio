import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  type?: 'word' | 'character';
}

export default function AnimatedText({ text, className = '', type = 'word' }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.9', 'start 0.25'],
  });

  if (type === 'character') {
    // Character-by-character reveal (great for headings)
    const characters = text.split('');
    return (
      <p ref={containerRef} className={`flex flex-wrap ${className}`}>
        {characters.map((char, i) => {
          const start = i / characters.length;
          const end = start + 1 / characters.length;
          return (
            <Character key={i} range={[start, end]} progress={scrollYProgress}>
              {char}
            </Character>
          );
        })}
      </p>
    );
  }

  // Word-by-word reveal (better for paragraphs)
  const words = text.split(' ');
  return (
    <p ref={containerRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

function Word({
  children,
  range,
  progress,
}: {
  children: string;
  range: [number, number];
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [5, 0]);
  const filter = useTransform(progress, range, ['blur(4px)', 'blur(0px)']);

  return (
    <span className="relative mr-[0.35em] mt-[0.15em]">
      <span className="opacity-0">{children}</span>
      <motion.span
        className="absolute left-0 top-0 will-change-transform"
        style={{ opacity, y, filter }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function Character({
  children,
  range,
  progress,
}: {
  children: string;
  range: [number, number];
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
}) {
  const opacity = useTransform(progress, range, [0.1, 1]);
  const y = useTransform(progress, range, [8, 0]);

  return (
    <span className="relative">
      <span className="opacity-0">{children === ' ' ? '\u00A0' : children}</span>
      <motion.span
        className="absolute left-0 top-0 will-change-transform"
        style={{ opacity, y }}
      >
        {children === ' ' ? '\u00A0' : children}
      </motion.span>
    </span>
  );
}
