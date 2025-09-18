import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["About", "Projects", "Skills", "Contact"];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`hidden md:block fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-jungle-dark/80 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div
            className="flex-shrink-0 animate-fade-in-down"
            style={{ animationDelay: "0.2s" }}
          >
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-2xl font-display font-bold text-white hover:text-jungle-accent transition-colors"
            >
              Herman Firmansyah
            </a>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <li
                  key={link}
                  className="animate-fade-in-down"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link);
                    }}
                    className="text-jungle-light font-medium hover:text-jungle-accent transition-colors duration-300 relative group"
                  >
                    {link}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-jungle-accent group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
