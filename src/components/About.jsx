// components/About.jsx
import { useInView } from '../hooks/useInView';
import { personal } from '../data';
import { MapPin, GraduationCap, Zap } from 'lucide-react';

const interests = [
  '🤖 Artificial Intelligence',
  '🌐 Web Development',
  '📊 Data Science',
  '🔧 Open Source',
  '📚 Continuous Learning',
  '🎮 Game Dev (exploring)',
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="section-padding max-w-6xl mx-auto">
      {/* Section label */}
      <div className="flex items-center gap-4 mb-16">
        <span className="font-mono text-accent text-sm tracking-widest">01.</span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-text">About Me</h2>
        <div className="flex-1 h-px bg-border max-w-xs" />
      </div>

      <div
        ref={ref}
        className={`grid md:grid-cols-2 gap-12 lg:gap-20 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Bio */}
        <div>
          <p className="font-body text-text-dim leading-relaxed text-base mb-6">
            {personal.bio}
          </p>

          {/* Key facts */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-text-dim text-sm">
              <GraduationCap size={16} className="text-accent flex-shrink-0" />
              <span>{personal.university}</span>
            </div>
            <div className="flex items-center gap-3 text-text-dim text-sm">
              <MapPin size={16} className="text-accent flex-shrink-0" />
              <span>{personal.location}</span>
            </div>
            <div className="flex items-center gap-3 text-text-dim text-sm">
              <Zap size={16} className="text-accent flex-shrink-0" />
              <span>Currently exploring AI agents & full-stack apps</span>
            </div>
          </div>

          {/* Download CV */}
          <a
            href={personal.cvUrl}
            download
            className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 border border-border text-text-dim text-sm rounded-lg hover:border-accent hover:text-accent transition-colors duration-200 font-mono"
          >
            ↓ Download CV
          </a>
        </div>

        {/* Interests grid */}
        <div>
          <img
            src="/profile.jpg"
            alt="Albany"
            className="w-32 h-32 rounded-2xl object-cover border border-[#1A2235] mb-6"
          />
          <h3 className="font-display font-semibold text-text text-lg mb-5">
            Things I'm interested in
          </h3>
          <div className="flex flex-wrap gap-2">
            {interests.map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 text-sm font-body text-text-dim bg-surface border border-border rounded-full hover:border-accent/50 hover:text-text transition-colors duration-200"
              >
                {item}
              </span>
            ))}
          </div>

          {/* A quote or personal note */}
          <blockquote className="mt-8 pl-4 border-l-2 border-accent">
            <p className="font-body italic text-text-dim text-sm leading-relaxed">
              "I believe the best way to learn is by building. Every project teaches me
              something new and gets me closer to where I want to be."
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
