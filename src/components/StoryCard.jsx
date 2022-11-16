import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Context } from "../App";

const StoryCard = () => {
  const { mediaAnimation, textAnimation } = useContext(Context);

  return (
    <div className="container-fluid flex flex-wrap justify-center md:gap-40 gap-4 items-center bg-black sm:p-12 p-4">
      <motion.div
        initial={"offScreen"}
        whileInView={"onScreen"}
        viewport={{ once: true, amount: 0.9 }}
        variants={textAnimation}
        className="xl:text-left text-center"
      >
        <h1 className="md:font-bold text-3xl sm:text-5xl">Enjoy on your TV.</h1>
        <p className="sm:text-xl text-base mt-2 ">
          Watch on smart TVs, PlayStation, Xbox,
          <br />
          Chromecast, Apple TV, Blu-ray players and <br />
          more.
        </p>
      </motion.div>

      <motion.div
        initial={"offScreen"}
        whileInView={"onScreen"}
        viewport={{ once: true, amount: 0.9 }}
        variants={mediaAnimation}
        className="story-card  relative mb-8"
      >
        <img className="story-card-img" src="images/tv.png" />

        <video loop autoPlay muted className="story-card-video">
          <source src="videos/story-card.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </div>
  );
};

export default StoryCard;
