import { FaLinkedin, FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 w-full">
      <img
        src="images/profile-pic.jpg"
        alt="profile picture"
        className="hidden sm:block w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover"
      />
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 md:gap-6 items-center">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-100">
            Luke Sauls
          </h1>
          <a
            href="https://www.linkedin.com/in/luke-sauls-437786330/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white rounded-full h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center hover:bg-blue-500 hover:scale-105 transition duration-200"
          >
            <FaLinkedin className="text-lg sm:text-xl" />
          </a>
          <a
            href="https://github.com/lukesauls66"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 text-white rounded-full h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center hover:bg-gray-600 hover:scale-105 transition duration-200"
          >
            <FaGithub className="text-lg sm:text-xl" />
          </a>
        </div>
        <div className="flex flex-col gap-2 text-gray-200">
          <div>
            <span className="font-medium">Email:</span>{" "}
            <a
              href="mailto:luke.sauls279@gmail.com"
              className="text-blue-400 hover:underline"
            >
              luke.sauls279@gmail.com
            </a>
          </div>
          <div>
            <span className="font-medium">Resume:</span>{" "}
            <a
              target="_blank"
              href="https://docs.google.com/document/d/16t0JD-jb9FxAY9ODG4-Kd_g8wY9UnjMMCQP9Q34u_pU/edit?usp=sharing"
              className="text-blue-400 hover:underline"
            >
              Luke Sauls&apos; Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
