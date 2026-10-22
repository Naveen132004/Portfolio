import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import SectionHeader from './ui/SectionHeader';
import FadeInWrapper from './ui/FadeInWrapper';

export default function SkillsSection() {
  return (
    <section id="skills" className="tone-mist section-spacing">
      <div className="container-narrow">
        <SectionHeader label="capabilities" title={['Tech stack']} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
          {skillCategories.map((category, catIndex) => (
            <FadeInWrapper key={category.title} delay={(catIndex % 3) * 0.08}>
              <div className="border-t border-line pt-6">
                <div className="flex items-baseline justify-between mb-7">
                  <h3 className="serif text-[1.65rem] leading-tight text-ink">{category.title}</h3>
                  <span className="text-sm text-muted tabular-nums">{category.skills.length}</span>
                </div>

                <ul className="space-y-5">
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = skill.icon;
                    return (
                      <li key={skill.name}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="flex items-center gap-3 text-[15px] text-ink">
                            <Icon className="w-4 h-4 text-lagoon" aria-hidden="true" />
                            {skill.name}
                          </span>
                          <span className="text-sm text-muted tabular-nums">{skill.level}%</span>
                        </div>
                        <div className="meter">
                          <motion.div
                            className="meter-fill origin-left"
                            style={{ width: `${skill.level}%` }}
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1.4,
                              delay: 0.15 + skillIndex * 0.07,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </FadeInWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
