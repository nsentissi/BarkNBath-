import React from "react";
import { motion } from "framer-motion";

const Landingpage = () => {
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
      opacity: 1,
      x: 0,
      transition: { type: "spring", duration: 3, delay: 1, bounce: 0.2 },
    },
  };

  return (
    <div
      style={{
        backgroundImage: `url('./src/assets/homepage.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "100vh",
      }}
    >
      <motion.div
        className="flex flex-col items-center justify-center"
        variants={textVariants}
        style={{ position: "absolute", bottom: 380, right: 400 }}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-6xl text-white font-chewy">Pamper Your Dog </h1>
      </motion.div>

      <motion.img
        src="./src/assets/van.png"
        alt="Van"
        style={{ position: "absolute", bottom: 0, right: 0 }}
        variants={vanVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.img
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          borderRadius: "50%",
          overflow: "hidden",
          position: "absolute",
          bottom: 370,
          right: 300,
        }}
        src="./src/assets/parkingspace.png"
        alt="Van"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      />
    </div>
  );
};

export default Landingpage;
