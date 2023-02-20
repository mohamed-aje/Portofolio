import React from "react";
import code from "../assets/code.jpg";
import { Container, Card, Col, Button } from "react-bootstrap";
import Cards from "./Cards";

export default function Home() {
  return (
    <section id="about" className="dark:bg-gray-800">
      <div className="container dark:bg-gray-800 mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium dark:text-white">
            Hi, I'm Mohamed.
            <br className="hidden lg:inline-block" /> <br /> I love Building
            Applications
          </h1>
          <p className="mb-8 leading-relaxed dark:text-white">
            I’m a highly motivated fresh graduate, I'm capable of handling
            multiple tasks on daily basis, dependable person who is great at
            time management, I’m honest and trustworthy and my personal saying
            is “vision without action is just a daydream” because I believe that
            with hard work and dedication, you can make any dream a reality.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded "
            >
              Contact me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 py-2 px-6 focus:outline-none hover:bg--700 hover:bg-green-600 text-white rounded "
            >
              explore my projects
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
