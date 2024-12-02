import React from "react";
import cv from "../assets/Lebenslauf.pdf"

const Hero = () => {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center lg:h-[95vh] justify-between pl-10">
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10 ml-16">
            <h1 className="lg:text-6xl text-4xl font-bold lg:leading-snug">
              Hi There, <br />
              I'm Thomas <span className="text-blue-700">Soldwedel</span>
            </h1>
            <p className="md:text-2xl text-xl mb-4">Web Developer</p>
            <p className="mb-4">
              I'm a passionate web developer with expertise in React and modern web technologies. I love creating beautiful and
              functional websites that solve real world problems.
            </p>
            <button className="bg-black text-white px-3 py-2 w-max rounded-md">
              <a
                href={cv}
                download
                target="_blank"
              >
                Download CV 
              </a>
            </button>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
