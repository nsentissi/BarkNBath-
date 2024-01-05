import React from "react";
import { motion } from "framer-motion";

function Services() {
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

  return (
    <div className=" p-10 text-white">
      <div className="flex flex-wrap justify-center gap-10">
      <motion.div
        className="card w-full md:w-96 glass hover:shadow-xl shadow-lg transform hover:-translate-y-2 transition duration-300 ease-in-out"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={cardVariants}
      >
        <figure>
          <img src="../src/assets/basic-grooming.jpg" alt="basic-grooming" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Basic Grooming Package</h2>
          <h3>
            <span className="font-bold">Description: </span>Essential grooming
            services to keep pets clean and healthy.
          </h3>
          <h4>Services included: </h4>
          <ul>
            <li>Bath and blow-dry</li>
            <li>Brushing and coat maintenance</li>
            <li>Nail trimming</li>
            <li>Ear cleaning</li>
          </ul>
          <h3>
            <span className="font-bold">Benefits: </span>
            Ideal for maintenance between full grooming sessions
          </h3>
          <div className="card-actions justify-end">
            <button className="btn btn-neutral">Book an appointment</button>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="card w-full md:w-96 glass hover:shadow-xl shadow-lg transform hover:-translate-y-2 transition duration-300 ease-in-out"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={cardVariants}
      >
        <figure>
          <img src="../src/assets/luxury-grooming.jpg" alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Luxury Spa Retreat</h2>
          <h3>
            <span className="font-bold">Description: </span>A pampering
            experience for pets with additional luxurious treatments.
          </h3>
          <h4>Services included: </h4>
          <ul>
            <li>Premium shampoo and conditioner</li>
            <li>Pawdicure (nail trimming, filing)</li>
            <li>Teeth brushing</li>
            <li>Aromatherapy spa treatment</li>
          </ul>
          <h3>
            <span className="font-bold">Benefits: </span>
            Perfect for pet owners looking to spoil their furry friends.
          </h3>
          <div className="card-actions justify-end">
            <button className="btn btn-neutral">Book an appointment</button>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="card w-full md:w-96 glass hover:shadow-xl shadow-lg transform hover:-translate-y-2 transition duration-300 ease-in-out"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={cardVariants}
      >
        <figure>
          <img src="../src/assets/full-grooming.jpg" alt="full grooming" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Full Grooming Makeover</h2>
          <h3>
            <span className="font-bold">Description: </span>Complete grooming
            transformation for a fresh and stylish look.
          </h3>
          <h4>Services included: </h4>
          <ul>
            <li>Haircut and styling</li>
            <li>Deep coat conditioning</li>
            <li>Anal gland expression</li>
            <li>Teeth brushing</li>
          </ul>
          <h3>
            <span className="font-bold">Benefits: </span>
            Great for pets requiring a more comprehensive grooming session.
          </h3>
          <div className="card-actions justify-end">
            <button className="btn btn-neutral">Book an appointment</button>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="card w-full md:w-96 glass hover:shadow-xl shadow-lg transform hover:-translate-y-2 transition duration-300 ease-in-out"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={cardVariants}
      >
        <figure>
          <img src="../src/assets/wellness-grooming.jpg" alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Wellness and Relaxation Package</h2>
          <h3>
            <span className="font-bold">Description: </span>Focus on holistic
            well-being and relaxation for pets.
          </h3>
          <h4>Services included: </h4>
          <ul>
            <li>Therapeutic massage</li>
            <li>Gentle brushing and detangling</li>
            <li>Calming aromatherapy</li>
            <li>Relaxing music in the spa environment</li>
          </ul>
          <h3>
            <span className="font-bold">Benefits: </span>
            Designed to reduce stress and promote overall pet wellness.
          </h3>
          <div className="card-actions justify-end">
            <button className="btn btn-neutral">Book an appointment</button>
          </div>
        </div>
      </motion.div>
      </div>
    </div>
  );
}

export default Services;
