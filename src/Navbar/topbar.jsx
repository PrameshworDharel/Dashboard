import React, { useState } from "react";

import { CiSearch } from "react-icons/ci";
import { LiaToggleOnSolid } from "react-icons/lia";
import { IoNotificationsCircle } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { IoPersonCircleSharp } from "react-icons/io5";
import { SlArrowDown } from "react-icons/sl";
import Dropdown from "./dropdown";
import Notification from "./notification";
import Mmessage from "./message";

const TopBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const [isNotification, setIsNotification] = useState(false);

  const handleClick = () => {
    setIsNotification(!isNotification);
  };
  const [message, setMessage] = useState(false);

  const handleMessageClick = () => {
    setMessage(!message);
  };

  return (
    <>
      <div className="bg-Clay h-28 w-[1200px] text-primary sticky top-0  ">
        <div className="flex p-4 justify-between">
          <div className="flex">
            <CiSearch className="mt-7 w-10 h-7 " />

            <input
              className=" text-xl  "
              placeholder="Type to search...."
              class="bg-Clay border-Clay py-2 px-3 "
            ></input>
          </div>

          <div className="flex gap-10">
            <button>
              <LiaToggleOnSolid className="w-10 h-10 bg-Clay" />
            </button>
            <div className="relative mt-5">
              <button>
                <IoNotificationsCircle
                  className="w-10 h-10"
                  onClick={handleClick}
                />
              </button>
              {isNotification && <Notification />}
            </div>
            <div className="relative mt-5">
              <button>
                <AiOutlineMessage
                  className="w-10 h-10"
                  onClick={handleMessageClick}
                />
              </button>
              {message && <Mmessage />}
            </div>

            <div className="mt-5">
              <button>
                <h1 className="font-bold">Prameshwor</h1>
                <small className="text-Mirage font-bold">UX Designer</small>
              </button>
            </div>
            <button>
              <IoPersonCircleSharp className="w-16 h-16" />
            </button>
            <div className="relative mt-7">
              <button>
                <SlArrowDown
                  className="w-5 h-5 "
                  onClick={handleDropdownClick}
                />
              </button>
              {isDropdownOpen && <Dropdown />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TopBar;
