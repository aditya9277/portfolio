
const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-gray-700/50 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="prose prose-lg text-gray-300 max-w-none">
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              I'm a <span className="text-gray-200 font-semibold">B.Tech CSE student at VIT Bhopal</span> with a deep passion for building scalable software, AI applications, and DevOps systems. My journey in technology is driven by a commitment to creating solutions that don't just work—they make a meaningful impact.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              With hands-on experience from internships at <span className="text-gray-200 font-semibold">Ernst & Young</span> and <span className="text-gray-300 font-semibold">Persistent Systems</span>, I've developed a strong foundation in full-stack development, cloud technologies, and modern DevOps practices.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed">
              I've participated in several national-level hackathons, reaching grand finals and top positions, which has sharpened my ability to innovate under pressure and deliver results that matter. When I'm not coding, you'll find me solving algorithmic challenges or exploring the latest in AI and cloud technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-200 mb-2">400+</div>
              <div className="text-gray-400">DSA Problems Solved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-200 mb-2">2</div>
              <div className="text-gray-400">Industry Internships</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-200 mb-2">5+</div>
              <div className="text-gray-400">National Hackathons</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
