import { motion } from 'framer-motion';
import { achievements } from '../data/achievements';
import FadeInWrapper from './ui/FadeInWrapper';

export default function Achievements() {
  return (
    <section className="section-spacing">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <FadeInWrapper blur>
            <p className="label-mono text-accent mb-4">
              Milestones
            </p>
          </FadeInWrapper>

          <FadeInWrapper delay={0.1} blur>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-text-primary leading-[1.1]">
              Achievements
            </h2>
          </FadeInWrapper>
        </div>

        {/* Achievement Cards — Alternating Surface + Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((achievement, i) => {
            const isSurface = i % 3 === 0;
            return (
              <FadeInWrapper key={achievement.title} delay={i * 0.06}>
                <motion.div
                  className={`${isSurface ? 'card-surface' : 'card-bento'} p-8 h-full flex flex-col group`}
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                >
                  {/* Icon + Metric */}
                  <div className="flex items-center justify-between mb-6 pb-5 border-b border-white/10">
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {achievement.icon}
                    </span>
                    {achievement.metric && (
                      <motion.span
                        className={`text-3xl md:text-4xl font-bold tracking-[-0.02em] ${
                          isSurface ? 'text-white' : 'text-accent'
                        }`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 + 0.2, type: 'spring' }}
                      >
                        {achievement.metric}
                      </motion.span>
                    )}
                  </div>

                  {/* Category */}
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-mono font-semibold mb-4 self-start ${
                    isSurface ? 'bg-white/10 text-white/70' : 'bg-accent/10 text-accent'
                  }`}>
                    {achievement.category}
                  </span>

                  {/* Title */}
                  <h3 className={`text-lg font-semibold mb-3 ${isSurface ? 'text-white' : 'text-text-primary'}`}>
                    {achievement.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm leading-[1.7] flex-1 ${isSurface ? 'text-white/70' : 'text-text-secondary'}`}>
                    {achievement.description}
                  </p>
                </motion.div>
              </FadeInWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
