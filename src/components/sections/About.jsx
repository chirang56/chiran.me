import { RevealOnScroll } from "../../components/RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "Vue", "TypeScript", "TailwindCSS", "Svelte"];
  const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <RevealOnScroll delay={100}>
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-tr from-purple-500 
                to-emerald-300 text-transparent bg-clip-text text-center">
            About Me
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RevealOnScroll delay={300}>
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {frontendSkills.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                          hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={400}>
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    {backendSkills.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                          hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <RevealOnScroll delay={500}>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Bachelors of ICT in Education</strong> - Tribhuvan University (2021-2025)
                </li>
                <li>
                  Relevant Coursework: Data Structure & Algorithm, Software Development, Cloud Computing ...
                </li>
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={600}>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Software Engineer at AJ Group of Company (2020 - Present)
                  </h4>
                  <p>Developed and maintained microservices for cloud-based applications.</p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Intern at DEF Startups (2019)
                  </h4>
                  <p>Assisted in building front-end components and integrating REST APIs.</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};
