import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import FadeInWrapper from './ui/FadeInWrapper';
import { FaGithub } from 'react-icons/fa';
import { ExternalLink } from 'lucide-react';

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section-spacing relative overflow-hidden"
    >
      <div className="container-narrow relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <FadeInWrapper blur>
            <p className="label-mono text-accent mb-4">
              Featured Work
            </p>
          </FadeInWrapper>

          <FadeInWrapper delay={0.1} blur>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-text-primary leading-[1.1] mb-6">
              Selected Projects
            </h2>
          </FadeInWrapper>

          <FadeInWrapper delay={0.2}>
            <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              A showcase of my recent work focusing on AI integration, modern web development,
              and scalable architectures.
            </p>
          </FadeInWrapper>
        </div>

        {/* Project Cards — Bento */}
        <div className="space-y-6">
          {projects.map((project, i) => (
            <FadeInWrapper key={project.id} delay={i * 0.08} scale>
              <motion.div
                className="card-bento p-8 md:p-12 lg:p-14 group"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
                  <div className="flex items-center gap-6">
                    <span className="text-5xl md:text-6xl font-bold text-accent/20 leading-none tracking-[-0.02em] font-mono">
                      {project.number}
                    </span>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-text-primary tracking-[-0.02em] group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  <span className="chip-accent self-start md:self-auto">
                    {project.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-base md:text-lg text-text-secondary leading-[1.8] mb-10 max-w-3xl">
                  {project.description}
                </p>

                {/* Bottom Row */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="chip text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4 shrink-0">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-text-secondary hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
                      aria-label="View Source on GitHub"
                    >
                      <FaGithub size={20} />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-sm px-6 py-3"
                      >
                        Live Demo
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </FadeInWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
