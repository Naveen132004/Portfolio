import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ScrollProgress from './components/ui/ScrollProgress';
import LoadingScreen from './components/ui/LoadingScreen';
import CustomCursor from './components/ui/CustomCursor';
import DynamicBackground from './components/ui/DynamicBackground';

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
    <div className="flex items-center justify-center py-32">
      <div className="w-5 h-5 border-2 border-border border-t-accent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <>
      {/* Global UI */}
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <DynamicBackground />
      <Navbar />

      {/* Page content */}
      <main className="relative z-10">
        <HeroSection />

        <Suspense fallback={<SectionLoader />}>
          <MarqueeSection />
          <AboutSection />
          <SkillsSection />
          <ServicesSection />
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
    </>
  );
}
