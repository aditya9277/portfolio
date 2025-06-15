
import { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Let's Connect
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                I'm always interested in new opportunities, collaborations, and conversations about technology. 
                Whether you have a project in mind or just want to chat about development, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:aditya04.dev@gmail.com"
                className="group flex items-center gap-4 p-4 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="p-3 bg-blue-500/20 rounded-lg border border-blue-400/30">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                    Email
                  </div>
                  <div className="text-gray-400">aditya04.dev@gmail.com</div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/aditya-gupta-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="p-3 bg-blue-500/20 rounded-lg border border-blue-400/30">
                  <Linkedin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                    LinkedIn
                  </div>
                  <div className="text-gray-400">Connect with me professionally</div>
                </div>
              </a>

              <a
                href="https://github.com/aditya04gupta"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="p-3 bg-purple-500/20 rounded-lg border border-purple-400/30">
                  <Github className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="font-semibold text-white group-hover:text-purple-400 transition-colors">
                    GitHub
                  </div>
                  <div className="text-gray-400">Check out my projects</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10">
                <div className="p-3 bg-green-500/20 rounded-lg border border-green-400/30">
                  <MapPin className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">Location</div>
                  <div className="text-gray-400">Indore, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
