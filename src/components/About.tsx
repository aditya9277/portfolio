
const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-slate-800/80 via-gray-800/80 to-slate-700/80 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-cyan-500/20 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Transforming Ideas into Scalable Solutions
          </h2>
          
          <div className="prose prose-lg text-blue-100 max-w-none">
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              I'm a <span className="text-cyan-300 font-semibold">passionate Full-Stack Developer</span> pursuing B.Tech CSE at VIT Bhopal, with hands-on experience building enterprise-grade applications. My expertise spans modern web technologies, cloud infrastructure, and AI integration, with a proven track record of delivering solutions that drive business impact.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              During my tenure at <span className="text-teal-300 font-semibold">Ernst & Young</span> and <span className="text-emerald-300 font-semibold">Persistent Systems</span>, I've architected scalable backend systems, optimized CI/CD pipelines, and reduced deployment times by 40%. My competitive programming background (LeetCode Knight, Codeforces Pupil) ensures I write efficient, optimized code.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed">
              What sets me apart is my ability to bridge technical excellence with business objectives. From reaching Top 10 in EY Techathon among 1.5L+ participants to building production-ready applications used by thousands, I consistently deliver results that matter.
            </p>
          </div>

          {/* Enhanced Stats with Visual Impact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl p-6 border border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-300">
                <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">99th</div>
                <div className="text-blue-300 font-semibold">Percentile Achiever</div>
                <div className="text-blue-400/80 text-sm mt-1">Competitive Programming</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-xl p-6 border border-teal-400/30 group-hover:border-teal-400/60 transition-all duration-300">
                <div className="text-4xl font-bold text-teal-400 mb-2 group-hover:scale-110 transition-transform duration-300">40%</div>
                <div className="text-blue-300 font-semibold">Deployment Optimization</div>
                <div className="text-blue-400/80 text-sm mt-1">Time Reduction Achieved</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-xl p-6 border border-emerald-400/30 group-hover:border-emerald-400/60 transition-all duration-300">
                <div className="text-4xl font-bold text-emerald-400 mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-blue-300 font-semibold">Project Success Rate</div>
                <div className="text-blue-400/80 text-sm mt-1">On-Time Delivery</div>
              </div>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="mt-12 p-6 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-lg rounded-xl border border-blue-400/20">
            <h3 className="text-xl font-bold text-center text-purple-300 mb-4">Why Choose Me?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="text-cyan-300 font-semibold">Enterprise Experience</div>
                  <div className="text-gray-400">Worked with Fortune 500 companies on mission-critical projects</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="text-teal-300 font-semibold">Problem Solver</div>
                  <div className="text-gray-400">500+ algorithmic problems solved, optimized thinking approach</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="text-purple-300 font-semibold">Innovation Driven</div>
                  <div className="text-gray-400">National hackathon finalist, always exploring cutting-edge tech</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="text-emerald-300 font-semibold">Results Oriented</div>
                  <div className="text-gray-400">Measurable impact in every project, business-focused solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
