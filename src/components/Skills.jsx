import React from "react";
import {AiFillHtml5, AiFillGithub} from "react-icons/ai"   
import {BiLogoCss3, BiLogoReact, BiLogoRedux} from "react-icons/bi"   
import {SiTailwindcss, SiReactrouter} from "react-icons/si"   
import {RiJavascriptFill} from "react-icons/ri"   



const Skills = () => {
  return (
    <div className=" max-w-[1240px] mx-auto ">
      <div className=" flex flex-col justify-center items-center pt-20 pb-8 md:py-20 ">
        <h1 className=" gradient-text text-4xl font-bold text-textClr pb-2">Skills</h1>
        <p className=" text-[#8B94A3] font-semibold">My Expertise</p>
      </div>

      <div className=" md:flex justify-around items-center md:mx-8 mx-4 ">

        <div className=" my-5 md:my-0 grid grid-cols-2 gap-5 border-2 rounded-2xl md:w-[35%] h-80 border-gray-500 ">
                        <div className=" border-1 border-gray-400 flex flex-col items-center justify-center gap-2 rounded-xl md:text-lg text-base" > <AiFillHtml5 size={50} /> HTML <p className="text-gray-400 text-base">Advance</p></div>
                        <div className=" border-1 border-gray-400 flex flex-col items-center justify-center gap-2 rounded-xl md:text-lg text-base" > <BiLogoCss3 size={50}  /> CSS <p className="text-gray-400 text-base">Advance</p></div>
                        <div className=" border-1 border-gray-400 flex flex-col items-center justify-center gap-2 rounded-xl md:text-lg text-base" > <SiTailwindcss size={50}  /> Tailwind <p className="text-gray-400 text-base">Advance</p></div>
                        <div className=" border-1 border-gray-400 flex flex-col items-center justify-center gap-2 rounded-xl md:text-lg text-base" > <AiFillGithub size={50}  /> Git & Github <p className="text-gray-400 text-base">Advance</p></div>
        </div>

        <div className=" grid grid-cols-2 gap-5 border-2 rounded-2xl md:w-[35%] h-80 border-gray-500 ">
            
                        <div className=" border-1 border-gray-400 flex flex-col items-center justify-center gap-2 rounded-xl md:text-lg text-base " > <RiJavascriptFill size={50} /> JavaScript <p className="text-gray-400 text-base">Intermediate</p></div>
                        <div className=" border-1 border-gray-400 flex flex-col items-center justify-center gap-2 rounded-xl md:text-lg text-base " > <BiLogoReact size={50} /> ReactJS <p className="text-gray-400 text-base">advance</p></div>
                        <div className=" border-1 border-gray-400 flex flex-col items-center justify-center gap-2 rounded-xl md:text-lg text-base " > <BiLogoRedux size={50} /> Redux <p className="text-gray-400 text-base">advance</p></div>
                        <div className=" border-1 border-gray-400 flex flex-col items-center justify-center gap-2 rounded-xl md:text-lg text-base " > <SiReactrouter size={50} /> React-Router <p className="text-gray-400 text-base">advance</p></div>
                        

        </div>
      </div>
    </div>
  );
};

export default Skills;
