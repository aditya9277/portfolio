
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
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent animate-fade-in">
            Aditya Gupta
          </h1>
          
          <div className="h-20 mb-6">
            <p className="text-xl md:text-2xl text-gray-300 font-light min-h-[2.5rem]">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From scaling backend systems to building intuitive UIs, I create software that performs and impresses.
            Currently pursuing B.Tech CSE at VIT Bhopal with hands-on experience at EY and Persistent Systems.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="/resume.pdf"
            download
            className="group relative px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-gray-700/25 hover:scale-105 flex items-center gap-2 border border-gray-600"
          >
            <Download size={20} />
            View Resume
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </a>
          
          <a
            href="mailto:aditya04.dev@gmail.com"
            className="group relative px-8 py-4 border-2 border-gray-700 rounded-lg font-semibold transition-all duration-300 hover:border-gray-500 hover:shadow-lg hover:shadow-gray-600/10 hover:scale-105 flex items-center gap-2"
          >
            <Mail size={20} />
            Contact Me
          </a>
        </div>

        <button
          onClick={scrollToProjects}
          className="animate-bounce p-2 rounded-full border border-gray-700 hover:border-gray-500 transition-colors duration-300"
        >
          <ArrowDown size={24} />
        </button>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-gray-600 rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-10 w-6 h-6 bg-gray-500 rounded-full animate-pulse delay-1000" />
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-gray-700 rounded-full animate-pulse delay-500" />
    </section>
  );
};

export default Hero;
