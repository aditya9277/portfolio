
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import FloatingCTA from '@/components/FloatingCTA';
import Stats from '@/components/Stats';
import CallToAction from '@/components/CallToAction';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white overflow-x-hidden">
      {/* Enhanced animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/12 to-teal-400/12 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-r from-teal-500/8 to-cyan-500/8 rounded-full blur-2xl animate-pulse delay-500" />
        <div className="absolute top-3/4 left-1/2 w-32 h-32 bg-gradient-to-r from-cyan-300/6 to-blue-300/6 rounded-full blur-xl animate-pulse delay-700" />
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Stats />
        <Projects />
        <Skills />
        <Achievements />
        <CallToAction />
        <Contact />
      </main>
      <FloatingCTA />
    </div>
  );
};

export default Index;
