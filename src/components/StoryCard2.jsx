import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Context } from "../App";

const StoryCard2 = () => {
  const { mediaAnimation, textAnimation } = useContext(Context);

  return (
    <div className="container-fluid  flex flex-wrap justify-center sd:gap-60 gap-4 items-center bg-black p-10 sm:pb-16 pb-4">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={"onScreen"}
        viewport={{ once: true, amount: 0.9 }}
        variants={mediaAnimation}
        className="story-card2"
      >
        <img src="images/enola.jpg" alt="enola" />

        <div className="box-item w-3/5 p-2 sm:h-28 h-16 drop-shadow-md flex justify-between rounded-xl items-center bg-black ">
          <div className="flex z-40 gap-2 items-center">
            <img className="md:w-14 w-10" src="images/boxshot.png" />
            <p className="sm:font-semibold sm:text-lg text-xs font-medium sm:tracking-wide tracking-tighter">
              Stranger Things <br />
              <span className="text-xs text-blue-500">Downloading...</span>
            </p>
          </div>

          <img
            className="sm:w-14 sm:h-14 w-10 h-10 "
            src="images/download-icon.gif"
            alt="gif"
          />
        </div>
      </motion.div>

      <motion.div
        initial={"offScreen"}
        whileInView={"onScreen"}
        viewport={{ once: true, amount: 0.9 }}
        variants={textAnimation}
        className="xl:text-left text-center z-50"
      >
        <h1 className="md:font-bold text-3xl sm:text-5xl">
          Download your shows <br />
          to watch offline.
        </h1>
        <p className="sm:text-xl text-base mt-2 ">
          Save your favorites easily and always have
          <br />
          something to watch.
        </p>
      </motion.div>
    </div>
  );
};

export default StoryCard2;
