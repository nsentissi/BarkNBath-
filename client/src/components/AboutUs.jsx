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
    <div className="bg-secondary py-0 ">
      <div className="flex justify-center">
        <motion.section
          className="flex flex-wrap w-4/6 gap-4 justify-center bg-success  mx-auto  rounded-b-3xl mx-4 md:mx-8 lg:mx-32 pt-4 pb-8 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={variants}
        >
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 md:gap-y-16 w-full md:w-3/4 mx-auto"
            variants={variants}
          >
            <motion.div class="p-4 py-0" variants={variants}>
            <div class="relative border-l-2 border-t-2 border-primary p-4">
              <div class="bg-transparent rounded-full w-16 h-16 flex justify-center items-center text-indigo-500 shadow-2xl">
                <img src=".\src\assets\conv1.png" class="h-16 w-16" />
              </div>
              <h2 class="uppercase mt-6 text-black font-chewy tracking-wider font-medium mb-3">
              Convenience
              </h2>
              <p class="font-semibold text-sm text-gray-700  mb-3">
              We're here to simplify your life. With straightforward scheduling and a dedication to your comfort, we're committed to providing you with a stress-free experience at every turn.
              </p>
              </div>
            </motion.div>
            <motion.div class="p-4 py-0" variants={variants}>
            <div class="relative  border-t-2 border-primary p-4">
              <div class="bg-transparent rounded-full w-16 h-16 flex justify-center items-center text-indigo-500 shadow-2xl">
                <img src=".\src\assets\knowing1.png" class="h-16 w-16" />
              </div>
              <h2 class="uppercase mt-6 text-black font-chewy tracking-wider font-medium mb-3">
              Certified groomers
              </h2>
              <p class="font-semibold text-sm text-gray-700   mb-3">
              We understand your pet's needs.  With us, your furry friend will be in the hands of professionals who truly 'Know Your Pet,' ensuring a comfortable and enjoyable grooming experience.
              </p>
              </div>
            </motion.div>
            <motion.div class="p-4 py-0" variants={variants}>
            <div class="relative border-r-2 border-t-2 border-primary p-4">
              <div class="bg-transparent rounded-full w-16 h-16 flex justify-center items-center text-indigo-500 shadow-2xl">
                <img src=".\src\assets\time1.png" class="h-16 w-16" />
              </div>
              <h2 class="uppercase mt-6 text-black font-chewy tracking-wider font-medium mb-3">
                TIME-SAVING
              </h2>
              <p class="font-semibold text-sm text-gray-700   mb-3">
              Our expert therapists bring the spa experience directly to your doorstep, eliminating the need for travel and saving you precious hours in your busy day. 
              </p>
              </div>
            </motion.div>
            <motion.div class="p-4 py-0" variants={variants}>
            <div class="relative border-l-2 border-b-2 border-primary p-4">
              <div class="bg-transparent rounded-full w-16 h-16 flex justify-center items-center text-indigo-500 shadow-2xl">
                <img src=".\src\assets\less.png" class="h-16 w-16" />
              </div>
              <h2 class="uppercase mt-6 text-black font-chewy tracking-wider font-medium mb-3">
              More Relaxed
              </h2>
              <p class="font-semibold text-sm text-gray-700   mb-3">
              Give your beloved pets the treatment they deserve. Our pet services are designed to minimize their stress and maximize the comfort for your furry friends. 
              </p>
              </div>
            </motion.div>
            <motion.div class="p-4 py-0" variants={variants}>
              
              <div class="bg-transparent rounded-full w-16 h-16 flex justify-center items-center text-indigo-500 shadow-2xl">
                <img src=".\src\assets\cages.png" class="h-16 w-16" />
              </div>
              <h2 class="uppercase mt-6 text-black font-chewy tracking-wider font-medium mb-3">
              No Cages
              </h2>
              
              <p class="font-semibold text-sm text-gray-700   mb-3">
              Say goodbye to cramped, uncomfortable cages, and rest assured that your pet will have the freedom they deserve with us.
              </p>
              
            </motion.div>
            
            <motion.div class="p-4 py-0" variants={variants}>
            <div class="relative border-r-2 border-b-2 border-primary p-4">
              <div class="bg-transparent rounded-full w-16 h-16 flex justify-center items-center text-indigo-500 shadow-2xl">
                <img src=".\src\assets\privacy1.png" class="h-16 w-16" />
              </div>
              <h2 class="uppercase mt-6 text-black font-chewy tracking-wider font-medium mb-3">
                Pet Privacy
              </h2>
              <p class="font-semibold text-sm text-gray-700  mb-3">
              Protecting your pet's privacy is our priority. We understand that your furry companion deserves respect and care, not just in their grooming or care routine but also in safeguarding their personal space.
              </p>
              </div>
            </motion.div>
           
          </motion.div>

        </motion.section>
      </div>

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
