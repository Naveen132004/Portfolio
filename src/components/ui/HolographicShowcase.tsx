import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const techBadges = [
  { name: 'Python', color: '#3776AB' },
  { name: 'React', color: '#61DAFB' },
  { name: 'Next.js', color: '#FFFFFF' },
  { name: 'AI/ML', color: '#FF4F8B' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'SQL', color: '#F29111' },
];

export default function AIIdentityPanel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const rotateX = useTransform(mouseY, [-400, 400], [5, -5]);
  const rotateY = useTransform(mouseX, [-400, 400], [-5, 5]);

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative w-full h-[400px] rounded-[32px] overflow-hidden group mx-auto"
    >
      {/* Base Glass Layer with Cinematic Lighting */}
      <div className="absolute inset-0 bg-[#050816]/80 backdrop-blur-3xl cinematic-lighting border border-white/10 rounded-[32px]" />
      
      {/* Neural Background */}
      <div className="absolute inset-0 bg-neural-network opacity-30 mix-blend-screen" />
      <div className="absolute inset-0 bg-grid-cyber opacity-20" />
      
      {/* Lighting Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[300px] h-[200px] bg-accent-dark/30 blur-[80px] pointer-events-none" />

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-cyan/50 glow-cyan"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          animate={{ y: [0, -30, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }}
        />
      ))}

      {/* Top Section */}
      <div className="absolute top-6 left-8 right-8 z-30 flex justify-between items-start">
        <div className="flex flex-col gap-1.5">
          <p className="text-xs font-bold tracking-[0.2em] text-white/90 uppercase drop-shadow-md">AI Developer</p>
          <p className="text-[10px] font-medium tracking-[0.1em] text-accent uppercase">Full Stack Engineer</p>
        </div>
        <div className="glass-pill px-4 py-1.5 flex items-center gap-2 border border-emerald/20 bg-emerald/10 shadow-[0_0_15px_rgba(0,255,163,0.1)]">
          <span className="text-[10px] font-bold tracking-wider text-emerald uppercase">System Active</span>
          <div className="w-2 h-2 rounded-full bg-emerald animate-pulse shadow-[0_0_8px_#00FFA3]" />
        </div>
      </div>

      {/* Center 3D AI Core */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pt-2" style={{ transformStyle: "preserve-3d" }}>
        
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Orbital Paths */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ transform: 'translateZ(-20px)' }}>
             <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute w-[240px] h-[240px] rounded-full border border-accent/30 border-dashed" />
             <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute w-[320px] h-[320px] rounded-full border border-accent-dark/30 border-dotted" />
             <div className="absolute w-[180px] h-[180px] rounded-full border border-cyan/10" />
             
             {/* Tech Badges */}
             {techBadges.map((badge, i) => {
               const startAngle = (i / techBadges.length) * 360;
               const radius = i % 2 === 0 ? 120 : 160;
               const duration = i % 2 === 0 ? 25 : 30;
               const direction = i % 2 === 0 ? 1 : -1;
               
               return (
                 <motion.div
                   key={badge.name}
                   className="absolute origin-center flex items-center justify-center"
                   style={{ width: radius * 2, height: radius * 2 }}
                   initial={{ rotate: startAngle }}
                   animate={{ rotate: startAngle + (360 * direction) }}
                   transition={{ duration, repeat: Infinity, ease: "linear" }}
                 >
                   <motion.div 
                     className="absolute top-0 glass-pill px-3 py-1 flex items-center gap-1.5 border border-white/20 bg-white/5 backdrop-blur-xl shadow-xl"
                     style={{ left: '50%', x: '-50%', y: '-50%' }}
                     initial={{ rotate: -startAngle }}
                     animate={{ rotate: -(startAngle + (360 * direction)) }}
                     transition={{ duration, repeat: Infinity, ease: "linear" }}
                   >
                     <div className="w-2 h-2 rounded-full" style={{ backgroundColor: badge.color, boxShadow: `0 0 8px ${badge.color}` }} />
                     <span className="text-[10px] font-bold text-white uppercase tracking-wider">{badge.name}</span>
                   </motion.div>
                 </motion.div>
               )
             })}
          </div>

          {/* 3D Holographic Monogram */}
          <motion.div
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="relative flex items-center justify-center"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 bg-accent/30 blur-[50px] rounded-full animate-pulse-glow" />
            <h1 
              data-text="NK"
              className="text-[100px] font-bold text-glass-3d leading-none tracking-tighter"
              style={{ filter: "drop-shadow(0 0 30px rgba(0, 212, 255, 0.4)) drop-shadow(0 0 60px rgba(139, 92, 246, 0.4))" }}
            >
              NK
            </h1>
            {/* Holographic internal reflections */}
            <h1 
              className="absolute inset-0 text-[100px] font-bold text-transparent leading-none tracking-tighter"
              style={{ 
                WebkitTextStroke: '1px rgba(255,255,255,0.4)', 
                transform: 'translateZ(-10px)',
                filter: 'blur(3px)'
              }}
            >
              NK
            </h1>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Dashboard Section */}
      <div className="absolute bottom-6 left-8 right-8 z-30">
        <div className="glass-strong rounded-2xl p-4 border border-white/10 bg-[#0B1020]/90 backdrop-blur-3xl overflow-hidden relative shadow-2xl w-full">
           <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
           <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-dark to-transparent opacity-30" />
           
           <div className="flex flex-row justify-between items-center px-4">
              <div className="flex flex-col items-center">
                <span className="text-[9px] text-white/50 uppercase tracking-[0.2em] mb-1 flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full glow-accent" /> Projects
                </span>
                <span className="text-2xl font-heading font-bold text-white tracking-tight">10+</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[9px] text-white/50 uppercase tracking-[0.2em] mb-1 flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-accent-dark rounded-full glow-purple" /> Experience
                </span>
                <span className="text-2xl font-heading font-bold text-white tracking-tight">2+ Yrs</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[9px] text-white/50 uppercase tracking-[0.2em] mb-1 flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-cyan rounded-full glow-cyan" /> Certs
                </span>
                <span className="text-2xl font-heading font-bold text-white tracking-tight">6+</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="glass-pill px-4 py-2 flex items-center justify-center gap-2 border-emerald/20 bg-emerald/10 shadow-[0_0_15px_rgba(0,255,163,0.1)]">
                   <div className="w-2 h-2 rounded-full bg-emerald animate-pulse shadow-[0_0_8px_#00FFA3]" />
                   <span className="text-[10px] font-bold text-emerald uppercase tracking-wider">Available</span>
                </div>
              </div>
           </div>
        </div>
      </div>
      
      {/* Premium glass border reflection */}
      <div className="absolute inset-0 rounded-[32px] border border-white/10 pointer-events-none z-40" style={{ maskImage: 'linear-gradient(135deg, black 0%, transparent 50%, black 100%)', WebkitMaskImage: 'linear-gradient(135deg, black 0%, transparent 50%, black 100%)' }} />
    </motion.div>
  );
}
