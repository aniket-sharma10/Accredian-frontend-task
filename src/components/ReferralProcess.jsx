import React from 'react';
import { HiUserAdd  } from "react-icons/hi";
import { BsClipboardCheckFill } from "react-icons/bs";
import { GiWallet } from "react-icons/gi";
import { TbArrowCurveRight } from "react-icons/tb";


const ReferralProcess = () => {
  const steps = [
    {
      icon: <HiUserAdd />,
      text: "Submit referrals easily via our website's referral section"
    },
    {
      icon: <BsClipboardCheckFill />,
      text: 'Earn rewards once your referral joins an Accredian program'
    },
    {
      icon: <GiWallet />,
      text: 'Both parties receive a bonus 30 days after program enrollment'
    }
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 rounded-full bg-white shadow-lg flex items-center justify-center mb-4">
              <span className="text-5xl text-blue-500">{step.icon}</span>
            </div>
            <p className="text-center text-sm max-w-[200px]">{step.text}</p>
          </div>
          {index < steps.length - 1 && (
            <div className="text-blue-500 text-5xl pt-[-10px] rotate-[75deg]"><TbArrowCurveRight /></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ReferralProcess;