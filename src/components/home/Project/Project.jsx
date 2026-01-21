import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegEye } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const projectData = [
  {
    id: 1,
    img: "/assets/images/projects/claude-frontend.png",
    name: "Claude Website",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    live_url : "https://raf-cart-client-side.vercel.app",
    github : "https://github.com/Kongkon45/RafCart--Client-side"
  },
  {
    id: 2,
    img: "/assets/images/projects/discount-me.png",
    name: "Discount Me",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    live_url : "https://discount-me-client-side.vercel.app",
    github : "https://github.com/Kongkon45/discount-me-client-side"
  },
  {
    id: 3,
    img: "/assets/images/projects/glitz.png",
    name: "Glitz Floor & More",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    live_url : "https://www.glitzfloorsandmore.com",
    github : "https://github.com/csebiplab/glitz"
  },
  {
    id: 4,
    img: "/assets/images/projects/hotel-booking.png",
    name: "Hotel Booking Application",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    live_url : "https://hotel-booking-application-client-side.vercel.app",
    github : "https://github.com/Kongkon45/Hotel-Booking-Application-Client-Side-"
  },
  {
    id: 5,
    img: "/assets/images/projects/study-distanation.png",
    name: "Study Distanation",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    live_url : "https://study-distenation.vercel.app/",
    github : "https://github.com/Kongkon45/study-distenation"
  },
  {
    id: 6,
    img: "/assets/images/projects/apple-fix.png",
    name: "Apple Fix Care",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    live_url : "https://samsung-care.vercel.app/",
    github : "https://github.com/Kongkon45/Apple-Fix-Care-Client-Site"
  },
];

const Project = () => {
  return (
    <div
      className="bg-[#374151] relative container py-5 md:py-8 lg:py-10 xl:py-12"
      id="projects"
    >
      <h3 className="text-3xl lg:text-4xl font-bold text-white text-center leading-normal ">
        All Projects
      </h3>
      <div className="pt-5 md:pt-8 lg:pt-10">
        <div className="grid grid-cols-1 md:gris-cols-2 lg:grid-cols-3 gap-10">
          {projectData?.map((data) => {
            return (
              <div
                key={data?.id}
                className="border border-gray-950 rounded-lg shadow h-full"
              >
                <div className="overflow-hidden rounded-t-lg">
                <Image
                  src={data?.img}
                  alt={data?.name}
                  width={200}
                  height={150}
                  className="w-full h-[150px] rounded-t-lg cursor-pointer hover:scale-125 transtion ease-in-out duration-300 "
                />
                </div>
                <div className="px-3 py-4 bg-[#fef2f2] rounded-b-lg">
                  <h4 className="text-xl font-bold text-black text-center leading-normal">
                    {data?.name}
                  </h4>
                  <p className="text-base 5xl:text-lg font-normal text-justify text-black leading-normal">
                    {data?.desc}
                  </p>
                  <div className="flex items-center justify-between gap-2 mt-[20px] lg:mt-[30px]">
                    <Link href={`${data?.live_url}`} target="_blank" rel="nofollow">
                    <button className="flex items-center gap-1 bg-gray-950 hover:bg-blue-500 border-2 hover:border-blue-500 text-white text-base font-bold leading-normal py-1 px-3 rounded-lg transition ease-in-out dealy-150 duration-300">
                      <FaRegEye className="w-[20px] h-[20px] mt-1" /> Live
                      Preview
                    </button>
                    </Link>
                    

                    <button className="bg-gray-950 hover:bg-blue-500 border-2 hover:border-blue-500 text-white text-base font-bold leading-normal py-1 px-3 rounded-lg transition ease-in-out dealy-150 duration-300">
                      <Link
                        className="flex items-center gap-1 "
                        href={`${data?.github}`}
                        target="_blank"
                        rel="nofollow"
                      >
                        <FaGithub className="w-[20px] h-[20px]" />
                        Github Link
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
