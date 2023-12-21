import React from "react";
import { FaReact } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import { SlArrowDown } from "react-icons/sl";
// import { SlArrowUp } from "react-icons/sl";
import { SlCalender } from "react-icons/sl";
import { IoPersonOutline } from "react-icons/io5";
const SideBar = () => {
  return (
    <>
      <div className="bg-secondary w-[300px] p-5    top-0 left-0 ">
        <div className="flex ">
          <FaReact className="h-10 w-10" />
          <h1 className="font-bold text-3xl">TailAdmin</h1>
        </div>
        <div className="mt-20 ">
          <h1 className="font-bold text-Mirage">MENU</h1>
        </div>
        <div className="p-4  ">
          <button className="flex hover:bg-shadow px-2 py-2  rounded-sm ">
            <CgMenuGridO className="w-7 h-5 mt-1" />
            <h1 className="ml-2">DashBoard</h1>

            <SlArrowDown className="ml-20 mt-1" />
          </button>
          <button className="flex  mt-2 bg-shadow w-56 py-2 px-3 rounded-sm ">
            <SlCalender className="w-4 h-6 " />
            <h1 className="ml-5">Calender</h1>
          </button>
          <button className="flex  mt-2  hover:bg-shadow py-2 px-3  w-56 rounded-sm  ">
            <IoPersonOutline className="w-4 h-6 " />
            <h1 className="ml-5">Profile</h1>
          </button>
          <button className="flex hover:bg-shadow px-2 py-2  rounded-sm ">
            <CgMenuGridO className="w-7 h-5 mt-1" />
            <h1 className="ml-2">Task</h1>

            <SlArrowDown className="ml-32 mt-1" />
          </button>
          <button className="flex hover:bg-shadow px-2 py-2  rounded-sm ">
            <CgMenuGridO className="w-7 h-5 mt-1" />
            <h1 className="ml-2">Forms</h1>

            <SlArrowDown className="ml-28 mt-1" />
          </button>
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
