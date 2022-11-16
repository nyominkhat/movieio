import React from "react";
import InputItem from "./InputItem";

const HeroSection = () => {
  return (
    <div
      style={{ height: "60vh" }}
      className="container-fluid md:mx-auto mb-10"
    >
      {/* <img className="bg-img" src="../src/images/venon-.png" alt="" /> */}

      <div className="md:mt-60 mt-40  text-white md:text-left text-center md:ml-20 ml-0">
        <h1 className="sm:text-6xl  text-4xl">
          <span className="font-bold sm:text-7xl text-5xl">U</span>ltimited
          movies, TV,
          <br /> shows and More.
        </h1>
        <p className="mt-2 sm:text-lg text-sm">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>

      <div className="flex flex-wrap md:gap-0 gap-2 justify-center items-center mt-4 md:ml-20 ml-0  md:justify-start">
        <div className="relative">
          <InputItem
            id="email"
            placeholder="Email or phone number"
            type="text"
          />
        </div>
        <div>
          <button className="bg-error md:w-48 w-36 flex justify-center h-16 items-center font-semibold outline-none border-none text-white hover:bg-warning transition-all duration-300 ease-in">
            Get Started &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
