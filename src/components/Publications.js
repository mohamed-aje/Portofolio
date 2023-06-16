import React from "react";
import { PaintBrushIcon } from "@heroicons/react/24/solid";

import { publications } from "../data";

const Publications = () => {
  return (
    <section id="publications" className="dark:bg-gray-900 bg-gray-100">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20 items-center">
          <span className="h-1 w-full dark:bg-white bg-gray-800 lg:w-full"></span>
          <em className="text-center font-medium title-font mb-4 dark:text-white mt-4">
            ‹Thesis›
          </em>
          <h1 className="text-center sm:text-4xl text-3xl font-medium title-font mb-4 dark:text-white">
            My Publications:
            <br />
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
          {publications.map((pub, index) => (
            <a key={index} className="sm:w-1/2 w-100 p-4" href={pub.link}>
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-max-content object-cover object-center"
                  src={pub.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-700 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-gray-300 mb-1">
                    {pub.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {pub.title}
                  </h1>
                  <p className="leading-relaxed text-gray-300">
                    {pub.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
