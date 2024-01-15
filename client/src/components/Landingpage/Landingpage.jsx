import React, { useState,useEffect } from "react";
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

  const vanTextVariants = vanVariants; 


  const newImageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, delay: 2}, // Delay of 4 seconds (2 seconds after the van)
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
         <div className="flex flex-col md:flex-row   items-center z-0 justify-center h-screen">
      {/* Dirty Dog Image */}
      <motion.div
        className="w-32 h-40 md:w-48 md:h-96 rounded-full bg-[url('../../src/assets/dirtydog.png')] bg-cover bg-start "
        variants={newImageVariants}
        initial="hidden"
        animate="visible"
      ></motion.div>

      {/* Headline */}
      <div >
      <h1 className="text-xl md:text-3xl font-playful mx-4 my-2"><BubbleText/></h1>
      <p className="text-xl md:text-3xl font-playful mx-4 my-2"><BubbleText2/></p>
      </div>
      {/* Clean Dog Image */}
      <motion.div
        className="w-32 h-40 md:w-48 md:h-96 rounded-full bg-[url('../../src/assets/cleandog.png')] bg-cover bg-start"
        variants={newImageVariants}
        initial="hidden"
        animate="visible"
      ></motion.div>
    </div>
        </div>

        {/* Van  */}
        <div className="flex flex-col">
        <motion.div
    className="absolute right-14 md:right-32 lg:right-64 mx-auto bottom-4 text-center text-xl md:text-2xl lg:text-3xl font-bold font-playful text-black"
    variants={vanTextVariants}
    initial="hidden"
    animate="visible"
  >
    <AnimatedText text="Here we come to help"  />
  </motion.div>
        <motion.img
          className="absolute bottom-10 right-14 md:right-32 lg:right-50 transform lg:-translate-x-1/2 lg:translate-y-0 w-1/2 md:w-1/3 lg:w-38vw"
          src="./src/assets/van.png"
          alt="Van"
          variants={vanVariants}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: "900px" }}
        />
</div>
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
const AnimatedText = ({ text  }) => {
  const colors = ["yellow", "orange", "blue"];
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => setAnimate(true), 3); 
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  const letterAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: custom => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1 }
    })
  };

  return text.split("").map((char, index) => (
    <motion.span
      key={index}
      custom={index}
      className={styles[colors[index % colors.length]]}
      variants={letterAnimation}
      initial="hidden"
      animate={animate ? "visible" : "hidden"}
      style={{ display: "inline-block" }}
    >
      {char}
    </motion.span>
  ));
};

export default Landingpage;
