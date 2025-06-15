
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
      color: 'from-gray-400 to-gray-200'
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
      color: 'from-gray-300 to-gray-100'
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
      color: 'from-gray-200 to-white'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 shadow-2xl hover:shadow-gray-700/20 hover:border-gray-600/50 transition-all duration-500"
            >
              <h3 className={`text-xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg animate-[slideIn_1s_ease-out_both]`}
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
          <div className="text-center bg-gray-900/50 backdrop-blur-lg rounded-xl p-4 border border-gray-700/50">
            <div className="text-2xl font-bold text-gray-200 mb-1">400+</div>
            <div className="text-gray-400 text-sm">DSA Problems</div>
          </div>
          <div className="text-center bg-gray-900/50 backdrop-blur-lg rounded-xl p-4 border border-gray-700/50">
            <div className="text-2xl font-bold text-gray-200 mb-1">1600+</div>
            <div className="text-gray-400 text-sm">LeetCode Rating</div>
          </div>
          <div className="text-center bg-gray-900/50 backdrop-blur-lg rounded-xl p-4 border border-gray-700/50">
            <div className="text-2xl font-bold text-gray-200 mb-1">1056</div>
            <div className="text-gray-400 text-sm">Codeforces Max</div>
          </div>
          <div className="text-center bg-gray-900/50 backdrop-blur-lg rounded-xl p-4 border border-gray-700/50">
            <div className="text-2xl font-bold text-gray-200 mb-1">5+</div>
            <div className="text-gray-400 text-sm">Major Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
