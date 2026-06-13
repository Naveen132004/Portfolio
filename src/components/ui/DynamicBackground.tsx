import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function DynamicBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" style={{ background: '#0a0a0f' }}>
      {/* Electric Blue Blob */}
      <motion.div
        className="absolute top-[-15%] left-[-10%] w-[55vw] h-[55vw] rounded-full filter blur-[150px] opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(0, 102, 255, 0.5) 0%, transparent 70%)' }}
        animate={{
          x: [0, 30 + mousePosition.x, 0],
          y: [0, 20 + mousePosition.y, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      {/* Magenta Blob */}
      <motion.div
        className="absolute top-[20%] right-[-15%] w-[50vw] h-[50vw] rounded-full filter blur-[150px] opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(255, 0, 255, 0.4) 0%, transparent 70%)' }}
        animate={{
          x: [0, -30 + mousePosition.x, 0],
          y: [0, 40 + mousePosition.y, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      
      {/* Cyan Blob */}
      <motion.div
        className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] rounded-full filter blur-[150px] opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(0, 240, 255, 0.35) 0%, transparent 70%)' }}
        animate={{
          x: [0, 25 + mousePosition.x, 0],
          y: [0, -30 + mousePosition.y, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Lime Blob */}
      <motion.div
        className="absolute bottom-[20%] right-[15%] w-[35vw] h-[35vw] rounded-full filter blur-[150px] opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(57, 255, 20, 0.3) 0%, transparent 70%)' }}
        animate={{
          x: [0, -20, 0],
          y: [0, -25, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `
            linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Scan line effect */}
      <div className="scan-lines" />
    </div>
  );
}
