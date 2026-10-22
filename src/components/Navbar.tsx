import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { INTRO_DELAY, EASE_OUT_EXPO } from './ui/intro';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const pageLinks = navLinks.filter((link) => link.href !== '#contact');

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
          return;
        }
      }
      setActiveSection('');
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
  }, [isMobileMenuOpen]);

  const handleClick = (href: string) => {
    setIsMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('');
  };

  const enter = (i: number) => ({
    initial: { y: -24, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, delay: INTRO_DELAY + 0.35 + i * 0.06, ease: EASE_OUT_EXPO },
  });

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] pointer-events-none">
        <div className="container-narrow flex items-center justify-between h-20 md:h-24">
          {/* Wordmark */}
          <motion.button
            {...enter(0)}
            onClick={scrollToTop}
            className="pill pointer-events-auto pl-3 gap-2.5"
            aria-label="Back to top"
          >
            <span className="relative w-6 h-6 shrink-0" aria-hidden="true">
              <span className="absolute left-0 top-1 w-4 h-4 rounded-full border border-foam/80" />
              <span className="absolute right-0 top-1 w-4 h-4 rounded-full bg-foam" />
            </span>
            <span className="font-medium tracking-[-0.01em]">naveen kumar</span>
          </motion.button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1.5 pointer-events-auto" aria-label="Sections">
            {pageLinks.map((link, i) => (
              <motion.button
                key={link.label}
                {...enter(i + 1)}
                onClick={() => handleClick(link.href)}
                className="pill"
                aria-current={activeSection === link.href.substring(1)}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              {...enter(pageLinks.length + 1)}
              onClick={() => handleClick('#contact')}
              className="pill ml-2 !bg-coral hover:!bg-[#c9362d] !border-transparent text-white"
            >
              Contact
            </motion.button>
          </nav>

          {/* Mobile toggle */}
          <motion.button
            {...enter(1)}
            onClick={() => setIsMobileMenuOpen(true)}
            className="pill md:hidden pointer-events-auto"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            Menu
          </motion.button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-[120] md:hidden bg-abyss text-foam flex flex-col"
            initial={{ clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
          >
            <div className="container-narrow flex items-center justify-end h-20 w-full">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="pill"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
                Close
              </button>
            </div>
            <nav className="container-narrow w-full flex-1 flex flex-col justify-center gap-2 pb-20" aria-label="Sections">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  onClick={() => handleClick(link.href)}
                  className="display text-[clamp(2.75rem,13vw,4rem)] text-left text-foam/90 hover:text-foam py-1"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.6, ease: EASE_OUT_EXPO }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
