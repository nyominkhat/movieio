import React from "react";
import { motion } from "framer-motion";

import Footer from "../components/Footer";
import InputItem from "../components/InputItem";

const Login = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <div className="w-screen  h-full absolute top-0 left-0 container-fluid flex">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3 }}
          className="mx-auto   my-auto h-3/5  sm:p-6 p-4 bg-black border border-slate-700 bg-opacity-70 rounded "
        >
          <h1 className="text-white text-4xl">Sign In</h1>

          <div className="mt-4 mx-auto flex flex-col gap-4 md:w-80 w-64">
            <div className="relative ">
              <InputItem
                id="email"
                placeholder="Email or phone number"
                type="text"
              />
            </div>
            <div className="relative ">
              <InputItem id="password" placeholder="Password" type="password" />
            </div>

            <button className="btn btn-error md:w-80 w-64 ">Sign In</button>

            <div className=" flex justify-between md:w-80 w-64 items-center">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  // checked
                  id="checked"
                  className="checkbox checkbox-xs bg-slate-500  rounded-none w-3 h-3"
                />
                <label htmlFor="checked" className="ml-2 text-sm select-none">
                  Remember me
                </label>
              </div>
              <p className="text-sm text-gray-300">Need Help?</p>
            </div>

            <p className="text-sm text-gray-400 mt-4">
              This page is protected by Google reCAPTCHA to <br />
              ensure you're not a bot.
              <span className="text-sky-500">Learn more.</span>
            </p>
          </div>
        </motion.div>
      </div>

      <div className="absolute w-full -mt-72">
        <Footer />
      </div>
    </motion.div>
  );
};

export default Login;
