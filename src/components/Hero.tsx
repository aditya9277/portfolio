
import { useEffect, useState } from 'react';
import { ArrowDown, Download, Mail, Sparkles, Zap } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Result-Driven Full Stack Developer | Impact through Innovation';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        // Hide cursor after typing is complete
        setTimeout(() => setShowCursor(false), 1000);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Enhanced floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-teal-400 rounded-full animate-pulse delay-1000 opacity-70" />
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-emerald-400 rounded-full animate-pulse delay-500 opacity-65" />
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-700 opacity-80" />
        <div className="absolute bottom-60 right-1/3 w-2 h-2 bg-indigo-400 rounded-full animate-pulse delay-300 opacity-70" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 border border-cyan-400/30 rotate-45 animate-spin opacity-40" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-6 h-6 border border-teal-400/30 rotate-12 animate-pulse opacity-50" />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-8">
          {/* Enhanced name with multiple effects */}
          <div className="relative mb-6">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-teal-300 bg-clip-text text-transparent animate-fade-in relative hero-text-glow">
              <span className="inline-block animate-float">A</span>
              <span className="inline-block animate-float animation-delay-100">d</span>
              <span className="inline-block animate-float animation-delay-200">i</span>
              <span className="inline-block animate-float animation-delay-300">t</span>
              <span className="inline-block animate-float animation-delay-400">y</span>
              <span className="inline-block animate-float animation-delay-500">a</span>
              <span className="mx-2"></span>
              <span className="inline-block animate-float animation-delay-600">G</span>
              <span className="inline-block animate-float animation-delay-700">u</span>
              <span className="inline-block animate-float animation-delay-800">p</span>
              <span className="inline-block animate-float animation-delay-900">t</span>
              <span className="inline-block animate-float animation-delay-1000">a</span>
            </h1>
            <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-cyan-400 animate-pulse opacity-70" />
            <Zap className="absolute -bottom-2 -left-4 w-6 h-6 text-yellow-400 animate-bounce opacity-60" />
          </div>
          
          {/* Enhanced typewriter effect with glitch */}
          <div className="h-20 mb-6">
            <p className="text-xl md:text-2xl text-cyan-200 font-light min-h-[2.5rem] relative glitch-text">
              <span className="inline-block animate-fade-in">
                {displayText}
              </span>
              {showCursor && (
                <span className="animate-pulse text-orange-400 text-3xl ml-1 neon-cursor">|</span>
              )}
            </p>
          </div>

          {/* Enhanced description with sliding animation */}
          <div className="overflow-hidden">
            <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed transform translate-y-4 animate-fade-in opacity-0 animation-delay-2000 text-shadow">
              From scaling backend systems to building intuitive UIs, I create software that performs and impresses.
              Currently pursuing B.Tech CSE at VIT Bhopal with hands-on experience at EY and Persistent Systems.
            </p>
          </div>
        </div>

        {/* Enhanced buttons with better hover effects */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 opacity-0 animate-fade-in animation-delay-3000">
          <a
            href="/resume.pdf"
            download
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-110 flex items-center gap-2 border border-blue-500/50 overflow-hidden button-glow"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            <Download size={20} className="relative z-10 group-hover:animate-bounce" />
            <span className="relative z-10">View Resume</span>
          </a>
          
          <a
            href="mailto:aditya04.dev@gmail.com"
            className="group relative px-8 py-4 border-2 border-teal-500 rounded-lg font-semibold transition-all duration-500 hover:border-cyan-400 hover:shadow-lg hover:shadow-teal-500/25 hover:scale-110 flex items-center gap-2 overflow-hidden button-glow"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <Mail size={20} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">Contact Me</span>
          </a>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="opacity-0 animate-fade-in animation-delay-4000">
          <button
            onClick={scrollToProjects}
            className="group p-3 rounded-full border border-emerald-500 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 animate-bounce scroll-indicator"
          >
            <ArrowDown size={24} className="group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      <style>{`
        .animation-delay-100 { animation-delay: 0.1s; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-700 { animation-delay: 0.7s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        .animation-delay-900 { animation-delay: 0.9s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; animation-fill-mode: forwards; }
        .animation-delay-3000 { animation-delay: 3s; animation-fill-mode: forwards; }
        .animation-delay-4000 { animation-delay: 4s; animation-fill-mode: forwards; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .hero-text-glow {
          text-shadow: 0 0 20px rgba(34, 211, 238, 0.3);
        }
        
        .glitch-text {
          position: relative;
        }
        
        .glitch-text::before {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          left: 2px;
          text-shadow: -2px 0 #ff0000;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim 5s infinite linear alternate-reverse;
        }
        
        @keyframes glitch-anim {
          0% { clip: rect(31px, 9999px, 94px, 0); }
          5% { clip: rect(70px, 9999px, 18px, 0); }
          10% { clip: rect(79px, 9999px, 27px, 0); }
          15% { clip: rect(2px, 9999px, 83px, 0); }
          20% { clip: rect(63px, 9999px, 27px, 0); }
          25% { clip: rect(17px, 9999px, 96px, 0); }
          30% { clip: rect(96px, 9999px, 2px, 0); }
          35% { clip: rect(49px, 9999px, 33px, 0); }
          40% { clip: rect(82px, 9999px, 81px, 0); }
          45% { clip: rect(18px, 9999px, 7px, 0); }
          50% { clip: rect(67px, 9999px, 96px, 0); }
          55% { clip: rect(7px, 9999px, 32px, 0); }
          60% { clip: rect(46px, 9999px, 99px, 0); }
          65% { clip: rect(99px, 9999px, 16px, 0); }
          70% { clip: rect(16px, 9999px, 9px, 0); }
          75% { clip: rect(9px, 9999px, 46px, 0); }
          80% { clip: rect(46px, 9999px, 67px, 0); }
          85% { clip: rect(67px, 9999px, 7px, 0); }
          90% { clip: rect(7px, 9999px, 18px, 0); }
          95% { clip: rect(18px, 9999px, 82px, 0); }
          100% { clip: rect(82px, 9999px, 49px, 0); }
        }
        
        .neon-cursor {
          text-shadow: 0 0 10px #fbbf24, 0 0 20px #fbbf24, 0 0 40px #fbbf24;
        }
        
        .text-shadow {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .button-glow:hover {
          box-shadow: 0 0 20px rgba(34, 211, 238, 0.4);
        }
        
        .scroll-indicator {
          box-shadow: 0 0 15px rgba(16, 185, 129, 0.2);
        }
      `}</style>
    </section>
  );
};

export default Hero;
