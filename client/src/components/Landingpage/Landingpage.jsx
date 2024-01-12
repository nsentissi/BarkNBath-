import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./bubble.module.css";

const Landingpage = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, duration: 1, delay: 1 },
    },
  };

  const parkingSignVariants = {
    hidden: { y: "-100vh" },
    visible: {
      y: 0,
      transition: { type: "spring", duration: 3, delay: 1 },
    },
  };

  const vanVariants = {
    hidden: { x: "100vw" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        duration: 3,
        delay: 2,
        bounce: 0.3,
      },
    },
  };

  return (
    <div className={styles.area}>
      <ul className={styles.circles}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div
        className="flex items-center justify-center h-screen z-0 bg-cover bg-center  landing-page-bg"
        style={{ backgroundImage: `url('./src/assets/homepage.svg')` }}
      >
        {/* Text  */}
        <motion.div
          className="absolute top-1/10  md:top-1/5 lg:top-1/4 text-center"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <div className=" flex justify-between items-center md:flex lg-flex mb-10 p-10">
            <div className="">
              <div className="flex flex-col md:flex-row items-start justify-center space-y-10 md:space-y-0 md:space-x-10 mx-auto  w-full">
                <motion.div className="w-full md:w-6/12 px-6 leading-8">
                <h2 className="text-5xl font-bold font-chewy mx-auto">
                    <BubbleText />
                  </h2>
                  <p className="mb-10 font-chewy">
                    <BubbleText2 />
                  </p>
                  <p className="mt-8 mb-8  text-white text-center font-dosis font-semibold  md:text-left">
                    <p className="italic">
                      Pamper Your Purry friend on the Go!{" "}
                    </p>
                    <div className="flex flex-row items-center ">
                      <p className="text-success font-chewy tracking-widest font-bold py-2 px-4 mb-2 sm:mb-0 mr-2">
                        Sign up
                      </p>
                      <svg
                        className="w-6 h-8 -ml-2  animate-pulse  "
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                        />
                      </svg>
                    </div>{" "}
                    <div className="flex flex-row items-center">
                      <p className="text-success font-chewy tracking-widest font-bold py-2 px-4 mb-2 sm:mb-0 mr-2">
                        Book the Mobile Spa Session
                      </p>
                      <svg
                        className="w-6 h-8 -ml-2  animate-pulse "
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                        />
                      </svg>
                    </div>
                    <p className="italic">
                      and Share Your Furry Friend's Blissful Experience with Our
                      Community. Join Us Now and Treat Your Pet to the Ultimate
                      Indulgence!
                    </p>
                  </p>
                </motion.div>
                <div>
                  
                  <div className="flex  items-center justify-center ">
                    <span className="inline-block animate-bounce   p-8 text-success tracking-widest font-chewy text-xl">
                      Find out more
                      <svg
                        className="w-6 h-8 mx-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="4"
                          d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Van  */}
        <motion.img
          className="absolute bottom-10 right-14 md:right-32 lg:right-80 transform lg:-translate-x-1/2 lg:translate-y-0 w-1/2 md:w-1/3 lg:w-38vw"
          src="./src/assets/van.png"
          alt="Van"
          variants={vanVariants}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: "900px" }}
        />

        {/* Parking Sign  */}
        <motion.img
          className="absolute bottom-14 right-60  md:right-96 lg:right-1/2 lg:mr-36 transform lg:-translate-x-1/2 lg:translate-y-0  w-1/5 md:w-1/5 lg:w-20vw"
          src="./src/assets/parking.png"
          alt="Parking Sign"
          variants={parkingSignVariants}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: "200px" }}
        />
      </div>
    </div>
  );
};

const BubbleText = () => {
  return (
    <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-thin text-white text-center">
      {"Spa Day".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};
const BubbleText2 = () => {
  return (
    <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-3xl font-thin text-white text-center pt-12">
      {"the Doggy Way".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default Landingpage;
