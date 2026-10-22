import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { INTRO_DELAY, EASE_OUT_EXPO } from './intro';

/** A short abyss-coloured curtain that lifts to reveal the hero. */
export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), INTRO_DELAY * 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-abyss"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: EASE_OUT_EXPO }}
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="block overflow-hidden pb-[0.1em]">
              <motion.span
                className="block display text-[clamp(2.5rem,7vw,4.5rem)] text-foam"
                initial={{ y: '105%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT_EXPO }}
              >
                naveen kumar
              </motion.span>
            </span>
            <motion.span
              className="text-sm text-foam/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              portfolio
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
