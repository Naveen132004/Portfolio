import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';

const aboutText =
  "Computer Science and Business Systems undergraduate at SRM Institute of Science and Technology with hands-on experience in AI, full-stack development, and database systems. Skilled in Python, JavaScript, React, and SQL, with practical knowledge of machine learning, REST API development, and modern web technologies. Passionate about building innovative technology solutions that solve real-world problems and create meaningful user experiences.";

const infoCards = [
  { value: '2+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Built' },
  { value: '6+', label: 'Tech Stacks' },
  { value: '3+', label: 'Focus Areas' },
];

export default function AboutSection() {
  const handleContactClick = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="tone-mist section-spacing !pt-12 md:!pt-20 relative">
      <div className="container-narrow">
        <SectionHeader
          label="about me"
          title={['Crafting the', 'future']}
          intro={
            <>
              <p>{aboutText}</p>
              <button onClick={handleContactClick} className="btn-secondary mt-8">
                Get in touch
              </button>
            </>
          }
        />

        {/* Figures */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-y-10 md:gap-10">
          <div className="hidden md:block md:col-span-3" />
          <div className="col-span-2 md:col-span-9 grid grid-cols-2 sm:grid-cols-4 border-t border-line">
            {infoCards.map((card, i) => (
              <motion.div
                key={card.label}
                className="pt-7 pb-2 pl-5 pr-4 border-l border-line"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.8 }}
              >
                <p className="display text-[clamp(3rem,6vw,4.75rem)] text-ink">{card.value}</p>
                <p className="mt-2 text-[15px] text-muted">{card.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
