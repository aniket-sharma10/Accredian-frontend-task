import React from 'react'
import headerLogo from "../../assets/header-logo.png"
import { FaAngleDown } from "react-icons/fa6";


function Header() {
  return (
    <div>
        <div className='w-full bg-blue-200 flex justify-center gap-3 p-2'>
            <h2 className=' text-center'>Use personalized, professional guidance to choose your best career path.</h2>
            <span className='text-blue-600 cursor-pointer hover:underline'>Contact Expert</span>
        </div>
        <div className='w-full flex justify-center'>
            <div className='w-[86%] py-5 flex items-center'>
                <div className='flex gap-4  w-1/3'>
                    <div className='flex justify-center items-center'>
                        <img src={headerLogo} alt="Accredian" />
                    </div>
                    <button className='flex justify-center items-center gap-1 bg-blue-600 text-sm text-white py-2 px-4 rounded-lg'>
                        Courses
                        <FaAngleDown />
                    </button>
                </div>
                <div className='flex w-full px-10 justify-end'>
                    <ul className='flex text-sm items-center gap-8'>
                        <li>Refer & Earn</li>
                        <li>Resources</li>
                        <li>About Us</li>
                        <button className='bg-gray-300 py-2 px-4 rounded-md'>Login</button>
                        <button className='py-2 px-4 rounded-md bg-blue-600 text-white'>Try for free</button>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header