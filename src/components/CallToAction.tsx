
import { ArrowRight, Calendar, Mail, Linkedin } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-blue-400/30 shadow-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Drive Innovation Together?
          </h2>
          
          <p className="text-lg md:text-xl text-blue-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm actively seeking full-time opportunities where I can contribute to meaningful projects, 
            scale products, and work with cutting-edge technologies. Let's build something amazing together.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/30">
              <div className="text-cyan-400 font-bold text-lg mb-2">Immediate Impact</div>
              <div className="text-gray-300 text-sm">Ready to contribute from day one with proven enterprise experience</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-500/30">
              <div className="text-purple-400 font-bold text-lg mb-2">Growth Mindset</div>
              <div className="text-gray-300 text-sm">Continuously learning and adapting to new technologies and challenges</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-teal-500/30">
              <div className="text-teal-400 font-bold text-lg mb-2">Team Player</div>
              <div className="text-gray-300 text-sm">Collaborative approach with excellent communication and leadership skills</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:aditya04.dev@gmail.com"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 flex items-center gap-2 border border-blue-500/50"
            >
              <Mail size={20} />
              Schedule a Call
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            
            <a
              href="https://www.linkedin.com/in/aditya-gupta-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 border-2 border-cyan-500 rounded-lg font-semibold transition-all duration-300 hover:border-purple-400 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 flex items-center gap-2"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </a>
          </div>

          <div className="mt-8 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-400/30 rounded-lg">
            <div className="flex items-center justify-center gap-2 text-green-300">
              <Calendar size={16} />
              <span className="text-sm font-medium">Available for immediate start • Open to relocation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
