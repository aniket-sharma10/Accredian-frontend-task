import React from "react";
import { GiGraduateCap } from "react-icons/gi";
import { FaAngleDown } from "react-icons/fa";

const menuItems = [
  { name: "ALL PROGRAMS", expanded: true },
  { name: "PRODUCT MANAGEMENT", expanded: false },
  { name: "STRATEGY & LEADERSHIP", expanded: false },
  { name: "BUSINESS MANAGEMENT", expanded: false },
  { name: "FINTECH", expanded: false },
  { name: "SENIOR MANAGEMENT", expanded: false },
  { name: "DATA SCIENCE", expanded: false },
  { name: "DIGITAL TRANSFORMATION", expanded: false },
  { name: "BUSINESS ANALYTICS", expanded: false },
];

const programs = [
  {
    name: "Professional Certificate Program in Product Management",
    referrer: 7000,
    referee: 9000,
  },
  {
    name: "PG Certificate Program in Strategic Product Management",
    referrer: 9000,
    referee: 11000,
  },
  {
    name: "Executive Program in Data Driven Product Management",
    referrer: 10000,
    referee: 10000,
  },
  {
    name: "Executive Program in Product Management and Digital Transformation",
    referrer: 10000,
    referee: 10000,
  },
  {
    name: "Executive Program in Product Management",
    referrer: 10000,
    referee: 10000,
  },
  {
    name: "Advanced Certification in Product Management",
    referrer: 10000,
    referee: 10000,
  },
  {
    name: "Executive Program in Product Management and Project Management",
    referrer: 10000,
    referee: 10000,
  },
];

{
  /*  */
}
{
  /* Sidebar */
}

function ProgramPage() {
  return (
    <div className="w-full max-w-[80%] mx-auto ">
      <div className="flex justify-end items-center mb-4">
        <div className="flex items-center">
          <span className="mr-4 text-sm text-gray-600">Enrolled</span>
          <div className="w-12 h-6 bg-blue-500 rounded-full flex justify-end items-center">
            <div className="w-5 h-5 bg-white rounded-full mr-1 shadow-md"></div>
          </div>
        </div>
      </div>
      <div className="flex items-start gap-8">
        {/* Left Menu */}
        <div className="w-1/4 bg-white shadow-lg rounded-lg overflow-hidden">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`py-3 px-4 flex justify-between items-center hover:bg-blue-500 hover:text-white cursor-pointer transition duration-150 ease-in-out ${
                item.expanded
                  ? "bg-blue-500 text-white"
                  : "border-b border-gray-200"
              }`}
            >
              <span className="text-sm font-medium">{item.name}</span>
              <span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="w-3/4 rounded-lg shadow-lg overflow-auto">
          <div className="bg-white rounded-lg shadow-md">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-blue-500 text-white">
                    <th className="text-left py-4 px-4 font-semibold border-r-2 border-gray-600">
                      Programs
                    </th>
                    <th className="text-right py-4 px-4 font-semibold border-r-2 border-gray-600">
                      Referrer Bonus
                    </th>
                    <th className="text-right py-4 px-4 font-semibold">
                      Referee Bonus
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-[#dfebfb]">
                  {programs.map((program, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="py-3 px-4 text-sm border-r-2 border-gray-600">
                        <div className="flex items-center">
                          <span className="mr-2 text-lg text-blue-800">
                            <GiGraduateCap />
                          </span>
                          {program.name}
                        </div>
                      </td>
                      <td className="text-right py-4 px-4 text-sm border-r-2 border-gray-600">
                        ₹ {program.referrer.toLocaleString()}
                      </td>
                      <td className="text-right py-4 px-4 text-sm">
                        ₹ {program.referee.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end my-4">
        <button className="flex justify-center items-center gap-1 text-sm text-gray-600 border border-gray-700 py-2 px-4 rounded-lg">
          Show More
          <FaAngleDown />
        </button>
      </div>
    </div>
  );
}

export default ProgramPage;
