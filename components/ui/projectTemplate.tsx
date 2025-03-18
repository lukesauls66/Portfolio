import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface projectProps {
  project: {
    title: string;
    imgSrc: string;
    link: string;
  };
}

const ProjectTemplate: React.FC<projectProps> = ({ project }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { margin: "-10px" });

  return (
    <motion.div
      ref={ref}
      key={project.title}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex flex-col gap-4"
    >
      <motion.img
        src={project.imgSrc}
        alt={`${project.title} Project Pic`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="w-full h-48 md:h-56 lg2:h-[18rem] rounded-lg object-cover shadow-md"
      />
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-700 p-4 rounded-lg text-center text-lg text-gray-100 font-semibold hover:bg-green-500/60 hover:scale-105 transition duration-200"
      >
        {project.title}
      </a>
    </motion.div>
  );
};

export default ProjectTemplate;
