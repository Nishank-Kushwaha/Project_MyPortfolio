import { useRef } from "react";
import "./App.css";
import PortfolioHeader from "./React-components/Header";
import PortfolioFooter from "./React-components/Footer";
import Home from "./React-components/Home";
import About from "./React-components/About";
import Skills from "./React-components/Skills";
import Projects from "./React-components/Projects";
import Contact from "./React-components/Contact";

function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll handler function
  const scrollToSection = (sectionRef) => {
    const headerOffset = 80; // Adjust based on your header height
    const elementPosition = sectionRef.current?.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      <PortfolioHeader
        onNavigate={scrollToSection}
        refs={{
          home: homeRef,
          about: aboutRef,
          skills: skillsRef,
          projects: projectsRef,
          contact: contactRef,
        }}
      />

      <div ref={homeRef}>
        <Home
          onNavigate={scrollToSection}
          refs={{
            projects: projectsRef,
          }}
        />
      </div>

      <div ref={aboutRef}>
        <About />
      </div>

      <div ref={skillsRef}>
        <Skills />
      </div>

      <div ref={projectsRef}>
        <Projects />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>

      <PortfolioFooter />
    </>
  );
}

export default App;
