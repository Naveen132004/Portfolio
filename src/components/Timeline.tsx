import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { timelineData } from '../data/timeline';
import SectionHeader from './ui/SectionHeader';

export default function Timeline() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ['start 70%', 'end 60%'],
  });

  return (
    <section className="tone-paper section-spacing">
      <div className="container-narrow">
        <SectionHeader label="Journey" title={['Timeline']} />

        <ol ref={listRef} className="relative md:ml-[25%]">
          {/* Track, drawn in as you scroll through it */}
          <span className="absolute left-[7px] top-2 bottom-2 w-px bg-line" aria-hidden="true" />
          <motion.span
            className="absolute left-[7px] top-2 bottom-2 w-px bg-lagoon origin-top"
            style={{ scaleY: scrollYProgress }}
            aria-hidden="true"
          />

          {timelineData.map((item, i) => (
            <motion.li
              key={i}
              className="relative pl-12 md:pl-16 pb-14 last:pb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8 }}
            >
              <span
                className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full bg-paper border border-lagoon flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="w-[7px] h-[7px] rounded-full bg-lagoon" />
              </span>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3">
                <span className="display text-[2rem] text-ink tabular-nums">{item.year}</span>
                <span className="text-xl" aria-hidden="true">{item.icon}</span>
                <span className="tag capitalize">{item.category}</span>
              </div>
              <h3 className="serif text-[clamp(1.4rem,2.2vw,1.8rem)] leading-tight text-ink">{item.title}</h3>
              <p className="mt-1 text-[15px] font-medium text-lagoon">{item.subtitle}</p>
              <p className="mt-3 text-base leading-[1.7] text-muted max-w-[62ch]">{item.description}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
