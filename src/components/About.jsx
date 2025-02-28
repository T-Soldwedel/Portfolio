import React from "react";
import MernStack from "../assets/mernstack.png";
import Html from "../assets/Html.png";
import Css from "../assets/CSS.png";
import JavaScript from "../assets/JS.png";
import ReactLogo from "../assets/React.svg";
import Tailwind from "../assets/tailwind.png";
import Bootstrap from "../assets/Bootstrap.png";
import NodeLogo from "../assets/NodeLogo.png";
import Mongodb from "../assets/Mongodb.svg";
import Express from "../assets/Express.png";

const About = () => {
  return (
    <div className="relative pt-7" id="about">
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              About Me
            </h2>
            {/* <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Hi, I'm Thomas Soldwedel
            </p> */}
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto sm:mx-auto">
              Full-Stack Developer with expertise in web development and the
              MERN stack.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                {/* <h3 className="text-2xl font-semibold text-gray-900">
                  
                </h3> */}
                <p className="mt-4 text-lg text-gray-600">
                  Focused on creating fast, responsive, and user-friendly
                  digital experiences. Skilled in frontend frameworks like React
                  and backend technologies like Node.js and Express.js, I bring
                  a fullstack approach to building scalable, impactful web
                  solutions. I'm passionate about translating business needs
                  into seamless digital products, and I'm constantly expanding
                  my skills to stay at the forefront of web development.
                </p>
                <img
                  src={MernStack}
                  alt=""
                  className="p-2 rounded-lg w-52 mt-4"
                />
              </div>
              <div className="border border-blue-200 rounded-lg md:p-7 py-7 flex flex-col gap-8 items-center shadow-lg shadow-blue-300">
                <h3 className="text-2xl font-semibold text-blue-600">
                  Skills & Expertise
                </h3>
                <div className="flex items-center justify-center flex-wrap gap-3">
                  <div className="border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-300">
                    <img src={Html} alt="" className="w-10" />
                    <span className="font-semibold">HTML</span>
                  </div>
                  <div className="border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-300">
                    <img src={Css} alt="" className="w-8" />
                    <span className="font-semibold">CSS</span>
                  </div>
                  <div className="border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-300">
                    <img src={JavaScript} alt="" className="w-10" />
                    <span className="font-semibold">JavaScript</span>
                  </div>
                  <div className="border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-300">
                    <img src={ReactLogo} alt="" className="w-10" />
                    <span className="font-semibold">React</span>
                  </div>
                  <div className="border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-300">
                    <img src={Tailwind} alt="" className="w-10" />
                    <span className="font-semibold">Tailwind</span>
                  </div>
                  <div className="border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-300">
                    <img src={Bootstrap} alt="" className="w-10" />
                    <span className="font-semibold">Bootstrap</span>
                  </div>
                  <div className="border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-300">
                    <img src={NodeLogo} alt="" className="w-10" />
                    <span className="font-semibold">Node Js</span>
                  </div>
                  <div className="border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-300">
                    <img src={Mongodb} alt="" className="w-10" />
                    <span className="font-semibold">Node</span>
                  </div>
                  <div className="border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-300">
                    <img src={Express} alt="" className="w-10" />
                    <span className="font-semibold">Express</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900">
              More About Me
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Apart from coding, I am passionate about learning new technologies
              and keeping myself up-to-date with the latest trends in web
              development. However, sports such as volleyball and calistehnics
              play a significant role in my life and provide a great balance to
              my work at the computer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
