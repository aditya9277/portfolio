
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Aditya's ability to understand complex requirements and deliver scalable solutions is exceptional. His work on our enterprise platform exceeded expectations.",
      author: "Senior Technical Lead",
      company: "Ernst & Young",
      rating: 5,
      project: "Enterprise Application Development"
    },
    {
      quote: "Outstanding DevOps skills and problem-solving approach. Aditya optimized our deployment pipeline and significantly reduced our release cycles.",
      author: "DevOps Manager",
      company: "Persistent Systems",
      rating: 5,
      project: "CI/CD Pipeline Optimization"
    },
    {
      quote: "Impressive algorithmic thinking and code quality. Aditya's competitive programming background really shows in his efficient solutions.",
      author: "Technical Mentor",
      company: "VIT Bhopal",
      rating: 5,
      project: "Data Structures & Algorithms"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          What People Say About My Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-2xl hover:shadow-blue-500/10 hover:border-blue-400/50 transition-all duration-500 hover:scale-105"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 text-blue-400/30" size={24} />
                <p className="text-gray-300 italic leading-relaxed pl-6">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="border-t border-gray-700 pt-4">
                <div className="text-cyan-400 font-semibold">{testimonial.author}</div>
                <div className="text-blue-400 text-sm">{testimonial.company}</div>
                <div className="text-gray-500 text-xs mt-1">{testimonial.project}</div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-gradient-to-r from-slate-800/50 to-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/20">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-purple-400 mb-2">Trusted by Industry Leaders</h3>
            <p className="text-gray-400">Consistent performance and reliability across all engagements</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-cyan-400 mb-1">100%</div>
              <div className="text-gray-400 text-sm">Project Success Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-teal-400 mb-1">0</div>
              <div className="text-gray-400 text-sm">Missed Deadlines</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400 mb-1">5⭐</div>
              <div className="text-gray-400 text-sm">Average Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-400 mb-1">2+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
