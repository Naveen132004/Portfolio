import { lazy, Suspense } from 'react';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ScrollProgress from './components/ui/ScrollProgress';
import LoadingScreen from './components/ui/LoadingScreen';

// Lazy load below-the-fold sections for performance
const MarqueeSection = lazy(() => import('./components/MarqueeSection'));
const AboutSection = lazy(() => import('./components/AboutSection'));
const SkillsSection = lazy(() => import('./components/SkillsSection'));
const ServicesSection = lazy(() => import('./components/ServicesSection'));
const ProjectsSection = lazy(() => import('./components/ProjectsSection'));
const GitHubStats = lazy(() => import('./components/GitHubStats'));
const ExperienceSection = lazy(() => import('./components/ExperienceSection'));
const EducationSection = lazy(() => import('./components/EducationSection'));
const Achievements = lazy(() => import('./components/Achievements'));
const Timeline = lazy(() => import('./components/Timeline'));
const ResumeSection = lazy(() => import('./components/ResumeSection'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const Footer = lazy(() => import('./components/Footer'));

function SectionLoader() {
  return (
    <div className="tone-mist flex items-center justify-center py-32">
      <div className="w-4 h-4 border border-ink/20 border-t-ink/60 rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      {/* Global UI */}
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />

      {/* Page content */}
      <main className="relative z-10">
        <HeroSection />

        <Suspense fallback={<SectionLoader />}>
          <MarqueeSection />
          <AboutSection />
          <ServicesSection />
          <SkillsSection />
          <ProjectsSection />
          <GitHubStats />
          <ExperienceSection />
          <EducationSection />
          <Achievements />
          <Timeline />
          <ResumeSection />
          <ContactForm />
          <Footer />
        </Suspense>
      </main>
    </MotionConfig>
  );
}
