import React from "react";
import { FaAngleRight, FaAngleUp, FaHeadset } from "react-icons/fa";

function FAQs() {
  return (
    <div className="my-8">
      <div className="mt-10">
        <h2 className="text-center text-3xl font-medium mb-6">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>
        <div className="w-full max-w-[80%] mx-auto flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <button className="w-60 py-3 text-lg font-medium text-center bg-white shadow-lg shadow-gray-500 text-blue-500 rounded-md">
              Eligibility
            </button>
            <p className="text-blue-500 font-medium flex items-center gap-2 w-[900px]">
              Do I need to have prior Product Management and Project Management
              experience to enroll in the program?{" "}
              <span className="text-gray-500">
                <FaAngleUp />
              </span>
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button className="w-60 py-3 text-lg font-medium text-center bg-white shadow-lg shadow-gray-500 text-gray-500 border-2 border-gray-400 rounded-md">
              How To Use?
            </button>
            <div className="w-[900px]">
              <p className="text-sm flex flex-wrap">
                No, the program is designed to be inclusive of all levels of
                experience. All topics will be covered from the basics, making
                it
              </p>
              <p className="text-sm flex flex-wrap">
                suitable for individuals from any field of work.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button className="w-60 py-3 text-lg font-medium text-center bg-white shadow-lg shadow-gray-500 text-gray-500 border-2 border-gray-400 rounded-md">
              Terms & Conditions
            </button>
            <p className="text-gray-800 font-medium w-[900px]">
              What is the minimum system configuration required?
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-600 my-20 rounded-lg w-[85%] mx-auto h-52 flex gap-10 justify-center items-center">
        <div className="bg-white p-3 rounded-xl border-4 border-blue-300 text-blue-500">
            <FaHeadset size={'50px'} />
        </div>
        <div className="flex flex-col text-white gap-2">
            <h2 className="text-3xl">Want to delve deeper into the program?</h2>
            <p className="">Share your details to receive expert insights from our program team!</p>
        </div>
        <button className="bg-white px-12 py-3 flex gap-1 ml-32 mt-4 items-center rounded-lg font-medium text-blue-500">Get in touch <FaAngleRight /></button>
      </div>
    </div>
  );
}

export default FAQs;
