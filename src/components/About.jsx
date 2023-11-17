import React from "react";
import BWProfile from "../assets/BWProfile.png";
import { PiMedal, PiSuitcase } from "react-icons/pi";
import { BiSupport } from "react-icons/bi";
import { HiOutlineDocumentText } from "react-icons/hi";

const PDF_FILE_URL = "http://localhost:5173/Brijesh-Resume.pdf";

const About = () => {
  const downloadFileAtUrl = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div className=" max-w-[1240px] mx-auto">
      <div className=" flex flex-col justify-center items-center py-12 md:py-24 ">
        <h1 className=" gradient-text text-4xl font-bold text-textClr pb-2">
          About Me
        </h1>
        <p className=" text-[#8B94A3] font-semibold">My Introduction</p>
      </div>

      <div className=" md:flex md:justify-around">
        {/* Profile pic */}
        <div className="  md:py-16 flex justify-center ">
          <img
            src={BWProfile}
            alt="profile-pic"
            width={300}
            className=" rounded-2xl "
          />
        </div>

        {/* about profile */}
        <div>
          <div className=" flex justify-center gap-2 py-12">
            <div className="text-center text-xs font-semibold md:font-normal md:text-base border-2 border-gray-400 p-3 w-25 md:w-40 rounded-xl">
              {" "}
              <span className=" flex justify-center">
                <PiMedal size={20} />
              </span>{" "}
              Experience{" "}
              <p className=" md:text-sm text-textClr text-center"> Fresher</p>{" "}
            </div>
            <div className="text-center text-xs font-semibold md:font-normal md:text-base border-2 border-gray-400 p-3 w-25 md:w-40 rounded-xl">
              {" "}
              <span className=" flex justify-center">
                <PiSuitcase size={20} />
              </span>{" "}
              Completed{" "}
              <p className=" md:text-sm text-textClr text-center">5 projects</p>{" "}
            </div>
            <div className="text-center text-xs font-semibold md:font-normal md:text-base border-2 border-gray-400 p-3 w-25 md:w-40 rounded-xl">
              {" "}
              <span className=" flex justify-center">
                <BiSupport size={15} />
              </span>{" "}
              Frontend{" "}
              <p className=" md:text-sm text-textClr text-center">Developer</p>{" "}
            </div>
          </div>
          <p className=" text-center sm:px-20 md:text-start md:flex md:justify-center md:max-w-[630px] max-w-[450px] ">
            Frontend developer, i create Webpages with UI/UX user interface, i
            have years of Experience with many happy client with projects
          </p>
          <div className=" flex justify-center py-12">
            <button
              onClick={() => {
                downloadFileAtUrl(PDF_FILE_URL);
              }}
              className="  flex items-center gap-2 p-5 rounded-2xl px-10 border-2 border-purple-900 hover:border-blue-400 text-gray-300 hover:text-blue-400 font-semibold"
            >
              Download CV <HiOutlineDocumentText />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
