import React from "react";

const StoryCard3 = () => {
  return (
    <div className="container-fluid flex flex-wrap-reverse justify-center items-center sd:gap-60 gap-4  bg-black p-16">
      <div className="xl:text-left text-center">
        <h1 className="md:font-bold text-3xl sm:text-5xl">
          Create profiles for kids.
        </h1>
        <p className="sm:text-xl text-base mt-2 ">
          Send kids on adventures with their favorite <br /> characters in a
          space made just for them— <br />
          free with your membership.
        </p>
      </div>
      <div className="story-card2">
        <img src="images/cn.png" alt="cn" />
      </div>
    </div>
  );
};

export default StoryCard3;
