import React from "react";
import { BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="  py-8 shadowTop ">
      <div className=" mx-16 flex-col justify-center md:flex md:flex-row md:justify-center md:items-center md:gap-10 md:mx-10  ">
        <div className=" flex cursor-pointer items-center text-gray-300 hover:text-blue-400 gap-2">
          <BsWhatsapp size={20} /> +91 8470980202
        </div>
        <div className=" flex cursor-pointer items-center text-gray-300 hover:text-blue-400 my-2 gap-3">
          <BsLinkedin size={20} />
          tinyurl.com/mr2yrmmw
        </div>
        <div className=" flex cursor-pointer items-center text-gray-300 hover:text-blue-400 gap-1">
          <HiOutlineMail size={20} />
          bp2392.dev@gmail.com
        </div>
      </div>
    </div>
  );
};

export default Footer;
