import React, { useState } from "react";

const ArrayCard = [
  {
    name: " Prameshwor",
    title: "Golden Night with Laure & Dong",
    date: "August 28, 2023",
  },
  {
    name: " Prameshwor",
    title: "Golden Night with Laure & Dong",
    date: "August 28, 2023",
  },
  {
    name: " Prameshwor",
    title: "Golden Night with Laure & Dong",
    date: "August 28, 2023",
  },
  {
    name: " Prameshwor",
    title: "Golden Night with Laure & Dong",
    date: "August 28, 2023",
  },
];
const Mmessage = () => {
  const [message, setMessage] = useState(null);
  return (
    <>
      <div className="bg-primary text-Mirage  absolute  w-72 h-96  right-0 mt-[30px] shadow-xm object-cover overflow-scroll ">
        <div className="p-5 sticky top-0 bg-primary">
          <h1 className="font-bold mt-5">Message</h1>

          <hr className=" w-[100%] mt-5"></hr>
        </div>
        {ArrayCard.map((message) => (
          <div className="hover:bg-tertiary shadow-sm ">
            <button className="mt-2 ml-5 mr-5">
              <h1 className="font-bold">{message.name}</h1>
              <h1 className="font-bold">{message.title}</h1>

              <h2 className="">{message.date}</h2>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
export default Mmessage;
