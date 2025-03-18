import ProjectTemplate from "../ui/projectTemplate";

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
        {projects.map((project) => (
          <div key={project.title}>
            <ProjectTemplate project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
