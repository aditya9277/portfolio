
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Ernst & Young',
      position: 'Software Developer Intern',
      period: 'Summer 2025 – Ongoing',
      location: 'Remote',
      type: 'Internship',
      description: 'Currently working on enterprise-level applications with modern web technologies.',
      technologies: ['FastAPI', 'React', 'Material-UI', 'Tailwind CSS', 'Docker', 'Azure'],
      achievements: [
        'Developing scalable backend APIs using FastAPI',
        'Building responsive frontend interfaces with React and MUI',
        'Implementing containerized deployment strategies with Docker',
        'Planning cloud infrastructure migration to Azure'
      ],
      status: 'current'
    },
    {
      company: 'Persistent Systems',
      position: 'DevOps Engineer Intern',
      period: 'Nov 2024 – Apr 2025',
      location: 'Pune, India',
      type: 'Internship',
      description: 'Specialized in building robust DevOps pipelines and cloud infrastructure automation.',
      technologies: ['Docker', 'Jenkins', 'AWS ECS', 'Terraform', 'CI/CD', 'Linux'],
      achievements: [
        'Built comprehensive CI/CD pipelines using Jenkins',
        'Automated container orchestration with AWS ECS',
        'Implemented Infrastructure as Code using Terraform',
        'Optimized deployment workflows reducing release time by 40%'
      ],
      status: 'completed'
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 relative">
      {/* Section background enhancement */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent" />
      
      <div className="max-w-5xl mx-auto relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Professional Experience
        </h2>

        <div className="relative">
          {/* Enhanced timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-400 to-teal-400 hidden md:block shadow-lg shadow-cyan-400/20" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Enhanced timeline dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 hidden md:block transition-all duration-300 ${
                  exp.status === 'current' 
                    ? 'bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50 group-hover:shadow-cyan-400/70 group-hover:scale-110' 
                    : 'bg-blue-400 border-blue-400 shadow-lg shadow-blue-400/50 group-hover:shadow-blue-400/70 group-hover:scale-110'
                }`} />

                <div className="md:ml-16">
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10 shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-[1.02] hover:bg-white/8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                          {exp.position}
                        </h3>
                        <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-2">
                          <span>{exp.company}</span>
                          {exp.status === 'current' && (
                            <span className="px-2 py-1 text-xs bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-300 animate-pulse">
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
                      <h4 className="text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                        Key Achievements:
                        <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse" />
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                            <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-2 mr-3 flex-shrink-0 shadow-sm shadow-cyan-400/30" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full text-cyan-300 hover:border-cyan-400/50 hover:bg-cyan-500/30 transition-all duration-300 shadow-sm hover:shadow-cyan-400/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Enhanced decorative elements */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                    <div className="absolute bottom-4 right-6 w-1 h-1 bg-blue-400 rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced bottom accent */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full border border-cyan-400/20">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-cyan-400 text-sm font-medium">Building Tomorrow's Solutions</span>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
