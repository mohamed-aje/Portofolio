import React from "react";
import Toggle from "../hooks/Toggle";

export default function Navbar() {
  return (
    <header className="dark:bg-gray-800 ç md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium dark:text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 dark:text-white">
            Mohamed Al-Ajily
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center dark:text-white justify-center">
          <a href="#projects" className="mr-5 dark:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 dark:text-white">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 dark:text-white">
            References
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center dark:bg-gray-800 border-0 py-1 px-3 focus:outline-none  rounded dark:text-white mt-4 md:mt-0"
        >
          Hire Me
        </a>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded dark:text-white mt-4 md:mt-0"
        >
          <Toggle />
        </a>
      </div>
    </header>
  );
}
