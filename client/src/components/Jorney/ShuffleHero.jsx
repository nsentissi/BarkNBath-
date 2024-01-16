import React from "react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import a1 from "../../assets/a1.jpg"
import a2 from "../../assets/a2.jpg"
import a3 from "../../assets/a3.jpg"
import a4 from "../../assets/a4.jpg"
import a5 from "../../assets/a5.jpg"
import a6 from "../../assets/a6.jpg"
import a7 from "../../assets/a7.jpg"
import a8 from "../../assets/a8.jpg"
import a9 from "../../assets/a9.jpg"
import a10 from "../../assets/a10.jpg"
import a11 from "../../assets/a11.jpg"
import a12 from "../../assets/a12.jpg"






const ShuffleHero = () => {
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80 },
    },
    exit: { opacity: 0, x: 100, transition: { duration: 0.5 } },
  };
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <motion.section
    ref={ref}
      className=" px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8  mx-auto flex flex-wrap w-4/6 gap-4 justify-center bg-success    rounded-b-3xl "
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      
      
      transition={{ duration: 1.8, delay: 0.3 }}
      variants={variants}
    >
      <div>
        <span className="block mb-4 font-playful text-xs md:text-sm text-primary font-bold ">
          More About Us
        </span>
        <h3 className="text-4xl font-playful md:text-5xl font-semibold">
          Saving Time, Enhancing Comfort
        </h3>
        <p className="text-base font-playful md:text-lg text-slate-900  font-semibold my-4 md:my-6">
          "At our core, we prioritize convenience and time-saving solutions for
          pet care. We understand that your time is precious, and that's why we
          bring our services directly to your doorstep, making pet grooming and
          care an effortless experience for you. Our dedication to convenience
          means straightforward scheduling and a commitment to your comfort at
          every turn, ensuring a stress-free experience. We are not just about
          saving you time; we're about enhancing the quality of life for both
          you and your furry friends. With our services, we aim to simplify your
          life, giving you more time to enjoy precious moments with your beloved
          pets."
        </p>
        <button className="bg-primary text-white  font-playful font-medium py-2 px-4 rounded transition-all hover:bg-accent active:scale-95">
          Book an appointment
        </button>
      </div>
      <ShuffleGrid />
    </motion.section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: a1,
  },
  {
    id: 2,
    src: a3,
  },
  {
    id: 3,
    src: a4,
  },
  {
    id: 4,
    src: a5,
  },
  {
    id: 5,
    src: a6,
  },
  {
    id: 6,
    src: a7,
  },
  {
    id: 7,
    src: a8,
  },
  {
    id: 8,
    src: a9,
  },
  {
    id: 9,
    src: a10,
  },
  {
    id: 10,
    src:a11,
  },
  {
    id: 11,
    src:a12,
  },
  {
    id: 12,
    src:a2,
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
