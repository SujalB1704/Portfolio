import React from "react";

export default function Navbar({ dark, setDark }) {
  return (
    <header className="fixed top-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-500">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-[#39FF14]"><a href="#">Sujal Belwal</a></h1>

        <div className="flex items-center space-x-6 text-gray-800 dark:text-white font-medium hover:text-blue">
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-[#39FF14] transition">Contact</a>
          <a href="#about" className="hover:text-blue-600 dark:hover:text-[#39FF14] transition">About</a>
          <a href="#projects" className="hover:text-blue-600 dark:hover:text-[#39FF14] transition">Projects</a>
          <a href="#education" className="hover:text-blue-600 dark:hover:text-[#39FF14] transition">Education</a>

          {/*Theme Toggle*/}
          <div className="p-1">
            <button
              onClick={() => setDark(!dark)}
              className="text-2xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              title={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}>
              {dark ? "🌙" : "☀️"}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
