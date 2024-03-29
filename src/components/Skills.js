import { CpuChipIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";
import React from "react";
import { skills } from "../data";

const Skills = () => {
  return (
    <section id="skills" className="dark:bg-gray-900 md:sticky top-0 z-10">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <CpuChipIcon className="w-10 inline-block mb-4 text-green-400" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400">
            I have gained valuable skills and experience through working on
            school projects, hobby projects, and real-world work experiences.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <RocketLaunchIcon className="w-6 h-6 flex-shrink-0 mr-4 text-green-400" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
