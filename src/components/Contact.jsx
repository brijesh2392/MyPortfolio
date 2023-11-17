import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import {
  BsFillArrowRightCircleFill,
  BsWhatsapp,
  BsLinkedin,
} from "react-icons/bs";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");

  const onSubmit = () => {
    window.location.href = `mailto:2392brijesh@gmail.com?subject=Project Inquiry !! &body=Name: ${name}%0AEmail: ${email}%0AProject: ${project}`;
    setName(""), setEmail(""), setProject("");
  };

  return (
    <div className="max-w-[1240px] mx-auto">
      <div className=" text-center pt-24">
        <h1 className=" gradient-text text-4xl font-bold text-textClr pb-2 ">
          {" "}
          Contact Me{" "}
        </h1>
        <p className=" text-[#8B94A3] font-semibold"> Get in touch </p>
      </div>

      <div className="  md:flex md:justify-around md:gap-10">
        {/* ===============Talk to me============ */}
        <div className=" flex flex-col items-center w-full">
          <p className=" text-center py-5 text-textClr text-xl font-semibold">
            Talk to me
          </p>

          <div className=" flex flex-col gap-6 w-3/4  ">
            <a
              href={`mailTo:2392brijesh@gmail.com`}
              className=" border-2 text-blue-200 hover:text-blue-400 border-gray-500 hover:border-blue-400 py-3 px-16 rounded-xl flex flex-col items-center"
            >
              <HiOutlineMail size={25} />
              <p className=" text-xl">Email</p>
              <p>2392brijesh@gmail.com</p>
              <span className=" flex items-center gap-2  ">
                {" "}
                Write me <BsFillArrowRightCircleFill />{" "}
              </span>
            </a>
            <a
              href="https://wa.me/918470980202"
              target="_blank"
              className=" border-2 text-blue-200 hover:text-blue-400 border-gray-500 hover:border-blue-400 py-3 px-16 rounded-xl flex flex-col items-center"
            >
              <BsWhatsapp size={25} />
              <p className=" text-xl">Whatsapp</p>
              <p>+91 8470980202</p>
              <span className=" flex items-center gap-2 ">
                {" "}
                Write me <BsFillArrowRightCircleFill />{" "}
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/brijesh-pandey-a79430b6"
              target="_blank"
              className=" border-2 text-blue-200 hover:text-blue-400 border-gray-500 hover:border-blue-400 py-3 px-16 rounded-xl flex flex-col items-center"
            >
              <BsLinkedin size={25} />
              <p className=" text-xl">LinkedIn</p>
              <p>tinyurl.com/mr2yrmmw</p>
              <span className=" flex items-center gap-2 ">
                {" "}
                Write me <BsFillArrowRightCircleFill />{" "}
              </span>
            </a>
          </div>
        </div>
        {/* ===============Write me your Project============ */}

        <div className=" w-full">
          <p className="text-center md:mr-40 py-5 text-textClr text-xl font-semibold">
            Write me your project
          </p>
          <div>
            <form className=" flex flex-col gap-10 sm:px-12 ">
              <span>
                <input
                  type="text"
                  placeholder="Insert your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className=" placeholder-blue-200 text-blue-200 border-2 border-gray-500 hover:border-blue-400 rounded-xl p-4 px-4 md:w-10/12 w-[80%] bg-gradient-to-br from-[#321146] to-[#2a1e36] mx-12 md:mx-0"
                />
                {/* <label className=" relative -top-7 sm:right-[470px] md:right-[430px] bg-[#1f1727] px-1">
                  {""}
                  Name
                </label> */}
              </span>

              <span>
                <input
                  type="email"
                  placeholder="Insert your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className=" placeholder-blue-200 border-2 border-gray-500 hover:border-blue-400 rounded-xl p-4 px-4 md:w-10/12 w-[80%] bg-gradient-to-br from-[#321146] to-[#2a1e36] mx-12 md:mx-0 "
                />
                {/* <label className=" relative -top-7 sm:right-[470px] md:right-[430px] bg-[#E9ECEF] px-1">
                  {""}
                  Mail
                </label> */}
              </span>

              <span>
                <input
                  type="text"
                  placeholder=" Write your project"
                  autoComplete="off"
                  value={project}
                  onChange={(e) => {
                    setProject(e.target.value);
                  }}
                  className=" placeholder-blue-200 border-2 border-gray-500 hover:border-blue-400 rounded-xl pt-4 pb-20 px-4 md:w-10/12 w-[80%]  bg-gradient-to-br from-[#321146] to-[#2a1e36] mx-12 md:mx-0"
                />
                {/* <label className=" relative -top-[135px] sm:right-[470px] md:left-6 bg-[rgb(233,236,239)] px-1">
                  {" "}
                  Project
                </label> */}
              </span>

              <button
                onClick={onSubmit}
                className=" text-blue-400 text-xl border-2 border-gray-500 hover:border-blue-400 p-4 rounded-xl md:w-10/12 w-[80%] mx-11 md:mx-0   position bg-gradient-to-br from-[#321146] to-[#2a1e36]  text-1.5xl font-semibold"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
