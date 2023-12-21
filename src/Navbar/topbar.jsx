import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { LiaToggleOnSolid } from "react-icons/lia";
import { IoNotificationsCircle } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { IoPersonCircleSharp } from "react-icons/io5";
import { SlArrowDown } from "react-icons/sl";
const TopBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <div className="bg-Clay p-5 ml-[275px] text-primary flex justify-between -translate-y-[750px] ">
        <div className=" flex">
          <CiSearch className="mt-7 w-10 h-7 " />

          <input
            className=" text-xl"
            placeholder="Type to search...."
            class="bg-Clay border-Clay py-2 px-3 "
          ></input>
        </div>

        <div className="flex gap-10">
          <button>
            <LiaToggleOnSolid className="w-10 h-10 bg-Clay" />
          </button>
          <button>
            <IoNotificationsCircle className="w-10 h-10" />
          </button>
          <button>
            <AiOutlineMessage className="w-10 h-10" />
          </button>
          <div className="mt-5">
            <button>
              <h1 className="font-bold">Prameshwor</h1>
              <small className="text-Mirage font-bold">UX Designer</small>
            </button>
          </div>
          <button>
            <IoPersonCircleSharp className="w-20 h-20" />
          </button>
          <div className="relative mt-7">
            <button>
              <SlArrowDown className="w-5 h-5 " onClick={handleDropdownClick} />
            </button>
            {isDropdownOpen && (
              <div className="bg-primary text-Mirage p-10 font-bold absolute right-0 w-60 mt-[54px] shadow-xm ">
                <button className="hover:text-WildBlue mt-5 ">
                  My Profile
                </button>
                <br></br>
                <button className="hover:text-WildBlue mt-5">
                  My Contects
                </button>
                <br></br>
                <button className="hover:text-WildBlue mt-5">
                  Account Setting
                </button>
                <br></br>
                <hr className="hover:text-WildBlue mt-5"></hr>
                <button className="hover:text-WildBlue mt-5">Log out</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default TopBar;
