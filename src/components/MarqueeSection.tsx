import { motion } from 'framer-motion';

const items = [
  'React', 'Node.js', 'Python', 'TypeScript',
  'MongoDB', 'Next.js', 'Tailwind CSS', 'TensorFlow',
  'PostgreSQL', 'Docker', 'AWS', 'Figma'
];

const marqueeItems = [...items, ...items, ...items];

export default function MarqueeSection() {
  return (
    <section className="py-8 relative overflow-hidden border-y border-border">
      {/* Edge fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

      <div className="relative flex overflow-hidden group">
        <motion.div
          className="flex whitespace-nowrap gap-12 pl-12 group-hover:[animation-play-state:paused]"
          animate={{ x: "-33.33%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40
          }}
        >
          {marqueeItems.map((item, i) => (
            <span
              key={i}
              className="text-lg font-medium text-text-tertiary/60 hover:text-accent transition-colors duration-300 select-none"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
