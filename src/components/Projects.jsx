import React from "react";
import TrioMio from "../assets/TrioMio.png";
import InPlace from "../assets/InPlace.png";
import Cards from "./Cards";

const Projects = () => {
  const projectJson = [
    {
      title: "TrioMio",
      desc: "Project for some friends from Bremen, which is not yet finished due to a regrouping of the artists.",
      image: TrioMio,
      live: "https://t-soldwedel.github.io/bogus-website/",
      github: "https://github.com/T-Soldwedel/bogus-website",
    },
    {
      title: "InPlace",
      desc: "Final Group Project of the 12-month Web Development course at Digital Career Institute Berlin.",
      image: InPlace,
      live: "https://in-place.vercel.app/",
      github: "https://github.com/T-Soldwedel/in_place",
    },
    // {
    //   title: "VisionBoard",
    //   desc: "Coming soon",
    //   image: VisionBoard,
    //   live: "",
    //   github: "",
    // }
  ];

  return (
    <div id="projects" className="relative flex bg-gray-700 py-10 px-4">
      <div className="mb-16 max-w-7xl mx-auto pt-7">
        <h2 className="text-3xl font-bold mb-8 text-white border-b border-blue-500 w-max pb-4">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 placeitems-center gap-10 lg:gap-80">
          {projectJson.map((items) => {
            return <Cards item={items} />
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
