import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Hero = () => {
  return (
    <section className="flex justify-center mt-[10px] ">
      <div className="flex justify-evenly text-center gap-4 h-screen items-center  m-3  flex-wrap w-full ">
        <div className=" flex flex-col justify-center  h-[430px] w-[500px] items-center  mt-[10px] float-left ">
          <span className="text-6xl">Hi, I'm Garv Shah</span>
          <span className="text-4xl">A FrontEnd Engineer</span>
          <br />
          <div className="flex justify-center items-center gap-2">
            <a
              href="https://drive.google.com/file/d/1aipVpwupTKHAZur1E1Fz6ZXgoXCmFIf_/view?usp=drive_link"
              target="_blank"
              className="border tracking-wider  pl-[4px] pr-[4px] p-[4px]  rounded "
            >
              Resume
            </a>
            <a href="https://github.com/garvshah07" target="_blank">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/shahgarv/" target="_blank">
              <LinkedInIcon />
            </a>
          </div>
        </div>
        <div className="float-right h-[430px] p-4">
          <img className="h-96" src="/images/dev.svg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
