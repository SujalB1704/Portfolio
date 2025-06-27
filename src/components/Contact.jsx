import React from "react";

export default function Contact() {
  return (
    <section data-aos="fade-up" data-aos-duration="1000"
      id="contact"
      className="py-16 px-6 bg-gray-50 dark:bg-gray-900 text-center text-black dark:text-white"
    >
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

      <p className="text-lg mb-4">
        ✉️ <span className="font-medium">Email:</span>{" "}
        <a
          href="mailto:sujal@example.com"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          sujalbelwal44@gmail.com
        </a>
      </p>

      <p className="text-lg">
        📞 <span className="font-medium">Phone:</span>{" "}
        <a
          href="tel:+918126542457"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          +91 8126542457
        </a>
      </p>
    </section>
  );
}
