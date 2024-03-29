import React from "react";
import Toggle from "../hooks/Toggle";
import Clock from "./Clock";

export default function Navbar() {
  return (
    <header className="bg-gray-900 dark:bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white dark:text-white mb-4 md:mb-0">
          <a href="#home" className="ml-3 text-white dark:text-white">
            Mohamed Al-Ajily
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center justify-center">
          <a
            href="#home"
            className="mr-5 text-white dark:text-white hover:text-gray-300"
          >
            Home
          </a>
          <a
            href="#projects"
            className="mr-5 text-white dark:text-white hover:text-gray-300"
          >
            Projects
          </a>
          <a
            href="#publications"
            className="mr-5 text-white dark:text-white hover:text-gray-300"
          >
            Publications
          </a>
          {/* <a
            href="#certificates"
            className="mr-5 text-white dark:text-white hover:text-gray-300"
          >
            Certifications
          </a> */}
          <a
            href="#contact"
            className="mr-5 text-white dark:text-white hover:text-gray-300"
          >
            Contacts
          </a>
        </nav>
        <a
          href="#contacts"
          className="inline-flex items-center bg-gray-800 focus:outline-none hover:bg-gray-700 rounded hover:text-white mt-4 md:mt-0"
        >
          <Toggle />
        </a>
        <Clock />
      </div>
    </header>
  );
}
