"use client";

import { Separator } from "@/components/ui/separator";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Header from "@/components/Header";
import About from "@/components/About";
import Tech from "@/components/Tech";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50px" });

  return (
    <div className="flex flex-col gap-8 bg-gray-800 w-full h-full pb-8 px-4 md:px-8 lg:px-12">
      <Header />
      <About />

      <Separator className="bg-gray-600 w-full" />

      <Tech />

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
