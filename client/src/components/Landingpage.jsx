import React from "react";
import { motion } from "framer-motion";

const Landingpage = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, duration: 5 },
    },
  };

  const vanVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: { type: "tween", duration: 2, delay: 1 },
    },
  };

  return (
    <div style={{backgroundImage: `url('./src/assets/homepage.svg')`,backgroundSize: 'cover',backgroundPosition: 'center center', height: '100vh'}}>
      <motion.div
      className="flex justify-center h-screen items-start"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-6xl text-white font-chewy">Pamper Your Dog with Bark N Bath</h1>
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
