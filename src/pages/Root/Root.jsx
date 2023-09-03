import React, {useEffect} from "react";
import Contact from "../../components/Contact";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import Header from "../../components/Header";
import About from "../../components/About";
import Blog from "../../components/Blog";
import AOS from "aos";
import "aos/dist/aos.css";

const Root = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="space-y-20">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
    </div>
  );
};

export default Root;
