import React from "react";

const InputItem = ({ id, placeholder, type }) => {
  return (
    <>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        // value='asdf'
        autoComplete="off"
        className="md:w-80 w-64 text-lg select-none h-16 text-gray-800 py-4 pb-2 px-3 placeholder-transparent focus:outline-none peer "
      />
      <label
        htmlFor={id}
        className="absolute p-1.5 px-3 -left-0.5 -top-1 text-gray-500 text-xs 
              transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 
              peer-focus:-left-0.5 peer-focus:-top-1 
              peer-focus:text-gray-500 peer-focus:text-xs duration-300 ease-in select-none  cursor-text"
      >
        {placeholder}
      </label>
    </>
  );
};

export default InputItem;
