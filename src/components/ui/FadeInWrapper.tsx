import { motion } from 'framer-motion';

interface FadeInWrapperProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  blur?: boolean;
  scale?: boolean;
}

export default function FadeInWrapper({ 
  children, 
  delay = 0, 
  className = '',
  blur = false,
  scale = false
}: FadeInWrapperProps) {
  
  const initial = {
    opacity: 0,
    y: 20,
    ...(blur && { filter: 'blur(10px)' }),
    ...(scale && { scale: 0.95 })
  };

  const animate = {
    opacity: 1,
    y: 0,
    ...(blur && { filter: 'blur(0px)' }),
    ...(scale && { scale: 1 })
  };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.16, 1, 0.3, 1] 
      }}
    >
      {children}
    </motion.div>
  );
}
