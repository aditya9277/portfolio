
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: 'TaskFlow Pro',
      description: 'Comprehensive task management platform with intelligent automation and team collaboration',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      liveUrl: 'https://task-flow-pro.vercel.app',
      githubUrl: '#',
      features: [
        'Smart task prioritization and scheduling',
        'Real-time team collaboration tools',
        'Advanced analytics dashboard',
        'Automated workflow management'
      ]
    },
    {
      name: 'LearnHub Academy',
      description: 'Interactive learning platform with personalized course recommendations and progress tracking',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      technologies: ['React', 'Express.js', 'MongoDB', 'Node.js'],
      liveUrl: 'https://learn-hub-academy.vercel.app',
      githubUrl: '#',
      features: [
        'Personalized learning paths',
        'Interactive video lessons',
        'Progress tracking and certificates',
        'Community discussion forums'
      ]
    },
    {
      name: 'EcoTracker',
      description: 'Environmental impact tracking application with sustainability insights and recommendations',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'Carbon footprint calculation',
        'Sustainability goal tracking',
        'Environmental impact visualization',
        'Green habit recommendations'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 shadow-2xl hover:shadow-blue-500/10 hover:border-blue-400/50 transition-all duration-500 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute top-4 right-4 flex gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black/50 backdrop-blur-sm rounded-lg text-white hover:bg-blue-500/50 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black/50 backdrop-blur-sm rounded-lg text-white hover:bg-purple-500/50 transition-colors duration-200"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-200">
                  {project.name}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-400 flex items-start">
                        <span className="w-1 h-1 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
