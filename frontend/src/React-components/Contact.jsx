import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Linkedin,
  Github,
  Twitter,
  Clock,
  CheckCircle,
  Instagram,
  Codesandbox,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        console.log("✅ Message sent successfully!");
      } else {
        console.error("❌ Failed to send:", data.error);
      }
    } catch (error) {
      console.error("⚠️ Network error:", error);
    }

    setSending(false);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kushwahanishank01@gmail.com",
      link: "mailto:kushwahanishank01@gmail.com",
      color: "blue",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9696596329",
      link: "tel:+919696596329",
      color: "purple",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jhansi, India",
      link: null,
      color: "pink",
    },
    {
      icon: Clock,
      label: "Availability",
      value: "9 AM - 6 PM IST",
      link: null,
      color: "cyan",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "Github",
      link: "https://github.com/Nishank-Kushwaha",
    },
    {
      icon: Codesandbox,
      label: "Codeforces",
      link: "https://codeforces.com/profile/Nishank_kushwaha",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/nishank-kushwaha-96041a303/",
    },
    { icon: Twitter, label: "Twitter", link: "https://x.com/_Nishank_01_" },
    {
      icon: Instagram,
      label: "Instagram",
      link: "https://www.instagram.com/_nishank_01_/",
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
            <MessageSquare className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-300">Let's connect</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Get In{" "}
            <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear
            from you!
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Cards */}
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="relative group">
                  <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                  <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                        <Icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-400 mb-1">
                          {info.label}
                        </div>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-white font-medium hover:text-blue-400 transition-colors break-all"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-white font-medium">
                            {info.value}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Social Links */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-xl p-6">
                <h3 className="text-white font-bold mb-4">Follow Me</h3>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.link}
                        className="group/social relative"
                        aria-label={social.label}
                        target="_blank"
                      >
                        <div className="absolute -inset-1 bg-linear-to-r from-blue-400 to-purple-500 rounded-lg blur opacity-25 group-hover/social:opacity-75 transition duration-300"></div>
                        <div className="relative p-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-110">
                          <Icon className="w-5 h-5 text-gray-400 group-hover/social:text-white transition-colors" />
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Send Me a Message
                </h3>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 space-y-4">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/50">
                      <CheckCircle className="w-8 h-8 text-green-400" />
                    </div>
                    <h4 className="text-xl font-bold text-white">
                      Message Sent!
                    </h4>
                    <p className="text-gray-400 text-center">
                      Thank you for reaching out. I'll get back to you as soon
                      as possible.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="6"
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                        placeholder="Tell me about your project or just say hi!"
                      ></textarea>
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={sending}
                      className={`relative w-full px-6 py-4 bg-linear-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group
                      ${
                        sending
                          ? "opacity-90 cursor-wait"
                          : "hover:shadow-lg hover:shadow-blue-500/50"
                      }
                    `}
                    >
                      {sending ? (
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          ></path>
                        </svg>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/3 right-20 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div
        className="absolute bottom-1/3 left-20 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>
    </div>
  );
}

export default Contact;
