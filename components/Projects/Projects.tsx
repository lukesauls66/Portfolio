"use client";

import { motion } from "framer-motion";
import ProjectTemplate from "../ui/projectTemplate";

const projects = [
  {
    title: "TheTailgateWarriors",
    description:
      "A comprehensive sports community platform featuring real-time game tracking, user authentication, and social features.",
    imgSrc: "images/tailgatewarriors.PNG",
    liveUrl: "https://www.thetailgatewarriors.com/",
    githubUrl: "https://github.com/lukesauls66/TailgateWarriors",
    techStack: [
      "Next.Js",
      "React",
      "TypeScript",
      "Prisma",
      "MongoDB",
      "TailwindCSS",
      "AWS",
    ],
    featured: true,
    category: "Full-Stack",
    year: "2025",
  },
  {
    title: "AZ Warrior",
    description: "Modern real estate lead generation and reviews platform.",
    imgSrc: "images/az-warrior-pic.PNG",
    liveUrl: "https://azwarriorre.com",
    githubUrl: "https://github.com/lukesauls66/susan-re",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Sanity CMS",
      "Resend",
    ],
    featured: true,
    category: "Full-Stack",
    year: "2025",
  },
  {
    title: "Game Inventory API",
    description:
      "RESTful API for managing game inventories with authentication and custom CRUD operations.",
    imgSrc: "images/Strapi.PNG",
    liveUrl: "",
    githubUrl: "https://github.com/lukesauls66/game-inventory-api",
    techStack: ["Node.js", "TypeScript", "PostgreSQL", "Strapi", "RESTful API"],
    featured: false,
    category: "Backend API",
    year: "2025",
  },
  {
    title: "PlatChasers",
    description: "Gaming achievement tracker with OAuth integration.",
    imgSrc: "images/platchasers-pic-2.PNG",
    liveUrl: "https://plat-chasers-luke-sauls-projects.vercel.app/",
    githubUrl: "https://github.com/lukesauls66/PlatChasers",
    techStack: [
      "Next.Js",
      "React",
      "TypeScript",
      "NextAuth",
      "Prisma",
      "MongoDB",
      "TailwindCSS",
      "AWS",
    ],
    featured: false,
    category: "Full-Stack",
    year: "2024",
  },
];

const Projects = () => {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      className="py-8 md:py-16 px-4 w-full max-w-7xl mx-auto overflow-hidden"
    >
      {/* Header Section */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-4"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
          A showcase of my technical expertise through full-stack applications,
          demonstrating proficiency in modern web technologies and software
          engineering principles.
        </motion.p>
      </div>

      {/* Featured Projects */}
      <div className="mb-16">
        <div className="flex flex-col items-center xl:grid xl:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="w-full max-w-[50rem]"
            >
              <ProjectTemplate project={project} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-3xl font-semibold text-gray-200 text-center mb-8"
          >
            Other Projects
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: (index + featuredProjects.length) * 0.1,
                }}
                className="w-full"
              >
                <ProjectTemplate project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
