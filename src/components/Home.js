import React from "react";
import Cards from "./Cards";

export default function Home() {
  return (
    <section
      id="home"
      className="dark:bg-gradient-to-r from-sky-700 via-cyan-900 to-sky-700 "
    >
      <div className="container dark:bg-gradient-to-r from-sky-700 via-cyan-900 to-sky-700  mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium dark:text-white">
            Hi, I'm Mohamed.
            <br />
            <br className="hidden lg:inline-block" /> <br /> Building
            Applications is My Passion.
          </h1>
          <p className="mb-8 leading-relaxed dark:text-white">
            I am a passionate recent graduate with Permanent residence permit. I
            graduated from Häme University of Applied Sciences (HAMK) with a GPA
            of 4, majoring in software development. I have studied very hard and
            I am looking forward to translating all the hard work, effort, and
            dedication I have put into studying into real results. In my spare
            time, I enjoy going for a walk, reading, training, socialising, and
            streaming.
          </p>

          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded  hover:animate-bounce"
            >
              Contact me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-2 py-2 px-6 focus:outline-none hover:bg-700 hover:bg-green-600 text-white rounded hover:animate-bounce"
            >
              Explore My Projects & Code
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
          <Cards />{" "}
        </div>
      </div>
    </section>
  );
}
