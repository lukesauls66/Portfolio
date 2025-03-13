"use client";

import { Separator } from "@/components/ui/separator";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import Header from "@/components/Header";
import About from "@/components/About";

const techData = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python"],
  },
  {
    title: "Databases",
    items: ["SQLite3", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Backend",
    items: ["Express.js", "Flask", "Sequelize", "SQLAlchemy", "Prisma"],
  },
  {
    title: "Frontend",
    items: ["React", "Redux Toolkit", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Other",
    items: ["Sanity CMS", "Auth.js", "Next.js", "Git"],
  },
];

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

export default function Home() {
  const [activeIndices, setActiveIndices] = useState<number[]>(
    techData.map(() => 0)
  );
  const [direction, setDirection] = useState<"left" | "right">("right");
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50px" });

  const handleScroll = (categoryIndex: number, dir: "left" | "right") => {
    setDirection(dir);

    setActiveIndices((prev) =>
      prev.map((currentIndex, idx) => {
        if (idx === categoryIndex) {
          const itemCount = techData[categoryIndex].items.length;
          return dir === "left"
            ? (currentIndex - 1 + itemCount) % itemCount
            : (currentIndex + 1) % itemCount;
        }
        return currentIndex;
      })
    );
  };

  return (
    <div className="flex flex-col gap-8 bg-gray-800 w-full h-full pb-8 px-4 md:px-8 lg:px-12">
      <Header />
      <About />

      <Separator className="bg-gray-600 w-full" />

      <div className="flex flex-col gap-6">
        <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-100">
          Technologies
        </h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
          {techData.map((tech, categoryIndex) => (
            <div key={tech.title} className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-gray-100 font-semibold text-lg">
                {tech.title}:
              </h3>
              <div className="mt-4 flex items-center justify-center relative">
                <button
                  className="text-gray-300 hover:text-green-500/60"
                  onClick={() => handleScroll(categoryIndex, "left")}
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="flex flex-col gap-4 items-center justify-center w-full">
                  <motion.div
                    key={activeIndices[categoryIndex]}
                    initial={{ opacity: 0, x: direction === "left" ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction === "left" ? 50 : -50 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="w-full max-w-[200px] mx-auto aspect-square object-contain rounded-lg bg-white"
                  >
                    <img
                      src={
                        tech.items[activeIndices[categoryIndex]] ===
                        "JavaScript"
                          ? "images/JS.jpg"
                          : tech.items[activeIndices[categoryIndex]] ===
                            "TypeScript"
                          ? "images/TS.png"
                          : tech.items[activeIndices[categoryIndex]] ===
                            "Python"
                          ? "images/PY.png"
                          : tech.items[activeIndices[categoryIndex]] ===
                            "SQLite3"
                          ? "images/SQLite.jpg"
                          : tech.items[activeIndices[categoryIndex]] ===
                            "PostgreSQL"
                          ? "images/PostgreSQL.png"
                          : tech.items[activeIndices[categoryIndex]] ===
                            "MongoDB"
                          ? "images/MongoDB.png"
                          : tech.items[activeIndices[categoryIndex]] ===
                            "Express.js"
                          ? "images/expressjs.png"
                          : tech.items[activeIndices[categoryIndex]] === "Flask"
                          ? "images/flask.png"
                          : tech.items[activeIndices[categoryIndex]] ===
                            "Sequelize"
                          ? "images/sequelize.png"
                          : tech.items[activeIndices[categoryIndex]] ===
                            "SQLAlchemy"
                          ? "images/sqlAlchemy.png"
                          : tech.items[activeIndices[categoryIndex]] ===
                            "Prisma"
                          ? "images/prisma.jpg"
                          : tech.items[activeIndices[categoryIndex]] === "React"
                          ? "images/react.png"
                          : tech.items[activeIndices[categoryIndex]] ===
                            "Redux Toolkit"
                          ? "images/toolkit.png"
                          : tech.items[activeIndices[categoryIndex]] ===
                            "Tailwind CSS"
                          ? "images/tailwind.png"
                          : tech.items[activeIndices[categoryIndex]] ===
                            "Sanity CMS"
                          ? "images/sanity.jpg"
                          : tech.items[activeIndices[categoryIndex]] === "Git"
                          ? "images/git.png"
                          : tech.items[activeIndices[categoryIndex]] ===
                            "Next.js"
                          ? "images/Nextjs.png"
                          : tech.items[activeIndices[categoryIndex]] ===
                            "Auth.js"
                          ? "images/Auth.jpg"
                          : "images/html-css.jpg"
                      }
                      alt="tech picture"
                      className="w-full max-w-[200px] mx-auto aspect-square object-contain rounded-lg bg-white"
                    />
                  </motion.div>
                  <div className="text-gray-300 text-center lg:text-lg">
                    {tech.items[activeIndices[categoryIndex]]}
                  </div>
                </div>
                <button
                  className="text-gray-300 hover:text-green-500/60"
                  onClick={() => handleScroll(categoryIndex, "right")}
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Separator className="bg-gray-600 w-full" />

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
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
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
    </div>
  );
}
