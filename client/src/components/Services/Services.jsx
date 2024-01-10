import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
// import WaterDropGrid from "../WaterDropGrid";
// import styles from "./Service.module.css";



function Services() {

  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };
  const [card1Ref, card1InView] = useInView();
  const [card2Ref, card2InView] = useInView();
  const [card3Ref, card3InView] = useInView();
  const [card4Ref, card4InView] = useInView();
  const [card5Ref, card5InView] = useInView();
  const [card6Ref, card6InView] = useInView();

  const cardHoverVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    },
  };

  return (
    // // <div className={styles.servicesContainer}>
    //   {/* <div className={styles.backgroundContainer}>
    //     <WaterDropGrid />
    //   </div> */}
      <div className="w-full min-h-screen flex flex-col justify-center items-center py-20">
        <div class="text-center py-10">
          <h1 class="font-bold text-4xl mb-4 uppercase font-chewy tracking-widest">
            Dog Grooming Overview
          </h1>
          <h1 class="text-xl">The Complete Grooming Experience</h1>
        </div>

        <section
          id="Projects"
          class="w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-2 mt-10 mb-5"
        >
          <motion.div
            ref={card1Ref}
            variants={cardVariants}
            initial="offscreen"
            animate={card1InView ? "onscreen" : "offscreen"}
            className="w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
          >
            <a href="#">
              <img
                src="./src/assets/bathing.jpg"
                alt="Product"
                class="h-80 w-80 object-cover rounded-t-xl"
              />
              <div class="px-4 py-3 w-72">
                <span class="text-gray-400 mr-3 uppercase text-xs">
                  Package
                </span>

                <div class="flex items-center">
                  <p class="text-lg font-bold text-black truncate block capitalize">
                    Premium Bath
                  </p>

                  <div class="ml-auto"></div>
                </div>
                <p class="text-sm font-semibold text-black cursor-auto my-3">
                  Warm Filtered Water Massage and Nutrient-Enhanced Wash,
                  Tailored for Breed and Coat Type
                </p>
              </div>
            </a>
          </motion.div>

          <motion.div
            ref={card3Ref}
            variants={cardVariants}
            initial="offscreen"
            animate={card3InView ? "onscreen" : "offscreen"}
            className="w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
          >
            <a href="#">
              <img
                src="./src/assets/pawcare.jpg"
                alt="Product"
                class="h-80 w-80 object-cover rounded-t-xl"
              />
              <div class="px-4 py-3 w-72">
                <span class="text-gray-400 mr-3 uppercase text-xs">
                  Package
                </span>

                <div class="flex items-center">
                  <p class="text-lg font-bold text-black truncate block capitalize">
                    Ultimate Paw Care
                  </p>

                  <div class="ml-auto"></div>
                </div>
                <p class="text-sm font-semibold text-black cursor-auto my-3">
                  Pad Shaving, Nail Clipping, Feet Scissoring and More!
                </p>
              </div>
            </a>
          </motion.div>
          <motion.div
            ref={card2Ref}
            variants={cardVariants}
            initial="offscreen"
            animate={card2InView ? "onscreen" : "offscreen"}
            className="w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
          >
            <a href="#">
              <img
                src="./src/assets/haircut.jpg"
                alt="Product"
                class="h-80 w-80 object-cover rounded-t-xl"
              />
              <div class="px-4 py-3 w-72">
                <span class="text-gray-400 mr-3 uppercase text-xs">
                  Package
                </span>

                <div class="flex items-center">
                  <p class="text-lg font-bold text-black truncate block capitalize">
                    Doggy Haircut
                  </p>

                  <div class="ml-auto"></div>
                </div>
                <p class="text-sm font-semibold text-black cursor-auto my-3">
                  A perfect trim for a perfect pup!
                </p>
              </div>
            </a>
          </motion.div>
          <motion.div
            ref={card6Ref}
            variants={cardVariants}
            initial="offscreen"
            whileHover="hover"
            animate={card6InView ? "onscreen" : "offscreen"}
            className="w-80 bg-white shadow-md rounded-xl duration-500"
          >
            <a href="#">
              <img
                src="./src/assets/breed.jpg"
                alt="Product"
                class="h-80 w-80 object-cover rounded-t-xl"
              />
              <div class="px-4 py-3 w-72">
                <span class="text-gray-400 mr-3 uppercase text-xs">
                  Package
                </span>

                <div class="flex items-center">
                  <p class="text-lg font-bold text-black truncate block capitalize">
                    Breed Standard
                  </p>

                  <div class="ml-auto"></div>
                </div>
                <p class="text-sm font-semibold text-black cursor-auto my-3">
                  Full Service Styling According To Your Breed - Show Ready
                </p>
              </div>
            </a>
          </motion.div>
          <motion.div
            ref={card4Ref}
            variants={cardVariants}
            initial="offscreen"
            whileHover="hover"
            animate={card4InView ? "onscreen" : "offscreen"}
            
            className="w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
          >
            <a href="#">
              <img
                src="./src/assets/thework.jpg"
                alt="Product"
                class="h-80 w-80 object-cover rounded-t-xl"
              />
              <div class="px-4 py-3 w-72">
                <span class="text-gray-400 mr-3 uppercase text-xs">
                  Package
                </span>

                <div class="flex items-center">
                  <p class="text-lg font-bold text-black truncate block capitalize">
                    The Works
                  </p>

                  <div class="ml-auto"></div>
                </div>
                <p class="text-sm font-semibold text-black cursor-auto my-3">
                  De-shedding, Brushing & Hand Blow Drying
                </p>
              </div>
            </a>
          </motion.div>

          <motion.div
            ref={card5Ref}
            variants={cardVariants}
            initial="offscreen"
            animate={card5InView ? "onscreen" : "offscreen"}
            className="w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
          >
            <a href="#">
              <img
                src="./src/assets/dental.jpg"
                alt="Product"
                class="h-80 w-80 object-cover rounded-t-xl"
              />
              <div class="px-4 py-3 w-72">
                <span class="text-gray-400 mr-3 uppercase text-xs">
                  Package
                </span>

                <div class="flex items-center">
                  <p class="text-lg font-bold text-black truncate block capitalize">
                    Doggy Dental Brushing
                  </p>

                  <div class="ml-auto"></div>
                </div>
                <p class="text-sm font-semibold text-black cursor-auto my-3">
                  Keep Your Dog's K-9's clean and strong with a thorough
                  brushing and fresh breath spray
                </p>
              </div>
            </a>
          </motion.div>
          <Link className="font-sans ml-4 md:block" to="/appointment">
               
        <div className="flex justify-center md:justify-start">
            <button className="bg-success hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-xl" href="/appointment/create">
              Book your appointment
            </button>
            
              
          </div>
          </Link>
        </section>
        
      </div>
    
  );
}

export default Services;
