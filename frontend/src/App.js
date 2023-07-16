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
import Resume from "./components/Resume";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <Particle />
      <Navbar />
      <Home />
      <Projects />
      <Resume />
    </>
  );
}

export default App;
