import React, { useState, useEffect } from "react";
import { ArrowRight, Code, Sparkles, Zap } from "lucide-react";

function Home({ onNavigate, refs }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const roles = [
    "Developer",
    "Creator",
    "Problem Solver",
    "Tech Enthusiast",
    "Learner",
    "Thinker",
    "Builder",
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Mouse movement effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Typing animation
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentRole.length) {
            setTypedText(currentRole.substring(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (charIndex > 0) {
            setTypedText(currentRole.substring(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          } else {
            setIsDeleting(false);
            setRoleIndex((roleIndex + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 150
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "15+", label: "Awards Won" },
  ];

  const handleClick = (e, ref) => {
    e.preventDefault(); // Prevent default anchor behavior
    onNavigate(ref);
  };

  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(30,144,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(30,144,255,0.05)_1px,transparent_1px)] bg-size-[50px_50px]"></div>

        {/* Spotlight Effect */}
        <div
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none transition-all duration-300"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-full px-4 py-2 animate-fade-in">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-300">
                Welcome to my portfolio
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Hi, I'm{" "}
                <span
                  className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text"
                  style={{ color: "transparent" }}
                >
                  Nishank kushwaha
                </span>
              </h1>
              <div className="flex items-center space-x-2 text-3xl md:text-4xl font-semibold text-gray-300">
                <span>A</span>
                <span
                  className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text min-w-[200px]"
                  style={{ color: "transparent" }}
                >
                  {typedText}
                  <span className="animate-blink">|</span>
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
              I craft exceptional digital experiences that blend creativity with
              functionality. Passionate about turning ideas into reality through
              clean code and intuitive design.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                className="group relative px-8 py-4 bg-linear-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105"
                onClick={(e) => {
                  handleClick(e, refs.projects);
                }}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>View My Work</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </button>

              <a href="/cv.demo.webp" download>
                <button className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-white font-semibold rounded-lg hover:bg-slate-700/50 hover:border-blue-500/50 transition-all duration-300 active:scale-95">
                  Download CV
                </button>
              </a>
            </div>

            {/* Skills Icons */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2 text-gray-400">
                <Code className="w-5 h-5 text-blue-400" />
                <span className="text-sm">Clean Code</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Zap className="w-5 h-5 text-purple-400" />
                <span className="text-sm">Fast Performance</span>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Card */}
          <div className="relative">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-500"></div>

              {/* Card */}
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 space-y-6">
                {/* Profile Image Placeholder */}
                <div className="w-full aspect-square bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center border border-blue-500/20">
                  <div className="text-center space-y-4">
                    <img src="/Nishank.jpg" alt="Nishank" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
            <div
              className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </div>
  );
}

export default Home;
