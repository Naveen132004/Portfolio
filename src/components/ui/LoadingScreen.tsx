import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ background: '#0a0a0f' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
              style={{ background: 'radial-gradient(circle, rgba(0,240,255,0.3) 0%, transparent 70%)' }}
            />
          </div>

          <div className="relative flex flex-col items-center gap-6">
            {/* Glitchy name reveal */}
            <motion.div className="overflow-hidden">
              <motion.h1
                className="text-4xl md:text-6xl font-bold tracking-[-0.04em] neon-text"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
                initial={{ y: 60 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                NK
              </motion.h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="text-text-tertiary text-xs tracking-[0.4em] uppercase font-mono font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Initializing...
            </motion.p>

            {/* Loading bar — neon gradient */}
            <motion.div
              className="w-48 h-[2px] mt-4 overflow-hidden rounded-full"
              style={{ background: 'rgba(0, 240, 255, 0.1)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #00f0ff, #ff00ff, #39ff14)' }}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.8, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
