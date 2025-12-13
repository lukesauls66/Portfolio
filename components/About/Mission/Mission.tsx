"use client";

const Mission = () => {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-gray-800/50 to-blue-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl">
            👋
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-100">
              Hi, I'm Luke Sauls
            </h2>
            <p className="text-blue-400 font-medium">
              Full-Stack Software Engineer
            </p>
          </div>
        </div>
        <p className="text-gray-300 leading-relaxed">
          Passionate about building scalable web applications with modern
          technologies. I specialize in React, Next.js, and Node.js, with
          experience in cloud infrastructure and team collaboration.
        </p>
      </div>

      {/* Key Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/40 rounded-lg p-5">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🚀</span>
            <h3 className="text-lg font-semibold text-gray-100">
              Problem Solver
            </h3>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Thrive on complex technical challenges and delivering solutions that
            enhance user experiences and drive business success.
          </p>
        </div>

        <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/40 rounded-lg p-5">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🤝</span>
            <h3 className="text-lg font-semibold text-gray-100">Team Player</h3>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Background in team leadership and operational efficiency brings
            unique perspective to cross-functional collaboration.
          </p>
        </div>
      </div>

      {/* Journey & Growth */}
      <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-gray-700/40 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">💡</span>
          <h3 className="text-xl font-bold text-gray-100">My Journey</h3>
        </div>
        <p className="text-gray-300 leading-relaxed mb-4">
          My transition into tech began at App Academy, where I discovered my
          passion for programming through hands-on projects. I believe in
          learning by building, making mistakes, and iterating.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
            Continuous Learning
          </span>
          <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
            Innovation Focused
          </span>
          <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
            Growth Mindset
          </span>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 backdrop-blur-sm border border-gray-700/40 rounded-lg p-5 text-center">
        <p className="text-gray-300 mb-3">
          Ready to collaborate on your next project?
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
          >
            View Projects
          </button>
          <a
            href="https://www.linkedin.com/in/luke-sauls-437786330/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-600 text-gray-100 px-6 py-2 rounded-lg font-medium border border-gray-600 transition-colors duration-200 text-center"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mission;
