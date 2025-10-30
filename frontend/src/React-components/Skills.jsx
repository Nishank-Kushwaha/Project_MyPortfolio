import React, { useState } from "react";
import { Code2, Brain, Database, Wrench, Zap, Trophy } from "lucide-react";

function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const categories = [
    { id: "frontend", name: "Frontend", icon: Code2 },
    { id: "backend", name: "Backend", icon: Database },
    { id: "dsa", name: "Dsa", icon: Brain },
    { id: "tools", name: "Tools", icon: Wrench },
  ];

  const skillsData = {
    frontend: [
      {
        name: "React",
        level: 72,
        color: "from-cyan-400 to-cyan-600",
        icon: "⚛️",
      },
      {
        name: "JavaScript",
        level: 68,
        color: "from-yellow-400 to-yellow-600",
        icon: "📜",
      },
      {
        name: "TypeScript",
        level: 5,
        color: "from-blue-500 to-blue-700",
        icon: "📘",
      },
      {
        name: "Next.js",
        level: 10,
        color: "from-gray-700 to-gray-900",
        icon: "▲",
      },
      {
        name: "Tailwind CSS",
        level: 70,
        color: "from-teal-400 to-teal-600",
        icon: "🎨",
      },
      {
        name: "HTML/CSS",
        level: 80,
        color: "from-orange-400 to-orange-600",
        icon: "🌐",
      },
    ],
    backend: [
      {
        name: "Node.js",
        level: 60,
        color: "from-green-500 to-green-700",
        icon: "🟢",
      },
      {
        name: "Express",
        level: 73,
        color: "from-gray-600 to-gray-800",
        icon: "🚂",
      },
      {
        name: "MongoDB",
        level: 78,
        color: "from-green-400 to-green-600",
        icon: "🍃",
      },
      {
        name: "MySQL",
        level: 50,
        color: "from-blue-400 to-blue-600",
        icon: "🐬",
      },
      {
        name: "REST APIs",
        level: 80,
        color: "from-purple-400 to-purple-600",
        icon: "🔌",
      },
      {
        name: "GraphQL",
        level: 1,
        color: "from-pink-400 to-pink-600",
        icon: "◆",
      },
    ],
    dsa: [
      {
        name: "Data Structures & Algorithms",
        level: 30,
        color: "from-green-400 to-green-600",
        icon: "🧩",
      },
      {
        name: "Problem Solving",
        level: 32,
        color: "from-blue-400 to-blue-600",
        icon: "🧠",
      },
      {
        name: "C++ Programming",
        level: 65,
        color: "from-indigo-400 to-indigo-600",
        icon: "⚙️",
      },
      {
        name: "Competitive Programming",
        level: 25,
        color: "from-orange-400 to-orange-600",
        icon: "🏆",
      },
      {
        name: "Codeforces / LeetCode / GFG",
        level: 25,
        color: "from-purple-400 to-purple-600",
        icon: "💻",
      },
      {
        name: "Time & Space Complexity",
        level: 48,
        color: "from-cyan-400 to-cyan-600",
        icon: "⏱️",
      },
    ],
    tools: [
      {
        name: "Git & GitHub",
        level: 65,
        color: "from-gray-700 to-gray-900",
        icon: "📦",
      },
      {
        name: "VS Code",
        level: 86,
        color: "from-blue-500 to-blue-700",
        icon: "💻",
      },
      {
        name: "Docker",
        level: 0.5,
        color: "from-blue-400 to-blue-600",
        icon: "🐳",
      },
      {
        name: "Webpack",
        level: 0,
        color: "from-blue-300 to-blue-500",
        icon: "📦",
      },
      {
        name: "Jest Testing",
        level: 0,
        color: "from-red-400 to-red-600",
        icon: "🧪",
      },
      {
        name: "CI/CD",
        level: 0.5,
        color: "from-green-400 to-green-600",
        icon: "🔄",
      },
    ],
  };

  const certifications = [
    {
      title: "Full Stack Web Development",
      issuer: "Udemy",
      year: "2025",
      color: "from-blue-400 to-blue-600",
    },
  ];

  const interests = [
    { name: "Open Source", icon: "🌍", color: "from-green-400 to-green-600" },
    { name: "AI & ML", icon: "🤖", color: "from-purple-400 to-purple-600" },
    { name: "Web3", icon: "⛓️", color: "from-blue-400 to-blue-600" },
    { name: "Cloud Computing", icon: "☁️", color: "from-cyan-400 to-cyan-600" },
    { name: "Performance", icon: "⚡", color: "from-yellow-400 to-yellow-600" },
  ];

  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(30,144,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(30,144,255,0.05)_1px,transparent_1px)] bg-size-[50px_50px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-full px-4 py-2">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-300">My expertise</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Skills &{" "}
            <span
              className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text"
              style={{ color: "transparent" }}
            >
              Expertise
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and professional
            capabilities
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeCategory === category.id
                    ? "bg-linear-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50"
                    : "bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-700/50 border border-slate-700"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skillsData[activeCategory].map((skill, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{skill.icon}</span>
                    <span className="text-white font-semibold text-lg">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-blue-400 font-bold">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-linear-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                    style={{
                      width: `${skill.level}%`,
                      boxShadow: "0 0 10px currentColor",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-2 flex items-center justify-center space-x-2">
              <Trophy className="w-8 h-8 text-yellow-400" />
              <span>Certifications</span>
            </h3>
            <p className="text-gray-400">
              Professional certifications and achievements
            </p>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="relative group">
                <div
                  className={`absolute -inset-1 bg-linear-to-r ${cert.color} rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300`}
                ></div>
                <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
                  <div className="text-center space-y-3">
                    <div className="text-4xl mb-2">🏆</div>
                    <h4 className="text-white font-bold text-sm">
                      {cert.title}
                    </h4>
                    <p className="text-gray-400 text-xs">{cert.issuer}</p>
                    <div className="text-blue-400 text-xs font-semibold">
                      {cert.year}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Interests */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-2">
              Currently Exploring
            </h3>
            <p className="text-gray-400">
              Technologies and areas I'm passionate about learning
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {interests.map((interest, index) => (
              <div key={index} className="relative group">
                <div
                  className={`absolute -inset-1 bg-linear-to-r ${interest.color} rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300`}
                ></div>
                <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-xl p-4 text-center hover:transform hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-2">{interest.icon}</div>
                  <div className="text-white font-medium text-sm">
                    {interest.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/3 right-20 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div
        className="absolute bottom-1/3 left-20 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
    </div>
  );
}

export default Skills;
