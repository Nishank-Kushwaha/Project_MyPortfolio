import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

function PortfolioFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-400">
      {/* Animated gradient line */}{" "}
      <div className="h-0.5 bg-linear-to-r from-transparent via-blue-500 to-transparent animate-pulse"></div>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-center gap-4">
        {/* Copyright */}
        <p className="text-sm text-center md:text-left">
          © {currentYear}{" "}
          <span className="text-white font-medium">Nishank Kushwaha</span>. All
          rights reserved.
        </p>
      </div>
      {/* Scroll to Top Button */}{" "}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-8 w-12 h-12 bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 group"
        aria-label="Scroll to top"
      >
        {" "}
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />{" "}
      </button>
    </footer>
  );
}

export default PortfolioFooter;
