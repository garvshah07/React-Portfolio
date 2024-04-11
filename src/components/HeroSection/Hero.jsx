import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Hero = () => {
  return (
    <section className="mt-24 ">
      {/*
       ** Hero Wrapper
       */}

      <div className="flex items-center justify-evenly text-center gap-4 m-3 flex-col md:flex-row flex-wrap ">
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          className=" flex flex-col justify-center items-start md:items-start sm:items-start text-left gap-3 p-4 md:w-[39%]"
        >
          <h1 className="text-4xl md:text-4xl  font-extrabold sm:text-6xl">
            Hi, I'm Garv Shah
          </h1>
          <span className=" text-2xl  md:text-2xl sm:text-4xl">
            A FrontEnd Engineer
          </span>

          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className="flex justify-center items-center gap-2"
          >
            <a
              href="https://drive.google.com/file/d/1aipVpwupTKHAZur1E1Fz6ZXgoXCmFIf_/view?usp=drive_link"
              target="_blank"
              className="  hover:text-cyan-500 hover:border-cyan-400 border tracking-wider px-4 py-2 rounded-full"
            >
              Resume
            </a>
            <a
              href="https://github.com/garvshah07"
              target="_blank"
              className=" hover:text-cyan-500"
            >
              <GitHubIcon fontSize="large" />
            </a>
            <a
              href="https://www.linkedin.com/in/shahgarv/"
              className=" hover:text-cyan-500"
              target="_blank"
            >
              <LinkedInIcon fontSize="large" />
            </a>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          className="p-4 md:w-[49%] flex justify-center items-center"
        >
          <img className="w-96" src="/images/dev.svg" alt="developer" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
