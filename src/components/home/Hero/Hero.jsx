"use client";
import Image from "next/image";
import React from "react";
import { IoIosSend } from "react-icons/io";
import { LuDownload } from "react-icons/lu";
import { motion } from "framer-motion";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const MotionImage = motion(Image);

const Hero = () => {
  return (
    <div className="container relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="order-2 md:order-1 md:col-span-1 flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-normal text-black"
          >
            Hello, My Name is <br />{" "}
            <strong className="text-blue-500">Kongkon Jowarder</strong>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-base xl:text-lg font-normal leading-normal text-black mt-[10px]"
          >
            I'm a passionate web developer with expertise in React, Next.js, and
            modern web technologies. I love creating beautiful and functional
            website that solve real world problems.
          </motion.p>
          <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="flex items-center gap-10 mt-[20px] lg:mt-[30px]">

            <Link href="#contact">
            <button
              className="flex items-center gap-1 bg-blue-500 hover:bg-gray-950 border-2 hover:border-blue-500 text-white text-lg font-bold leading-normal py-2 px-4 rounded-lg transition ease-in-out dealy-150 duration-300"
            >
              Contact Me <IoIosSend className="w-[26px] h-[26px]" />{" "}
            </button>
            </Link>

            <button
              className="bg-blue-500 hover:bg-gray-950 border-2 hover:border-blue-500 text-white text-lg font-bold leading-normal py-2 px-4 rounded-lg transition ease-in-out dealy-150 duration-300"
            >
              <a
                className="flex items-center gap-1 "
                href="/assets/files/Kongkon-Jowarder-Resume.pdf"
                target="_blank"
              >
                Download CV <LuDownload className="w-[26px] h-[26px]" />
              </a>
            </button>
          </motion.div>
        </div>
        <div className="order-1 md:order-2 md:col-span-1 flex justify-end items-center">
          <MotionImage
            src="/assets/images/hero.png"
            alt="hero image"
            width={400}
            height={200}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <div className="fixed z-50 bg-white border-2 border-blue-300 py-4 px-2 rounded-lg">
          <div className="flex flex-col justify-center items-center gap-3 md:gap-4 lg:gap-5">
              {/* Facebook Link */}
              <Link
                href="https://www.facebook.com/kongkon.jowarder/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Visit my Facebook profile"
              >
                <FaFacebookSquare className="w-[28px] h-[28px] text-blue-500 hover:text-blue-600 transition-colors cursor-pointer" />
              </Link>

              {/* WhatsApp Link */}
              <Link
                href="tel:01778934545"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Call me on WhatsApp"
              >
                <FaSquareWhatsapp className="w-[28px] h-[28px] text-green-500 hover:text-green-600 transition-colors cursor-pointer" />
              </Link>

              {/* LinkedIn Link */}
              <Link
                href="https://www.linkedin.com/in/kongkon-jowarder-50a12725b/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Visit my LinkedIn profile"
              >
                <FaLinkedin className="w-[28px] h-[28px] text-blue-500 hover:text-blue-600 transition-colors cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
