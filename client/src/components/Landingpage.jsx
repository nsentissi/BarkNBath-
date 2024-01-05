import React from "react";
import { motion } from "framer-motion";
import "../App.css";

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
      transition: { type: "spring", duration: 3, delay: 1 }
    }
  };
  
  const vanVariants = {
    hidden: { x: "100vw" }, 
    visible: {
      x: 0,
      transition: { 
        type: "spring", 
        duration: 3, 
        delay: 2, 
        bounce: 0.3 
      }
    }
  };
  

  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center landing-page-bg"
         style={{ backgroundImage: `url('./src/assets/homepage.svg')` }}
        >

      {/* Text  */}
      <motion.div className="absolute top-1/4 md:top-1/3 lg:top-1/2 text-center"
                  variants={textVariants}
                  initial="hidden"
                  animate="visible">
        <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-chewy">
          Pamper Your Dog
        </h1>
      </motion.div>

      {/* Van  */}
      <motion.img className="absolute bottom-10 right-14 md:right-32 lg:right-80 transform lg:-translate-x-1/2 lg:translate-y-0 w-1/2 md:w-1/3 lg:w-38vw"
                  src="./src/assets/van.png"
                  alt="Van"
                  variants={vanVariants}
                  initial="hidden"
                  animate="visible"
                  style={{ maxWidth: '900px' }} />

      {/* Parking Sign  */}
      <motion.img className="absolute bottom-14 right-60  md:right-96 lg:right-1/2 lg:mr-36 transform lg:-translate-x-1/2 lg:translate-y-0  w-1/5 md:w-1/5 lg:w-20vw"
                  src="./src/assets/parking.png"
                  alt="Parking Sign"
                  variants={parkingSignVariants}
                  initial="hidden"
                  animate="visible" 
                  style={{ maxWidth: '200px' }}/>
    </div>
  );
};

export default Landingpage;