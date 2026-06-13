import { motion } from 'framer-motion';
import FadeInWrapper from './ui/FadeInWrapper';
import { FileDown, Eye } from 'lucide-react';

const stats = [
  { label: 'Languages', value: '5+' },
  { label: 'Frameworks', value: '6+' },
  { label: 'Projects', value: '10+' },
  { label: 'Certifications', value: '6+' },
];

export default function ResumeSection() {
  return (
    <section className="section-spacing">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <FadeInWrapper blur>
            <p className="label-mono text-accent mb-4">
              Curriculum Vitae
            </p>
          </FadeInWrapper>

          <FadeInWrapper delay={0.1} blur>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-text-primary leading-[1.1]">
              My Resume
            </h2>
          </FadeInWrapper>
        </div>

        {/* Resume Card */}
        <FadeInWrapper delay={0.2}>
          <div className="card-bento p-8 md:p-14 lg:p-16">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
              {/* Left — Image */}
              <div className="flex-shrink-0 w-full lg:w-[280px]">
                <motion.div
                  className="relative w-full lg:w-[280px] h-[360px] rounded-2xl overflow-hidden border border-border"
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                >
                  <img
                    src="/Naveenpic.jpeg"
                    alt="Naveen Kumar"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle coral overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </div>

              {/* Right — Info */}
              <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
                <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-3 tracking-[-0.02em]">
                  Naveen Kumar
                </h3>
                <p className="font-medium text-accent mb-6 text-lg">
                  AI Developer & Full Stack Engineer
                </p>
                <p className="text-base text-text-secondary leading-[1.8] mb-10 max-w-lg">
                  A comprehensive overview of my professional experience, education, skills, and technical capabilities in building modern digital products.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 w-full max-w-lg">
                  {stats.map((item, i) => (
                    <motion.div
                      key={item.label}
                      className="card-surface py-5 text-center rounded-xl"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
                    >
                      <p className="text-2xl font-bold text-white mb-1">{item.value}</p>
                      <p className="text-[10px] text-white/50 uppercase tracking-widest font-mono font-medium">
                        {item.label}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <button className="btn-primary">
                    <FileDown className="w-5 h-5" />
                    Download PDF
                  </button>
                  <button className="btn-secondary">
                    <Eye className="w-5 h-5" />
                    View Online
                  </button>
                </div>
              </div>
            </div>
          </div>
        </FadeInWrapper>
      </div>
    </section>
  );
}
