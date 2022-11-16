import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Context } from "../App";

const StoryCard3 = () => {
  const { mediaAnimation, textAnimation } = useContext(Context);

  return (
    <div className="container-fluid flex flex-wrap-reverse justify-center items-center sd:gap-60 gap-4  bg-black p-16">
      <motion.div
        initial={"offScreen"}
        whileInView={"onScreen"}
        viewport={{ once: true, amount: 0.9 }}
        variants={textAnimation}
        className="xl:text-left text-center"
      >
        <h1 className="md:font-bold text-3xl sm:text-5xl">
          Create profiles for kids.
        </h1>
        <p className="sm:text-xl text-base mt-2 ">
          Send kids on adventures with their favorite <br /> characters in a
          space made just for them— <br />
          free with your membership.
        </p>
      </motion.div>
      <motion.div
        initial={"offScreen"}
        whileInView={"onScreen"}
        viewport={{ once: true, amount: 0.9 }}
        variants={mediaAnimation}
        className="story-card2"
      >
        <img src="images/cn.png" alt="cn" />
      </motion.div>
    </div>
  );
};

export default StoryCard3;
