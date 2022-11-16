import React from "react";

const BackgroundSlider = ({ bgimgs, query, index }) => {
  return (
    <img
      className={`${index === query ? "imageActive" : "image"} `}
      src={`images/bg-images/${bgimgs[query]}`}
      alt="bgimg"
    />
    // sliderImg
  );
};

export default BackgroundSlider;
