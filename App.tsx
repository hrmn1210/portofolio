
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll('.scroll-animation');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="bg-jungle-deep min-h-screen text-jungle-light font-sans">
      <div className="noise-bg"></div>
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <About />
            <Projects />
            <Skills />
            <Contact />
          </div>
        </main>
        <footer className="text-center py-8 mt-16 border-t border-jungle-green/20">
          <p>&copy; {new Date().getFullYear()} YN. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;