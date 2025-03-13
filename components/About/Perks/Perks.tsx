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
      className="bg-gray-800 rounded-lg shadow-lg md:w-1/2 flex flex-col gap-4 w-full"
    >
      <h3 className="text-xl md:text-2xl font-semibold text-gray-100">
        What I Bring to the Table
      </h3>

      <p className="text-gray-300 leading-relaxed">
        My journey into software engineering has shaped me into a developer who
        values <strong>problem-solving, adaptability, and collaboration</strong>
        . I&apos;m not just focused on writing code — I thrive on crafting
        solutions that{" "}
        <strong>enhance user experiences and drive meaningful impact</strong>.
      </p>

      <div className="grid grid-cols-1 lg2:grid-cols-2 gap-4">
        <div className="bg-gray-700 p-4 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-green-500/80">
            ⚡ Fast Learning
          </h4>
          <p className="text-gray-300 text-sm">
            I embrace new technologies and frameworks quickly by diving in,
            experimenting, and learning through hands-on projects.
          </p>
        </div>

        <div className="bg-gray-700 p-4 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-green-500/80">
            🔧 Problem-Solving
          </h4>
          <p className="text-gray-300 text-sm">
            I enjoy breaking down complex problems into manageable solutions,
            focusing on efficiency and scalability.
          </p>
        </div>

        <div className="bg-gray-700 p-4 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-green-500/80">
            🤝 Collaboration
          </h4>
          <p className="text-gray-300 text-sm">
            I thrive in team environments, valuing communication, feedback, and
            shared growth.
          </p>
        </div>

        <div className="bg-gray-700 p-4 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-green-500/80">
            🎯 User-Focused
          </h4>
          <p className="text-gray-300 text-sm">
            I prioritize creating intuitive, engaging, and accessible user
            experiences that make a real difference.
          </p>
        </div>
      </div>

      <p className="text-gray-300 leading-relaxed mt-4">
        I believe that <strong>technology is more than just code</strong>
        —it&apos;s about building solutions that make life easier, more
        efficient, and more enjoyable. Let&apos;s create something amazing
        together.
      </p>
    </motion.div>
  );
};

export default Perks;
