import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Home from "./Home";
import { HiMenu } from "react-icons/hi/";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import "../App.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(true);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className={` w-full fixed top-0 left-0  z-30 bg-gradient-to-r from-[#2d0f41] to-[#160f1c] `}
    >
      <div
        className={` max-w-[1240px] mx-auto flex items-center justify-between p-5 font-bold text-textClr text-lg `}
      >
        <Link to="/">
          <div className=" gradient-textLogo text-4xl font-bold p-1 ">Brijesh</div>
        </Link>

        <div
          className={` ${
            menuOpen ? "block" : "hidden md:block"
          } md:static absolute min-h-fit right-3 top-[0] md:w-auto w-[95%] rounded-2xl bg-gradient-to-br from-[#241a29] to-[#0d0515] md:bg-none flex justify-center items-center px-5`}
        >
          <ul className="flex flex-col md:flex-row  md:gap-[4vw] gap-12 md:items-center justify-between ">
            <li>
              {/* Home */}
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  ` font-bold ${isActive ? "gradient-textNav" : "text-textClr"}`
                }
              >
                Home
              </NavLink>
            </li>
            {/* About */}
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  ` font-bold ${isActive ? "gradient-textNav" : "text-textClr"}`
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  ` font-bold ${isActive ? "gradient-textNav" : "text-textClr"}`
                }
              >
                Skills
              </NavLink>
            </li>

            {/* Project */}
            <li>
              <NavLink
                to="/project"
                className={({ isActive }) =>
                  ` font-bold ${isActive ? "gradient-textNav" : "text-textClr"}`
                }
              >
                Projects
              </NavLink>
            </li>
            {/* Contact */}
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  ` font-bold ${isActive ? "gradient-textNav" : "text-textClr"}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="z-50 md:hidden">
          {menuOpen ? (
            <ImCross size={20} onClick={toggleMenu} />
          ) : (
            <HiMenu size={30} onClick={toggleMenu} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
