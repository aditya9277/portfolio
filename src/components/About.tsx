
import { GraduationCap, Briefcase, Trophy, Code2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-40" />
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-teal-400 rounded-full animate-pulse delay-1000 opacity-50" />
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-emerald-400 rounded-full animate-pulse delay-500 opacity-60" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="group bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-cyan-500/30 shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-teal-300 transition-all duration-500">
            About Me
          </h2>
          
          <div className="prose prose-lg text-blue-100 max-w-none space-y-6">
            <div className="relative overflow-hidden">
              <p className="text-lg md:text-xl leading-relaxed transform translate-y-4 opacity-0 animate-fade-in">
                I'm a <span className="text-cyan-300 font-semibold relative">
                  B.Tech CSE student at VIT Bhopal
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
                </span> with a deep passion for building scalable software, AI applications, and DevOps systems. My journey in technology is driven by a commitment to creating solutions that don't just work—they make a meaningful impact.
              </p>
            </div>
            
            <div className="relative overflow-hidden">
              <p className="text-lg md:text-xl leading-relaxed transform translate-y-4 opacity-0 animate-fade-in animation-delay-500">
                With hands-on experience from internships at <span className="text-teal-300 font-semibold relative">
                  Ernst & Young
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400 to-transparent"></div>
                </span> and <span className="text-emerald-300 font-semibold relative">
                  Persistent Systems
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-400 to-transparent"></div>
                </span>, I've developed a strong foundation in full-stack development, cloud technologies, and modern DevOps practices.
              </p>
            </div>
            
            <div className="relative overflow-hidden">
              <p className="text-lg md:text-xl leading-relaxed transform translate-y-4 opacity-0 animate-fade-in animation-delay-1000">
                I've participated in several national-level hackathons, reaching grand finals and top positions, which has sharpened my ability to innovate under pressure and deliver results that matter. When I'm not coding, you'll find me solving algorithmic challenges or exploring the latest in AI and cloud technologies.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="group/stat text-center p-4 rounded-xl bg-slate-800/30 hover:bg-slate-700/30 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
              <div className="flex justify-center mb-3">
                <Code2 className="w-8 h-8 text-cyan-400 group-hover/stat:animate-pulse" />
              </div>
              <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover/stat:scale-110 transition-transform duration-300">400+</div>
              <div className="text-blue-300">DSA Problems Solved</div>
            </div>
            
            <div className="group/stat text-center p-4 rounded-xl bg-slate-800/30 hover:bg-slate-700/30 border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300 hover:scale-105">
              <div className="flex justify-center mb-3">
                <Briefcase className="w-8 h-8 text-teal-400 group-hover/stat:animate-pulse" />
              </div>
              <div className="text-3xl font-bold text-teal-400 mb-2 group-hover/stat:scale-110 transition-transform duration-300">2</div>
              <div className="text-blue-300">Industry Internships</div>
            </div>
            
            <div className="group/stat text-center p-4 rounded-xl bg-slate-800/30 hover:bg-slate-700/30 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105">
              <div className="flex justify-center mb-3">
                <Trophy className="w-8 h-8 text-emerald-400 group-hover/stat:animate-pulse" />
              </div>
              <div className="text-3xl font-bold text-emerald-400 mb-2 group-hover/stat:scale-110 transition-transform duration-300">5+</div>
              <div className="text-blue-300">National Hackathons</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-500 {
          animation-delay: 0.5s;
          animation-fill-mode: forwards;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  );
};

export default About;
