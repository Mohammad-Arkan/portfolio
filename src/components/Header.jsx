import React from "react";
import img from "../assets/profile.jpg";
import {Typewriter} from "react-simple-typewriter";
import {GiCometSpark} from "react-icons/gi";
import resume from "../assets/Zihadul Islam_Full Stack Developer.pdf";
import cv from "../assets/CV_of_Zihadul Islam.pdf";

const Header = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-anchor-placement="center-bottom"
      id="root"
      className="flex w-11/12 mx-auto lg:justify-around flex-col-reverse lg:flex-row   gap-10 my-10 ">
      <div className="flex lg:w-[50%] flex-col justify-center gap-3 lg:gap-5">
        <h2 className="text-2xl md:text-4xl font-semibold">
          I'm Zihadul Islam{" "}
          <span className="inline-flex">
            <GiCometSpark />
          </span>
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold">
          <Typewriter
            words={["Full Stack", "Frontend", "Backend"]}
            loop={false}
            cursor
            cursorStyle=">"
            typeSpeed={120}
            deleteSpeed={100}
            delaySpeed={2000}
          />
          <span>Developer</span>
        </h3>
        <p className="text-xl font-semibold">
          Specialist In MongoDB, Expressjs, Reactjs, Nodejs.{" "}
        </p>
        <div className="space-x-3">
          <a href={resume} download={resume} className="btn btn-sm btn-neutral">
            Download Resume
          </a>
          <a href={cv} download={cv} className="btn btn-sm btn-outline">
            Download CV
          </a>
        </div>
      </div>
      <div className="flex justify-center mt-5 lg:mt-0">
        <img
          width={300}
          className="rounded-full shadow-lg"
          src={img}
          alt="zihadul islam"
        />
      </div>
    </div>
  );
};

export default Header;
