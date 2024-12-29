import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center bg-black text-white h-[100px] p-10">
          <button className="hidden md:block px-9 border-black border-2 py-2 hover:bg-black hover:text-white transition duration-300 ease-in-out">
            Subscribe
          </button>
          <h1 className="font-bold text-[29px] md:text-[70px] text-white text-center md:text-left">
            VOID
          </h1>
          {/* <RiMenuFill className="text-3xl md:hidden" /> */}
          <div className="flex gap-3">
          <h1 className="font-bold text-3xl"><FaFacebookF /></h1>
          <h1 className="font-bold text-3xl"><FaInstagram /></h1>
          </div>
        </footer>
  )
}

export default Footer
