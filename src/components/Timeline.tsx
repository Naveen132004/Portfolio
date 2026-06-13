import { motion } from 'framer-motion';
import { timelineData } from '../data/timeline';
import FadeInWrapper from './ui/FadeInWrapper';

export default function Timeline() {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="max-w-[900px] mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <FadeInWrapper blur>
            <p className="label-mono text-accent mb-4">
              Journey
            </p>
          </FadeInWrapper>

          <FadeInWrapper delay={0.1} blur>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-text-primary leading-[1.1]">
              Timeline
            </h2>
          </FadeInWrapper>
        </div>

        {/* Timeline — centered on all screen sizes */}
        <div className="relative">
          {/* Central Line — coral-tinted */}
          <div className="absolute left-1/2 -translate-x-[0.5px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent/30 via-border to-accent/30" />

          {timelineData.map((item, i) => (
            <motion.div
              key={i}
              className={`relative flex mb-16 md:mb-20 last:mb-0 ${
                i % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Timeline Node — coral */}
              <div
                className="absolute left-1/2 -translate-x-[8px] w-4 h-4 rounded-full bg-accent top-8 z-10"
                style={{ boxShadow: '0 0 0 4px #FFFFFF, 0 0 0 5px #D8DADF' }}
              />

              {/* Content Card — alternating sides */}
              <div
                className={`w-[calc(50%-32px)] ${
                  i % 2 === 0 ? 'pr-0' : 'pl-0'
                }`}
              >
                <div className="card-bento p-7 md:p-8 group hover:border-accent/30 transition-colors">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-base font-semibold text-accent font-mono">
                      {item.year}
                    </span>
                    <span className="chip-accent text-[11px] py-1 px-3">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-text-tertiary mb-3 font-mono">{item.subtitle}</p>
                  <p className="text-sm text-text-secondary leading-[1.7]">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
