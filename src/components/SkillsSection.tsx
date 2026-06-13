import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import FadeInWrapper from './ui/FadeInWrapper';

export default function SkillsSection() {
  return (
    <section id="skills" className="section-spacing relative overflow-hidden">
      <div className="container-narrow relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <FadeInWrapper blur>
            <p className="label-mono text-accent mb-4">
              Core Capabilities
            </p>
          </FadeInWrapper>

          <FadeInWrapper delay={0.1} blur>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-text-primary leading-[1.1]">
              Tech Stack
            </h2>
          </FadeInWrapper>
        </div>

        {/* Skills Grid — Dashboard Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, catIndex) => (
            <FadeInWrapper key={category.title} delay={catIndex * 0.08}>
              <div className="card-bento p-8 md:p-10 h-full">
                {/* Category Header */}
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-semibold text-text-primary tracking-[-0.01em]">
                    {category.title}
                  </h3>
                  <span className="text-xs font-mono font-semibold text-accent bg-accent/10 px-3 py-1 rounded-md">
                    {category.skills.length}
                  </span>
                </div>

                {/* Skill Items with Progress */}
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: catIndex * 0.05 + skillIndex * 0.04,
                          duration: 0.4,
                        }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <Icon className="w-4 h-4 text-text-secondary" />
                            <span className="text-sm font-medium text-text-primary">{skill.name}</span>
                          </div>
                          <span className="text-xs font-mono font-semibold text-accent">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="progress-bar">
                          <motion.div
                            className="progress-bar-fill"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: catIndex * 0.05 + skillIndex * 0.04, ease: [0.16, 1, 0.3, 1] }}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </FadeInWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
