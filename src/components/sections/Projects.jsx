export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-tr from-purple-500 
                to-emerald-300 text-transparent bg-clip-text text-center"> {" "}Featured Projects </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 
                         hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                    <h3> Cloud Platform </h3>
                    <p> A cloud platform that allows users to store and share files securely. </p>

                    <div>
                      {["React", "Node.js", "MongoDB", "AWS", "Docker"].map((tech, key) => (
                        <span
                          key={key}
                          className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                           hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                        >
                        {tech}
                      </span>
                      )) }
                    </div>
                  </div>
                </div>
      </div>
    </section>
  );
}