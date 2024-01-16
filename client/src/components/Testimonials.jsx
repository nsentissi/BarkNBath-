import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image1 from "../assets/portrait1.jpg";
import image2 from "../assets/portrait2.jpg";
import image3 from "../assets/portrait5.jpg";
import image5 from "../assets/portrait8.jpg";
import image6 from "../assets/portrait7.jpg";
import image7 from "../assets/portrait6.jpg";
import image8 from "../assets/portrait9.jpg";

// Testimonials data
const testimonialsData = [
  {
    img: image1,
    quote:
      "Absolutely love this mobile spa van! It's so convenient and saves so much time. My pet was relaxed and happy throughout the whole experience. Highly recommend!",
    name: "Jessie Benett",
  },
  {
    img: image8,
    quote:
      "The best decision I made for my pet's grooming needs! The mobile spa van offers a stress-free and super convenient service. It's fast, efficient, and my pet looks and feels great afterwards. Love it!",
    name: "Aiden Nguyen",
  },
  {
    img: image3,
    quote:
      "Incredible! The mobile spa van is a game-changer. It's so convenient, coming right to our doorstep. My pet enjoyed the pampering, and I loved the efficiency. Will definitely use again.",
    name: "Alvin Wander",
  },
  {
    img: image5,
    quote:
      "I'm so impressed with this mobile spa service! It's the perfect solution for busy pet owners. Quick, efficient, and very convenient. My pet was calm and enjoyed every bit of it. Highly recommended!",
    name: "Isabella García",
  },
  {
    img: image6,
    quote:
      "This mobile spa van is awesome! It brought the spa experience to us, making it so much easier for my pet who gets anxious with travel. The staff were amazing and the service was top-notch.",
    name: "Lucas Graham",
  },
  {
    img: image2,
    quote:
      "What a fantastic service! The mobile van made the spa experience super easy and stress-free for both me and my furry friend. The team was professional and caring. A big thumbs up!",
    name: "Oliver Kim",
  },
  {
    img: image7,
    quote:
      "This mobile spa van is a lifesaver! It fits into my tight schedule perfectly, and my pet gets the best care without any stress. The team is professional and really knows how to handle pets with care.",
    name: "Sofia Moreno",
  },
];
const variants = {
  hidden: { opacity: 0, y: -100 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.7 },
  }),
};

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const autorotateTiming = 5000;
  const [ref, inView] = useInView({
    threshold: 0.1, // Trigger when 10% of the element is visible
    triggerOnce: false, // Only trigger once
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prevActive) => (prevActive + 1) % testimonialsData.length);
    }, autorotateTiming);

    return () => clearInterval(interval);
  }, [testimonialsData.length]);

  return (
    <motion.section
    ref={ref}
    className="relative min-h-screen flex flex-col justify-center mx-auto my-10 bg-success overflow-hidden"
    style={{ minHeight: "80vh" }}
    initial="hidden"
    animate={inView ? "visible" : "hidden"}
    variants={variants}
  >
    
    
    <div className="w-full max-w-4xl mx-auto px-4 md:px-8 py-8 ">
    <h3 className="text-3xl text-white font-playful font-bold mx-auto text-center tracking-widest mb-12  md:mb-8 lg:mb-28 ">TESTIMONIALS</h3>
      <div className="flex justify-center ">
      
        <div className="w-full max-w-5xl mx-auto text-center ">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={variants}
              custom={index}
              className={`transition-all duration-150 ease-in-out ${
                active === index ? "block" : "hidden"
              }`}
            >
              <motion.img
                className="mx-auto "
                src={testimonial.img}
                alt={testimonial.name}
                variants={variants}
                custom={4}
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
              <motion.div
                className="text-2xl font-bold font-dosis text-slate-900 my-8"
                variants={variants}
                custom={3}
                style={{ fontStyle: "italic" }}
              >
                {`"${testimonial.quote}"`}
              </motion.div>
            </motion.div>
          ))}
          <motion.div className="flex flex-wrap justify-center -m-1.5"    variants={variants}
      custom={2} 
      initial="hidden"
      animate={inView ? "visible" : "hidden"} >
            {testimonialsData.map((testimonial, index) => (
              <button 
                key={index}
                className={`text-bold font-dosis inline-flex justify-center whitespace-nowrap rounded-full px-3.5 py-2 m-1.5 text-xs shadow-sm focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ${
                  active === index
                    ? "bg-primary text-white shadow-indigo-950/10"
                    : "bg-white hover:bg-primary text-slate-900"
                }`}
                onClick={() => setActive(index)}
              >
                {testimonial.name}
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  </motion.section>
  );
};

export default Testimonials;
