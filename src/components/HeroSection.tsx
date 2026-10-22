import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import RevealLines from './ui/RevealLines';
import { INTRO_DELAY, EASE_OUT_EXPO } from './ui/intro';

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax: the dark sphere lifts away, the glass sphere rises to meet the next section
  const upperY = useTransform(scrollYProgress, [0, 1], ['0%', '-22%']);
  const lowerY = useTransform(scrollYProgress, [0, 1], ['0%', '-34%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  const handleContactClick = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProjectsClick = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="hero-water relative min-h-[100svh] overflow-hidden text-foam"
    >
      {/* Spheres */}
      <motion.div className="absolute inset-0" style={{ y: upperY }} aria-hidden="true">
        <motion.div
          className="orb orb-upper"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, delay: INTRO_DELAY - 0.3, ease: EASE_OUT_EXPO }}
        />
      </motion.div>
      <motion.div className="absolute inset-0" style={{ y: lowerY }} aria-hidden="true">
        <motion.div
          className="orb orb-lower"
          initial={{ opacity: 0, y: '30%' }}
          animate={{ opacity: 1, y: '0%' }}
          transition={{ duration: 2, delay: INTRO_DELAY, ease: EASE_OUT_EXPO }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="container-narrow relative z-10 pt-[clamp(120px,19svh,190px)] pb-40 flex flex-col items-center text-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <RevealLines
          as="h1"
          immediate
          delay={INTRO_DELAY + 0.1}
          lines={['Naveen Kumar']}
          className="display text-[clamp(3.6rem,10.5vw,9.5rem)] max-w-[11ch] md:max-w-none"
        />

        <motion.p
          className="mt-5 md:mt-7 serif text-[clamp(1.25rem,2.2vw,1.75rem)] text-foam/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: INTRO_DELAY + 0.5 }}
        >
          AI developer & full stack engineer
        </motion.p>

        <motion.p
          className="mt-4 text-base md:text-[17px] leading-[1.7] text-foam/75 max-w-[46ch]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: INTRO_DELAY + 0.65 }}
        >
          Crafting intelligent systems and modern web experiences.
          Merging complex data architectures with premium frontend aesthetics.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: INTRO_DELAY + 0.8, ease: EASE_OUT_EXPO }}
        >
          <button onClick={handleProjectsClick} className="btn-primary">
            View work
          </button>
          <button onClick={handleContactClick} className="pill !h-[52px] !px-7 !text-[15px] justify-center">
            Get in touch
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.button
        onClick={handleScrollDown}
        className="absolute z-10 left-1/2 -translate-x-1/2 bottom-8 w-14 h-14 rounded-full border border-ink/25 text-ink flex items-center justify-center hover:bg-paper/40 transition-colors"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: INTRO_DELAY + 1.2 }}
      >
        <ArrowDown className="w-5 h-5" />
      </motion.button>

      {/* Availability */}
      <motion.div
        className="absolute z-10 right-[clamp(16px,5vw,72px)] bottom-9 hidden sm:flex pill cursor-default"
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: INTRO_DELAY + 1.3, ease: EASE_OUT_EXPO }}
      >
        <span className="relative flex w-2 h-2">
          <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60" />
          <span className="relative w-2 h-2 rounded-full bg-emerald-400" />
        </span>
        available for new opportunities
      </motion.div>
    </section>
  );
}
