"use client";
import Image from "next/image";
import React from "react";
import { IoIosSend } from "react-icons/io";
import { LuDownload } from "react-icons/lu";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

const Hero = () => {
  return (
    <div className="container relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-1 flex flex-col justify-center">
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
          <div className="flex items-center gap-10 mt-[20px] lg:mt-[30px]">
            <motion.button
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex items-center gap-1 bg-blue-500 hover:bg-gray-950 border-2 hover:border-blue-500 text-white text-lg font-bold leading-normal py-2 px-4 rounded-lg transition ease-in-out dealy-150 duration-300"
            >
              Contact Me <IoIosSend className="w-[26px] h-[26px]" />{" "}
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="bg-blue-500 hover:bg-gray-950 border-2 hover:border-blue-500 text-white text-lg font-bold leading-normal py-2 px-4 rounded-lg transition ease-in-out dealy-150 duration-300"
            >
              <a
                className="flex items-center gap-1 "
                href="/assets/files/Kongkon-Jowarder-Resume.pdf"
                target="_blank"
              >
                Download CV <LuDownload className="w-[26px] h-[26px]" />
              </a>
            </motion.button>
          </div>
        </div>
        <div className="md:col-span-1 flex justify-center items-center">
          <MotionImage
            src="/assets/images/hero.png"
            alt="hero image"
            width={400}
            height={200}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
