"use client";
import React, { useState } from "react";
import Link from "next/link";
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="custom-container sticky top-0 z-50">
      <nav className="container bg-gray-950 py-4 flex items-center justify-between">
        {/* logo  */}
        <div className="text-xl xl:text-2xl font-bold text-white leading-normal">
          <Link href="/">
            Kongkon <span className="text-blue-500 ">Jowarder</span>
          </Link>
        </div>
        {/* menu  */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-6 md:gap-8 lg:gap-10 xl:gap-12">
            <li className="text-white text-base xl:text-lg font-bold leading-normal">
              <Link href="/">Home</Link>
            </li>
            <li className="text-white text-base xl:text-lg font-bold leading-normal">
              <Link href="#about">About</Link>
            </li>
            <li className="text-white text-base xl:text-lg font-bold leading-normal">
              <Link href="#skills">Skills</Link>
            </li>
            <li className="text-white text-base xl:text-lg font-bold leading-normal">
              <Link href="#projects">Projects</Link>
            </li>
            <li className="text-white text-base xl:text-lg font-bold leading-normal">
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="block md:hidden">
          <div>
            {isOpen ? (
              <RxCross2
                onClick={() => setIsOpen(!isOpen)}
                className="w-[28px] h-[28px] text-white"
              />
            ) : (
              <LuMenu
                onClick={() => setIsOpen(!isOpen)}
                className="w-[28px] h-[28px] text-white"
              />
            )}
          </div>
        </div>
      </nav>
      {/* small menu  */}
      <div
        className={`${
          isOpen ? "w-[75%] left-0" : "w-full -left-[100%]"
        } h-[50%] bg-gray-950 fixed top-10 z-20 `}
      >
        {isOpen && (
          <ul className="flex flex-col items-center gap-6 md:gap-8 lg:gap-10 xl:gap-12 py-6">
            <li className="text-white text-base xl:text-lg font-bold leading-normal ">
              <Link href="/">Home</Link>
            </li>
            <li className="text-white text-base xl:text-lg font-bold leading-normal">
              <Link href="#about">About</Link>
            </li>
            <li className="text-white text-base xl:text-lg font-bold leading-normal">
              <Link href="#skills">Skills</Link>
            </li>
            <li className="text-white text-base xl:text-lg font-bold leading-normal">
              <Link href="#projects">Projects</Link>
            </li>
            <li className="text-white text-base xl:text-lg font-bold leading-normal">
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
