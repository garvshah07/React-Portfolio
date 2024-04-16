import React from "react";
import { Link } from "react-router-dom";

const Project = () => {
  const projectList = [
    {
      name: "Country App",
      url: "https://garvshah07.github.io/Country-App/",
      image: "./images/country app.png",
      des: "You can search any country by searching thair name on the search box.",
    },
    {
      name: "Note App",
      url: "https://uinote.netlify.app/",
      image: "./images/Note App.png",
      des: "We build a note app with basic functionality.",
    },
    {
      name: "Calculator App",
      url: "https://uinote.netlify.app/",
      image: "./images/Calculator App.png",
      des: "Simple and fully functional amazing calculator app.",
    },
  ];

  const techStack = ["HTML", "CSS", "JavaScript", "REACT"];

  return (
    <section className="flex justify-center w-full">
      <div className="flex items-center justify-evenly text-center gap-4 m-3 flex-col md:flex-row flex-wrap ">
        {projectList.map((project, index) => {
          return (
            <div
              data-aos="zoom-in-up"
              data-aos-duration="500"
              key={index}
              className="flex  justify-center flex-col items-center max-w-sm rounded-lg text-center overflow-hidden shadow-lg bg-black "
            >
              <img
                src={project.image}
                alt="Image"
                className=" w-full bg-cover h-[200px] "
              />
              <div className="px-6 py-4">
                <Link to={project.url} target="_blank">
                  <div className="font-bold text-xl mb-2">{project.name}</div>
                </Link>
                <p className="text-white text-base">{project.des}</p>
              </div>
              <div className="px-6 py-4">
                {techStack.map((stack, index) => {
                  return (
                    <span
                      key={index}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 "
                    >
                      {stack}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
