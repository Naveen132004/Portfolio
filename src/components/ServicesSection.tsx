import { motion } from 'framer-motion';
import { services } from '../data/services';
import SectionHeader from './ui/SectionHeader';

export default function ServicesSection() {
  return (
    <section id="services" className="tone-paper section-spacing">
      <div className="container-narrow">
        <SectionHeader label="what i do" title={['Services']} />

        <div className="grid grid-cols-1 md:grid-cols-12 md:gap-10">
          <div className="hidden md:block md:col-span-3" />
          <div className="md:col-span-9 grid grid-cols-1 lg:grid-cols-2 gap-x-12">
            {services.map((service, i) => (
              <motion.article
                key={service.number}
                className="group relative py-9 border-t border-line"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: (i % 2) * 0.1, duration: 0.8 }}
              >
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-sm text-faint tabular-nums">{service.number}</span>
                  <h3 className="serif text-[clamp(1.6rem,2.4vw,2rem)] leading-tight text-ink transition-transform duration-700 ease-out-expo group-hover:translate-x-2">
                    {service.title}
                  </h3>
                  <span
                    className="ml-auto w-3 h-3 rounded-full bg-gradient-to-br from-white to-lagoon scale-0 group-hover:scale-100 transition-transform duration-500 ease-out-expo"
                    aria-hidden="true"
                  />
                </div>
                <p className="text-base leading-[1.7] text-muted max-w-[52ch] md:pl-9">
                  {service.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
