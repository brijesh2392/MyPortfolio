import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const ProjectsCard = ({ image, ProjectName, link }) => {
  return (
    <div className=" border-2 border-gray-500 hover:border-blue-400 rounded-2xl w-[95%] md:w-full h-auto md:h-[350px]  bg-gradient-to-br from-[#2d0f41] to-[#000000] p-2 mx-2 md:mx-0">
      <div className=" rounded-2xl w-full h-64 border-gray-300">
        <img
          src={image}
          alt="ProjectImg"
          className="w-full h-full rounded-2xl p-1"
        />
      </div>
      <div className=" flex justify-between items-center py-4 text-gray-300 hover:text-blue-400 ">
        <h2 className=" pl-5 text-base font-semibold md:text-base">
          {" "}
          {ProjectName}{" "}
        </h2>
        <a
          href={link}
          target="blank"
          className=" flex  items-center md:gap-3  bg-BtnClr rounded-2xl px-2.5 md:px-4 text-gray-300 hover:text-blue-400 border-2 hover:border-blue-400 border-purple-900 py-1.5 md:py-2 text-xs font-semibold md:text-base"
        >
          {" "}
          Source Code <BsFillArrowRightCircleFill size={25} />{" "}
        </a>
      </div>
    </div>
  );
};

export default ProjectsCard;
