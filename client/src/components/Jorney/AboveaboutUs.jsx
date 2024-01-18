import { motion } from "framer-motion";
import React from 'react';
import { useInView } from "react-intersection-observer";

const AboveaboutUs = () => {
    const variants = {
        hidden: { y: -200, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, delay: 0.5, duration:1.5 } },
      };
      
      const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.5,
      });
    
    return ( 
    
    
    <div className="flex justify-center">
    <motion.div
    ref={ref}
      className="flex flex-wrap w-4/6 gap-4 justify-center bg-success   mx-auto  rounded-t-3xl mx-4 md:mx-8 lg:mx-32 pt-4 pb-8 "
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      
      
      transition={{ duration: 1.8, delay: 0.2 }}
    >
       <h2 className="text-5xl  p-4 font-extrabold text-center font-playful">About Us</h2>
       
 

    </motion.div>
    </div> );
}
 
export default AboveaboutUs;