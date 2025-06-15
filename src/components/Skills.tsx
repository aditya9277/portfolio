
import { 
  Code2, 
  Database, 
  Globe, 
  Server, 
  Cloud, 
  Container, 
  GitBranch, 
  Terminal,
  Cpu,
  Zap,
  Shield,
  Layers
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      skills: [
        { name: 'C++', icon: Code2, color: 'text-blue-400' },
        { name: 'JavaScript', icon: Zap, color: 'text-yellow-400' },
        { name: 'Python', icon: Code2, color: 'text-green-400' },
        { name: 'SQL', icon: Database, color: 'text-orange-400' },
        { name: 'React', icon: Globe, color: 'text-cyan-400' },
        { name: 'Node.js', icon: Server, color: 'text-emerald-400' },
        { name: 'MongoDB', icon: Database, color: 'text-green-500' }
      ],
      gradient: 'from-cyan-400/20 to-blue-500/20',
      borderColor: 'border-cyan-500/30'
    },
    {
      title: 'DevOps & Cloud',
      skills: [
        { name: 'AWS', icon: Cloud, color: 'text-orange-400' },
        { name: 'Docker', icon: Container, color: 'text-blue-400' },
        { name: 'Terraform', icon: Layers, color: 'text-purple-400' },
        { name: 'Jenkins', icon: GitBranch, color: 'text-red-400' },
        { name: 'Azure', icon: Cloud, color: 'text-blue-500' },
        { name: 'GitHub Actions', icon: GitBranch, color: 'text-gray-300' }
      ],
      gradient: 'from-teal-400/20 to-emerald-500/20',
      borderColor: 'border-teal-500/30'
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Prisma ORM', icon: Database, color: 'text-indigo-400' },
        { name: 'Kafka', icon: Zap, color: 'text-red-400' },
        { name: 'Redis', icon: Database, color: 'text-red-500' },
        { name: 'WebSockets', icon: Globe, color: 'text-green-400' },
        { name: 'Bash', icon: Terminal, color: 'text-gray-300' },
        { name: 'Linux', icon: Cpu, color: 'text-yellow-400' }
      ],
      gradient: 'from-orange-400/20 to-red-500/20',
      borderColor: 'border-orange-500/30'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-teal-500/5 to-emerald-500/5 rounded-full blur-2xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-lg rounded-2xl p-6 border ${category.borderColor} shadow-2xl hover:shadow-cyan-500/10 hover:border-opacity-60 transition-all duration-500 group`}
            >
              <h3 className={`text-xl font-bold mb-6 bg-gradient-to-r ${category.gradient.replace('/20', '')} bg-clip-text text-transparent`}>
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={skillIndex}
                      className="group/skill flex flex-col items-center p-4 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
                    >
                      <div className={`p-3 rounded-full bg-gradient-to-br ${category.gradient} mb-3 group-hover/skill:scale-110 transition-transform duration-300`}>
                        <IconComponent 
                          size={24} 
                          className={`${skill.color} group-hover/skill:animate-pulse`}
                        />
                      </div>
                      <span className="text-blue-100 font-medium text-sm text-center group-hover/skill:text-cyan-300 transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Quick Stats with animations */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="group text-center bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
            <div className="flex items-center justify-center mb-3">
              <Code2 className="w-8 h-8 text-cyan-400 group-hover:animate-bounce" />
            </div>
            <div className="text-2xl font-bold text-cyan-400 mb-1 group-hover:scale-110 transition-transform duration-300">400+</div>
            <div className="text-blue-200 text-sm">DSA Problems</div>
          </div>
          
          <div className="group text-center bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-lg rounded-xl p-6 border border-teal-500/30 hover:border-teal-400/50 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/20">
            <div className="flex items-center justify-center mb-3">
              <Shield className="w-8 h-8 text-teal-400 group-hover:animate-bounce" />
            </div>
            <div className="text-2xl font-bold text-teal-400 mb-1 group-hover:scale-110 transition-transform duration-300">1600+</div>
            <div className="text-blue-200 text-sm">LeetCode Rating</div>
          </div>
          
          <div className="group text-center bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-lg rounded-xl p-6 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20">
            <div className="flex items-center justify-center mb-3">
              <Zap className="w-8 h-8 text-emerald-400 group-hover:animate-bounce" />
            </div>
            <div className="text-2xl font-bold text-emerald-400 mb-1 group-hover:scale-110 transition-transform duration-300">1056</div>
            <div className="text-blue-200 text-sm">Codeforces Max</div>
          </div>
          
          <div className="group text-center bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-lg rounded-xl p-6 border border-orange-500/30 hover:border-orange-400/50 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20">
            <div className="flex items-center justify-center mb-3">
              <Layers className="w-8 h-8 text-orange-400 group-hover:animate-bounce" />
            </div>
            <div className="text-2xl font-bold text-orange-400 mb-1 group-hover:scale-110 transition-transform duration-300">5+</div>
            <div className="text-blue-200 text-sm">Major Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
