import React, { useContext, useState } from "react";
import { HiOutlinePlus, HiOutlineX } from "react-icons/hi";
import { Context } from "../App";

const Accordion = () => {
  const { faq } = useContext(Context);

  const [accordion, setAccordion] = useState(-1);

  function toggleAccordion(index) {
    if (index === accordion) {
      setAccordion(-1);
      return;
    }
    setAccordion(index);
  }

  return (
    <>
      <div className="container-fluid pb-10  bg-black">
        <h1 className="text-center  sm:text-6xl text-3xl sm:font-semibold p-10">
          Frequently Asked Questions
        </h1>

        <div className="accordion mx-auto">
          {faq.map((item, index) => (
            <div className="accordion-items" key={index}>
              <div
                onClick={() => toggleAccordion(index)}
                className="accordion_hidden flex items-center justify-between px-8 py-4 collapse-title"
              >
                <h3 className="text-white sm:text-3xl text-xl">
                  {item.question}
                </h3>

                <div>
                  {accordion === index ? (
                    <>
                      <HiOutlineX size="30" />
                    </>
                  ) : (
                    <>
                      <HiOutlinePlus size="30" />
                    </>
                  )}
                </div>
              </div>

              <div
                className={`content  ${accordion === index ? "active" : ""}`}
              >
                <p className={`p-4 accordion-p px-8 sm:text-3xl text-xl`}>
                  {item.answer.length === 2 ? (
                    <>
                      <>{item.answer[0]}</>
                      <br /> <br />
                      <>{item.answer[1]}</>
                    </>
                  ) : (
                    item.answer[0]
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Accordion;
