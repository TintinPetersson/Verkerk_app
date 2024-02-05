import React from "react";
import styles, { layout } from "../style";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-col justify-between w-full">
          <h1 className="flex-1 font-kalam font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Hej! <br className="sm:block hidden" />{" "}
          </h1>
          <div className="flex-1 font-kalam  font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            <span className="animated-text">Mitt namn är</span>
          </div>
          <div className="ss:flex hidden md:mr-4 mr-0"></div>
        </div>
        <h1 className="font-kalam font-semibold ss:text-[68px] text-[52px] text-orange-500 ss:leading-[100px] leading-[75px] w-full">
          Amanda Verkerk.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          excepturi quas voluptas vero esse blanditiis veniam iusto consequatur
          rerum ad. Veniam deleniti inventore consequatur accusamus illum iste
          quo labore rem.
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src=""
          alt="amanda_verkerk"
          className="relative z-[5] hero-image w-[100%] h-[100%]"
        />
      </div>
    </section>
  );
};

export default Hero;
