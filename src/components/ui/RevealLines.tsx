import { motion } from 'framer-motion';

interface RevealLinesProps {
  lines: string[];
  className?: string;
  delay?: number;
  /** Animate on mount instead of when scrolled into view */
  immediate?: boolean;
  as?: 'h1' | 'h2' | 'h3';
}

/**
 * Each line rises out of its own mask, staggered. Used for headings only,
 * so the motion stays tied to the one element a section leads with.
 */
export default function RevealLines({
  lines,
  className = '',
  delay = 0,
  immediate = false,
  as: Tag = 'h2',
}: RevealLinesProps) {
  const trigger = immediate
    ? { animate: { y: '0%' } }
    : { whileInView: { y: '0%' }, viewport: { once: true, margin: '-80px' } };

  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
          <motion.span
            className="block"
            initial={{ y: '105%' }}
            {...trigger}
            transition={{ duration: 1.1, delay: delay + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
          >
            {line}
            {/* Keeps words apart in the accessible name when lines are joined */}
            {i < lines.length - 1 && ' '}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
