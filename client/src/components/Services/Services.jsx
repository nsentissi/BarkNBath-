import React, { useState } from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./Service.module.css";
import { Link } from "react-router-dom";
import bathing from "../../assets/bathing.jpg";
import pawcare from "../../assets/pawcare.jpg";
import haircut from "../../assets/haircut.jpg";
import breed from "../../assets/breed.jpg";
import thework from "../../assets/thework.jpg";
import dental from "../../assets/dental.jpg";
import ServicesDog from "../ServicesDog";
import TrashApp from "../../assets/trashapp.svg";

Modal.setAppElement("#root");

function Services() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

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
    <div className="w-full z-0 min-h-screen flex flex-col justify-center items-center py-20">
      <div className="text-center py-10">
        <h1 className="font-bold text-4xl mb-4 uppercase font-playful tracking-widest">
          Dog Grooming Overview
        </h1>
        <h1 className="text-xl font-playful mb-12">
          The Complete Grooming Experience
        </h1>
        <div className="font-playful ml-4" to="/services">
          <button
            className="bg-success hover:bg-accent animate-pulse font-bold text-xl text-gray-800 font-bold py-4 px-8 rounded-xl"
            onClick={openModal}
          >
            Check Pricing Details
          </button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Services Modal"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto"
            className="relative w-full h-full flex justify-center items-start pt-10"
          >
            <div className="w-full  bg-black bg-opacity-50 overflow-y-auto rounded-none">
              <ServicesDog />
              <button onClick={closeModal} className="absolute top-5 right-5">
                <img src={TrashApp} className="w-8" />
              </button>
            </div>
          </Modal>
        </div>
      </div>

      <section
        id="Projects"
        className="lg:w-3/4 md:w-full mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-2 mt-10 mb-5"
      >
        <motion.div
          ref={card1Ref}
          variants={cardVariants}
          initial="offscreen"
          animate={card1InView ? "onscreen" : "offscreen"}
          className="w-80  bg-success/70 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl "
        >
          <a href="#">
            <img
              src={bathing}
              alt="Product"
              className="h-80 w-80 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-900 font-semibold mr-3 uppercase text-xs">
                Package
              </span>

              <div className="flex items-center">
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Premium Bath
                </p>

                <div className="ml-auto"></div>
              </div>
              <p className="text-sm font-semibold text-black cursor-auto my-3">
                Warm Filtered Water Massage and Nutrient-Enhanced Wash, Tailored
                for Breed and Coat Type
              </p>
            </div>
          </a>
        </motion.div>

        <motion.div
          ref={card3Ref}
          variants={cardVariants}
          initial="offscreen"
          animate={card3InView ? "onscreen" : "offscreen"}
          className="w-80 bg-success/70 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
        >
          <a href="#">
            <img
              src={pawcare}
              alt="Product"
              className="h-80 w-80 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-900 font-semibold mr-3 uppercase text-xs">
                Package
              </span>

              <div className="flex items-center">
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Ultimate Paw Care
                </p>

                <div className="ml-auto"></div>
              </div>
              <p className="text-sm font-semibold text-black cursor-auto my-3">
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
          className="w-80 bg-success/70 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
        >
          <a href="#">
            <img
              src={haircut}
              alt="Product"
              className="h-80 w-80 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-900 font-semibold mr-3 uppercase text-xs">
                Package
              </span>

              <div className="flex items-center">
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Doggy Haircut
                </p>

                <div className="ml-auto"></div>
              </div>
              <p className="text-sm font-semibold text-black cursor-auto my-3">
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
          className="w-80 bg-accent/70 shadow-md rounded-xl duration-500"
        >
          <a href="#">
            <img
              src={breed}
              alt="Product"
              className="h-80 w-80 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-900 font-semibold mr-3 uppercase text-xs">
                Package
              </span>

              <div className="flex items-center">
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Breed Standard
                </p>

                <div className="ml-auto"></div>
              </div>
              <p className="text-sm font-semibold text-black cursor-auto my-3">
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
          className="w-80 bg-accent/70 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
        >
          <a href="#">
            <img
              src={thework}
              alt="Product"
              className="h-80 w-80 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-900 font-semibold mr-3 uppercase text-xs">
                Package
              </span>

              <div className="flex items-center">
                <p className="text-lg font-bold text-black truncate block capitalize">
                  The Works
                </p>

                <div className="ml-auto"></div>
              </div>
              <p className="text-sm font-semibold text-black cursor-auto my-3">
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
          className="w-80 bg-accent/70 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
        >
          <a href="#">
            <img
              src={dental}
              alt="Product"
              className="h-80 w-80 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-900 font-semibold mr-3 uppercase text-xs">
                Package
              </span>

              <div className="flex items-center">
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Doggy Dental Brushing
                </p>

                <div className="ml-auto"></div>
              </div>
              <p className="text-sm font-semibold text-black cursor-auto my-3">
                Keep Your Dog's K-9's clean and strong with a thorough brushing
                and fresh breath spray
              </p>
            </div>
          </a>
        </motion.div>
      </section>
    </div>
  );
}

export default Services;
