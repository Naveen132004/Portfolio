import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import FadeInWrapper from './ui/FadeInWrapper';
import { FaGithub } from 'react-icons/fa';

export default function GitHubStats() {
  const stats = [
    { label: 'Repositories', value: '20+', icon: '📦' },
    { label: 'Contributions', value: '500+', icon: '🔥' },
    { label: 'Languages', value: '6+', icon: '💻' },
    { label: 'Stars', value: '10+', icon: '⭐' },
  ];

  return (
    <section className="tone-dark section-spacing !pt-0 relative">
      <div className="container-narrow">
        <SectionHeader label="open source" title={['GitHub']} />

        <div className="grid grid-cols-1 md:grid-cols-12 md:gap-10">
          <div className="hidden md:block md:col-span-3" />
          <div className="md:col-span-9">
            <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-line mb-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="pt-7 pb-2 pl-5 pr-4 border-l border-line"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.8 }}
                >
                  <span className="orb-small relative flex w-10 h-10 rounded-full items-center justify-center text-lg mb-5" aria-hidden="true">
                    {stat.icon}
                  </span>
                  <p className="display text-[clamp(2.5rem,5vw,4rem)] text-foam">{stat.value}</p>
                  <p className="mt-2 text-[15px] text-muted">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <FadeInWrapper delay={0.2}>
              <a
                href="https://github.com/Naveen132004"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <FaGithub className="w-4 h-4" />
                View GitHub profile
              </a>
            </FadeInWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
