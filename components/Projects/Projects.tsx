"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "AZ Warrior",
    imgSrc: "images/az-warrior-pic.PNG",
    link: "https://azwarriorre.com",
  },
  {
    title: "PlatChasers",
    imgSrc: "images/platchasers-pic-2.PNG",
    link: "https://plat-chasers-luke-sauls-projects.vercel.app/",
  },
  {
    title: "Lovely Paws Hotel",
    imgSrc: "images/hotel-pic-2.PNG",
    link: "https://lovely-paws-hotel-53al.onrender.com",
  },
  {
    title: "VacayDnD",
    imgSrc: "images/vacaydnd-pic-2.PNG",
    link: "https://vacaydnd-1jt8.onrender.com",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50px" });

  return (
    <div>
      <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-100 text-center">
        Projects
      </h2>
      <div
        className={`grid grid-cols-1 ${
          projects.length < 6 ? "md:grid-cols-2" : "md:grid-cols-3"
        } gap-6 mt-4`}
      >
        {projects.map((project, index) => (
          <div key={project.title}>
            <motion.div
              ref={ref}
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
