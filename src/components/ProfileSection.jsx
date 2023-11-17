import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineArrowDown,
} from "react-icons/ai";
import { BsFillArrowUpRightCircleFill, BsMouse } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import BWProfile from "../assets/BWProfile.png";

const ProfileSection = () => {
  return (
    <div className="mx-4 mt-12 mb-8 md:mx-12 md:mt-48 md:mb-10">
      <div className="flex flex-col-reverse items-center py-8 gap-4 md:flex-row md:justify-around md:mx-16 ">
        {/* Social Media */}
        <div className="flex justify-center md:flex-col md:gap-8 md:py-32 cursor-pointer">
          <AiOutlineInstagram size={30} color="IconClr" />
          <AiOutlineGithub size={30} color="IconClr" />
          <BiLogoLinkedin size={30} color="IconClr"/>
        </div>

        {/* About Profile */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-6xl font-bold text-gray-300 md:py-8">
            Brijesh Pandey
          </h1>
          <div className="font-bold text-blue-400 text-ms md:text-base">
            Front Engineer
          </div>
          <div className="py-5 text-blue-200 font-semibold text-sm md:text-base md:max-w-md ">
            I am a Frontend designer based in Delhi, passionate and dedicated to
            my work.
          </div>
          <div className="py-4 flex justify-center md:flex md:justify-start md:py-8">
            <button className="flex gap-2 p-3 md:p-5 border-2 border-purple-900 hover:border-blue-400 text-gray-300 hover:text-blue-400  rounded-lg md:rounded-2xl px-8 md:px-10 font-semibold ">
              Say Hello <BsFillArrowUpRightCircleFill size={15} />
            </button>
          </div>
          <div className=" my-4 md:my-8 flex items-center justify-center md:justify-start">
            <span className="pr-2">
              <BsMouse size={20} />
            </span>
            Scroll Down
            <span className="flex pl-1">
              <AiOutlineArrowDown size={15} />
            </span>
          </div>
        </div>

        {/* Profile pic */}
        <div className="text-center py-6 md:py-8">
          <img
            
            src={BWProfile}
            alt="Profile pic"
            className="rounded-full border-4 border-gray-300 md:border-8 md:border-gray-300   w-[200px] md:w-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
