import React from "react";
import Cover from "../../assets/images/cover-01-e8bbef04.png";
import Men from "../../assets/images/user-06-00406fb8.png";
import { IoCameraOutline } from "react-icons/io5";
const Profile1 = () => {
  return (
    <>
      <div className="bg-shadow text-Dark w-[1200px] p-10">
        <div className=" flex justify-between ">
          <h1 className="font-bold text-2xl ">Profile</h1>
          <div className="flex">
            <buttom>Dashboard /</buttom>
            <h1 className="text-secondary ml-2 "> Profile</h1>
          </div>
        </div>
        <div className="mt-5">
          <img src={Cover} alt="cover"></img>
        </div>
        <div className="flex justify-end -translate-y-16 mr-10">
          <button className="flex bg-tertiary px-4 py-1 rounded-sm  ">
            <IoCameraOutline className="mt-1" />
            <h6 className="ml-2">Edit</h6>
          </button>
        </div>
        <div className="flex justify-center -translate-y-32">
          <img src={Men} className="h-[200px] w-[200px]"></img>
        </div>
        <div className="flex justify-center -translate-y-44 ml-32 ">
          <button className=" bg-tertiary px-3 py-3 rounded-full ">
            <IoCameraOutline />
          </button>
        </div>
      </div>
    </>
  );
};
export default Profile1;
