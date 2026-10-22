import { motion } from 'framer-motion';
import { achievements } from '../data/achievements';
import SectionHeader from './ui/SectionHeader';

export default function Achievements() {
  return (
    <section className="tone-mist section-spacing">
      <div className="container-narrow">
        <SectionHeader label="Milestones" title={['Achievements']} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12">
          {achievements.map((achievement, i) => (
            <motion.article
              key={achievement.title}
              className="group py-9 border-t border-line flex flex-col"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.08 }}
            >
              <div className="flex items-start justify-between mb-6">
                {achievement.metric && (
                  <span className="display text-[clamp(3rem,5vw,4.25rem)] text-ink">{achievement.metric}</span>
                )}
                <span
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl bg-paper/70 shadow-[inset_0_1px_0_#fff,0_0_0_1px_rgba(11,35,36,0.08)] transition-transform duration-500 ease-out-expo group-hover:-translate-y-1"
                  aria-hidden="true"
                >
                  {achievement.icon}
                </span>
              </div>
              <span className="tag self-start mb-4">{achievement.category}</span>
              <h3 className="serif text-[1.6rem] leading-tight text-ink mb-3">{achievement.title}</h3>
              <p className="text-base leading-[1.7] text-muted">{achievement.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
