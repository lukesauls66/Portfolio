"use client";

import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="py-8 px-4 max-w-7xl mx-auto">
      <div className="bg-gradient-to-br from-gray-800/50 to-blue-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
              <img
                src="images/profile-pic.jpg"
                alt="Luke Sauls - Software Engineer"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-800 flex items-center justify-center">
              <span className="text-xs">👋</span>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-2">
                Luke Sauls
              </h1>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 mb-3">
                <p className="text-xl md:text-2xl text-blue-400 font-semibold">
                  Full-Stack Software Engineer
                </p>
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-sm">Available for opportunities</span>
                </div>
              </div>
              <p className="text-gray-300 max-w-2xl">
                Passionate about building scalable web applications with modern
                technologies. Specializing in React, Next.js, and Node.js
                development.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start"
            >
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/luke-sauls-437786330/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 flex items-center gap-2 font-medium transition-all duration-200 hover:scale-105"
                >
                  <FaLinkedin className="text-lg" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/lukesauls66"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 text-white rounded-lg px-4 py-2 flex items-center gap-2 font-medium border border-gray-600 transition-all duration-200 hover:scale-105"
                >
                  <FaGithub className="text-lg" />
                  <span>GitHub</span>
                </a>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    const mailtoLink = document.createElement("a");
                    mailtoLink.href = "mailto:luke.sauls279@gmail.com";
                    mailtoLink.click();

                    setTimeout(() => {
                      if (document.hasFocus()) {
                        navigator.clipboard.writeText(
                          "luke.sauls279@gmail.com"
                        );
                        alert(
                          "Email client not detected. Email copied to clipboard!"
                        );
                      }
                    }, 1000);
                  }}
                  className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg px-4 py-2 flex items-center gap-2 font-medium transition-all duration-200 hover:scale-105"
                >
                  <FaEnvelope className="text-lg" />
                  <span>Email</span>
                </button>
                <a
                  href="https://docs.google.com/document/d/16t0JD-jb9FxAY9ODG4-Kd_g8wY9UnjMMCQP9Q34u_pU/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white rounded-lg px-4 py-2 flex items-center gap-2 font-medium transition-all duration-200 hover:scale-105"
                >
                  <FaFileDownload className="text-lg" />
                  <span>Resume</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
