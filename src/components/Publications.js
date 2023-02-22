import React from "react";
import { PaintBrushIcon } from "@heroicons/react/24/solid";

import { projects, publications } from "../data";
const Publications = () => {
  return (
    <section
      id="publications"
      className="dark:text-gray-400 dark:bg-gradient-to-r from-sky-800 to-indigo-500 body-font"
    >
      <div className="container px-5 py-10 mx-auto text-center lg:px-40 ">
        <div className="flex flex-col w-full mb-20">
          <PaintBrushIcon className="mx-auto inline-block w-10 mb-4 dark:text-white " />
          <em className=" text-center font-medium title-font mb-4 dark:text-white">
            ‹Thesis›
          </em>
          <h1 className="text-center sm:text-4xl text-3xl font-medium title-font mb-4 dark:text-white ">
            My Publications:
            <br />
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base "></p>
          {publications.map((pub) => (
            <a
              key={publications.image}
              className="sm:w-1/2 w-100 p-4"
              href={pub.link}
            >
              <div className="flex relative ">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full  object-cover object-center"
                  src={pub.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {pub.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {pub.title}
                  </h1>
                  <p className="leading-relaxed">{pub.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>{" "}
      </div>
    </section>
  );
};
export default Publications;
