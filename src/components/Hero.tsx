
import { useEffect, useState } from 'react';
import { ArrowDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Result-Driven Full Stack Developer | Impact through Innovation';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent animate-fade-in">
            Tanushree Mishra
          </h1>
          
          <div className="h-20 mb-6">
            <p className="text-xl md:text-2xl text-cyan-200 font-light min-h-[2.5rem]">
              {displayText}
              <span className="animate-pulse text-orange-400">|</span>
            </p>
          </div>

          <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            From scaling backend systems to building intuitive UIs, I create software that performs and impresses.
            Currently pursuing B.Tech CSE at VIT Bhopal with hands-on experience at Persistent Systems.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="https://drive.google.com/file/d/1gmqJGkRfX-tvsyuOU7eO3QYsSIUv5K8V/view?usp=sharing"
            target='_blank'
            rel="noopener noreferrer"
            download
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 flex items-center gap-2 border border-blue-500/50"
          >
            <Download size={20} />
            View Resume
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </a>
          
          <a
            href="mailto:tanushree.dev@gmail.com"
            className="group relative px-8 py-4 border-2 border-teal-500 rounded-lg font-semibold transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-teal-500/20 hover:scale-105 flex items-center gap-2"
          >
            <Mail size={20} />
            Contact Me
          </a>
        </div>

        <button
          onClick={scrollToProjects}
          className="animate-bounce p-2 rounded-full border border-emerald-500 hover:border-cyan-400 transition-colors duration-300"
        >
          <ArrowDown size={24} />
        </button>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-cyan-500 rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-10 w-6 h-6 bg-teal-500 rounded-full animate-pulse delay-1000" />
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-500" />
    </section>
  );
};

export default Hero;
