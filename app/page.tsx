import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 bg-gray-700/90 w-full h-full pb-4 px-3 lg:px-6 lg:pb-6 lg:pt-4">
      <div className="flex items-center justify-between p-[1rem] w-full">
        <img
          src="images/profile-pic.jpg"
          alt="profile picture"
          className="hidden sm:block sm:size-[4.5rem] lg:size-[6rem] rounded-full"
        />
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 md:gap-6">
            <h1 className="text-2xl md:text-3xl font-bold text-[#d5d4d4]">
              Luke Sauls
            </h1>
            <a
              href="https://www.linkedin.com/in/luke-sauls-437786330/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <button className="flex justify-center items-center bg-[#0077b5] h-4 w-4 sm:h-8 sm:w-8 text-text-white hover:cursor-pointer hover:scale-110">
                <FaLinkedin className="size-[1rem] sm:size-[2rem] md:size-[2.5rem] lg:size-[3.5rem]" />
              </button>
            </a>
            <a
              href="https://github.com/lukesauls66"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <button className="flex justify-center items-center bg-[#333] h-4 w-4 sm:h-8 sm:w-8 hover:cursor-pointer hover:scale-110">
                <FaGithub className="size-[1rem] sm:size-[2rem] md:size-[2.5rem] lg:size-[3.5rem]" />
              </button>
            </a>
          </div>
          <div className="flex gap-4">
            <p className="text-white text-lg font-semibold">Email:</p>
            <p className="text-blue-400 hover:underline hover:underline-offset-2 hover:cursor-pointer text-lg">
              luke.sauls279@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-2 bg-gradient-to-br from-[#d5d4d4] to-[#4ba996]/50 rounded-lg">
        <h2 className="text-lg md:text-xl font-semibold text-[#1c1c1c]">
          Hi, I'm Luke Sauls
        </h2>
        <div className="flex flex-col gap-4">
          <p className="md:text-lg">
            I&apos;m a detail-oriented and adaptable software engineer with
            experience in full-stack web development. My expertise lies in
            building modern, scalable web applications using JavaScript,
            TypeScript, Python, and frameworks like React. I also have
            experience working with cloud technologies such as AWS S3 to enhance
            performance and reliability.
          </p>
          <p className="md:text-lg">
            I thrive on solving complex problems, collaborating with
            cross-functional teams, and delivering solutions that improve user
            experiences and drive business success. My background in team
            leadership and operational efficiency enables me to bring a unique
            perspective to technical challenges.
          </p>
          <p className="md:text-lg">
            Outside of coding, I&apos;m passionate about gaming and making
            connections with new people. Feel free to explore my projects below
            or get in touch if you&apos;d like to collaborate!
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Separator className="bg-black w-[90%]" />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6">
        <img
          src="images/code-snippet.PNG"
          alt="coding picture"
          className="w-full md:w-auto max-w-[25rem] lg:max-w-[35rem] xl:max-w-[55rem] max-h-[28.2rem] rounded-lg object-contain"
        />
        <div className="flex flex-col gap-5 p-2 bg-gradient-to-br from-[#d5d4d4] to-[#4ba996]/50 rounded-lg w-full max-w-[55rem] h-full">
          <h2 className="text-lg md:text-xl font-semibold text-[#1c1c1c]">
            Technologies
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <ul className="flex flex-col items-center gap-4">
              <p className="md:text-lg font-semibold">Languages:</p>
              <div className="flex flex-col gap-2">
                <li className="md:text-lg">- JavaScript</li>
                <li className="md:text-lg">- TypeScript</li>
                <li className="md:text-lg">- Python</li>
              </div>
            </ul>
            <ul className="flex flex-col items-center gap-4">
              <p className="md:text-lg font-semibold">Data Bases:</p>
              <div className="flex flex-col gap-2">
                <li className="md:text-lg">- SQLite3</li>
                <li className="md:text-lg">- PostgreSQL</li>
                <li className="md:text-lg">- MongoDB</li>
              </div>
            </ul>
            <ul className="flex flex-col items-center gap-4">
              <p className="md:text-lg font-semibold">Backend:</p>
              <div className="flex flex-col gap-2">
                <li className="md:text-lg">- Express.js</li>
                <li className="md:text-lg">- Flask</li>
                <li className="md:text-lg">- Sequelize</li>
                <li className="md:text-lg">- SQLAlchemy</li>
                <li className="md:text-lg">- Prisma</li>
              </div>
            </ul>
            <ul className="flex flex-col items-center gap-4">
              <p className="md:text-lg font-semibold">Frontend:</p>
              <div className="flex flex-col gap-2">
                <li className="md:text-lg">- React</li>
                <li className="md:text-lg">- Redux Toolkit</li>
                <li className="md:text-lg">- Tailwind CSS</li>
                <li className="md:text-lg">- HTML/CSS</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Separator className="bg-black w-[90%]" />
      </div>
      <div className="flex bg-gradient-to-br from-[#d5d4d4] to-[#4ba996]/50 rounded-lg w-full h-[4rem] items-center justify-center">
        <h2 className="flex justify-center text-lg md:text-xl font-semibold text-[#1c1c1c]">
          Projects
        </h2>
      </div>
      <div className="flex justify-between w-full gap-6">
        <div className="flex flex-col gap-5 p-2 bg-gradient-to-br from-[#d5d4d4] to-[#4ba996]/50 rounded-lg w-full max-w-[80rem]">
          <div className="flex flex-col justify-between md:items-center py-4 md:py-[3rem] lg:py-[4.5rem] xl:pt-[4.5rem] xl:pb-[9rem] h-full">
            <a
              href="https://lovely-paws-hotel-53al.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2"
            >
              <p className="md:text-lg">-</p>
              <p className="md:text-lg hover:underline hover:underline-offset-2 hover:cursor-pointer">
                Lovely Paws Hotel
              </p>
            </a>
            <a
              href="https://vacaydnd-1jt8.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2"
            >
              <p className="md:text-lg">-</p>
              <p className="md:text-lg hover:underline hover:underline-offset-2 hover:cursor-pointer">
                VacayDnD
              </p>
            </a>
            <a
              href="https://plat-chasers-luke-sauls-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2"
            >
              <p className="md:text-lg">-</p>
              <p className="md:text-lg hover:underline hover:underline-offset-2 hover:cursor-pointer">
                PlatChasers
              </p>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <img
            src="images/hotel-pic.PNG"
            alt="Lovely Paws Hotel Project Pic"
            className="w-full md:w-auto max-w-[25rem] lg:max-w-[35rem] xl:max-w-[55rem]  rounded-lg object-contain"
          />
          <img
            src="images/vacaydnd-pic.PNG"
            alt="VacayDnD Project Pic"
            className="w-full md:w-auto max-w-[25rem] lg:max-w-[35rem] xl:max-w-[55rem]  rounded-lg object-contain"
          />
          <img
            src="images/platchasers-pic.PNG"
            alt="PlatChasers Project Pic"
            className="w-full md:w-auto max-w-[25rem] lg:max-w-[35rem] xl:max-w-[55rem]  rounded-lg object-contain"
          />
        </div>
      </div>
    </div>
  );
}
