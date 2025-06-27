import React from "react";

export default function Education() {
  return (
    <section id="education" data-aos="fade-up" data-aos-duration="1000" className="py-16 px-6 bg-white dark:bg-black text-black dark:text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
      
      <div className="max-w-4xl mx-auto space-y-6">
        {/* College */}
        <div className="p-6 rounded-lg bg-gray-100 dark:bg-gray-900 shadow">
          <h3 className="text-xl font-semibold">Bachelor of Technology in Computer Science</h3>
          <p className="text-gray-600 dark:text-gray-400">Graphic Era Hill University Dehradun, 2022 - Present</p>
          <p className="text-sm mt-2">CGPA: 8.5</p>
        </div>

        {/* 12th */}
        <div className="p-6 rounded-lg bg-gray-100 dark:bg-gray-900 shadow">
          <h3 className="text-xl font-semibold">Senior Secondary (Class XII)</h3>
          <p className="text-gray-600 dark:text-gray-400">Omarananda Saraswati Nilayam Rishikesh, 2022</p>
          <p className="text-sm mt-2">Percentage: 84.8%</p>
        </div>

        {/* 10th */}
        <div className="p-6 rounded-lg bg-gray-100 dark:bg-gray-900 shadow">
          <h3 className="text-xl font-semibold">Secondary (Class X)</h3>
          <p className="text-gray-600 dark:text-gray-400">Omkarananda Saraswati Nilayam Rishikesh, 2020</p>
          <p className="text-sm mt-2">Percentage: 87%</p>
        </div>
      </div>
    </section>
  );
}
