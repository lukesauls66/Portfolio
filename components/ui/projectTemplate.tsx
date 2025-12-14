"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ProjectProps {
  project: {
    title: string;
    description: string;
    imgSrc: string;
    liveUrl: string;
    githubUrl: string;
    techStack: string[];
    featured: boolean;
    category: string;
    year: string;
  };
}

const ProjectTemplate: React.FC<ProjectProps> = ({ project }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, {
    margin: "-20px 0px -100px 0px",
    once: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-gray-600/50 transition-all duration-300 group h-full"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <motion.img
          src={project.imgSrc}
          alt={`${project.title} Screenshot`}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="w-full h-48 md:h-56 lg:h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category Badge */}
        <div className="absolute top-3 right-3">
          <span className="bg-blue-500/90 text-white text-xs px-2 py-1 rounded-full font-medium backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Title and Year */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-100 group-hover:text-blue-400 transition-colors duration-200">
            {project.title}
          </h3>
          <span className="text-sm text-gray-400 font-medium ml-2">
            {project.year}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3 h-[4.5rem]">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-700/70 text-gray-200 text-xs px-2 py-1 rounded-md font-medium border border-gray-600/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-center"
          >
            {project.featured ? "Live" : "Live Demo"}
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-700 hover:bg-gray-600 text-gray-100 text-sm font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-center border border-gray-600"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectTemplate;
