import { motion } from 'framer-motion';
import { linkedInProfile, linkedInExperience } from '../data/linkedinData';
import SectionHeader from './ui/SectionHeader';
import FadeInWrapper from './ui/FadeInWrapper';
import { FaLinkedinIn } from 'react-icons/fa';

export default function ExperienceSection() {
  return (
    <section id="experience" className="tone-paper section-spacing">
      <div className="container-narrow">
        <SectionHeader
          label="career path"
          title={['Work', 'experience']}
          intro={linkedInProfile.summary}
        />

        <div className="border-b border-line">
          {linkedInExperience.map((exp, i) => (
            <motion.article
              key={i}
              className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 py-10 md:py-12 border-t border-line"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: i * 0.06 }}
            >
              <div className="md:col-span-3 flex md:flex-col gap-3 md:gap-2 items-baseline md:items-start">
                <span className="text-[15px] text-ink tabular-nums">{exp.duration}</span>
                <span className="text-sm text-faint capitalize">{exp.type}</span>
              </div>
              <div className="md:col-span-9">
                <h3 className="serif text-[clamp(1.6rem,2.6vw,2.15rem)] leading-tight text-ink transition-transform duration-700 ease-out-expo group-hover:translate-x-2">
                  {exp.title}
                </h3>
                <p className="mt-1 text-[15px] text-lagoon font-medium">{exp.company}</p>
                <p className="mt-4 text-base leading-[1.75] text-muted max-w-[64ch]">{exp.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <FadeInWrapper delay={0.2} className="mt-12 md:pl-[calc(25%+10px)]">
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
