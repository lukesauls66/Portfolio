import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 bg-gray-800 w-full h-full pb-8 px-4 md:px-8 lg:px-12">
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

      <div className="flex flex-col gap-4 p-6 bg-gradient-to-br from-gray-700 to-green-500/30 rounded-lg">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-100">
          Hi, I&apos;m Luke Sauls
        </h2>
        <p className="text-gray-200 leading-relaxed">
          I&apos;m a detail-oriented and adaptable software engineer with
          experience in full-stack web development. My expertise lies in
          building modern, scalable web applications using JavaScript,
          TypeScript, Python, and frameworks like React and Next.js. I also have
          experience working with cloud technologies such as AWS S3 to enhance
          performance and reliability.
        </p>
        <p className="text-gray-200 leading-relaxed">
          I thrive on solving complex problems, collaborating with
          cross-functional teams, and delivering solutions that improve user
          experiences and drive business success. My background in team
          leadership and operational efficiency enables me to bring a unique
          perspective to technical challenges.
        </p>
        <p className="text-gray-200 leading-relaxed">
          Before transitioning into tech, I explored various career paths,
          searching for something that truly resonated with me. Technology and
          coding had always piqued my interest, but I wasn&apos;t sure how to
          take the first step or achieve success in the field. Finding App
          Academy was a turning point for me, it gave me the opportunity to dive
          headfirst into coding and commit fully to the journey. I fell in love
          with programming during my first project: a frontend-only weather
          application. While learning HTML and CSS, I decided to go beyond the
          curriculum at that given time and explore how to integrate JavaScript
          to make the application interactive. This experience solidified my
          belief that I could master any new technology by building, making
          mistakes, and learning through the process.
        </p>
        <p className="text-gray-200 leading-relaxed">
          Recently, I&apos;ve been developing a Currency Converter application
          using Angular and TypeScript, which has helped me deepen my
          understanding of these technologies. I&apos;m also exploring new
          horizons by planning a project in Java, as I continue expanding my
          skill set and challenging myself with new tools and frameworks.
        </p>
        <p className="text-gray-200 leading-relaxed">
          Outside of coding, I&apos;m passionate about gaming and making
          connections with new people. Feel free to explore my projects below or
          get in touch if you&apos;d like to collaborate!
        </p>
      </div>

      <Separator className="bg-gray-600 w-full" />

      <div className="flex flex-col gap-6">
        <h2 className="text-lg md:text-xl font-semibold text-gray-100">
          Technologies
        </h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
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
              items: [
                "Express.js",
                "Flask",
                "Sequelize",
                "SQLAlchemy",
                "Prisma",
              ],
            },
            {
              title: "Frontend",
              items: ["React", "Redux Toolkit", "Tailwind CSS", "HTML/CSS"],
            },
          ].map((tech) => (
            <div key={tech.title} className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-gray-100 font-semibold text-lg">
                {tech.title}:
              </h3>
              <ul className="mt-2 text-gray-300">
                {tech.items.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Separator className="bg-gray-600 w-full" />

      <div>
        <h2 className="text-lg md:text-xl font-semibold text-gray-100 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {[
            {
              title: "VacayDnD",
              imgSrc: "images/vacaydnd-pic-2.PNG",
              link: "https://vacaydnd-1jt8.onrender.com",
            },
            {
              title: "Lovely Paws Hotel",
              imgSrc: "images/hotel-pic-2.PNG",
              link: "https://lovely-paws-hotel-53al.onrender.com",
            },
            {
              title: "PlatChasers",
              imgSrc: "images/platchasers-pic-2.PNG",
              link: "https://plat-chasers-luke-sauls-projects.vercel.app/",
            },
          ].map((project) => (
            <div key={project.title} className="flex flex-col gap-4">
              <img
                src={project.imgSrc}
                alt={`${project.title} Project Pic`}
                className="w-full h-48 md:h-56 rounded-lg object-cover shadow-md"
              />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-4 rounded-lg text-center text-lg text-gray-100 font-semibold hover:bg-gray-600 hover:scale-105 transition duration-200"
              >
                {project.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
