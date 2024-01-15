import { motion } from "framer-motion";
import React from 'react';
import styles from "./jorney.module.css";
import createacc from "../../assets/createacc.png"
import nr2 from "../../assets/nr2.png"
import nr1 from "../../assets/nr1.png"
import community from "../../assets/community.png"
import doghearts from "../../assets/community.png"
import nr3 from "../../assets/nr3.png"

const titleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

const stepOneVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { delay: 0.8, duration:1.5 } },
};

const stepTwoVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, duration: 2, transition: { delay: 0.8, duration:1.5 } },
};

const variants = {
  hidden: { y: -200, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, delay: 1, duration:1.5 } },
};

const Journey = () => (
  <div className={styles.area}>
  <ul className={styles.circles}>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <div className="">
    <div className="overflow-y-hidden">
      <div className="mx-auto  container f-f-p px-4 xl:px-0 py-24">
        <motion.h1
          className=" font-chewy focus:outline-none text-center text-3xl lg:text-4xl font-extrabold lg:leading-9 tracking-wider text-gray-900"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          How it works?
        </motion.h1>
        <div className="md:mt-24 f-f-p">
          <div className="hidden md:flex justify-center w-full">
            <motion.div
              className="flex flex-col items-center md:items-end md:pr-12 md:border-r-4 border-gray-300 relative md:w-1/2"
              variants={stepOneVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <div aria-label="sign up" role="img">
                <img
                  className="focus:outline-none w-38 mt-10"
                  src={createacc}
                  alt="how it work"
                />
              </div>
              <div aria-label={2} role="img">
                <img
                  className="focus:outline-none w-14 mt-24"
                  src={nr2}

                />
              </div>
              <div className="flex mt-12 flex-col items-center lg:items-end md:w-8/12">
                <h1 className="focus:outline-none text-xl font-bold leading-5 font-chewy">
                  Create your Pet's Profile
                </h1>
                <h2 className="focus:outline-none text-gray-500 mt-3 pl-3 text-center md:text-right text-base leading-6 tracking-wide">
                  Create your Pet's(/s) profile and link a payment method that
                  you are comfortable with. Paypal, Visa and more..
                </h2>
              </div>
              <div aria-label="transactions" role="img">
                <img
                  className="focus:outline-none w-38 mt-24"
                  src={community}
                  
                />
              </div>
              <img
                className="hidden md:block absolute right-0 top-0 -mt-2 -mr-1"
                src="https://cdn.tuk.dev/assets/components/111220/Fs7/line.png"
                
              />
            </motion.div>
            <motion.div
              className="flex flex-col items-center md:items-start md:pl-12 lg:border-gray-400 mt-20 md:mt-0 md:w-1/2"
              variants={stepTwoVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <div aria-label={1} role="img">
                <img
                className="focus:outline-none w-14 "
                  src={nr1}
                  
                />
              </div>
              <div className="flex mt-6 flex-col items-center md:items-start md:w-8/12">
                <h1 className=" font-chewy focus:outline-none text-xl font-bold leading-5">
                  Sign Up for an Account
                </h1>
                <h2 className="focus:outline-none text-gray-500 mt-3 text-base leading-6 tracking-wide">
                  Sign up on our website and opt for a service that suits you
                  best.
                </h2>
              </div>
              <div aria-label="wallet" role="img">
                <img
                  className="focus:outline-none w-38 mt-32"
                  src={doghearts}

                />
              </div>
              <div aria-label={3} role="img">
                <img
                  className="focus:outline-none w-14 mt-20"
                  src={nr3}

                />
              </div>
              <div className="flex mt-6 flex-col items-center md:items-start md:w-8/12">
                <h1 className=" font-chewy focus:outline-none text-xl font-bold leading-5">
                  Join our community and services!
                </h1>
                <h2 className="focus:outline-none text-gray-500 mt-3 text-base leading-6 tracking-wide">
                  Start conversations right away. Why wait longer?
                </h2>
              </div>
            </motion.div>
          </div>
          </div>
          {/* MOBILE VERSION  */}
          <motion.div
            className="md:hidden flex flex-col items-center w-full"
            variants={stepOneVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
          >
              <img
            className="w-16 my-10"
              src={nr1}

            />
            <img
              className="focus:outline-none w-38 "
              src={createacc}
              alt="how it work"
            />
          
            <div className="mt-9">
              <h1 className="text-xl text-center tracking-wide leading-5 font-bold">
                Sign Up for an Account
              </h1>
              <h2 className="text-gray-500 mt-3 text-center text-base leading-6 tracking-wide">
                Sign up on our website and opt for a service that suits you
                best.
              </h2>
            </div>
            <img
            className="w-16 my-10"
              src={nr2}
              
            />
            <img
              className="focus:outline-none my-2"
              src={doghearts}

            />
          
            <div className="mt-10">
              <h1 className="text-xl tracking-wide text-center leading-5 font-bold">
                Create your Pet's Profile
              </h1>
              <h2 className="text-gray-500 mt-3 pl-3 text-center text-base leading-6 tracking-wide">
                Create your Pet's(/s) profile and link a payment method that you
                are comfortable with. Paypal, Visa and more..
              </h2>
            </div>
            
            <img
              className ='w-16 my-10'
              src={nr3}

            />
            <img
              className="focus:outline-none my-2"
              src=".\src\assets\community.png"
              
            />
            
            <div className="flex mt-10 flex-col items-center md:items-start md:w-8/12">
              <h1 className="text-xl text-center tracking-wide leading-5 font-bold">
                Join our community and services!
              </h1>
              <h2 className="text-gray-500 mt-3 text-center text-base leading-6 tracking-wide">
                Start conversations right away. Why wait longer?
              </h2>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center">
      <motion.div
        className="flex flex-wrap w-4/6 gap-4 justify-center bg-success   mx-auto  rounded-t-3xl mx-4 md:mx-8 lg:mx-32 pt-4 pb-8 "
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.8, delay: 0.3 }}
      >
         <h2 className="text-3xl font-extrabold text-center font-chewy">About Us</h2>
        <p className="text-center font-light font-chewy p-10 py-0">
          "Bark N Bath offers awesome dog grooming and cleaning. Our crew, experts in cool grooming techniques, makes sure your furry pal looks and feels great. We're all about a chill vibe, custom care, and eco-friendly stuff, making us a top pick for pet lovers."
        </p> 
   

      </motion.div>
      </div>
    </div>
  </div>
 
);

export default Journey;
