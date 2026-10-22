import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import FadeInWrapper from './ui/FadeInWrapper';
import { FileDown, Eye } from 'lucide-react';

const stats = [
  { label: 'Languages', value: '5+' },
  { label: 'Frameworks', value: '6+' },
  { label: 'Projects', value: '10+' },
  { label: 'Certifications', value: '6+' },
];

const RESUME_URL = '/Naveen_Kumar_Resume.pdf';

export default function ResumeSection() {
  return (
    <section className="tone-dark section-spacing relative overflow-hidden">
      {/* Soft lagoon light rising behind the portrait */}
      <div
        className="pointer-events-none absolute -left-[15vw] top-1/2 -translate-y-1/2 w-[55vw] h-[55vw] max-w-[640px] max-h-[640px] rounded-full bg-lagoon/30 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-narrow relative">
        <SectionHeader label="Curriculum Vitae" title={['My resume']} />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10 items-end">
          <FadeInWrapper className="md:col-span-4 lg:col-span-3">
            {/* The frame is observed; a curtain inside it lifts, so the observed box is never clipped */}
            <motion.div
              className="relative w-full max-w-[320px] aspect-[3/4] rounded-t-full rounded-b-[28px] overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6),inset_0_0_0_1px_rgba(234,244,243,0.15)]"
              initial="hidden"
              whileInView="shown"
              viewport={{ once: true, margin: '-80px' }}
            >
              <motion.img
                src="/Naveenpic.jpeg"
                alt="Naveen Kumar"
                className="w-full h-full object-cover"
                loading="lazy"
                variants={{ hidden: { scale: 1.12 }, shown: { scale: 1 } }}
                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-tide/60 via-tide/10 to-transparent mix-blend-multiply" aria-hidden="true" />
              <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0_2px_0_rgba(255,255,255,0.35)]" aria-hidden="true" />
              <motion.div
                className="absolute inset-0 bg-abyss origin-top"
                variants={{ hidden: { scaleY: 1 }, shown: { scaleY: 0 } }}
                transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
                aria-hidden="true"
              />
            </motion.div>
          </FadeInWrapper>

          <div className="md:col-span-8 lg:col-span-9">
            <FadeInWrapper>
              <h3 className="display text-[clamp(2.5rem,5vw,4rem)] text-foam">Naveen Kumar</h3>
              <p className="mt-2 serif text-[1.35rem] text-tide">AI Developer & Full Stack Engineer</p>
              <p className="mt-5 text-[17px] leading-[1.75] text-muted max-w-[56ch]">
                A comprehensive overview of my professional experience, education, skills, and technical capabilities in building modern digital products.
              </p>
            </FadeInWrapper>

            <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-line mt-10 mb-10 max-w-[720px]">
              {stats.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="pt-5 pl-5 pr-3 border-l border-line"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.7 }}
                >
                  <p className="display text-[2.5rem] text-foam">{item.value}</p>
                  <p className="mt-1 text-sm text-muted">{item.label}</p>
                </motion.div>
              ))}
            </div>

            <FadeInWrapper delay={0.2} className="flex flex-col sm:flex-row gap-3">
              <a href={RESUME_URL} download="Naveen_Kumar_Resume.pdf" className="btn-primary">
                <FileDown className="w-5 h-5" />
                Download PDF
              </a>
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <Eye className="w-5 h-5" />
                View Online
              </a>
            </FadeInWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
