import React from "react";
import {
  Users,
  Award,
  Coffee,
  Download,
  Mail,
  MapPin,
  Calendar,
  Briefcase,
} from "lucide-react";
import ScrollTimeline from "./ScrollTimeLine";

function About() {
  const experiences = [
    {
      year: "2024 - 2025",
      role: "Full Stack Developer (Personal Projects)",
      company: "Self-Driven Projects",
      description:
        "Developed responsive full-stack applications including a gallery app and a real-time chatting app using React, Node.js, and MongoDB. Focused on creating user-friendly interfaces and efficient backend systems.",
      location: "Remote",
    },
    {
      year: "2025 - 2026",
      role: "Tech Team Member",
      company: "Kashiyatra, IIT BHU (Annual Cultural Fest)",
      description:
        "Worked as part of the technical team for IIT BHU’s annual cultural fest. Contributed to building and maintaining web platforms, managing event registration systems, and ensuring smooth technical operations during the fest.",
      location: "Varanasi, India",
    },
  ];

  const education = [
    {
      year: "2021 - 2022",
      degree: "Class 10",
      institution: "ICSE Board",
      description:
        "Completed Class 10 with 88.9% marks, securing a strong academic foundation.",
      location: "India",
    },
    {
      year: "2023 - 2024",
      degree: "Class 12",
      institution: "CBSE Board",
      description: "Completed Class 12 with 88.6% marks in the science stream.",
      location: "India",
    },
    {
      year: "2024",
      degree: "JEE Main & Advanced Qualified",
      institution: "National Testing Agency (NTA)",
      description:
        "Qualified both JEE Main and JEE Advanced examinations with excellent performance.",
      location: "India",
    },
    {
      year: "2024 - Present",
      degree: "Bachelor of Technology in Electrical Engineering",
      institution: "Indian Institute of Technology (IIT) BHU Varanasi",
      description:
        "Currently pursuing Electrical Engineering with interests in coding, web development, and competitive programming.",
      location: "Varanasi, India",
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
            <Users className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-300">Get to know me</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            About{" "}
            <span
              className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text"
              style={{ color: "transparent" }}
            >
              Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate developer with a love for creating beautiful and
            functional digital experiences
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Content Column */}
          <div className="lg:col-span-3 space-y-8">
            {/* About Story */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                <span>My Story</span>
              </h3>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  I'm <strong>Nishank Kushwaha</strong>, a passionate student
                  pursuing Electrical Engineering at
                  <strong>IIT BHU Varanasi</strong>. I have a deep interest in
                  coding and competitive programming, constantly striving to
                  improve my problem-solving skills and explore new
                  technologies.
                </p>
                <p>
                  I enjoy building modern, efficient, and user-friendly web
                  applications. My current skill set includes{" "}
                  <strong>C++</strong>, <strong>Node.js</strong>,{" "}
                  <strong>React</strong>, and
                  <strong> MongoDB</strong> etc. I’m particularly interested in
                  full-stack development , competitive programing and love
                  experimenting with new frameworks and tools to enhance my
                  projects.
                </p>
                <p>
                  Although I’m currently a <strong>2nd-year student</strong>, I
                  actively contribute to open-source projects and participate in
                  coding communities. I’m eager to keep learning, collaborating,
                  and growing as a developer.
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                <Briefcase className="w-6 h-6 text-blue-400" />
                <span>Experience</span>
              </h3>
              <div className="space-y-6">
                <ScrollTimeline events={experiences} type={"Experience"} />
              </div>
            </div>

            {/* Education */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                <Award className="w-6 h-6 text-purple-400" />
                <span>Education</span>
              </h3>
              <div className="space-y-6">
                <ScrollTimeline events={education} type={"Education"} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div
        className="absolute bottom-1/4 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
    </div>
  );
}

export default About;
