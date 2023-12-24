import React from "react";
import SideBar from "../../Navbar/sidebar";
import TopBar from "../../Navbar/topbar";
import Profile1 from "./profile";

const Profilepage = () => {
  return (
    <>
      <div className="flex">
        <SideBar />
        <div>
          <TopBar />
          <Profile1 />
        </div>
      </div>
    </>
  );
};
export default Profilepage;
