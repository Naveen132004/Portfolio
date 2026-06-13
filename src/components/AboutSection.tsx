import { motion } from 'framer-motion';
import FadeInWrapper from './ui/FadeInWrapper';
import { ArrowRight, Zap, Target, Layers, TrendingUp } from 'lucide-react';

const aboutText =
  "Computer Science and Business Systems undergraduate at SRM Institute of Science and Technology with hands-on experience in AI, full-stack development, and database systems. Skilled in Python, JavaScript, React, and SQL, with practical knowledge of machine learning, REST API development, and modern web technologies. Passionate about building innovative technology solutions that solve real-world problems and create meaningful user experiences.";

const infoCards = [
  { value: '2+', label: 'Years Experience', icon: TrendingUp },
  { value: '10+', label: 'Projects Completed', icon: Layers },
  { value: '6+', label: 'Tech Stack', icon: Zap },
  { value: '3+', label: 'Focus Areas', icon: Target },
];

export default function AboutSection() {
  const handleContactClick = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="about"
      className="section-spacing relative overflow-hidden"
    >
      <div className="container-narrow relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <FadeInWrapper blur>
            <p className="label-mono text-accent mb-4">
              About Me
            </p>
          </FadeInWrapper>

          <FadeInWrapper delay={0.1} blur>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-text-primary leading-[1.1]">
              Crafting the Future<br />
              <span className="text-accent">with Code & AI</span>
            </h2>
          </FadeInWrapper>
        </div>

        {/* Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-8">
          {/* Left — Text Card */}
          <FadeInWrapper delay={0.2} className="lg:col-span-7">
            <div className="card-bento p-8 md:p-12 h-full flex flex-col justify-center">
              <p className="text-base md:text-lg text-text-secondary leading-[1.8] mb-8">
                {aboutText}
              </p>

              <button
                onClick={handleContactClick}
                className="btn-secondary group self-start"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </FadeInWrapper>

          {/* Right — Illustration Card */}
          <FadeInWrapper delay={0.3} scale className="lg:col-span-5">
            <motion.div
              className="card-bento overflow-hidden h-full"
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <img
                src="/about-illustration.png"
                alt="AI Developer Illustration"
                className="w-full h-full object-cover min-h-[280px]"
              />
            </motion.div>
          </FadeInWrapper>
        </div>

        {/* Stat Cards — Surface style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {infoCards.map((card, i) => (
            <motion.div
              key={card.label}
              className="card-surface p-8 md:p-10 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                delay: 0.2 + i * 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <card.icon className="w-5 h-5 text-white/60 mb-4" />
              <p className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-[-0.02em]">
                {card.value}
              </p>
              <p className="text-[11px] uppercase tracking-[0.15em] text-white/50 font-mono font-medium">
                {card.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
