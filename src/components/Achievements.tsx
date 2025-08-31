
import { Trophy, Award, Target, Code2 } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'EY Techathon 5.0',
      subtitle: 'Grand Finalist',
      description: 'Reached Top 10 among 1.5 Lakh+ participants',
      color: 'from-cyan-400 to-blue-400',
      bgColor: 'bg-cyan-500/10 border-cyan-400/30'
    },
    {
      icon: Award,
      title: 'TBO VoyageHacks',
      subtitle: 'Top 40 Finalist',
      description: 'Selected among top performers in travel tech hackathon',
      color: 'from-blue-400 to-teal-400',
      bgColor: 'bg-blue-500/10 border-blue-400/30'
    },
    {
      icon: Target,
      title: 'Tata Elxsi Teliport',
      subtitle: 'Top 50 of 17,000+',
      description: 'Outstanding performance in telecommunications innovation challenge',
      color: 'from-teal-400 to-cyan-400',
      bgColor: 'bg-teal-500/10 border-teal-400/30'
    },
    {
      icon: Code2,
      title: 'Competitive Programming',
      subtitle: '500+ Problems Solved',
      description: 'LeetCode 1873 - Knight | Codeforces 1287 - Pupil',
      color: 'from-cyan-400 to-blue-500',
      bgColor: 'bg-cyan-500/10 border-cyan-400/30'
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 relative">
      {/* Enhanced section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Achievements & Recognition
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:bg-white/8"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl border ${achievement.bgColor} group-hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-cyan-400/20`}>
                  <achievement.icon className={`w-6 h-6 bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-200">
                    {achievement.title}
                  </h3>
                  <div className={`text-sm font-semibold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-2`}>
                    {achievement.subtitle}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {achievement.description}
                  </p>
                </div>
              </div>

              {/* Enhanced decorative elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
              <div className="absolute bottom-4 right-6 w-1 h-1 bg-blue-400 rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Enhanced Stats Summary */}
        <div className="mt-16 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-teal-500/10 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/20 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                3+
              </div>
              <div className="text-gray-400 group-hover:text-cyan-300 transition-colors duration-300">National Level Hackathons</div>
              <div className="text-gray-500 text-sm">Top Finalist Positions</div>
            </div>
            
            <div className="group">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                1.5L+
              </div>
              <div className="text-gray-400 group-hover:text-cyan-300 transition-colors duration-300">Participants Competed</div>
              <div className="text-gray-500 text-sm">Across All Hackathons</div>
            </div>
            
            <div className="group">
              <div className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-gray-400 group-hover:text-cyan-300 transition-colors duration-300">Coding Problems</div>
              <div className="text-gray-500 text-sm">Solved Successfully</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
