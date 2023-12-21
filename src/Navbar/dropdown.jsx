import React from "react";
const Dropdown =()=> {
    return(
        <>
         <div className="bg-primary text-Mirage p-5 font-bold absolute right-0 w-60 mt-[40px] shadow-xm">
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

        </>
    )

}
export default Dropdown;