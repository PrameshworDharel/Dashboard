import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import { SlArrowDown } from "react-icons/sl";

import { SlCalender } from "react-icons/sl";
import { IoPersonOutline } from "react-icons/io5";
const SideBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handlesSetClick = () => {
    setIsText(!isText);
  };
  const [isText, setIsText] = useState(false);
  return (
    <>
      <div className="bg-secondary w-[300px]   ">
        <Link to="/">
          <div className="flex sticky top-0 pt-[40px] overflow-auto bg-secondary z-50">
            <FaReact className="h-10 w-10" />
            <h1 className="font-bold text-3xl">TailAdmin</h1>
          </div>
        </Link>

        <div className="mt-20  ">
          <h1 className="font-bold text-Mirage ml-5 ">MENU</h1>
        </div>

        <div className="p-4  ">
          <div>
            <div>
              <button
                className="flex hover:bg-shadow px-2 py-2 rounded-sm  "
                onClick={handleDropdownClick}
              >
                <CgMenuGridO className="w-7 h-5 mt-1" />
                <h1 className="ml-2">DashBoard</h1>

                <SlArrowDown
                  className={`ml-20 mt-1 duration-300  ${isDropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                />
              </button>
              {isDropdownOpen && (
                <div className="mt-2">
                  <button className="ml-10  hover:text-primary">
                    eCommerce
                  </button>

                  <button className="flex mt-5">
                    <h1 className="ml-10 hover:text-primary">Analytics</h1>
                    <button className="bg-Mirage text-primary px-2 ml-20">
                      Pro
                    </button>
                  </button>

                  <button className="flex mt-5">
                    <h1 className="ml-10  hover:text-primary">Marketing</h1>
                    <button className="bg-Mirage text-primary px-2 ml-[70px]">
                      Pro
                    </button>
                  </button>
                  <button className="flex mt-5">
                    <h1 className="ml-10 hover:text-primary">CRM</h1>
                    <button className="bg-Mirage text-primary px-2 ml-[110px]">
                      Pro
                    </button>
                  </button>
                </div>
              )}
            </div>
          </div>
          <Link to="/demo">
            <button className="flex  mt-2 w-56 py-2 px-3 rounded-sm ">
              <SlCalender className="w-4 h-6 " />
              <h1 className="ml-5">Calender</h1>
            </button>
          </Link>
          <Link to="/profile">
            <button className="flex  mt-2  hover:bg-shadow py-2 px-3  w-56 rounded-sm  ">
              <IoPersonOutline className="w-4 h-6 " />
              <h1 className="ml-5">Profile</h1>
            </button>
          </Link>
          <button className="flex hover:bg-shadow px-2 py-2  rounded-sm " onClick={handlesSetClick}>
            <CgMenuGridO className="w-7 h-5 mt-1" />
            <h1 className="ml-2">Task</h1>

            <SlArrowDown
              className={`ml-[125px] mt-1 duration-300  ${isText ? "rotate-180" : "rotate-0"
                }`}
            />
          </button>
          {isText && (
            <div className=" mt-5">
              <button className="flex">
                <h1 className="ml-10 hover:text-primary">List</h1>
                <button className="bg-Mirage text-primary px-2 ml-[120px]">
                  Pro
                </button>
              </button>

              <button className="flex mt-5">
                <h1 className="ml-10  hover:text-primary">Kanban</h1>
                <button className="bg-Mirage text-primary px-2 ml-[90px]">
                  Pro
                </button>
              </button>
            </div>
          )}
          <Link to="/forms">
            <button className="flex hover:bg-shadow px-2 py-2  rounded-sm ">
              <CgMenuGridO className="w-7 h-5 mt-1" />
              <h1 className="ml-2">Forms</h1>

              <SlArrowDown className="ml-28 mt-1" />
            </button>
          </Link>
          <button className="flex  mt-2  hover:bg-shadow py-2 px-3  w-56 rounded-sm  ">
            <IoPersonOutline className="w-4 h-6 " />
            <h1 className="ml-5">Tables</h1>
          </button>
          <button className="flex hover:bg-shadow px-2 py-2  rounded-sm ">
            <CgMenuGridO className="w-7 h-5 mt-1" />
            <h1 className="ml-2">Pages</h1>

            <SlArrowDown className="ml-28 mt-1" />
          </button>

          <h1 className="font-bold text-Mirage mt-5 ml-3">SUPPORT</h1>
          <button className="flex hover:bg-shadow px-2 py-2 mt-5  rounded-sm ">
            <CgMenuGridO className="w-6 h-6" />
            <h1 className="ml-2">Messages</h1>
            <button className="bg-Dark text-primary px-1.5 py-1 ml-10 rounded-sm">
              5
            </button>
            <button className="bg-Dark text-primary px-1.5 py-1 ml-2 rounded-sm">
              Pro
            </button>
          </button>
          <button className="flex hover:bg-shadow px-2 py-2 mt-2 rounded-sm ">
            <CgMenuGridO className="w-6 h-6" />
            <h1 className="ml-2">Inbox</h1>

            <button className="bg-Dark text-primary px-1.5 py-1 ml-24 rounded-sm">
              Pro
            </button>
          </button>
          <button className="flex hover:bg-shadow px-2 py-2 mt-2 rounded-sm ">
            <CgMenuGridO className="w-6 h-6" />
            <h1 className="ml-2">Invoice</h1>

            <button className="bg-Dark text-primary px-1.5 py-1 ml-[85px] rounded-sm">
              Pro
            </button>
          </button>
          <div className="">
            <h1 className="font-bold text-Mirage mt-5 ml-3 ">OTHERS</h1>
          </div>
          <button className="flex mt-5 hover:bg-shadow px-2 py-2  rounded-sm ">
            <CgMenuGridO className="w-7 h-5 mt-1" />
            <h1 className="ml-2">Chart</h1>

            <SlArrowDown className="ml-32 mt-1" />
          </button>
          <button className="flex  hover:bg-shadow px-2 py-2  rounded-sm ">
            <CgMenuGridO className="w-7 h-5 mt-1" />
            <h1 className="ml-1">UIElements</h1>
            <SlArrowDown className=" ml-24 mt-1" />
          </button>
          <button className="flex  hover:bg-shadow px-2 py-2  rounded-sm ">
            <CgMenuGridO className="w-7 h-5 mt-1" />
            <h1 className="ml-2">Authentication</h1>

            <SlArrowDown className="ml-16 mt-1" />
          </button>
        </div>
      </div>
    </>
  );
};
export default SideBar;
