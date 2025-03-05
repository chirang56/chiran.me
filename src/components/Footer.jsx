import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Logo from "../assets/Logo.webp"; // Adjust path if needed

export const Footer = () => {
  return (
    <footer className="bg-[var(--navbar-bg)] backdrop-blur-lg border-t border-[var(--border-color)] shadow-lg">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Name */}
          <div className="flex items-center space-x-3">
            <img src={Logo} alt="Logo" className="w-10 h-10 rounded-full border border-[var(--border-color)] shadow-md" />
            <a href="#home" className="font-mono text-lg font-bold bg-gradient-to-br from-[var(--accent-gradient-from)] to-[var(--accent-gradient-to)] text-transparent bg-clip-text">
              Chirang<span className="bg-gradient-to-br from-[var(--accent-gradient-to)] to-[var(--accent-gradient-from)] text-transparent bg-clip-text">.56</span>
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="flex space-x-6 text-[var(--text-secondary)]">
            <a href="#home" className="hover:text-[var(--accent-primary)] transition-colors">Home</a>
            <a href="#about" className="hover:text-[var(--accent-primary)] transition-colors">About</a>
            <a href="#projects" className="hover:text-[var(--accent-primary)] transition-colors">Projects</a>
            <a href="#contact" className="hover:text-[var(--accent-primary)] transition-colors">Contact</a>
          </nav>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-xl text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-xl text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-xl text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[var(--border-color)] mt-6 pt-4 text-center text-sm text-[var(--text-secondary)]">
          © {new Date().getFullYear()} Chiranjibi Gautam. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
