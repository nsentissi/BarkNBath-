import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./bubble.module.css";
import van from "../../assets/van.png";

import parkingSign from "../../assets/parking.png";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/homepage.svg";


const Landingpage = () => {


  const headlineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };

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

  const dogVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 2,
        delay: 3,
      },
    },
  };
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

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
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div
        className="flex items-center justify-center h-screen z-0 bg-cover bg-center  landing-page-bg"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div
          ref={ref}
          className="flex flex-col md:flex-row   items-center z-0 justify-center h-screen"
        >
          {/* Headline */}
          <motion.div
            ref={ref}
            className=""
            variants={textVariants}
            animate={inView ? "visible" : "hidden"}
          >
            <h2
              variant={headlineVariants}
              className="text-white text-center font-playful text-2xl  lg:text-5xl w-10/12 mx-auto mt-[-10rem] font-bold"
            >
              Sit, Stay, and Relax at Home While we Pamper your Pet on Wheels
            </h2>
            <p className="font-playful text-white lg:text-2xl font-semibold p-6 text-center">
              Our Mobile Spa Brings the Best Pet Grooming to your Doorstep!
            </p>
           {/*  <p className="font-playful text-white font-semibold p-3 text-center">
              So why wait?
            </p> */}
             <Link
               to="/login"
              className="bg-success animate-bounce mx-auto mt-4 flex justify-center hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 w-1/2 text-center rounded-xl"
            >
              GET STARTED
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Van  */}

      <motion.img
        ref={ref}
        className="absolute bottom-10 right-14 md:right-32 lg:right-52 transform lg:-translate-x-1/2 lg:translate-y-0 w-1/2 md:w-1/3 lg:w-38vw"
        src={van}
        alt="Van"
        variants={vanVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{ maxWidth: "900px" }}
      />

      {/* Parking Sign  */}
      <motion.img
        ref={ref}
        className="absolute bottom-16 right-60  md:right-96 lg:right-1/3 lg:mr-36 transform lg:-translate-x-1/2 lg:translate-y-0  w-1/5 md:w-1/5 lg:w-20vw"
        src={parkingSign}
        initial="hidden"
        animate="visible"
        alt="Parking Sign"
        variants={parkingSignVariants}
        style={{ maxWidth: "200px" }}
      />
    </div>
  );
};

export default Landingpage;
