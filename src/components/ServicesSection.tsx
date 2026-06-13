import { motion } from 'framer-motion';
import { services } from '../data/services';
import FadeInWrapper from './ui/FadeInWrapper';
import { ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  return (
    <section className="section-spacing">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <FadeInWrapper blur>
            <p className="label-mono text-accent mb-4">
              What I Do
            </p>
          </FadeInWrapper>

          <FadeInWrapper delay={0.1} blur>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-text-primary leading-[1.1]">
              Services
            </h2>
          </FadeInWrapper>
        </div>

        {/* Service Rows */}
        <div className="border-t border-border">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              className="group py-10 md:py-14 border-b border-border cursor-default relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-16">
                {/* Number */}
                <span className="text-5xl md:text-6xl font-bold text-border leading-none w-24 shrink-0 tracking-[-0.02em] font-mono">
                  {service.number}
                </span>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-text-primary mb-3 group-hover:translate-x-3 group-hover:text-accent transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] tracking-[-0.02em]">
                    {service.title}
                  </h3>
                  <p className="text-base md:text-lg text-text-secondary leading-[1.7] max-w-2xl">
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex shrink-0 items-center justify-center w-14 h-14 rounded-full border border-border group-hover:border-accent group-hover:bg-accent transition-all duration-400">
                  <ArrowRight className="w-5 h-5 text-text-tertiary -rotate-45 group-hover:rotate-0 group-hover:text-white transition-all duration-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
