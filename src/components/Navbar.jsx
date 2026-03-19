// components/Navbar.jsx
import { useState, useEffect } from 'react';
import { personal, navLinks } from '../data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Add solid background once user scrolls down
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#080B11]/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo / name mark */}
        <a
          href="#hero"
          className="font-display font-bold text-lg tracking-tight text-text hover:text-accent transition-colors"
        >
          {personal.name.split(' ')[0]}
          <span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm text-text-dim hover:text-accent transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={personal.cvUrl}
              download
              className="font-body text-sm px-4 py-2 border border-accent text-accent rounded-md hover:bg-accent hover:text-background transition-all duration-200"
            >
              Download CV
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-text transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-text transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-text transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-b border-border px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-text-dim hover:text-accent transition-colors py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={personal.cvUrl}
                download
                className="inline-block mt-2 px-4 py-2 border border-accent text-accent rounded-md text-sm hover:bg-accent hover:text-background transition-all"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
