
const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      skills: [
        { name: 'C++', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'Python', level: 85 },
        { name: 'SQL', level: 82 },
        { name: 'React', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'MongoDB', level: 80 }
      ],
      color: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'DevOps & Cloud',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Docker', level: 88 },
        { name: 'Terraform', level: 80 },
        { name: 'Jenkins', level: 82 },
        { name: 'Azure', level: 75 },
        { name: 'GitHub Actions', level: 85 }
      ],
      color: 'from-teal-400 to-emerald-500'
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Prisma ORM', level: 85 },
        { name: 'Kafka', level: 75 },
        { name: 'Redis', level: 80 },
        { name: 'WebSockets', level: 82 },
        { name: 'Bash', level: 85 },
        { name: 'Linux', level: 88 }
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

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-blue-100 font-medium">{skill.name}</span>
                      <span className="text-cyan-300 text-sm">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${skillIndex * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
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
