import { useEffect } from "react";
import { ThemeToggle } from './ThemeToggle';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  
  return (
    <nav className="fixed top-0 w-full z-40 bg-[var(--navbar-bg)] backdrop-blur-lg border-b border-[var(--border-color)] shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="font-mono text-xl font-bold bg-gradient-to-br from-[var(--accent-gradient-from)] to-[var(--accent-gradient-to)] text-transparent bg-clip-text">
            Chirang
            .
            <span className="bg-gradient-to-br from-[var(--accent-gradient-to)] to-[var(--accent-gradient-from)] text-transparent bg-clip-text">
              {" "}
              56{" "}
            </span>
            {" "}
          </a>

          <div className="flex items-center">
            {/* Theme Toggle */}
            <ThemeToggle />
            
            <div
              className="ml-4 w-7 h-5 relative cursor-pointer z-40 md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              &#9776;
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
            >
              {" "}
              Home
            </a>

            <a
              href="#about"
              className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
            >
              {" "}
              About{" "}
            </a>

            <a
              href="#projects"
              className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
            >
              {" "}
              Projects{" "}
            </a>

            <a
              href="#contact"
              className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
            >
              {" "}
              Contact{" "}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};