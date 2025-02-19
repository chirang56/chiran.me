// src/components/Projects.jsx
const ProjectCard = ({ title, description, techStack, link }) => {
  return (
    <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 
      hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech, key) => (
          <span
            key={key}
            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
              hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <a href={link} className="text-blue-400 hover:text-emerald-300 transition-colors my-4">
          View Project →
        </a>
      </div>
    </div>
  );
};

export const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio",
      description: "Personal Portfolio Website showcasing the all needed information for any company or person in order to consider for me to hire",
      techStack: ["HTML", "CSS", "Javascript"],
      link: "https://chirang56me.netlify.app/"
    },
    {
      title: "E-commerce Website",
      description: "Website for buying and selling products online. It has a user-friendly interface and a secure payment gateway.",
      techStack: ["React.js", "Tailwind Css", "MySql", "Node.js", "Express.js", "Stripe", "Firebase"],
      link: "https://chirang56me.netlify.app/"
    },
    {
      title: "Literature Based Website",
      description: "Website for reading and writing literature. It has a user-friendly interface and a secure payment gateway.",
      techStack: ["React.js", "Tailwind CSS", "MySql", "Node.js", "Express.js", "Stripe", "Firebase"],
      link: "https://chirang56me.netlify.app/"
    },
    // Add more projects here as needed
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-tr from-purple-500 to-emerald-300 text-transparent bg-clip-text text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
