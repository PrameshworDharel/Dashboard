import React, { useState } from "react";
const CardCenter = [
  {
    title: "$3.456K",
    percentage: "0.43%",

    Total: "Total views",
  },
  {
    title: "$3.456K",
    percentage: "0.43%",

    Total: "Total Profit",
  },
  {
    title: "$3.456K",
    percentage: "0.43%",

    Total: "Total Product",
  },
  {
    title: "$3.456K",
    percentage: "0.43%",

    Total: "Total Users",
  },
];
const Center = () => {
  const [center, setCenter] = useState(null);
  return (
    <>
      <div className="bg-primary   text-Dark">
        <div className="p-10 flex  justify-between">
          {CardCenter.map((center) => (
            <div className="p-5 shadow-xl   ">
              <h1>{center.title}</h1>
              <div className="flex gap-10 mt-10">
                <h1>{center.Total}</h1>
                <h1 className="font-bold">{center.percentage}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Center;
