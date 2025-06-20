
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: 'E-Commerce Platform',
      description: 'Full-featured e-commerce platform with real-time inventory management, secure payment processing, and advanced analytics dashboard',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Stripe API'],
      liveUrl: 'https://ecommerce-platform-demo.vercel.app',
      githubUrl: '#',
      features: [
        'Real-time inventory tracking and alerts',
        'Secure payment gateway integration',
        'Advanced sales analytics and reporting',
        'Multi-vendor marketplace functionality'
      ]
    },
    {
      name: 'Healthcare Management System',
      description: 'Comprehensive healthcare platform connecting patients, doctors, and hospitals with appointment scheduling and medical records',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      technologies: ['React', 'Express.js', 'MongoDB', 'Node.js', 'Socket.io'],
      liveUrl: 'https://healthcare-system-demo.vercel.app',
      githubUrl: '#',
      features: [
        'Online appointment booking system',
        'Digital medical records management',
        'Real-time doctor-patient consultation',
        'Prescription and medication tracking'
      ]
    },
    {
      name: 'Social Media Analytics Tool',
      description: 'Advanced analytics platform for social media managers to track engagement, growth metrics, and content performance',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Social APIs'],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'Multi-platform social media integration',
        'Real-time engagement analytics',
        'Content performance optimization',
        'Automated reporting and insights'
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
