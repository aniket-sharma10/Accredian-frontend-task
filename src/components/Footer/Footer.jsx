import React from "react";
import Logo from "../../assets/footer-logo.png";
import { FaFacebook, FaFacebookSquare, FaInstagram, FaInstagramSquare, FaLinkedin, FaLinkedinIn, FaPlus, FaTwitter, FaTwitterSquare, FaYoutube, FaYoutubeSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full bg-[#282828]">
      <div className="w-[70%] mx-auto">
        <div className="py-10 flex justify-between border-b border-white">
          <img src={Logo} alt="Accerdian" />
          <div className="text-white text-center pr-12">
            <button className="bg-blue-500 border rounded-lg mb-2 border-gray-100 px-12 py-2">
              Schedule 1-on-1 Call Now
            </button>
            <p>Speak with our Learning Advisor</p>
          </div>
        </div>
        <div className="py-8 flex gap-16 text-white">
          <div className="w-4/12">
            <h2 className="text-gray-300 text-xl">Programs</h2>
            <ul className="mt-4 flex flex-col gap-6">
              <li className="flex justify-between font-medium">
                Data Science & AI
                <span>
                  <FaPlus />{" "}
                </span>
              </li>
              <li className="flex justify-between font-medium">
                Product Management
                <span>
                  <FaPlus />{" "}
                </span>
              </li>
              <li className="flex justify-between font-medium">
                Business Analytics
                <span>
                  <FaPlus />{" "}
                </span>
              </li>
              <li className="flex justify-between font-medium">
                Digital Transformation
                <span>
                  <FaPlus />{" "}
                </span>
              </li>
              <li className="flex justify-between font-medium">
                Business Management
                <span>
                  <FaPlus />{" "}
                </span>
              </li>
              <li className="flex justify-between font-medium">
                Product Management
                <span>
                  <FaPlus />{" "}
                </span>
              </li>
              <li className="flex justify-between font-medium">
                Strategy & Leadership
                <span>
                  <FaPlus />{" "}
                </span>
              </li>
              <li className="flex justify-between font-medium">
                Senior Management
                <span>
                  <FaPlus />{" "}
                </span>
              </li>
              <li className="flex justify-between font-medium">
                Fintech
                <span>
                  <FaPlus />{" "}
                </span>
              </li>
            </ul>
          </div>
          <div className="w-5/12">
            <h2 className="text-gray-200 text-xl">Contact Us</h2>
            <div className="space-y-2 text-sm mt-6 text-gray-300">
              <p>
                Email us (For Data Science Queries):{" "}
                <a
                  href="mailto:admissions@accredian.com"
                  className="text-blue-400"
                >
                  admissions@accredian.com
                </a>
              </p>
              <p>
                Email us (For Product Management Queries):{" "}
                <a href="mailto:pm@accredian.com" className="text-blue-400">
                  pm@accredian.com
                </a>
              </p>
              <p>
                Data Science Admission Helpline: +91 9079653929 (9 AM - 7 PM)
              </p>
              <p>Product Management Admission Helpline: +91 9625811095</p>
              <p>Enrolled Student Helpline: +91 7969322507</p>
              <p>
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector
                18, Gurugram, Haryana 122015
              </p>
            </div>
            <h2 className="text-lg font-bold mt-8 mb-4">Why Accredian</h2>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4 text-lg">
                <FaFacebookSquare/>
                <FaLinkedin/>
                <FaTwitter/>
                <FaInstagram/>
                <FaYoutube/>
            </div>
          </div>
          <div className="w-2/12">
            <h2 className="text-gray-200 text-xl">Accredian</h2>
            <div className="space-y-2 text-sm mt-6 text-gray-300">
                <p>About</p>
                <p>Career</p>
                <p>Blog</p>
                <p>Admission Policy</p>
                <p>Referral Policy</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Master FAQs</p>
            </div>
          </div>
        </div>
        <p className="py-6 text-gray-100 text-center">&copy; Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
