import React from "react";

function Services() {
  return (
    <div className="bg-secondary flex gap-10 justify-center p-10 leading-9 text-white">
      <div className="card w-96 glass">
        <figure>
          <img
            src="../src/assets/basic-grooming.jpg"
            alt="basic-grooming"
          />
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
      </div>
      <div className="card w-96 glass mt-20">
        <figure>
          <img
            src="../src/assets/luxury-grooming.jpg"
            alt="car!"
          />
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
      </div>
      <div className="card w-96 glass mt-40">
        <figure>
          <img
            src="../src/assets/full-grooming.jpg"
            alt="full grooming"
          />
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
      </div>
      <div className="card w-96 glass mt-60">
        <figure>
          <img
            src="../src/assets/wellness-grooming.jpg"
            alt="car!"
          />
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
      </div>
    </div>
  );
}

export default Services;
