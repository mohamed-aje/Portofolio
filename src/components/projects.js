import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/solid";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-100 dark:bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <span className="h-1 w-full bg-gray-800 dark:bg-white lg:w-full"></span>
          <em className="font-medium title-font mb-4 dark:text-white mt-4">
            ‹Process of learning›
          </em>
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 dark:text-white">
            School And Hobby Projects:
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-white"></p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <a href={project.link} key={project.image} className="group">
              <div className="relative overflow-hidden bg-gray-800 dark:bg-gray-700 rounded shadow-md h-full">
                <img
                  alt="gallery"
                  className="object-cover w-full h-48 md:h-56 lg:h-64"
                  src={project.image}
                />
                <div className="p-4">
                  <h2 className="text-sm text-gray-400 dark:text-gray-300 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="text-lg font-medium text-white dark:text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="text-white dark:text-gray-300">
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
