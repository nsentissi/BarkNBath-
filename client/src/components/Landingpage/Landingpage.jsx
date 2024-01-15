import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./bubble.module.css";
import van from "../../assets/van.png"
import parkingSign from "../../assets/parking.png"
import backgroundImage from "../../assets/homepage.svg"
import dogclean from "../../assets/doggrass.png";

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
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >

        <div className="flex flex-col md:flex-row   items-center z-0 justify-center h-screen">
          <motion.img
            className="absolute bottom-10 left-80 transform"
            src={dogclean}
            alt="Dog"
            variants={dogVariants}
            initial="hidden"
            animate="visible"
            style={{ maxWidth: "300px" }}
          />

          {/* Headline */}
          <div className="">
            <h2 className="text-white text-center font-playful text-3xl lg:text-6xl font-bold">
              Welcome to Serenity on Wheels!{" "}
            </h2>
            <p className="font-playful text-white font-semibold p-6 text-center">
              We believe wellness shouldn't be a luxury, but a regular part of
              life and that goes for our furry friends too.
            </p>
            <p className="font-playful text-white font-semibold p-3 text-center">
              So why wait?
            </p>

            <button className="bg-success animate-bounce flex justify-center hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 w-1/4 rounded-xl">
              Book your appointment
            </button>
          </div>
        </div>
      </div>

      {/* Van  */}

      <motion.img
        className="absolute bottom-10 right-14 md:right-32 lg:right-52 transform lg:-translate-x-1/2 lg:translate-y-0 w-1/2 md:w-1/3 lg:w-38vw"
        src={van}
        alt="Van"
        variants={vanVariants}
        initial="hidden"
        animate="visible"
        style={{ maxWidth: "900px" }}
      />

      {/* Parking Sign  */}
      <motion.img
        className="absolute bottom-16 right-60  md:right-96 lg:right-1/3 lg:mr-36 transform lg:-translate-x-1/2 lg:translate-y-0  w-1/5 md:w-1/5 lg:w-20vw"
        src={parkingSign}
        alt="Parking Sign"
        variants={parkingSignVariants}
        style={{ maxWidth: "200px" }}
/>
</div>
  );
};

export default Landingpage;
