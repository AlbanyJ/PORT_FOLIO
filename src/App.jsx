import Navbar   from './components/Navbar';
import Hero     from './components/Hero';
import About    from './components/About';
import Projects from './components/Projects';
import Skills   from './components/Skills';
import Contact  from './components/Contact';
import Footer   from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#080B11] text-[#E2E8F0]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}