
const Stats = () => {
  return (
    <section id="stats" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center bg-gradient-to-br from-slate-800/70 to-gray-800/70 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/20">
            <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
            <div className="text-blue-200 text-sm">DSA Problems</div>
          </div>
          <div className="text-center bg-gradient-to-br from-slate-800/70 to-gray-800/70 backdrop-blur-lg rounded-xl p-6 border border-teal-500/20">
            <div className="text-3xl font-bold text-teal-400 mb-2">1873</div>
            <div className="text-blue-200 text-sm">LeetCode (Knight)</div>
          </div>
          <div className="text-center bg-gradient-to-br from-slate-800/70 to-gray-800/70 backdrop-blur-lg rounded-xl p-6 border border-emerald-500/20">
            <div className="text-3xl font-bold text-emerald-400 mb-2">1287</div>
            <div className="text-blue-200 text-sm">Codeforces (Pupil)</div>
          </div>
          <div className="text-center bg-gradient-to-br from-slate-800/70 to-gray-800/70 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20">
            <div className="text-3xl font-bold text-orange-400 mb-2">5+</div>
            <div className="text-blue-200 text-sm">Major Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
