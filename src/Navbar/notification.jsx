import React, { useState } from "react";
import moment from "moment/moment";

const CardArray = [
  {
    title: "Golden Night with Laure & Dong",
    date: "August 28, 2023",
  },
  {
    title: "The Weeknd Experience: Live with The Weeknd",
    date: "August 28, 2023",
  },
  {
    title: "Antman and the wasp Quantumania",
    date: "August 28, 2023",
  },
  {
    title: "Antman and the wasp Quantumania",
    date: "August 28, 2023",
  },
  {
    title: "Antman and the wasp Quantumania",
    date: "August 28, 2023",
  },
];
const Notification = () => {
  const [event, setEvent] = useState(null);
  return (
    <>
      <div className="bg-primary text-Mirage  absolute  w-72 h-96  right-0 mt-[30px] shadow-xm object-cover overflow-scroll ">
        <div className="p-5 sticky top-0 bg-primary">
          <h1 className="font-bold">Notification</h1>
          <hr className=" w-[100%] mt-5"></hr>
        </div>

        {CardArray.map((event) => (
          <div className="hover:bg-tertiary shadow-sm ">
            <button className="mt-5 ml-5 mr-5">
              <h1 className="font-bold">{event.title}</h1>

              <h2 className="">{event.date}</h2>
              {moment().startOf("hour").fromNow()}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
export default Notification;
