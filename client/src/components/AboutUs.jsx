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
    <div className="bg-primary pt-0 ">
      <div className="flex justify-center">
        <motion.section
          className="flex flex-wrap w-3/4 gap-4 justify-center bg-info  mx-auto  rounded-b-3xl mx-4 md:mx-8 lg:mx-32 pt-4 pb-8 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={variants}
        >
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16 w-3/4"
            variants={variants}
          >
            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <a href="#" class="block">
                <div class="h-28">
                  <div class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-secondary rounded-xl justify-items-center align-middle">
                    <img
                      class="w-36 h-36  mt-6 m-auto"
                      src="../src/assets/heart.png"
                      alt="paw icon"
                      loading="lazy"
                      width="150"
                      height="200"
                    ></img>
                  </div>
                </div>
                <div class="p-6   z-10 w-full   ">
                  <p class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                    Convenience
                  </p>
                </div>
              </a>
            </div>

            <motion.div
              class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md "
              variants={variants}
            >
              <a href="#" class="block">
                <div class="h-28">
                  <div class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-secondary rounded-xl justify-items-center align-middle">
                    <img
                      class="w-36 h-36  mt-6 m-auto"
                      src="../src/assets/Paw.png"
                      alt="paw icon"
                      loading="lazy"
                      width="150"
                      height="200"
                    ></img>
                  </div>
                </div>
                <div class="p-6   z-10 w-full   ">
                  <p class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                    No Cages
                  </p>
                </div>
              </a>
            </motion.div>

            <motion.div
              class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
              variants={variants}
            >
              <a href="#" class="block">
                <div class="h-28">
                  <div class="absolute -top-20 lg:top-[-10%] left-[5%] z-40 group-hover:top-[-40%] group-hover:opacity-[0.9] duration-300 w-[90%] h-48 bg-secondary rounded-xl justify-items-center align-middle">
                    <div class="relative">
                      <img
                        src="../src/assets/dog-icon.png"
                        alt="paw icon"
                        class="w-36 h-36 mt-8 m-auto"
                        title="Automotive"
                        loading="lazy"
                        width="200"
                        height="200"
                      ></img>
                      <p class="absolute top-2 left-0 z-50 mb-2 mt-[-20px] inline-block text-black text-center w-full text-xl tracking-wider font-chewy  leading-snug tracking-normal antialiased">
                        Less Stress
                      </p>
                    </div>
                  </div>
                </div>
                <div class="p-6   z-10 w-full   ">
                  <p class="mb-2 mt-[-20px] inline-block text-tg text-center   w-full  text-sm  font-chewy  leading-snug tracking-normal   antialiased">
                    We eliminate the stress and anxiety of a traditional noisy,
                    chaotic grooming shop environment
                  </p>
                </div>
              </a>
            </motion.div>
            <motion.div
              class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
              variants={variants}
            >
              <a href="#" class="block">
                <div class="h-28">
                  <div class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-secondary rounded-xl justify-items-center align-middle">
                    <img
                      src="../src/assets/time.png"
                      class="w-36 h-36  mt-6 m-auto"
                      alt="Automotive"
                      title="Automotive"
                      loading="lazy"
                      width="150"
                      height="200"
                    ></img>
                  </div>
                </div>
                <div class="p-6   z-10 w-full   ">
                  <p class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                    Its Fast
                  </p>
                </div>
              </a>
            </motion.div>
            <motion.div
              class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
              variants={variants}
            >
              <a href="#" class="block">
                <div class="h-28">
                  <div class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-secondary rounded-xl justify-items-center align-middle">
                    <img
                      src="../src/assets/grooming.png"
                      class="w-36 h-36  mt-6 m-auto"
                      alt="Automotive"
                      title="Automotive"
                      loading="lazy"
                      width="200"
                      height="200"
                    ></img>
                  </div>
                </div>
                <div class="p-6   z-10 w-full   ">
                  <p class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                    Groomers know your Pet
                  </p>
                </div>
              </a>
            </motion.div>
            <motion.div
              class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
              variants={variants}
            >
              <a href="#" class="block">
                <div class="h-28">
                  <div class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-secondary rounded-xl justify-items-center align-middle">
                    <img
                      src="../src/assets/privacy.png"
                      class="w-36 h-36  mt-6 m-auto"
                      alt="Automotive"
                      title="Automotive"
                      loading="lazy"
                      width="200"
                      height="200"
                    ></img>
                  </div>
                </div>
                <div class="p-6   z-10 w-full   ">
                  <p class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                    Privacy for your Pet
                  </p>
                </div>
              </a>
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
