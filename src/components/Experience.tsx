
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Persistent Systems',
      position: 'MERN Stack Developer Intern',
      period: 'Nov 2024 – Apr 2025',
      location: 'Pune, India',
      type: 'Internship',
      description: 'Specialized in building full-stack web applications using the MERN stack with modern development practices.',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JavaScript', 'REST APIs'],
      achievements: [
        'Developed full-stack web applications using MERN stack',
        'Built responsive frontend interfaces with React and modern CSS',
        'Implemented RESTful APIs using Express.js and Node.js',
        'Designed and managed MongoDB databases for optimal performance'
      ],
      status: 'completed'
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Professional Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-cyan-400 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 hidden md:block ${
                  exp.status === 'current' 
                    ? 'bg-blue-400 border-blue-400 shadow-lg shadow-blue-400/50' 
                    : 'bg-purple-400 border-purple-400 shadow-lg shadow-purple-400/50'
                }`} />

                <div className="md:ml-16">
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10 shadow-2xl hover:shadow-blue-500/10 hover:border-blue-400/50 transition-all duration-500">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                          {exp.position}
                        </h3>
                        <div className="flex items-center gap-2 text-blue-400 font-semibold mb-2">
                          <span>{exp.company}</span>
                          {exp.status === 'current' && (
                            <span className="px-2 py-1 text-xs bg-green-500/20 border border-green-400/30 rounded-full text-green-300">
                              Current
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-gray-400 mb-1">
                          <Calendar size={16} />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-400">
                          <MapPin size={16} />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-purple-400 font-semibold mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-gray-300">
                            <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full text-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
