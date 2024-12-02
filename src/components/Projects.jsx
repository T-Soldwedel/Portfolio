import React from "react";
import Thanks1 from "../assets/Thanks1.png";
import Thanks2 from "../assets/Thanks2.png";
import Cards from "./Cards";

const Projects = () => {
  const projectJson = [
    {
      title: "Thanks1",
      desc: "Webelite Builders did an amazing job on our website. Their professionalism and dedication to our project were outstanding.",
      image: Thanks1,
      live: "https://t-soldwedel.github.io/bogus-website/",
      github: "https://github.com/T-Soldwedel/bogus-website",
    },
    {
      title: "Thanks2",
      desc: "The team at Webelite Builders exceeded our expectations with their digital marketing expertise. Highly recommend!",
      image: Thanks2,
      live: "https://in-place.vercel.app/",
      github: "https://github.com/T-Soldwedel/in_place",
    },
    // {
    //   title: "",
    //   desc: "",
    //   image: Thanks3,
    //   live: "",
    //   github: "",
    // },
  ];

  return (
    <div id="projects" className="relative flex bg-gray-700 py-10 px-4">
      <div className="mb-16 max-w-7xl mx-auto pt-7">
        <h2 className="text-3xl font-bold mb-8 text-white border-b border-blue-500 w-max pb-4">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 placeitems-center gap-10">
          {projectJson.map((items) => {
            return <Cards item={items} />
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
