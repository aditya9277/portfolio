
import { useEffect, useState } from 'react';
import { ArrowDown, Download, Mail, Trophy, Code, Briefcase } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Building Scalable Solutions | Driving Innovation Through Code';

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
          {/* Professional Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full text-blue-300 mb-6 animate-fade-in">
            <Briefcase size={16} />
            <span className="text-sm font-medium">Available for Full-Time Opportunities</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent animate-fade-in">
            Aditya Gupta
          </h1>
          
          <div className="h-20 mb-6">
            <p className="text-xl md:text-2xl text-cyan-200 font-light min-h-[2.5rem]">
              {displayText}
              <span className="animate-pulse text-orange-400">|</span>
            </p>
          </div>

          <p className="text-lg md:text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed mb-8">
            Full-Stack Developer with proven expertise in enterprise solutions at <span className="text-cyan-300 font-semibold">EY</span> and <span className="text-teal-300 font-semibold">Persistent Systems</span>. 
            Specialized in React, Node.js, DevOps, and AI integration. Ready to drive innovation and deliver measurable impact.
          </p>

          {/* Quick Impact Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-gray-800/50 backdrop-blur-lg rounded-lg p-4 border border-cyan-500/30">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Trophy className="text-yellow-400" size={20} />
                <span className="text-2xl font-bold text-cyan-400">Top 10</span>
              </div>
              <div className="text-xs text-gray-300">EY Techathon 5.0</div>
              <div className="text-xs text-gray-400">1.5L+ participants</div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/50 to-gray-800/50 backdrop-blur-lg rounded-lg p-4 border border-teal-500/30">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Code className="text-green-400" size={20} />
                <span className="text-2xl font-bold text-teal-400">500+</span>
              </div>
              <div className="text-xs text-gray-300">Problems Solved</div>
              <div className="text-xs text-gray-400">LeetCode Knight</div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/50 to-gray-800/50 backdrop-blur-lg rounded-lg p-4 border border-purple-500/30">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Briefcase className="text-purple-400" size={20} />
                <span className="text-2xl font-bold text-purple-400">2</span>
              </div>
              <div className="text-xs text-gray-300">Industry Internships</div>
              <div className="text-xs text-gray-400">Fortune 500 Companies</div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/50 to-gray-800/50 backdrop-blur-lg rounded-lg p-4 border border-orange-500/30">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Trophy className="text-orange-400" size={20} />
                <span className="text-2xl font-bold text-orange-400">5+</span>
              </div>
              <div className="text-xs text-gray-300">Major Projects</div>
              <div className="text-xs text-gray-400">Production Ready</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="https://drive.google.com/file/d/1gmqJGkRfX-tvsyuOU7eO3QYsSIUv5K8V/view?usp=sharing"
            target='_blank'
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 flex items-center gap-2 border border-blue-500/50"
          >
            <Download size={20} />
            Download Resume
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </a>
          
          <a
            href="mailto:aditya04.dev@gmail.com"
            className="group relative px-8 py-4 border-2 border-teal-500 rounded-lg font-semibold transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-teal-500/20 hover:scale-105 flex items-center gap-2"
          >
            <Mail size={20} />
            Let's Connect
          </a>
        </div>

        <button
          onClick={scrollToProjects}
          className="animate-bounce p-2 rounded-full border border-emerald-500 hover:border-cyan-400 transition-colors duration-300"
        >
          <ArrowDown size={24} />
        </button>
      </div>

      {/* Enhanced floating elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-cyan-500 rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-10 w-6 h-6 bg-teal-500 rounded-full animate-pulse delay-1000" />
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-500" />
      <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-700" />
      <div className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-orange-500 rounded-full animate-pulse delay-300" />
    </section>
  );
};

export default Hero;
