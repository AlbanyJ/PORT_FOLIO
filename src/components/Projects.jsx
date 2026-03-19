// components/Projects.jsx
import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { projects } from '../data';
import { ExternalLink, Github, Star } from 'lucide-react';

// Individual project card
function ProjectCard({ project, index }) {
  const { ref, inView } = useInView();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative group glass-card rounded-xl p-6 transition-all duration-700 cursor-default ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Hover glow accent line */}
      <div
        className={`absolute top-0 left-6 right-6 h-px transition-all duration-300 ${
          hovered ? 'bg-gradient-to-r from-transparent via-accent to-transparent' : 'bg-transparent'
        }`}
      />

      {/* Top row: featured badge + links */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          {project.featured && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-mono text-accent border border-accent/30 rounded-full bg-accent/5">
              <Star size={10} /> Featured
            </span>
          )}
        </div>
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
              className="text-muted hover:text-accent transition-colors"
            >
              <Github size={18} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              className="text-muted hover:text-accent transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-xl text-text mb-2 group-hover:text-accent transition-colors duration-200">
        {project.title}
      </h3>

      {/* Description */}
      <p className="font-body text-text-dim text-sm leading-relaxed mb-5">
        {project.description}
      </p>

      {/* Tech stack pills */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 text-xs font-mono text-accent/80 bg-accent/5 border border-accent/10 rounded"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView();

  return (
    <section id="projects" className="section-padding max-w-6xl mx-auto">
      {/* Section label */}
      <div className="flex items-center gap-4 mb-4">
        <span className="font-mono text-accent text-sm tracking-widest">02.</span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-text">Projects</h2>
        <div className="flex-1 h-px bg-border max-w-xs" />
      </div>

      <p
        ref={ref}
        className={`font-body text-text-dim mb-12 max-w-lg transition-all duration-500 ${
          inView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Things I've built while learning. Each project was an excuse to explore something new.
      </p>

      {/* Projects grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      {/* GitHub CTA */}
      <div className="mt-12 text-center">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-sm text-text-dim hover:text-accent transition-colors border-b border-transparent hover:border-accent pb-0.5"
        >
          <Github size={16} />
          View more on GitHub
        </a>
      </div>
    </section>
  );
}
