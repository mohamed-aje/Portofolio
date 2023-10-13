import React from "react";
import Cards from "./Cards";

export default function Home() {
  return (
    <section
      id="home"
      className="dark:bg-gray-900 bg-gray-100 text-black dark:text-white"
    >
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            Hi, I'm Mohamed.
            <br />
            Building Applications is My Passion.
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a passionate front end developer with a permanent residence
            permit. I have graduated from Häme University of Applied Sciences
            (HAMK) with a major in software development, achieving a GPA of 4.
            During my studies, I have gained valuable knowledge and skills in
            various areas of software development. I am enthusiastic about
            turning my dedication and hard work into real-world results. In my
            spare time, I enjoy reading, exercising, socializing, and exploring
            new technologies.
          </p>

          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded hover:animate-bounce"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-2 py-2 px-6 focus:outline-none hover:bg-green-600 text-white rounded hover:animate-bounce"
            >
              Explore My Projects & Code
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Cards />
        </div>
      </div>
    </section>
  );
}
