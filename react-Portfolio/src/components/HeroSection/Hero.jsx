import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Hero = () => {
  return (
    <section className="flex justify-center mt-10 ">
      <div className="flex justify-evenly text-center gap-4  items-center  m-3  flex-wrap w-full ">
        <div className=" flex flex-col justify-center items-start  h-[430px] text-left  gap-3 mt-10  ">
          <h1 className="text-4xl font-extrabold sm:text-6xl">
            Hi, I'm Garv Shah
          </h1>
          <span className="text-2xl sm:text-4xl">A FrontEnd Engineer</span>

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
        <div className="h-[430px] p-4">
          <img className="h-96" src="/images/dev.svg" alt="developer" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
