"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const techCategories = [
  {
    title: "Programming Languages",
    icon: "💻",
    description: "Core languages for full-stack development",
    skills: [
      { name: "JavaScript", level: 90, experience: "3+ years", icon: "🟨" },
      { name: "TypeScript", level: 85, experience: "3+ years", icon: "🔷" },
      { name: "Python", level: 80, experience: "2+ years", icon: "🐍" },
      { name: "Java", level: 70, experience: "1+ year", icon: "☕" },
      { name: "HTML/CSS", level: 90, experience: "3+ years", icon: "🌐" },
    ],
  },
  {
    title: "Frontend Technologies",
    icon: "🎨",
    description: "Modern UI/UX development frameworks",
    skills: [
      { name: "React", level: 90, experience: "3+ years", icon: "⚛️" },
      { name: "Next.js", level: 85, experience: "2+ years", icon: "▲" },
      { name: "Tailwind CSS", level: 90, experience: "2+ years", icon: "🎨" },
      { name: "Redux Toolkit", level: 75, experience: "2+ years", icon: "🔄" },
    ],
  },
  {
    title: "Backend & APIs",
    icon: "🛠️",
    description: "Server-side development & ORM tools",
    skills: [
      { name: "Node.js", level: 85, experience: "3+ years", icon: "🟢" },
      { name: "Express.js", level: 85, experience: "3+ years", icon: "🚂" },
      { name: "Flask", level: 75, experience: "2+ years", icon: "🌶️" },
      { name: "Prisma", level: 85, experience: "2+ years", icon: "🔺" },
      { name: "Sequelize", level: 75, experience: "2+ years", icon: "📊" },
      { name: "SQLAlchemy", level: 70, experience: "1+ year", icon: "🧪" },
    ],
  },
  {
    title: "Databases",
    icon: "🗄️",
    description: "Data storage and management systems",
    skills: [
      { name: "PostgreSQL", level: 85, experience: "2+ years", icon: "🐘" },
      { name: "MongoDB", level: 85, experience: "2+ years", icon: "🍃" },
      { name: "SQLite3", level: 80, experience: "2+ years", icon: "🔧" },
    ],
  },
  {
    title: "Authentication & Security",
    icon: "🔐",
    description: "Security and authentication systems",
    skills: [
      { name: "Auth.js", level: 80, experience: "2+ years", icon: "🔑" },
      { name: "JWT", level: 85, experience: "2+ years", icon: "🎫" },
      { name: "BCrypt", level: 75, experience: "2+ years", icon: "🛡️" },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "☁️",
    description: "Deployment and cloud infrastructure",
    skills: [
      { name: "AWS", level: 75, experience: "2+ year", icon: "☁️" },
      { name: "Vercel", level: 85, experience: "2+ years", icon: "▲" },
      { name: "Firebase", level: 70, experience: "1+ year", icon: "🔥" },
      { name: "Docker", level: 70, experience: "1+ year", icon: "🐳" },
      { name: "Git", level: 90, experience: "3+ years", icon: "📝" },
    ],
  },
];

const SkillBar = ({
  skill,
}: {
  skill: { name: string; level: number; experience: string; icon: string };
}) => (
  <div className="group">
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-2">
        <span className="text-lg">{skill.icon}</span>
        <span className="text-gray-200 font-medium">{skill.name}</span>
      </div>
      <span className="text-xs text-gray-400">{skill.experience}</span>
    </div>
    <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${skill.level}%` }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
      </motion.div>
    </div>
    <div className="text-xs text-gray-400 mt-1 text-right">{skill.level}%</div>
  </div>
);

const Tech = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-4"
        >
          Technical Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
          My technical expertise spans across modern web development
          technologies, from frontend frameworks to backend systems and cloud
          infrastructure.
        </motion.p>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-8">
        {techCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-gray-600/50 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{category.icon}</span>
              <div>
                <h3 className="text-xl font-bold text-gray-100">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-400">{category.description}</p>
              </div>
            </div>
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1 + skillIndex * 0.1,
                  }}
                >
                  <SkillBar skill={skill} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile/Tablet View */}
      <div className="lg:hidden">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {techCategories.map((category, index) => (
            <button
              key={category.title}
              onClick={() => setSelectedCategory(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === index
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-700/50 text-gray-300 hover:bg-gray-600/50"
              }`}
            >
              {category.icon} {category.title}
            </button>
          ))}
        </div>

        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">
              {techCategories[selectedCategory].icon}
            </span>
            <div>
              <h3 className="text-xl font-bold text-gray-100">
                {techCategories[selectedCategory].title}
              </h3>
              <p className="text-sm text-gray-400">
                {techCategories[selectedCategory].description}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {techCategories[selectedCategory].skills.map(
              (skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                >
                  <SkillBar skill={skill} />
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
      >
        <div className="text-center p-4 bg-gray-800/30 rounded-lg border border-gray-700/30">
          <div className="text-2xl md:text-3xl font-bold text-blue-400">
            15+
          </div>
          <div className="text-sm md:text-md text-gray-400">Technologies</div>
        </div>
        <div className="text-center p-4 bg-gray-800/30 rounded-lg border border-gray-700/30">
          <div className="text-2xl md:text-3xl font-bold text-green-400">
            3+
          </div>
          <div className="text-sm md:text-md text-gray-400">
            Years Experience
          </div>
        </div>
        <div className="text-center p-4 bg-gray-800/30 rounded-lg border border-gray-700/30">
          <div className="text-2xl md:text-3xl font-bold text-purple-400">
            3
          </div>
          <div className="text-sm md:text-md text-gray-400">Projects Built</div>
        </div>
        <div className="text-center p-4 bg-gray-800/30 rounded-lg border border-gray-700/30">
          <div className="text-2xl md:text-3xl font-bold text-yellow-400">
            5
          </div>
          <div className="text-sm md:text-md text-gray-400">Core Languages</div>
        </div>
      </motion.div>
    </section>
  );
};

export default Tech;
