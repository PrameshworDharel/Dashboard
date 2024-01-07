import React from "react";
import SideBar from "../../Navbar/sidebar";
import TopBar from "../../Navbar/topbar";
import Forms from "./forms";

const FormsPage = () => {
  return (
    <>
      <div className="flex">
        <SideBar />
        <div>
          <TopBar />
          <Forms />
        </div>
      </div>
    </>
  );
};
export default FormsPage;
