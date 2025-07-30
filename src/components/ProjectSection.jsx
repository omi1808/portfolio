import { ExternalLink, Github } from "lucide-react";
const projects = [
  {
    id: 1,
    title: "Notepad ",
    description:
      "A simple note-taking application that allows users to create, edit, and delete notes.",
    image: "/projects/notepad.png",
    tags: ["React", "JavaScript", "CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/omi1808/Notepad-Compiler",
  },
  {
    id: 2,
    title: "NASA Space Image Portal",
    description:
      "A dynamic web app using NASA’s APIs to showcase Astronomy Pictures of the Day and Mars Rover images.",
    image: "/projects/nasaproject.jpeg",
    tags: ["React", "JavaScript", "CSS"],
    demoUrl: "",
    githubUrl: "https://github.com/omi1808/Nasa_API_Implementation",
  },
  {
    id: 3,
    title: "Broadband Billing System",
    description:
      "Developed a Broadband Billing System using Java Swing, AWT, and MySQL.",
    image: "/projects/bbs.png",
    tags: ["React", "JavaScript", "CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Library Management System",
    description:
      "A simple note-taking application that allows users to create, edit, and delete notes.",
    image: "/projects/lms.png",
    tags: ["React", "JavaScript", "CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/omi1808/employee-management-system",
  },
  {
    id: 5,
    title: "Employee Management System",
    description:
      "Developed a secure and scalable Employee Management System backend using Spring Boot and MySQL.",
    image: "/projects/ems.png",
    tags: ["React", "JavaScript", "CSS"],
    demoUrl: "#",
    githubUrl: "#",
    
  },
  {
    id: 6,
    title: "Portfolio Website",
    description:
      "A simple note-taking application that allows users to create, edit, and delete notes.",
    image: "/projects/pf.png",
    tags: ["React", "JavaScript", "CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },

];
const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here Are some of my recent projects Ecavh project was carefully
          carfted with attentio to details , performance and user experience .
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  className="w-full h-full object-cover transition-tranform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-warp gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 border text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-xm mb-4">
                  {project.description}
                </p>

                <div className="mt-auto flex justify-center pt-4">
                  <a
                      href={project.githubUrl}
                      className="text-foreground/80 bg-secondary hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      <Github size={25} />
                    </a>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 ">
          <a
            href="https://github.com/omi1808"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Chech My Github
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
