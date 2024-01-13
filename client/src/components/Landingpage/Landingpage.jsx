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
  const newImageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, delay: 4 } // Delay of 4 seconds (2 seconds after the van)
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
          className="absolute top-1/10  md:top-1/5 lg:top-1/4 text-center "
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
           <div className=" font-chewy mx-auto">
              <BubbleText />
            </div>
            <div className=" font-chewy">
              <BubbleText2 />
            </div>
          <div>
            <div className="flex mt-4 items-center justify-center ">
              <span className="inline-block animate-bounce p-8  text-accent text:hover-accent tracking-widest font-playful font-bold text-xl">
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
           
            <div className="flex justify-center md:justify-start">
            <button className="bg-accent animate-pulse hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-xl">
              Book your appointment
            </button>
          </div>
          </div>
        </motion.div>
       
      
       
        {/* Van  */}
        <motion.img
          className="absolute bottom-10 right-14 md:right-32 lg:right-50 transform lg:-translate-x-1/2 lg:translate-y-0 w-1/2 md:w-1/3 lg:w-38vw"
          src="./src/assets/van.png"
          alt="Van"
          variants={vanVariants}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: "900px" }}
        />

        {/* Parking Sign  */}
        <motion.img
          className="absolute bottom-16 right-60  md:right-96 lg:right-1/2 lg:mr-36 transform lg:-translate-x-1/2 lg:translate-y-0  w-1/5 md:w-1/5 lg:w-20vw"
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
      {"Spa Day".split("").map((child, index) => (
        <span className={styles.hoverText} key={index}>
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
