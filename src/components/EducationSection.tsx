import { motion } from 'framer-motion';
import { linkedInEducation, linkedInCertifications } from '../data/linkedinData';
import FadeInWrapper from './ui/FadeInWrapper';
import { GraduationCap, Award, CheckCircle2, Calendar } from 'lucide-react';

export default function EducationSection() {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="container-narrow relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <FadeInWrapper blur>
            <p className="label-mono text-accent mb-4">
              Academic Background
            </p>
          </FadeInWrapper>

          <FadeInWrapper delay={0.1} blur>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-text-primary leading-[1.1] mb-6">
              Education &{' '}
              <span className="text-accent">Certifications</span>
            </h2>
          </FadeInWrapper>

          <FadeInWrapper delay={0.2}>
            <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              A solid academic foundation paired with industry-recognized certifications that back my expertise.
            </p>
          </FadeInWrapper>
        </div>

        {/* Education Cards */}
        <div className="mb-16">
          <FadeInWrapper>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-text-primary">Education</h3>
            </div>
          </FadeInWrapper>

          <div className="space-y-5">
            {linkedInEducation.map((edu, i) => (
              <FadeInWrapper key={i} delay={i * 0.1}>
                <motion.div
                  className="card-bento p-8 md:p-10 group"
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                    <div className="flex items-center gap-3 shrink-0">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span className="text-sm text-accent font-mono font-medium">
                        {edu.duration}
                      </span>
                    </div>

                    <div className="flex-1">
                      <h4 className="text-xl md:text-2xl font-semibold text-text-primary mb-2 tracking-[-0.01em]">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-medium text-text-tertiary mb-3 font-mono">
                        {edu.institution}
                      </p>
                      {edu.description && (
                        <p className="text-base text-text-secondary leading-[1.8]">
                          {edu.description}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              </FadeInWrapper>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div>
          <FadeInWrapper>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <Award className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-text-primary">Certifications</h3>
            </div>
          </FadeInWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {linkedInCertifications.map((cert, i) => (
              <FadeInWrapper key={i} delay={i * 0.06}>
                <div className="card-bento p-6 flex items-start gap-4 h-full group hover:border-accent/30 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-semibold text-text-primary mb-1 leading-snug">
                      {cert.name}
                    </h4>
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                      <span className="text-text-tertiary font-mono text-xs">{cert.issuer}</span>
                      <span className="w-1 h-1 rounded-full bg-border" />
                      <span className="font-medium text-accent font-mono text-xs">{cert.date}</span>
                    </div>
                  </div>
                </div>
              </FadeInWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
