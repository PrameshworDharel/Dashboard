
import React, { useState } from "react";
import { TfiWorld } from "react-icons/tfi";
import { SlArrowDown } from "react-icons/sl";
const Forms = () => {
    const [selectedCountry, setSelectedCountry] = useState("UK");
    const [isOpen, setIsOpen] = useState(false);

    const countries = ["UK", "USA", "Canada"];
    const handleSelect = (country) => {
        setSelectedCountry(country);
        setIsOpen(false);
    };
    
    return (
        <>
            <div className="bg-Dark p-10">
                <div className=" bg-primary shadow-md text-Clay  p-5 ">
                    <h1 className="text-xl">Select Input</h1>
                    <hr className="mt-5"></hr>
                    <h1 className="mt-5"> Select Country</h1>
                    <div className="mt-5  ">
                        <button className=" border p-5 w-96  " onClick={() => setIsOpen(!isOpen)}>
                            <div className="flex gap-60">
                                <div className="flex gap-5">
                                    <TfiWorld className="mt-1" />
                                    {selectedCountry && (
                                        <p className="font-bold ">{selectedCountry}</p>
                                    )}
                                </div>

                                <div>
                                    <SlArrowDown className="mt-2" />
                                </div>


                            </div>

                        </button>
                        {isOpen && (
                            <div className="bg-primary text-Mirage absolute w-[385px]  p-5 shadow-md  ">
                                {countries.map((country) => (
                                    <div
                                        key={country}
                                        className="cursor-pointer p-2 hover:bg-shadow"
                                        onClick={() => handleSelect(country)}
                                    >
                                        {country}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>
            </div>


        </>
    )
}
export default Forms;