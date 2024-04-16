import React from "react";

const About = () => {
  return (
    <>
      <section className="flex justify-center  mt-10 md:mt-20   ">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="500"
          className="flex  flex-col md:flex-row items-center justify-center gap-5 m-3 w-full"
        >
          <div className="md:w-full">
            <img src="./images/avtar" alt="Avatar" className="w-full md:w-64" />
          </div>

          <div className="flex flex-col">
            <p className="text-sm text-justify md:text-base lg:text-lg xl:text-xl mb-4">
              Greetings! I am Garv Shah, a budding Frontend Developer based in
              the vibrant city of Ahmedabad, Gujarat, India. With a passion for
              crafting immersive digital experiences, I bring a fresh
              perspective and enthusiasm to the world of web development.
              Equipped with a strong foundation in HTML5, CSS3, and JavaScript,I
              am proficient in building dynamic and interactive web
              applications.
            </p>
            <p className="text-sm text-justify md:text-base lg:text-lg xl:text-xl">
              My expertise extends to React.js, allowing me to create elegant
              user interfaces with ease. With a keen eye for detail and a focus
              on user experience, I am adept at crafting responsive and robust
              web designs that seamlessly adapt to various devices and screen
              sizes. While I may be new to the field, I am eager to embark on
              this exciting journey and continually enhance my skills and
              knowledge.
            </p>
          </div>
        </div>
      </section>

      <section className=" flex flex-col items-center mt-10 md:mt-20 ">
        <div className="flex justify-center gap-4 items-center w-full h-16">
          <h1
            data-aos="zoom-in-up"
            data-aos-duration="500"
            className="font-bold text-2xl tracking-wider "
          >
            Education
          </h1>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="500"
          className="flex  flex-col md:flex-row items-center justify-center gap-5 m-3 w-full"
        >
          <div className="flex flex-col ">
            <p className="p-4 text-justify text-sm md:text-base lg:text-lg xl:text-xl mb-4">
              I completed my Bachelor's in Computer Applications from Silver Oak
              University in 2024, actively participating in technical clubs such
              as the Google Developer Students Club as volunter. Within the
              Google Developer Students Club, I immersed myself in advanced
              technology workshops and projects, fostering innovation and
              collaborative learning.These experiences significantly shaped my
              IT career, equipping me with invaluable skills, a passion for
              learning, and a profound understanding of the importance of
              teamwork in achieving excellence in technology and collaborative
              endeavors.
            </p>
          </div>

          <div className=" flex justify-center items-center md:w-full">
            <img
              src="./images/logo.webp"
              alt="Avatar"
              className="p-4 w-64 md:w-64"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
