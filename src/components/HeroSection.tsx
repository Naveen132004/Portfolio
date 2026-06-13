import { useRef, useEffect, useState, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

/* ─── Typewriter Effect ─── */
function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span>
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        className="text-neon-cyan"
      >
        |
      </motion.span>
    </span>
  );
}

/* ─── 3D Floating Shape ─── */
function FloatingShape({ position, color, shape, scale = 1 }: { 
  position: [number, number, number]; 
  color: string; 
  shape: 'octahedron' | 'icosahedron' | 'torus' | 'dodecahedron';
  scale?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
  });

  const geometry = useMemo(() => {
    switch (shape) {
      case 'octahedron': return new THREE.OctahedronGeometry(1);
      case 'icosahedron': return new THREE.IcosahedronGeometry(1);
      case 'torus': return new THREE.TorusGeometry(0.8, 0.3, 16, 32);
      case 'dodecahedron': return new THREE.DodecahedronGeometry(1);
    }
  }, [shape]);

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} position={position} geometry={geometry} scale={scale}>
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.4}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
}

/* ─── 3D Scene ─── */
function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 60 }}
      style={{ position: 'absolute', inset: 0 }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} color="#00f0ff" intensity={0.8} />
      <pointLight position={[-10, -10, 5]} color="#ff00ff" intensity={0.5} />
      <pointLight position={[0, 10, -10]} color="#39ff14" intensity={0.3} />

      <FloatingShape position={[-5, 2, -3]} color="#00f0ff" shape="octahedron" scale={0.8} />
      <FloatingShape position={[5, -1, -4]} color="#ff00ff" shape="icosahedron" scale={0.7} />
      <FloatingShape position={[-3, -3, -2]} color="#39ff14" shape="torus" scale={0.6} />
      <FloatingShape position={[4, 3, -5]} color="#0066ff" shape="dodecahedron" scale={0.9} />
      <FloatingShape position={[0, -4, -6]} color="#ff1493" shape="octahedron" scale={0.5} />
      <FloatingShape position={[-6, 0, -7]} color="#bf00ff" shape="icosahedron" scale={0.6} />
    </Canvas>
  );
}

/* ─── Hero Section ─── */
export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleContactClick = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProjectsClick = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-[72px] overflow-hidden"
    >
      {/* Three.js 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>

      <motion.div
        className="relative z-10 max-w-[900px] mx-auto px-6 md:px-8 w-full flex flex-col items-center text-center"
        style={{ y, opacity }}
      >
        {/* Status Pill */}
        <motion.div
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          style={{ animation: 'neon-pulse 3s ease-in-out infinite' }}
        >
          <span className="w-2 h-2 rounded-full bg-neon-lime animate-pulse" />
          <span className="text-sm font-medium text-text-secondary font-mono">
            Available for new opportunities
          </span>
        </motion.div>

        {/* Glitchy Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1
            className="glitch-text text-[clamp(3rem,10vw,7rem)] font-black leading-[1.05] tracking-[-0.04em] mb-4 neon-text"
            data-text="Naveen Kumar"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Naveen Kumar
          </h1>
        </motion.div>

        {/* Typewriter Subtitle */}
        <motion.h2
          className="text-[clamp(1rem,2.5vw,1.5rem)] font-medium text-neon-magenta mb-8 tracking-[-0.01em] h-[2em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <TypewriterText text="AI Developer & Full Stack Engineer" delay={2.5} />
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-base md:text-lg text-text-secondary max-w-[580px] leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.6 }}
        >
          Crafting intelligent systems and modern web experiences.
          Merging complex data structures with premium frontend aesthetics
          to build the next generation of digital products.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.0, duration: 0.6 }}
        >
          <button
            onClick={handleContactClick}
            className="btn-primary text-base px-8 py-4"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={handleProjectsClick}
            className="btn-secondary text-base px-8 py-4"
          >
            View Work
          </button>
        </motion.div>
      </motion.div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 hidden md:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="w-[1px] h-10" style={{ background: 'linear-gradient(to bottom, rgba(0,240,255,0.5), transparent)' }} />
      </motion.div>
    </section>
  );
}
