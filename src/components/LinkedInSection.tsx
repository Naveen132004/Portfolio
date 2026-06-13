import { motion } from 'framer-motion';
import {
  linkedInProfile,
  linkedInExperience,
  linkedInEducation,
  linkedInCertifications,
} from '../data/linkedinData';
import FadeInWrapper from './ui/FadeInWrapper';
import { FaLinkedinIn } from 'react-icons/fa';
import { Briefcase, GraduationCap, Award, CheckCircle2 } from 'lucide-react';

export default function LinkedInSection() {
  return (
    <section className="relative py-32 md:py-40  overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[250px]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Centered Header */}
        <div className="text-center mb-24 flex flex-col items-center">
          <FadeInWrapper blur>
            <div className="inline-block px-5 py-2 rounded-full glass-pill mb-8">
              <p className="text-sm uppercase tracking-[0.3em] font-bold text-white">
                Professional Profile
              </p>
            </div>
          </FadeInWrapper>

          <FadeInWrapper delay={0.1} blur>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-tight text-white mb-6 leading-[1.1]">
              Experience & <span className="text-white/60">Education</span>
            </h2>
          </FadeInWrapper>

          <FadeInWrapper delay={0.2} blur>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed font-light">
              {linkedInProfile.summary}
            </p>
          </FadeInWrapper>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT: Experience Timeline */}
          <div className="lg:col-span-7">
            <FadeInWrapper>
              <div className="flex items-center gap-5 mb-12">
                <div className="w-14 h-14 rounded-full glass flex items-center justify-center border border-white/10">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-heading font-bold text-white">Experience</h3>
              </div>
            </FadeInWrapper>

            <div className="relative">
              <div className="absolute left-[27px] top-6 bottom-6 w-0.5 bg-white/10 rounded-full" />

              <div className="space-y-12">
                {linkedInExperience.map((exp, i) => (
                  <motion.div
                    key={i}
                    className="relative pl-20 group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ delay: i * 0.15, duration: 0.6 }}
                  >
                    <div className="absolute left-[21px] top-8 w-3.5 h-3.5 rounded-full bg-white/20 border border-white group-hover:bg-accent group-hover:border-accent transition-colors duration-500 z-10 shadow-[0_0_15px_rgba(255,255,255,0.4)]" />

                    <div className="glass-card p-8 md:p-10 transition-all duration-500 border border-white/10 group-hover:border-white/30 group-hover:bg-white/5">
                      <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 mb-6 border border-white/10">
                        <p className="text-xs text-white uppercase tracking-[0.2em] font-bold">
                          {exp.duration}
                        </p>
                      </div>
                      <h4 className="text-2xl font-heading font-bold text-white mb-2">
                        {exp.title}
                      </h4>
                      <p className="text-base font-semibold text-accent mb-6">{exp.company}</p>
                      <p className="text-lg text-white/80 leading-[1.8] font-light">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Education + Certifications */}
          <div className="lg:col-span-5 space-y-10">
            
            <FadeInWrapper delay={0.2} scale>
              <div className="glass-card p-10 border border-white/10">
                <div className="flex items-center gap-5 mb-10">
                  <div className="w-14 h-14 rounded-full glass flex items-center justify-center border border-white/10">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-white">Education</h3>
                </div>
                
                <div className="space-y-10">
                  {linkedInEducation.map((edu, i) => (
                    <div key={i} className="relative">
                      <p className="text-sm text-accent uppercase tracking-[0.2em] mb-4 font-bold">
                        {edu.duration}
                      </p>
                      <h4 className="text-2xl font-heading font-bold text-white mb-3 leading-snug">
                        {edu.degree}
                      </h4>
                      <p className="text-base text-white/80 font-medium mb-4">
                        {edu.institution}
                      </p>
                      <p className="text-base text-white/60 leading-[1.8] font-light">
                        {edu.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInWrapper>

            <FadeInWrapper delay={0.3} scale>
              <div className="glass-card p-10 border border-white/10">
                <div className="flex items-center gap-5 mb-10">
                  <div className="w-14 h-14 rounded-full glass flex items-center justify-center border border-white/10">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-white">Certifications</h3>
                </div>
                
                <div className="space-y-4">
                  {linkedInCertifications.map((cert, i) => (
                    <div key={i} className="glass-pill px-6 py-5 flex items-center justify-between group hover:bg-white/10 transition-colors border border-white/10">
                      <div className="flex items-center gap-4">
                        <CheckCircle2 className="w-5 h-5 text-accent/50 group-hover:text-accent" />
                        <div>
                          <p className="text-base font-semibold text-white mb-1">
                            {cert.name}
                          </p>
                          <p className="text-[11px] text-white/60 uppercase tracking-wider font-medium">{cert.issuer}</p>
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-white/50 hidden sm:block">
                        {cert.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInWrapper>
          </div>
        </div>

        <FadeInWrapper delay={0.4} className="mt-24 flex justify-center">
          <a
            href={linkedInProfile.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-pill px-10 py-5 flex items-center gap-4 text-white text-lg font-bold hover:bg-white/20 border border-white/20 hover:scale-105 transition-all duration-300"
          >
            <FaLinkedinIn className="w-6 h-6" />
            Connect on LinkedIn
          </a>
        </FadeInWrapper>
      </div>
    </section>
  );
}
