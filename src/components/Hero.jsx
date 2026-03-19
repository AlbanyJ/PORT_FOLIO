// components/Hero.jsx
import { useEffect, useState } from 'react';
import { personal } from '../data';
import { Github, Linkedin, Twitter, ArrowDown } from 'lucide-react';

// Words that cycle in the typewriter effect
const ROLES = [
  'Software Developer',
  'AI Enthusiast',
  'CE Student @ KNUST',
  'Problem Solver',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed]   = useState('');
  const [deleting, setDeleting]     = useState(false);

  // Typewriter logic
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      // Type forward
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      // Pause then start deleting
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      // Delete
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (deleting && displayed.length === 0) {
      // Move to next word
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center grid-bg overflow-hidden"
    >
      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 lg:px-24 pt-28 pb-20">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-border bg-surface/60 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-xs text-text-dim tracking-widest uppercase">
            Open to opportunities
          </span>
        </div>

        {/* Name */}
        <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-8xl tracking-tight leading-none mb-4">
          <span className="text-text">{personal.name}</span>
        </h1>

        {/* Typewriter role */}
        <div className="flex items-center gap-2 mb-6 h-10">
          <span className="font-display text-xl sm:text-2xl text-accent font-semibold">
            {displayed}
          </span>
          <span className="w-0.5 h-7 bg-accent animate-blink" />
        </div>

        {/* Tagline */}
        <p className="font-body text-text-dim text-lg sm:text-xl max-w-xl leading-relaxed mb-10">
          {personal.tagline}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 mb-14">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-display font-semibold rounded-lg hover:bg-accent-dim transition-colors duration-200 shadow-[0_0_20px_#00FF9440]"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text font-display font-medium rounded-lg hover:border-accent hover:text-accent transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-5">
          <span className="text-xs font-mono text-muted tracking-widest uppercase">Find me on</span>
          <div className="flex gap-4">
            {[
              { href: personal.social.github,   Icon: Github,   label: 'GitHub'   },
              { href: personal.social.linkedin,  Icon: Linkedin, label: 'LinkedIn' },
              { href: personal.social.twitter,   Icon: Twitter,  label: 'Twitter'  },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted hover:text-accent transition-colors duration-200"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted animate-bounce">
        <ArrowDown size={18} />
      </div>
    </section>
  );
}
