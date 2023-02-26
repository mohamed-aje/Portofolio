import React from "react";
import Toggle from "../hooks/Toggle";
import { Dropdown } from "./Dropdown";
export default function Navbar() {
  return (
    <header className="dark:bg-gradient-to-r from-sky-900 to-indigo-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium dark:text-white mb-4 md:mb-0">
          <a href="#home" className="ml-3 dark:text-white ">
            Mohamed Al-Ajily
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center  justify-center">
          <a href="#home" className="mr-5 dark:text-white hover:animate-bounce">
            Home
          </a>
          <a
            href="#projects"
            className="mr-5 dark:text-white hover:animate-bounce "
          >
            Projects
          </a>

          <a
            href="#contact"
            className="mr-5 dark:text-white hover:animate-bounce"
          >
            Contacts
          </a>
          <a
            href="#publications"
            className="mr-5 dark:text-white hover:animate-bounce "
          >
            Publications
          </a>
        </nav>
        <a
          href="#contacts"
          className="inline-flex items-center bg-gray-800    focus:outline-none hover:bg-gray-700 rounded hover:text-white mt-4 md:mt-0"
        >
          <Toggle />
        </a>
        <Dropdown />
      </div>
    </header>
  );
}
