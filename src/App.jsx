import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);


  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <Navbar dark={dark} setDark={setDark} />

      {/* Sections */}
      <Hero />
      <About />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
