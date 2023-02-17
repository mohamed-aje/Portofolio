import React from "react";
import Toggle from "../hooks/Toggle";
//"p-4 bg-white sm:p-6 dark:bg-gray-900"
export default function Navbar() {
  return (
    <header className="dark:bg-gray-900 ç md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium hover:text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 hover:text-white">
            Mohamed Al-Ajily
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center  justify-center">
          <a href="#projects" className="mr-5 hover:text-white ">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white ">
            Skills
          </a>
          <a href="#references" className="mr-5 hover:text-white ">
            References
          </a>
        </nav>
        <a
          href="Mohamed_Al-Ajily_CV.pdf"
          download={"Mohamed_Al-Ajily_CV.pdf"}
          className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none  rounded hover:text-white mt-4 md:mt-0 "
        >
          Resume{" "}
        </a>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800    focus:outline-none hover:bg-gray-700 rounded hover:text-white mt-4 md:mt-0"
        >
          <Toggle />
        </a>
      </div>
    </header>
  );
}
