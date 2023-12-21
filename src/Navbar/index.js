import React from "react";

import SideBar from "./sidebar";
import TopBar from "./topbar";
const Homepage = () => {
  return (
    <>
      <div className="flex">
        <SideBar />
        <TopBar />
      </div>
    </>
  );
};
export default Homepage;
