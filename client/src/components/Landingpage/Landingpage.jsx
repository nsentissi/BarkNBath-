import React, { useState} from "react";
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
    <section className="flex items-center justify-center h-screen bg-cover bg-center landing-page-bg"
         style={{ backgroundImage: `url('./src/assets/homepage.svg')` }}
        >
 


      {/* Text  */}
      <motion.div className="absolute top-1/10 md:top-1/5 lg:top-1/4 text-center"
                  variants={textVariants}
                  initial="hidden"
                  animate="visible">
        <div className="text-2xl md:text-4xl lg:text-5xl tracking-widest text-white font-chewy">
      <BubbleText />
      <BubbleText2 />
      
    </div>
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
    </section>
  );
};


const BubbleText = () => {
  return (
    <h2 className="text-4xl md:text-7xl lg:text-6xl xl:text-6xl font-thin text-white text-center">
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
    <h2 className="text-3xl md:text-6xl lg:text-5xl xl:text-5xl font-thin text-white text-center pt-12">
      {"the Doggy Way".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default Landingpage;
