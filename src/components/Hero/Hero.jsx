import React, { useState } from "react";
import HeroLeft from "../../assets/hero-left.png";
import HeroRight from "../../assets/hero-right.png";
import ReferralProcess from "../ReferralProcess";
import ReferralBenefits from "../ReferralBenefits";
import { FaRegWindowClose } from "react-icons/fa";
import { toast } from "react-toastify";
import { Spinner } from "react-bootstrap"

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    refereeName: "",
    refereeEmail: "",
    courseName: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    const {
      referrerName,
      referrerEmail,
      refereeName,
      refereeEmail,
      courseName,
    } = formData;

    if (!referrerName.trim())
      newErrors.referrerName = "Referrer Name is required";
    if (!referrerEmail.trim() || !validateEmail(referrerEmail))
      newErrors.referrerEmail = "Valid Referrer Email is required";
    if (!refereeName.trim()) newErrors.refereeName = "Referee Name is required";
    if (!refereeEmail.trim() || !validateEmail(refereeEmail))
      newErrors.refereeEmail = "Valid Referee Email is required";
    if (!courseName.trim()) newErrors.courseName = "Course Name is required";

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/referrals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setIsModalOpen(false);
        setFormData({
          referrerName: "",
          referrerEmail: "",
          refereeName: "",
          refereeEmail: "",
          courseName: "",
        });
        setErrors({});
        return toast.success(data.message);
      } else {
        return toast.error("Failed to submit referral:", data.error);
      }
    } catch (error) {
      console.error("Error submitting referral:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex w-[55%] mx-auto bg-blue-200 mt-6 justify-between items-center px-14 py-3 rounded-full">
        <p className="text-blue-700 text-lg">Refer</p>
        <p className="text-lg hover:text-blue-700 cursor-pointer">Benefits</p>
        <p className="text-lg hover:text-blue-700 cursor-pointer">FAQs</p>
        <p className="text-lg hover:text-blue-700 cursor-pointer">Support</p>
      </div>
      <div className="bg-[#EEF5FF] mt-6 rounded-3xl shadow-2xl shadow-slate-400 w-full max-w-[85%] mx-auto flex items-center justify-between max-h-[692px]">
        <div>
          <img src={HeroLeft} alt="" className="w-[500px] h-[365px] ml-24 " />
          <button
            className="bg-blue-600 text-white px-6 py-2 text-lg ml-24 mt-10 rounded-lg cursor-pointer hover:scale-95 transition-all duration-100"
            onClick={handleOpenModal}
          >
            Refer Now
          </button>
        </div>
        <div>
          <img src={HeroRight} alt="" className="w-[814px] h-[725px] mt-8 " />
        </div>
      </div>
      <div className="mt-10 w-full bg-blue-200 py-6 flex flex-col items-center gap-16">
        <h2 className="text-center text-3xl font-medium">
          How to <span className="text-blue-600">Refer?</span>
        </h2>
        <ReferralProcess />
        <button
          className="bg-blue-600 text-white px-6 py-2 text-lg rounded-lg cursor-pointer hover:scale-95 transition-all duration-100"
          onClick={handleOpenModal}
        >
          Refer Now
        </button>
      </div>
      <div className="mt-10 w-full py-6 flex flex-col items-center gap-2">
        <h2 className="text-center text-3xl font-medium mb-6">
          What are the{" "}
          <span className="text-blue-600">Advantages of Referrals?</span>
        </h2>
        <ReferralBenefits />
        <button
          className="bg-blue-600 text-white px-10 py-2 text-lg rounded-lg cursor-pointer hover:scale-95 transition-all duration-100"
          onClick={handleOpenModal}
        >
          Refer Now
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-xl">
            <div className="flex mb-4 justify-between items-center">
              <h2 className="text-2xl font-bold">Referral Form</h2>
              <FaRegWindowClose
                size={"20px"}
                className="cursor-pointer"
                onClick={handleCloseModal}
              />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex gap-3 items-center justify-between mb-4">
                <label htmlFor="" className="w-1/3 text-lg">
                  Referrer Name
                </label>
                <input
                  type="text"
                  name="referrerName"
                  value={formData.referrerName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-blue-50"
                  required
                  disabled={loading}
                />
              </div>
              <div className="flex gap-3 items-center justify-between mb-4">
                <label htmlFor="" className="w-1/3 text-lg">
                  Referrer Email
                </label>
                <input
                  type="email"
                  name="referrerEmail"
                  value={formData.referrerEmail}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-blue-50"
                  required
                  disabled={loading}
                />
              </div>
              <div className="flex gap-3 items-center justify-between mb-4">
                <label htmlFor="" className="w-1/3 text-lg">
                  Referee Name
                </label>
                <input
                  type="text"
                  name="refereeName"
                  value={formData.refereeName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-blue-50"
                  required
                  disabled={loading}
                />
              </div>
              <div className="flex gap-3 items-center justify-between mb-4">
                <label htmlFor="" className="w-1/3 text-lg">
                  Referee Email
                </label>
                <input
                  type="email"
                  name="refereeEmail"
                  value={formData.refereeEmail}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-blue-50"
                  required
                  disabled={loading}
                />
              </div>
              <div className="flex gap-3 items-center justify-between mb-4">
                <label htmlFor="" className="w-1/3 text-lg">
                  Course Name
                </label>
                <input
                  type="text"
                  name="courseName"
                  value={formData.courseName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-blue-50"
                  required
                  disabled={loading}
                />
              </div>
              <div className="flex justify-between px-10 mt-6">
                <button
                  type="submit"
                  className="px-8 py-2 bg-blue-600 hover:scale-95 transition-all duration-200 text-white rounded"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <Spinner animation="border" size="sm" className="mr-2" />
                      Submitting...
                    </span>
                  ) : (
                    "Submit"
                  )}
                </button>
                <button
                  type="button"
                  className="px-8 py-2 bg-red-600 hover:scale-95 transition-all duration-200 text-white rounded ml-4"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
