
import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show the CTA after scrolling past the hero section
      setIsVisible(scrollPosition > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHireMe = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setIsExpanded(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded ? (
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 shadow-2xl animate-scale-in">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-white font-semibold">Let's Work Together!</h3>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>
          <p className="text-gray-300 text-sm mb-4">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
          <div className="flex gap-2">
            <button
              onClick={handleHireMe}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-medium text-sm hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Hire Me
            </button>
            <a
              href="mailto:aditya04.dev@gmail.com"
              className="px-4 py-2 border border-gray-600 rounded-lg text-white font-medium text-sm hover:border-blue-400 transition-colors duration-300"
            >
              Email
            </a>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsExpanded(true)}
          className="group bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-4 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="w-6 h-6 text-white" />
          <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
        </button>
      )}
    </div>
  );
};

export default FloatingCTA;
