import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6" data-aos="fade-up" data-aos-duration="1000">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        
        {/* Project Card */}
        {[
          {
            title: "Multi-Language supported Code Analyzer",
            desc: "The goal of this project is to develop a functional and extensible Static Code Analyzer that can detect potential issues in sourcecode without executing it. The analyzer is designed to identify syntax errors, security vulnerabilities, code inefficiencies, and other maintainability issues in Python programs.",
            link: "https://github.com/SujalB1704/Multi_Language_Code_Analyzer.git"
          },
          {
            title: "Smart Shell with Natural Language Processing",
            desc: " this project introduces a “Smart Command Shell integrated with Natural Language Processing (NLP) and speech recognition”, offering a more intuitive and accessible user experience. The core idea is to enable users to interact with the system using plain English or voice commands instead of traditional shell syntax. For example, inputs like “show me my files” or “create a folder named Projects” are automatically translated into executable shell commands (such as ls or mkdir) Projects. This makes command-line functionality more inclusive, particularly for users unfamiliar with technical language or those with accessibility needs. ",
            link: "https://github.com/SujalB1704/Smart_Shell_With_NLP.git"
          }
        ].map((project, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md transform hover:scale-[1.03] hover:shadow-lg transition-all duration-300 ease-in-out"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{project.desc}</p>
            <a
              href={project.link}
              className="inline-block text-blue-600 dark:text-blue-400 hover:underline hover:scale-105 transition-transform"
            >
              View Project →
            </a>
          </div>
        ))}

      </div>
    </section>
  );
}
