import { motion } from 'framer-motion';

const marqueeItems = [
  'React', 'TypeScript', 'Python', 'Java', 'Spring Boot',
  'FastAPI', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker',
  'Machine Learning', 'NLP', 'Computer Vision', 'REST APIs',
  'AWS', 'Git', 'Tailwind CSS', 'Full Stack',
];

export default function MarqueeSection() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="tone-mist py-8 md:py-10 overflow-hidden" aria-label="Technologies">
      <div className="marquee-fade">
        <motion.div
          className="flex w-max whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        >
          {items.map((item, i) => (
            <span key={i} className="flex items-center" aria-hidden={i >= marqueeItems.length}>
              <span className="serif italic text-[clamp(1.5rem,3vw,2.5rem)] text-ink/80 px-6 md:px-9">
                {item}
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-white to-tide shadow-[0_0_0_1px_rgba(11,35,36,0.15)]" />
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
