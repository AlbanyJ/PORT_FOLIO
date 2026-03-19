// components/Skills.jsx
import { useInView } from '../hooks/useInView';
import { skills } from '../data';

function SkillCategory({ category, index }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`glass-card rounded-xl p-6 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-5">
        <span className="text-2xl">{category.icon}</span>
        <h3 className="font-display font-semibold text-text text-base">
          {category.category}
        </h3>
      </div>

      {/* Skill chips */}
      <div className="flex flex-wrap gap-2">
        {category.items.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 font-mono text-xs text-text-dim bg-background border border-border rounded-md hover:border-accent/50 hover:text-accent transition-all duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="section-padding bg-surface/30">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-accent text-sm tracking-widest">03.</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-text">Skills</h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <p
          ref={ref}
          className={`font-body text-text-dim mb-12 max-w-lg transition-all duration-500 ${
            inView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Technologies I work with and am actively developing. Always adding more.
        </p>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((cat, i) => (
            <SkillCategory key={cat.category} category={cat} index={i} />
          ))}
        </div>

        {/* Learning note */}
        <div className="mt-10 flex items-center gap-3 p-4 border border-border/50 rounded-lg bg-background/30 max-w-lg">
          <span className="text-accent text-xl">📈</span>
          <p className="font-body text-text-dim text-sm">
            Currently deepening my knowledge in <span className="text-text font-medium">machine learning</span> and <span className="text-text font-medium">full-stack React apps</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
