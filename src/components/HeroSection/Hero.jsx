import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Hero = () => {
  return (
    <section className="mt-24 ">
      {/*
       ** Hero Wrapper
       */}

      <div className="flex items-center justify-evenly text-center gap-4 m-3 flex-col md:flex-row flex-wrap ">
        <div className=" flex flex-col justify-center items-center md:items-start  text-left gap-3 p-4 md:w-[49%]">
          <h1 className="text-4xl md:text-6xl font-extrabold sm:text-6xl">
            Hi, I'm Garv Shah
          </h1>
          <span className="text-2xl md:text-4xl">A FrontEnd Engineer</span>

          <div className="flex justify-center items-center gap-2">
            <a
              href="https://drive.google.com/file/d/1aipVpwupTKHAZur1E1Fz6ZXgoXCmFIf_/view?usp=drive_link"
              target="_blank"
              className="border tracking-wider px-4 py-2 rounded-full"
            >
              Resume
            </a>
            <a href="https://github.com/garvshah07" target="_blank">
              <GitHubIcon fontSize="large" />
            </a>
            <a href="https://www.linkedin.com/in/shahgarv/" target="_blank">
              <LinkedInIcon fontSize="large" />
            </a>
          </div>
        </div>
        <div className="p-4 md:w-[49%] flex justify-center items-center">
          <img className="w-96" src="/images/dev.svg" alt="developer" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
