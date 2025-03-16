import { RevealOnScroll } from "../../components/RevealOnScroll";
import Logo from "../../assets/Logo.webp";

export const Home = () => {
  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-screen text-center px-4 relative">
      <RevealOnScroll>
      {/* Logo with Enhancements */}
      <div className="w-28 h-28 md:w-32 md:h-32 mb-4 relative">
        <img 
          className="rounded-full shadow-lg border-4 border-white dark:border-gray-800 object-cover w-full h-full transition-transform transform hover:scale-105 hover:border-orange-500" 
          src={Logo} 
          alt="Logo of Chiranjibi Gautam" 
          loading="lazy" 
        />
      </div>
      </RevealOnScroll>

      <RevealOnScroll>
      {/* Title with improved typography */}
      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-br from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent leading-tight md:leading-normal">
        Hi, I'm Chiranjibi Gautam!
      </h1>
      </RevealOnScroll>

      <RevealOnScroll>
      {/* Description with improved spacing */}
      <p className="bg-gradient-to-bl from-emerald-500 to-amber-600 bg-clip-text text-transparent text-lg mb-8 max-w-lg mx-auto leading-relaxed">
        I'm a full-stack developer who loves crafting clean & scalable web applications and mobile apps with a delightful user experience. I'm a part-time media translator and subtitler too.
      </p>
      </RevealOnScroll>

      <RevealOnScroll>
      {/* Buttons with transitions and improved styling */}
      <div className="flex justify-center space-x-4">
        <a 
          href="#projects" 
          className="bg-blue-500 text-white py-3 px-6 rounded-lg font-medium transition-transform transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          aria-label="View Projects"
        >
          View Projects
        </a>
        
        <a 
          href="#contact" 
          className="border border-blue-500 text-blue-500 py-3 px-6 rounded-lg font-medium transition-transform transform hover:-translate-y-1 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          aria-label="Contact Me"
        >
          Contact Me
        </a>
      </div>
      </RevealOnScroll>
    </section>
  );
};
