import { motion } from "framer-motion";
import React from 'react';


const AboveaboutUs = () => {
    const variants = {
        hidden: { y: -200, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, delay: 1, duration:1.5 } },
      };
      
    return ( 
    
    
    <div className="flex justify-center">
    <motion.div
      className="flex flex-wrap w-4/6 gap-4 justify-center bg-success   mx-auto  rounded-t-3xl mx-4 md:mx-8 lg:mx-32 pt-4 pb-8 "
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1.8, delay: 0.3 }}
    >
       <h2 className="text-5xl  p-4 font-extrabold text-center font-playful">About Us</h2>
       
 

    </motion.div>
    </div> );
}
 
export default AboveaboutUs;