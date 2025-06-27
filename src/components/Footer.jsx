import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
      &copy; {new Date().getFullYear()} Sujal B. All rights reserved.
    </footer>
  );
}
