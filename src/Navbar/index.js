import React from "react";

import SideBar from "./sidebar";
import TopBar from "./topbar";
import Center from "../components/center";
const Homepage = () => {
  return (
    <>
      <div className="flex">
        <SideBar />
        <div>
          <TopBar />

          <Center />
        </div>
      </div>
    </>
  );
};
export default Homepage;
