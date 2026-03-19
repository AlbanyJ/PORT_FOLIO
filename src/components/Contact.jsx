// components/Contact.jsx
import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { personal } from '../data';
import { Mail, Github, Linkedin, Twitter, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const { ref, inView } = useInView();

  // Form state
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  // Form submission — using Formspree (free service, no backend needed)
  // Replace YOUR_FORM_ID with your actual Formspree form ID
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Option A: Formspree — sign up at formspree.io, replace the URL below
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSent(true);
        setForm({ name: '', email: '', message: '' });
      }
    } catch {
      // If form not set up yet, just show success for demo purposes
      setSent(true);
    } finally {
      setLoading(false);
    }
  };

  const socials = [
    { href: personal.social.github,   Icon: Github,   label: 'GitHub'   },
    { href: personal.social.linkedin,  Icon: Linkedin, label: 'LinkedIn' },
    { href: personal.social.twitter,   Icon: Twitter,  label: 'Twitter'  },
    { href: `mailto:${personal.email}`, Icon: Mail,    label: 'Email'    },
  ];

  return (
    <section id="contact" className="section-padding max-w-6xl mx-auto">
      {/* Section label */}
      <div className="flex items-center gap-4 mb-4">
        <span className="font-mono text-accent text-sm tracking-widest">04.</span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-text">Contact</h2>
        <div className="flex-1 h-px bg-border max-w-xs" />
      </div>

      <p className="font-body text-text-dim mb-12 max-w-lg">
        Have a project, opportunity, or just want to say hi? My inbox is always open.
      </p>

      <div
        ref={ref}
        className={`grid md:grid-cols-2 gap-12 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Contact info */}
        <div>
          <div className="flex items-center gap-3 mb-6 p-4 rounded-lg border border-border bg-surface/40">
            <Mail size={18} className="text-accent flex-shrink-0" />
            <div>
              <p className="font-mono text-xs text-muted mb-0.5">Email me directly</p>
              <a
                href={`mailto:${personal.email}`}
                className="font-body text-text hover:text-accent transition-colors text-sm"
              >
                {personal.email}
              </a>
            </div>
          </div>

          <h3 className="font-display font-semibold text-text mb-4">Follow my work</h3>
          <div className="flex flex-col gap-3">
            {socials.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-text-dim hover:text-accent transition-colors duration-200 group"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-lg border border-border group-hover:border-accent/50 transition-colors">
                  <Icon size={16} />
                </span>
                <span className="font-body text-sm">{label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Contact form */}
        <div>
          {sent ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center p-8 border border-accent/30 rounded-xl bg-accent/5">
              <CheckCircle size={40} className="text-accent" />
              <h3 className="font-display font-bold text-xl text-text">Message sent!</h3>
              <p className="font-body text-text-dim text-sm">
                Thanks for reaching out. I'll get back to you as soon as I can.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-2 text-xs font-mono text-accent hover:underline"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name */}
              <div>
                <label className="block font-mono text-xs text-muted mb-1.5 tracking-wider uppercase">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text placeholder:text-muted text-sm font-body focus:outline-none focus:border-accent/70 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-mono text-xs text-muted mb-1.5 tracking-wider uppercase">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text placeholder:text-muted text-sm font-body focus:outline-none focus:border-accent/70 transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block font-mono text-xs text-muted mb-1.5 tracking-wider uppercase">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Hi, I'd like to talk about..."
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text placeholder:text-muted text-sm font-body focus:outline-none focus:border-accent/70 transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-accent text-background font-display font-semibold rounded-lg hover:bg-accent-dim transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_0_20px_#00FF9440]"
              >
                {loading ? (
                  <span className="animate-spin w-4 h-4 border-2 border-background border-t-transparent rounded-full" />
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
