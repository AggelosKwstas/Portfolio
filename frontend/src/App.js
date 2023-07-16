import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "@fontsource/roboto/latin-500.css";
import "./css/Navbar.css";
import Particle from "./components/Particle";
import Projects from "./components/Projects";
import Home from "./components/Home";
import ScrollToTop from "react-scroll-to-top";
import Resume from "./components/Resume";
import Footer from "./components/Footer";


function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  const isMobile = window.innerWidth <= 768;
  const viewBox = isMobile ? "9 1 20 25" : "0 0 24 24";
  return (
    <section id="main">
      <Navbar />
      <Home />
      <Projects />
      <Resume />
      <Footer />
      <ScrollToTop
        smooth
        color="#0d47a1"
        viewBox={viewBox}
        svgPath="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"
        style={{
          position: "fixed",
          right: "2%",
          bottom: "2%",
          zIndex: 9999,
        }}
        id="top"
      />
            <Particle />
    </section>
  );
}

export default App;
