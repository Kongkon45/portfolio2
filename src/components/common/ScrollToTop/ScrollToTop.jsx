"use client";
import React, { useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import { HiArrowSmUp } from "react-icons/hi";
import { RiArrowUpDoubleFill } from "react-icons/ri";

const ScrollToTopComponent = () => {
  const [hoverIcon, setHoverIcon] = useState(false);
  return (
    <div>
      <ScrollToTop
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid black",
          background: "white",
          padding: "5px",
        }}
        smooth
        component={
          hoverIcon ? (
            <HiArrowSmUp className="w-[30px] h-[30px] text-black" />
          ) : (
            <RiArrowUpDoubleFill className="w-[30px] h-[30px] text-black" />
          )
        }
        onMouseEnter={()=>setHoverIcon(true)}
        onMouseLeave={()=>setHoverIcon(false)}
      />
    </div>
  );
};

export default ScrollToTopComponent;
