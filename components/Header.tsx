'use client'

import React, { useState } from 'react';
import { RiMenuFill, RiCloseLine } from 'react-icons/ri';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <>
      <header className="flex justify-between items-center bg-pnk-500 h-[100px] p-10 bg-white">
        <button className="hidden md:block px-9 border-black border-2 py-2 hover:bg-black hover:text-white transition duration-300 ease-in-out">
          Subscribe
        </button>
        <h1 className="font-bold mr-14 text-[29px] md:text-[70px] text-black text-center md:text-left">
          <Link href='/'>VOID</Link>
        </h1>
        <button onClick={toggleMenu} className="z-50 relative">
          {isMenuOpen ? (
            <RiCloseLine className="text-5xl text-black" />
          ) : (
            <>
              <RiMenuFill className="text-3xl text-black md:hidden" />
              <h1 className="font-bold text-3xl text-black hidden md:block">MENU</h1>
            </>
          )}
        </button>
      </header>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center">
          <h1 className="font-bold text-[70px] text-black mb-12">
            <Link href='/' onClick={toggleMenu}>VOID</Link>
          </h1>
          <nav className="text-center">
            <ul className="space-y-8">
              <li>
                <button className="px-9 border-black border-2 py-2 text-black hover:bg-black hover:text-white transition duration-300 ease-in-out">
                  Subscribe
                </button>
              </li>
              <li>
                <Link href="/All" className="text-4xl text-black font-bold hover:underline" onClick={toggleMenu}>
                  All
                </Link>
              </li>
              <li>
                <Link href="/About" className="text-4xl text-black font-bold hover:underline" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/Contact" className="text-4xl text-black font-bold hover:underline" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;

