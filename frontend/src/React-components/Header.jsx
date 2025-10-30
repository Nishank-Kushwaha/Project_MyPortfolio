import React, { useState, useEffect } from "react";

function PortfolioHeader({ onNavigate, refs }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, ref) => {
    e.preventDefault(); // Prevent default anchor behavior
    onNavigate(ref);
  };

  const navItems = [
    { name: "Home", reference: refs.home },
    { name: "About", reference: refs.about },
    { name: "Skills", reference: refs.skills },
    { name: "Projects", reference: refs.projects },
    { name: "Contact", reference: refs.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-lg shadow-2xl shadow-blue-500/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
            <a href="/" className="relative flex items-center space-x-3">
              <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span
                className="font-bold text-xl bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text"
                style={{ color: "transparent" }}
              >
                Portfolio
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                onClick={(e) => {
                  setActiveSection(item.name);
                  handleClick(e, item.reference);
                }}
                className="relative px-6 py-2 text-gray-300 hover:text-white transition-colors duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item.name}</span>
                <div
                  className={`absolute inset-0 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ${
                    activeSection === item.name ? "scale-100" : ""
                  }`}
                ></div>
                {activeSection === item.name && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-linear-to-r from-blue-500 to-purple-500"></div>
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative w-10 h-10 text-gray-300 hover:text-white focus:outline-none"
          >
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span
                className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                  mobileMenuOpen ? "rotate-45" : "-translate-y-2"
                }`}
              ></span>
              <span
                className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                  mobileMenuOpen ? "-rotate-45" : "translate-y-2"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                onClick={(e) => {
                  setActiveSection(item.name);
                  setMobileMenuOpen(false);
                  handleClick(e, item.reference);
                }}
                className={`block px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-linear-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 ${
                  activeSection === item.name
                    ? "bg-linear-to-r from-blue-500/20 to-purple-500/20 text-white"
                    : ""
                }`}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full px-4 py-3 bg-linear-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </nav>

      {/* Animated gradient line */}
      <div className="h-0.5 bg-linear-to-r from-transparent via-blue-500 to-transparent animate-pulse"></div>
    </header>
  );
}

export default PortfolioHeader;
