
import { Trophy, Award, Target, Code2 } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'EY Techathon 5.0',
      subtitle: 'Grand Finalist',
      description: 'Reached Top 10 among 1.5 Lakh+ participants',
      color: 'from-yellow-400 to-orange-400',
      bgColor: 'bg-yellow-500/10 border-yellow-400/30'
    },
    {
      icon: Award,
      title: 'TBO VoyageHacks',
      subtitle: 'Top 40 Finalist',
      description: 'Selected among top performers in travel tech hackathon',
      color: 'from-blue-400 to-purple-400',
      bgColor: 'bg-blue-500/10 border-blue-400/30'
    },
    {
      icon: Target,
      title: 'Tata Elxsi Teliport',
      subtitle: 'Top 50 of 17,000+',
      description: 'Outstanding performance in telecommunications innovation challenge',
      color: 'from-purple-400 to-pink-400',
      bgColor: 'bg-purple-500/10 border-purple-400/30'
    },
    {
      icon: Code2,
      title: 'Competitive Programming',
      subtitle: '400+ Problems Solved',
      description: 'LeetCode 1600+ Rating | Codeforces Max 1056',
      color: 'from-green-400 to-teal-400',
      bgColor: 'bg-green-500/10 border-green-400/30'
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Achievements & Recognition
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-2xl hover:shadow-blue-500/10 hover:border-blue-400/50 transition-all duration-500 hover:scale-105"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl border ${achievement.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className={`w-6 h-6 bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-200">
                    {achievement.title}
                  </h3>
                  <div className={`text-sm font-semibold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-2`}>
                    {achievement.subtitle}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 right-6 w-1 h-1 bg-purple-400 rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-16 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                3+
              </div>
              <div className="text-gray-400">National Level Hackathons</div>
              <div className="text-gray-500 text-sm">Top Finalist Positions</div>
            </div>
            
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                1.5L+
              </div>
              <div className="text-gray-400">Participants Competed</div>
              <div className="text-gray-500 text-sm">Across All Hackathons</div>
            </div>
            
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-2">
                400+
              </div>
              <div className="text-gray-400">Coding Problems</div>
              <div className="text-gray-500 text-sm">Solved Successfully</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
