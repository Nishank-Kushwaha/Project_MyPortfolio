import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Folder,
  Star,
  GitBranch,
  Eye,
} from "lucide-react";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing my projects, skills, and experiences. Built with modern UI design and smooth animations.",
      image: "🎨",
      category: "web",
      tags: ["React", "Tailwind"],
      githubUrl: "https://github.com/Nishank-Kushwaha/Project_MyPortfolio",
      liveUrl: "https://project-myportfolio-frontend.onrender.com",
      stars: 35,
      color: "from-violet-500 to-purple-500",
    },
    {
      id: 2,
      title: "Gallery App",
      description:
        "A responsive full-stack gallery application for uploading, storing, and viewing images using Cloudinary integration.",
      image: "🖼️",
      category: "web",
      tags: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Cloudinary",
        "Tailwind",
      ],
      githubUrl: "https://github.com/Nishank-Kushwaha/Project_MyGallery",
      liveUrl: "https://project-mygallery-frontend.onrender.com",
      stars: 150,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      title: "Chatting App (Live)",
      description:
        "A real-time chat application enabling instant messaging with WebSocket support and an interactive UI.",
      image: "💬",
      category: "web",
      tags: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Tailwind"],
      githubUrl: "https://github.com/Nishank-Kushwaha/Project_MyChatApp",
      liveUrl: "https://project-mychatapp-frontend-8s4p.onrender.com",
      stars: 300,
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(30,144,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(30,144,255,0.05)_1px,transparent_1px)] bg-size-[50px_50px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-full px-4 py-2">
            <Folder className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-300">My work</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Featured{" "}
            <span
              className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text"
              style={{ color: "transparent" }}
            >
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects I've worked on, showcasing my skills and
            passion for development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`absolute -inset-1 bg-linear-to-r ${project.color} rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300`}
              ></div>

              <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col">
                {/* Project Image/Icon */}
                <div
                  className={`relative h-48 bg-linear-to-br ${project.color} flex items-center justify-center overflow-hidden`}
                >
                  <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                  <div className="absolute inset-0 bg-black/20"></div>

                  {/* Overlay Links */}
                  <div className="absolute inset-0 bg-slate-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                      href={project.githubUrl}
                      className="w-12 h-12 bg-slate-800 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors"
                      aria-label="View GitHub"
                      target="_blank"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={project.liveUrl}
                      className="w-12 h-12 bg-slate-800 hover:bg-purple-500 rounded-lg flex items-center justify-center transition-colors"
                      aria-label="View Live"
                      target="_blank"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex flex-col grow">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-semibold">
                        {project.stars}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-slate-800/50 text-blue-400 text-xs font-medium rounded-full border border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm"
                      target="_blank"
                    >
                      <GitBranch className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm"
                      target="_blank"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 text-center">
            <div
              className="text-3xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text mb-2"
              style={{ color: "transparent" }}
            >
              {projects.length}+
            </div>
            <div className="text-gray-400 text-sm">Total Projects</div>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 text-center">
            <div
              className="text-3xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text mb-2"
              style={{ color: "transparent" }}
            >
              2
            </div>
            <div className="text-gray-400 text-sm">GitHub Stars</div>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 text-center">
            <div
              className="text-3xl font-bold bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text mb-2"
              style={{ color: "transparent" }}
            >
              2
            </div>
            <div className="text-gray-400 text-sm">Open Source</div>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 text-center">
            <div
              className="text-3xl font-bold bg-linear-to-r from-orange-400 to-red-400 bg-clip-text mb-2"
              style={{ color: "transparent" }}
            >
              100%
            </div>
            <div className="text-gray-400 text-sm">Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-20 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-20 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
    </div>
  );
}

export default Projects;
