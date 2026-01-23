"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const Perks = () => {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="space-y-6 w-full"
    >
      {/* Header Section */}
      <div className="bg-gradient-to-br from-gray-800/50 to-purple-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
        <div className="flex items-center gap-4 mb-4">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-100">
              What I Bring
            </h3>
            <p className="text-purple-400 font-medium">
              Core Strengths & Values
            </p>
          </div>
        </div>
        <p className="text-gray-300 leading-relaxed">
          My journey has shaped me into a developer who values problem-solving,
          adaptability, and collaboration. I thrive on crafting solutions that
          enhance user experiences.
        </p>
      </div>

      {/* Core Strengths */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/40 rounded-lg p-5">
          <div className="flex items-center gap-3 mb-3">
            <h4 className="text-lg font-semibold text-gray-100">
              Fast Learning
            </h4>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Embrace new technologies quickly through hands-on experimentation
            and practical application.
          </p>
        </div>

        <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/40 rounded-lg p-5">
          <div className="flex items-center gap-3 mb-3">
            <h4 className="text-lg font-semibold text-gray-100">
              Collaboration
            </h4>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Thrive in team environments through clear communication, feedback,
            and shared growth.
          </p>
        </div>
      </div>

      {/* Philosophy */}
      <div className="bg-gradient-to-r from-pink-900/20 to-purple-900/20 backdrop-blur-sm border border-gray-700/40 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-3">
          <h4 className="text-xl font-bold text-gray-100">My Philosophy</h4>
        </div>
        <p className="text-gray-300 leading-relaxed">
          Technology is more than just code—it&apos;s about building solutions
          that make life easier and more enjoyable. Let&apos;s create something
          amazing together.
        </p>
      </div>

      {/* Hobbies */}
      <div className="bg-gradient-to-r from-yellow-900/20 to-blue-900/20 backdrop-blur-sm border border-gray-700/40 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-3">
          <h4 className="text-xl font-bold text-gray-100">Beyond the Code</h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/30 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <h5 className="font-semibold text-gray-100">Reading</h5>
            </div>
            <p className="text-gray-300 text-sm">
              From sci-fi novels to tech blogs, I'm always absorbing new ideas
              and perspectives.
            </p>
          </div>

          <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/30 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <h5 className="font-semibold text-gray-100">Gaming</h5>
            </div>
            <p className="text-gray-300 text-sm">
              Strategy games and RPGs fuel my problem-solving mindset and love
              for immersive experiences.
            </p>
          </div>

          <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/30 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <h5 className="font-semibold text-gray-100">Exploring</h5>
            </div>
            <p className="text-gray-300 text-sm">
              Discovering new places and cultures broadens my perspective and
              inspires creativity.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Perks;
