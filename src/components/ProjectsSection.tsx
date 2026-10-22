import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import SectionHeader from './ui/SectionHeader';
import { FaGithub } from 'react-icons/fa';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectsSection() {
  return (
    <section id="projects" className="tone-dark section-spacing relative overflow-hidden">
      <div className="container-narrow relative z-10">
        <SectionHeader
          label="featured work"
          title={['Selected', 'projects']}
          intro="A showcase of recent work — AI integration, modern web development, and scalable architectures."
        />

        <div className="border-b border-line">
          {projects.map((project) => (
            <motion.article
              key={project.id}
              className="group relative grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10 py-10 md:py-12 border-t border-line"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9 }}
            >
              {/* Glow in the project's own colour, revealed on hover */}
              <span
                className="pointer-events-none absolute -left-24 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full opacity-0 scale-75 blur-3xl transition-all duration-700 ease-out-expo group-hover:opacity-35 group-hover:scale-100"
                style={{ background: project.color }}
                aria-hidden="true"
              />

              <div className="relative md:col-span-3 flex md:flex-col gap-4 md:gap-5 items-baseline md:items-start">
                <span className="display text-[clamp(2.5rem,4vw,3.5rem)] text-foam/40 transition-colors duration-500 group-hover:text-foam tabular-nums">
                  {project.number}
                </span>
                <span
                  className="inline-flex items-center gap-2 text-sm text-muted"
                >
                  <span className="w-2 h-2 rounded-full" style={{ background: project.color }} aria-hidden="true" />
                  {project.category}
                </span>
              </div>

              <div className="relative md:col-span-7 min-w-0">
                <h3 className="serif text-[clamp(1.6rem,3vw,2.5rem)] leading-[1.12] text-foam mb-4 transition-transform duration-700 ease-out-expo group-hover:translate-x-2">
                  {project.title}
                </h3>
                <p className="text-base leading-[1.7] text-muted max-w-[62ch] mb-6">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
                  {project.techStack.map((tech) => (
                    <li key={tech} className="tag">{tech}</li>
                  ))}
                </ul>
              </div>

              <div className="relative md:col-span-2 flex md:flex-col md:items-end gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-line flex items-center justify-center text-foam hover:bg-foam hover:text-abyss transition-colors duration-300"
                  aria-label={`${project.title} source on GitHub`}
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href={project.liveUrl ?? project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-line flex items-center justify-center text-foam hover:bg-foam hover:text-abyss transition-colors duration-300"
                  aria-label={`View ${project.title}`}
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
