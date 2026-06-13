import { motion } from 'framer-motion';
import { linkedInProfile, linkedInExperience } from '../data/linkedinData';
import FadeInWrapper from './ui/FadeInWrapper';
import { FaLinkedinIn } from 'react-icons/fa';
import { Briefcase } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-spacing relative overflow-hidden">
      <div className="container-narrow relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <FadeInWrapper blur>
            <p className="label-mono text-accent mb-4">
              Career Path
            </p>
          </FadeInWrapper>

          <FadeInWrapper delay={0.1} blur>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-text-primary leading-[1.1] mb-6">
              Work Experience
            </h2>
          </FadeInWrapper>

          <FadeInWrapper delay={0.2}>
            <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              {linkedInProfile.summary}
            </p>
          </FadeInWrapper>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {linkedInExperience.map((exp, i) => (
            <FadeInWrapper key={i} delay={i * 0.1}>
              <motion.div
                className="card-bento p-8 md:p-12 group"
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                  {/* Left — Icon + Duration */}
                  <div className="flex flex-row md:flex-col items-center gap-4 flex-shrink-0 md:w-[120px]">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-accent" />
                    </div>
                    <span className="chip-accent">
                      {exp.duration}
                    </span>
                    {exp.type && (
                      <span className="text-[10px] uppercase tracking-widest text-text-tertiary font-mono font-medium hidden md:block">
                        {exp.type}
                      </span>
                    )}
                  </div>

                  {/* Right — Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-2 tracking-[-0.01em] group-hover:text-accent transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-sm font-medium text-text-tertiary mb-4 font-mono">
                      {exp.company}
                    </p>
                    <p className="text-base text-text-secondary leading-[1.8]">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </FadeInWrapper>
          ))}
        </div>

        {/* LinkedIn CTA */}
        <FadeInWrapper delay={0.3} className="mt-12 flex justify-center">
          <a
            href={linkedInProfile.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <FaLinkedinIn className="w-4 h-4" />
            Connect on LinkedIn
          </a>
        </FadeInWrapper>
      </div>
    </section>
  );
}
