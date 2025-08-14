import { RevealOnScroll } from "../../components/RevealOnScroll";

const ProjectCard = ({ title, description, techStack, link }) => {
  return (
    <RevealOnScroll delay={200}>
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
          <a href={link} target="_blank" rel="noopener noreferrer" 
            className="text-blue-400 hover:text-emerald-300 transition-colors my-4">
            View Project →
          </a>
        </div>
      </div>
    </RevealOnScroll>
  );
};

export const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio",
      description: "Personal Portfolio Website showcasing all the needed information for any company or person in order to consider hiring me. Developed as the first project to showcase my skills.",
      techStack: ["HTML", "CSS", "JavaScript"],
      link: "https://chirang56me.netlify.app/"
    },
    {
      title: "E-commerce Website",
      description: "A user-friendly online shopping platform with a secure payment gateway.",
      techStack: ["React.js", "Tailwind CSS", "MySQL", "Node.js", "Express.js", "Stripe", "Firebase"],
      link: "https://matdash-frontend.vercel.app/"
    },
    {
      title: "Butwal Fiber & Metal Industry",
      description: "A responsive website showcasing Butwal Fiber & Metal Industry's products and services.",
      techStack: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "MySQL"],
      link: "https://gautam-steelworks.vercel.app/en"
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-4">
        <RevealOnScroll delay={100}>
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-tr from-purple-500 to-emerald-300 text-transparent bg-clip-text text-center">
            Featured Projects
          </h2>
        </RevealOnScroll>

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
