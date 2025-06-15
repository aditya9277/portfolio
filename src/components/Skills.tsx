
import { Code2, Database, Cloud, Server, Wrench, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      skills: [
        { name: 'C++', icon: Code2, color: 'text-blue-400' },
        { name: 'JavaScript', icon: Code2, color: 'text-yellow-400' },
        { name: 'Python', icon: Code2, color: 'text-green-400' },
        { name: 'SQL', icon: Database, color: 'text-orange-400' },
        { name: 'React', icon: Code2, color: 'text-cyan-400' },
        { name: 'Node.js', icon: Server, color: 'text-emerald-400' },
        { name: 'MongoDB', icon: Database, color: 'text-green-500' }
      ],
      color: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'DevOps & Cloud',
      skills: [
        { name: 'AWS', icon: Cloud, color: 'text-orange-400' },
        { name: 'Docker', icon: Server, color: 'text-blue-400' },
        { name: 'Terraform', icon: Wrench, color: 'text-purple-400' },
        { name: 'Jenkins', icon: Wrench, color: 'text-red-400' },
        { name: 'Azure', icon: Cloud, color: 'text-blue-500' },
        { name: 'GitHub Actions', icon: Wrench, color: 'text-gray-400' }
      ],
      color: 'from-teal-400 to-emerald-500'
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Prisma ORM', icon: Database, color: 'text-indigo-400' },
        { name: 'Kafka', icon: Server, color: 'text-red-500' },
        { name: 'Redis', icon: Database, color: 'text-red-400' },
        { name: 'WebSockets', icon: Server, color: 'text-green-400' },
        { name: 'Bash', icon: Terminal, color: 'text-gray-300' },
        { name: 'Linux', icon: Terminal, color: 'text-yellow-500' }
      ],
      color: 'from-orange-400 to-red-500'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gradient-to-br from-slate-800/70 via-gray-800/70 to-slate-700/70 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20 shadow-2xl hover:shadow-cyan-500/20 hover:border-teal-400/40 transition-all duration-500"
            >
              <h3 className={`text-xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <div 
                      key={skillIndex} 
                      className="group flex flex-col items-center p-3 rounded-xl bg-slate-700/30 hover:bg-slate-600/40 border border-slate-600/30 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
                    >
                      <IconComponent 
                        size={32} 
                        className={`${skill.color} mb-2 group-hover:scale-110 transition-transform duration-300`} 
                      />
                      <span className="text-blue-100 text-sm font-medium text-center">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center bg-gradient-to-br from-slate-800/70 to-gray-800/70 backdrop-blur-lg rounded-xl p-4 border border-cyan-500/20">
            <div className="text-2xl font-bold text-cyan-400 mb-1">400+</div>
            <div className="text-blue-200 text-sm">DSA Problems</div>
          </div>
          <div className="text-center bg-gradient-to-br from-slate-800/70 to-gray-800/70 backdrop-blur-lg rounded-xl p-4 border border-teal-500/20">
            <div className="text-2xl font-bold text-teal-400 mb-1">1600+</div>
            <div className="text-blue-200 text-sm">LeetCode Rating</div>
          </div>
          <div className="text-center bg-gradient-to-br from-slate-800/70 to-gray-800/70 backdrop-blur-lg rounded-xl p-4 border border-emerald-500/20">
            <div className="text-2xl font-bold text-emerald-400 mb-1">1056</div>
            <div className="text-blue-200 text-sm">Codeforces Max</div>
          </div>
          <div className="text-center bg-gradient-to-br from-slate-800/70 to-gray-800/70 backdrop-blur-lg rounded-xl p-4 border border-orange-500/20">
            <div className="text-2xl font-bold text-orange-400 mb-1">5+</div>
            <div className="text-blue-200 text-sm">Major Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
