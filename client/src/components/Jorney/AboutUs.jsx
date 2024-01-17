import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import dog from "../../assets/dog.svg";
import ShuffleHero from "./ShuffleHero";
import AboveaboutUs from "./AboveaboutUs";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80 },
    },
    exit: { opacity: 0, x: 100, transition: { duration: 0.5 } },
  };

  const dogImageVariants = {
    offscreen: { x: 100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 6,
      },
    },
  };
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });


  return (
    <div>
      <AboveaboutUs />
      <div className="bg-secondary py-0 ">
        <div className="flex justify-center ">
          <ShuffleHero />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-10 mt-10 w-full">
          <motion.div
            ref={ref}
            className="w-full md:w-4/12 px-6"
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h1 className="text-7xl text-white font-playful text-center md:text-left">
              Indulge Your Pet in Luxury
            </h1>
            <p className="mt-8 mb-8 text-white text-center font-playful md:text-left">
              Experience a new level of pet care with our mobile spa services.
              Treat your furry friend to the best in pet pampering – because
              they deserve it!
            </p>
            <div className="flex justify-center md:justify-start">
              <Link 
              to="/login"
              className="bg-success hover:bg-gray-400 text-gray-800 font-bold py-4 px-6 rounded-xl mx-auto mt-4 flex items-center  animate-bounce text-center whitespace-nowrap text-sm lg:text-base min-w-max">
                Get started
              </Link>
            </div>
          </motion.div>
          <motion.img
           ref={ref}
            className="-mb-10 w-full md:w-auto"
            variants={dogImageVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            src={dog}
            alt="dog picture"
           
          
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
