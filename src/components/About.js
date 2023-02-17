import React from "react";
import code from "../assets/code.jpg";
export default function About() {
  return (
    <section id="about" className="dark:bg-gray-800">
      <div className="container dark:bg-gray-800 mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium dark:text-white">
            Hi, I'm Mohamed.
            <br className="hidden lg:inline-block" /> Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Qui
          </h1>
          <p className="mb-8 leading-relaxed dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus?
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex dark:text-white dark:bg-green-500 border-0 py-2 px-6 focus:outline-none dark:bg-green-600 rounded dark:text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex dark:text-gray-400 dar:bg-gray-800 border-0 py-2 px-6 focus:outline-none dark:bg-gray-700 dark:text-white rounded dark:text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={code}
          />
        </div>
      </div>
    </section>
  );
}
