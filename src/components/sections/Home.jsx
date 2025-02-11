export const Home = () => {
  return (
    <section id="home" className="flex relative items-center justify-center min-h-screen">
      <div className="text-center z-10 px-4">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-br from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent loading right">Hi, I'm Chiranjibi Gautam</h1>

      <p className=" bg-gradient-to-bl from-emerald-500 to-amber-600 bg-clip-text text-transparent text-lg mb-8 max-w-lg mx-auto"> I'm a full-stack developer who loves crafting clean & scalable web applications and mobile apps with a delightful user experience. I'm a part-time media translator and subtitler too. </p>

      <div className="flex justify-center space-x-4">
        <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-x-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"> View Projects </a>
      </div>
      </div>
    </section>
  );
};