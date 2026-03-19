// components/Footer.jsx
import { personal } from '../data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-muted">
          © {year} {personal.name}. Designed & Built with ❤️
        </p>
        <p className="font-mono text-xs text-muted">
          Built with React + Vite + Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
