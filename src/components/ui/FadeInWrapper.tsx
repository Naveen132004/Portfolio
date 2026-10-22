import { motion } from 'framer-motion';

interface FadeInWrapperProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  blur?: boolean;
  scale?: boolean;
}

/** Quiet entrance for body content: mostly opacity, a short lift. */
export default function FadeInWrapper({
  children,
  delay = 0,
  className = '',
  blur = false,
  scale = false,
}: FadeInWrapperProps) {
  const initial = {
    opacity: 0,
    y: 12,
    ...(blur && { filter: 'blur(8px)' }),
    ...(scale && { scale: 0.97 }),
  };

  const animate = {
    opacity: 1,
    y: 0,
    ...(blur && { filter: 'blur(0px)' }),
    ...(scale && { scale: 1 }),
  };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
