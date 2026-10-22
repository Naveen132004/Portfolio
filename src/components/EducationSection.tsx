import { motion } from 'framer-motion';
import { linkedInEducation, linkedInCertifications } from '../data/linkedinData';
import SectionHeader from './ui/SectionHeader';
import FadeInWrapper from './ui/FadeInWrapper';

export default function EducationSection() {
  return (
    <section className="tone-paper section-spacing !pt-0">
      <div className="container-narrow">
        <SectionHeader label="background" title={['Education &', 'certifications']} />

        {/* Education */}
        <div className="border-b border-line mb-20 md:mb-28">
          {linkedInEducation.map((edu, i) => (
            <motion.article
              key={i}
              className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-10 py-8 md:py-10 border-t border-line"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: i * 0.06 }}
            >
              <span className="md:col-span-3 text-[15px] text-ink tabular-nums">{edu.duration}</span>
              <div className="md:col-span-9">
                <h3 className="serif text-[clamp(1.4rem,2.2vw,1.85rem)] leading-tight text-ink">{edu.degree}</h3>
                <p className="mt-1.5 text-[15px] text-muted">{edu.institution}</p>
                {edu.description && (
                  <p className="mt-3 text-base leading-[1.75] text-muted">{edu.description}</p>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          <FadeInWrapper className="md:col-span-3">
            <h3 className="rail-label">certifications</h3>
          </FadeInWrapper>
          <ul className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-x-10">
            {linkedInCertifications.map((cert, i) => (
              <motion.li
                key={i}
                className="py-6 border-t border-line"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: (i % 2) * 0.08 }}
              >
                <p className="text-[17px] leading-snug text-ink font-medium">{cert.name}</p>
                <p className="mt-2 flex gap-4 text-sm text-muted">
                  <span>{cert.issuer}</span>
                  <span className="tabular-nums">{cert.date}</span>
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
