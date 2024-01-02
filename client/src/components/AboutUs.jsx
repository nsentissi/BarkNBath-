import React from "react";
import { motion } from "framer-motion";

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

  return (
    <div className="bg-accent pt-0">
      <motion.section
        className="flex flex-wrap gap-4 justify-center bg-gray-100 rounded-b-3xl mx-4 md:mx-8 lg:mx-32 pt-4 pb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={variants}
      >
        <motion.div
          className="flex flex-col items-center w-full md:w-6/12 lg:w-4/12 px-4"
          variants={variants}
        >
          <img
            className="w-10 mb-2"
            src="../src/assets/heart.png"
            alt="paw icon"
          />
          <h3 className="font-bold mb-1">Convenience</h3>
          <p className="w-10/12">
            We know it can be hatd to schedule your dogs grooming appointment
            and make numerous trops to the pet salon
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center w-full md:w-6/12 lg:w-4/12 px-4"
          variants={variants}
        >
          <img
            className="w-10 mb-2"
            src="../src/assets/Paw.png"
            alt="paw icon"
          />
          <h3 className="font-bold mb-1">No Cages</h3>
          <p className="w-10/12">
            Your dog will never see the inside of a cage. He/she will receive
            one-on-one completely specialized attention
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center w-full md:w-6/12 lg:w-4/12 px-4"
          variants={variants}
        >
          <img
            className="w-10 mb-2"
            src="../src/assets/time.png"
            alt="paw icon"
          />
          <h3 className="font-bold mb-1">It's Fast</h3>
          <p className="w-10/12">
            We arrive on time for your dogs appointment so you can sit back and
            relax while we make your dog look and feel their very best
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center w-full md:w-6/12 lg:w-4/12 px-4"
          variants={variants}
        >
          <img
            className="w-10 mb-2"
            src="../src/assets/dog-icon.png"
            alt="paw icon"
          />
          <h3 className="font-bold mb-1">Less Stress</h3>
          <p className="w-10/12">
            We eliminate the stress and anxiety of a traditional noisy, chaotic
            grooming shop environment
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center w-full md:w-6/12 lg:w-4/12 px-4"
          variants={variants}
        >
          <img
            className="w-10 mb-2"
            src="../src/assets/grooming.png"
            alt="paw icon"
          />
          <h3 className="font-bold mb-1">Groomers know your Pet</h3>
          <p className="w-10/12">
            It is our mission to provide a caring, quality and professional
            grooming service to your dog
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center w-full md:w-6/12 lg:w-4/12 px-4"
          variants={variants}
        >
          <img
            className="w-10 mb-2"
            src="../src/assets/privacy.png"
            alt="paw icon"
          />
          <h3 className="font-bold mb-1">Privacy for your Pet</h3>
          <p className="w-10/12">
            No other animals or people are allowed in our mobile grooming trucks
            during your dogs appointment.
          </p>
        </motion.div>
      </motion.section>

      <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-10 mt-10 w-full">
        <motion.div className="w-full md:w-4/12 px-6" variants={variants}>
          <h1 className="text-7xl text-white text-center md:text-left">
            Indulge Your Pet in Luxury
          </h1>
          <p className="mt-8 mb-8 text-white text-center md:text-left">
            Experience a new level of pet care with our mobile spa services.
            Treat your furry friend to the best in pet pampering – because they
            deserve it!
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-neutral hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-xl">
              Book your appointment
            </button>
          </div>
        </motion.div>
        <motion.img
          className="-mb-10 w-full md:w-auto"
          initial="offscreen"
          whileInView="onscreen"
          src="../src/assets/dog.svg"
          alt="dog picture"
          viewport={{ once: true }}
          variants={dogImageVariants}
        />
      </div>
    </div>
  );
};

export default AboutUs;
