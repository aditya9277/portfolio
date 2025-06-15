const skillCategories = [
  {
    title: 'Languages & Frameworks',
    skills: [
      {
        name: 'C++',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'
      },
      {
        name: 'JavaScript',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
      },
      {
        name: 'Python',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
      },
      {
        name: 'SQL',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
      },
      {
        name: 'React',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
      },
      {
        name: 'Node.js',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
      },
      {
        name: 'MongoDB',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
      },
    ],
    color: 'from-cyan-400 to-blue-500'
  },
  {
    title: 'DevOps & Cloud',
    skills: [
      {
        name: 'AWS',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
      },
      {
        name: 'Docker',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
      },
      {
        name: 'Terraform',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg'
      },
      {
        name: 'Jenkins',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg'
      },
      {
        name: 'Azure',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg'
      },
      {
        name: 'GitHub Actions',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
      },
    ],
    color: 'from-teal-400 to-emerald-500'
  },
  {
    title: 'Tools & Technologies',
    skills: [
      {
        name: 'Prisma ORM',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg'
      },
      {
        name: 'Kafka',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg'
      },
      {
        name: 'Redis',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg'
      },
      {
        name: 'WebSockets',
        logo: 'https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/bolt.svg'
      },
      {
        name: 'Bash',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg'
      },
      {
        name: 'Linux',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg'
      },
    ],
    color: 'from-orange-400 to-red-500'
  }
];

const Skills = () => {
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
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group flex flex-col items-center p-3 rounded-xl bg-slate-700/30 hover:bg-slate-600/40 border border-slate-600/30 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name + ' logo'}
                      className="mb-2 w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                      loading="lazy"
                    />
                    <span className="text-blue-100 text-sm font-medium text-center">{skill.name}</span>
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
