import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import React from 'react';

const Example = () => {
  return (
    <div className="w-3/4 mx-auto min-h-screen flex justify-center items-center py-20">
      <div className="bg-transparent">
        <div className="flex  items-center justify-center ">
        <span className="inline-block animate-pulse bg-success rounded-full w-1/4 p-4 text-white text-center font-chewy text-xl">SCROLL DOWN
        <svg className="w-6 h-6 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
        </svg>
    </span>
        </div>
        <HorizontalScrollCarousel />
  
        <div className="flex h-48 items-center justify-center">
        <span className="inline-block animate-pulse bg-success rounded-full w-1/4 p-4 text-white text-center font-chewy text-xl">
  <svg className="w-6 h-6 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11l7-7 7 7M5 19l7-7 7 7" /> 
  </svg>
  SCROLL UP</span>


        </div>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[400vh] bg-transparent  w-full max-w-screen-xl mx-auto "
      
    >
      <div className="sticky top-0  flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex MT-0 gap-4 sm:gap-2 md:gap-4 lg:gap-8 xl:gap-12"
          
        >
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px] xl:h-[450px] xl:w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
    
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "./src/assets/carousel1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "./src/assets/carousel2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "./src/assets/carousel5.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "./src/assets/carousel6.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "./src/assets/carousel3.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "./src/assets/carousel8.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "./src/assets/carousel9.jpg",
    title: "Title 7",
    id: 7,
  },
  {
    url: "./src/assets/carousel4.jpg",
    title: "Title 7",
    id: 7,
  },
  {
    url: "./src/assets/carousel10.jpg",
    title: "Title 7",
    id: 7,
  },
];
