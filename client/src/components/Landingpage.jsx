import React from "react";
import { motion } from "framer-motion";

const Landingpage = () => {
  const gifVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 80, duration: 1, delay: 1 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 80, duration: 14, delay: 1 },
    },
  };

  const vanVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: { type: "tween", duration: 3, delay: 1 },
    },
  };

  return (
    <div style={{backgroundImage: `url('./src/assets/homepage.svg')`, backgroundSize: 'cover', backgroundPosition: 'center center', height: '100vh'}}>
      <motion.div
        className="flex flex-row justify-center items-center h-screen"
        initial="hidden"
        animate="visible"
      >
        <motion.div
           className="flex flex-col items-center justify-center mr-32" 
          variants={gifVariants}
          style={{ width: '25%' }}
        >
          <motion.img
            
            src=".\src\assets\dogintub.gif"
            alt="Dog in Tub"
          />
        </motion.div>

        <motion.div
          className="flex justify-end"
          variants={textVariants}
        >
          <h1 className="text-6xl text-white font-chewy">Pamper Your Dog </h1>
        </motion.div>
      </motion.div>

      <motion.img
        src="./src/assets/van.png"
        alt="Van"
        style={{ position: 'absolute', bottom: 0, right: 0 }}
        variants={vanVariants}
        initial="hidden"
        animate="visible"
      />
    </div>
  );
};

export default Landingpage;
