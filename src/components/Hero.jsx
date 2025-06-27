import React from "react";
import heroImg from "./Hero.jpeg";
import { FaGithub, FaLinkedin, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row justify-center items-center px-6 py-16 bg-white dark:bg-black text-black dark:text-white transition-all duration-500">

      {/* 👋 Text Part */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 hover:scale-105 transition-transform duration-300">
          Hi, I'm <span className="text-blue-600 dark:text-[#39FF14]">Sujal</span> 👋
        </h1>
        <p className="text-xl md:text-2xl mb-6 text-gray-700 dark:text-gray-300">
          B.Tech Undergrad | Student At Graphic Era Hill University(Dehradun)<a href="https://maps.app.goo.gl/4vXRjB35fVaqkUf79" target="_blank" rel="noopener noreferrer"><FaMapLocation className="hover:text-blue-600 dark:hover:text-[#39FF14] hover:scale-110 transition" />
          </a>
        </p>

        <a
          href="/Sujal_Resume.pdf" target="_blank"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-md dark:bg-gray-900 dark:text-[#39FF14]"
        >
          Resume
        </a>

        <div className="flex gap-4 mt-6 justify-center md:justify-start text-2xl">
          <a href="https://github.com/SujalB1704" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-blue-600 dark:hover:text-[#39FF14] hover:scale-110 transition" />
          </a>
          <a href="https://www.linkedin.com/in/sujal-belwal-35376b185/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B71NkASjLQsyNPL5Fc6RLIA%3D%3D" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-600 dark:hover:text-[#39FF14] hover:scale-110 transition" />
          </a>
        </div>
      </div>

      {/*Image*/}
      <div className="relative w-72 h-72 mb-10 md:mb-0 md:ml-10 group">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#39FF14] to-blue-600 rounded-full blur-xl opacity-0 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500" />
        <img
          src={heroImg}
          alt="Sujal"
          className="w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-700 shadow-xl transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </section>
  );
}
