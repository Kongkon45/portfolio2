import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div
      className="relative container py-5 md:py-8 lg:py-10 xl:py-12"
      id="skills"
    >
      <h3 className="text-3xl lg:text-4xl font-bold text-black text-center leading-normal ">
        Skills & Expertise
      </h3>
      <div className="pt-5 md:pt-8 lg:pt-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 xl:gap-8 5xl:gap-10 items-center justify-center p-5 md:p-10 bg-gray-950">
          <div className="p-2 md:p-3 bg-white rounded-lg ">
            <Image
              src="/assets/images/html.png"
              alt="html image"
              width={70}
              height={70}
              className="w-[70px] h-[70px] mx-auto hover:scale-110 transtion duration-300 ease-in-out cursor-pointer"
            />
            <h5 className="text-lg 2xl:text-xl 5xl:text-2xl font-bold text-black text-center leading-normal pt-1">Html</h5>
          </div>
          <div className="p-2 md:p-3 bg-white rounded-lg ">
            <Image
              src="/assets/images/css.png"
              alt="css image"
              width={70}
              height={70}
              className="w-[70px] h-[70px] mx-auto hover:scale-110 transtion duration-300 ease-in-out cursor-pointer"
            />
            <h5 className="text-lg 2xl:text-xl 5xl:text-2xl font-bold text-black text-center leading-normal pt-1">Css</h5>
          </div>
          <div className="p-2 md:p-3 bg-white rounded-lg ">
            <Image
              src="/assets/images/js.png"
              alt="js image"
              width={70}
              height={70}
              className="w-[70px] h-[70px] mx-auto hover:scale-110 transtion duration-300 ease-in-out cursor-pointer"
            />
            <h5 className="text-lg 2xl:text-xl 5xl:text-2xl font-bold text-black text-center leading-normal pt-1">Javascript</h5>
          </div>
          <div className="p-2 md:p-3 bg-white rounded-lg ">
            <Image
              src="/assets/images/react-js.png"
              alt="react image"
              width={70}
              height={70}
              className="w-[70px] h-[70px] mx-auto hover:scale-110 transtion duration-300 ease-in-out cursor-pointer"
            />
            <h5 className="text-lg 2xl:text-xl 5xl:text-2xl font-bold text-black text-center leading-normal pt-1">React.Js</h5>
          </div>
          <div className="p-2 md:p-3 bg-white rounded-lg ">
            <Image
              src="/assets/images/next-js.png"
              alt="next image"
              width={70}
              height={70}
              className="w-[70px] h-[70px] mx-auto hover:scale-110 transtion duration-300 ease-in-out cursor-pointer"
            />
            <h5 className="text-lg 2xl:text-xl 5xl:text-2xl font-bold text-black text-center leading-normal pt-1">Next.Js</h5>
          </div>
          <div className="p-2 md:p-3 bg-white rounded-lg ">
            <Image
              src="/assets/images/tailwind-css.png"
              alt="html image"
              width={70}
              height={70}
              className="w-[70px] h-[70px] mx-auto hover:scale-110 transtion duration-300 ease-in-out cursor-pointer"
            />
            <h5 className="text-lg 2xl:text-xl 5xl:text-2xl font-bold text-black text-center leading-normal pt-1">Tailwind Css</h5>
          </div>
          <div className="p-2 md:p-3 bg-white rounded-lg ">
            <Image
              src="/assets/images/bootstrap.png"
              alt="html image"
              width={70}
              height={70}
              className="w-[70px] h-[70px] mx-auto hover:scale-110 transtion duration-300 ease-in-out cursor-pointer"
            />
            <h5 className="text-lg 2xl:text-xl 5xl:text-2xl font-bold text-black text-center leading-normal pt-1">Bootstrap</h5>
          </div>
          <div className="p-2 md:p-3 bg-white rounded-lg ">
            <Image
              src="/assets/images/node-js.png"
              alt="html image"
              width={70}
              height={70}
              className="w-[70px] h-[70px] mx-auto hover:scale-110 transtion duration-300 ease-in-out cursor-pointer"
            />
            <h5 className="text-lg 2xl:text-xl 5xl:text-2xl font-bold text-black text-center leading-normal pt-1">Node.Js</h5>
          </div>
          <div className="p-2 md:p-3 bg-white rounded-lg ">
            <Image
              src="/assets/images/express-js.png"
              alt="html image"
              width={70}
              height={70}
              className="w-[70px] h-[70px] mx-auto hover:scale-110 transtion duration-300 ease-in-out cursor-pointer"
            />
            <h5 className="text-lg 2xl:text-xl 5xl:text-2xl font-bold text-black text-center leading-normal pt-1">Express.Js</h5>
          </div>
          <div className="p-2 md:p-3 bg-white rounded-lg ">
            <Image
              src="/assets/images/mongodb.svg"
              alt="html image"
              width={70}
              height={70}
              className="w-[70px] h-[70px] mx-auto hover:scale-110 transtion duration-300 ease-in-out cursor-pointer"
            />
            <h5 className="text-lg 2xl:text-xl 5xl:text-2xl font-bold text-black text-center leading-normal pt-1">MongoDB</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
