import React from "react";

const AboutUs = () => {
  return (
    <>
    <div className="bg-accent pt-0">
      <section className="flex flex-wrap gap-4 justify-center bg-gray-100 rounded-b-3xl mx-32 pt-4 pb-8">
        <div className="flex-col w-4/12">
          <img
            className="w-10 mb-2"
            src="../src/assets/heart.png"
            alt="paw icon"
          />
          <h3 className="font-bold mb-1">Convenience</h3>
          <p className="w-10/12">
            We know it can be hatd to schedule your dogs grooming appointment
            and make numerous trops to the pet salon
          </p>
        </div>
        <div className="w-4/12">
          <img
            className="w-10 mb-2"
            src="../src/assets/Paw.png"
            alt="paw icon"
          />
          <h3 className="font-bold mb-1">No Cages</h3>
          <p className="w-10/12">
            Your dog will never see the inside of a cage. He/she will receive
            one-on-one completely specialized attention
          </p>
        </div>
        <div className="w-4/12">
          <img
            className="w-10 mb-2"
            src="../src/assets/time.png"
            alt="paw icon"
          />
          <h3 className="font-bold mb-1">It's Fast</h3>
          <p className="w-10/12">
            We arrive on time for your dogs appointment so you can sit back and
            relax while we make your dog look and feel their very best
          </p>
        </div>
        <div className="w-4/12">
          <img
            className="w-10 mb-2"
            src="../src/assets/dog-icon.png"
            alt="paw icon"
          />
          <h3 className="font-bold mb-1">Less Stress</h3>
          <p className="w-10/12">
            We eliminate the stress and anxiety of a traditional noisy, chaotic
            grooming shop environment
          </p>
        </div>
        <div className="w-4/12">
          <img
            className="w-10 mb-2"
            src="../src/assets/grooming.png"
            alt="paw icon"
          />
          <h3 className="font-bold mb-1">Groomers know your Pet</h3>
          <p className="w-10/12">
            It is our mission to provide a caring, quality and professional
            grooming service to your dog
          </p>
        </div>
        <div className="w-4/12">
          <img
            className="w-10 mb-2"
            src="../src/assets/privacy.png"
            alt="paw icon"
          />
          <h3 className="font-bold mb-1">Privacy for your Pet</h3>
          <p className="w-10/12">
            No other animals or people are allowed in our mobile grooming trucks
            during your dogs appointment.
          </p>
        </div>
      </section>

      <div className="flex space-x-10 justify-center ">
        <div className="mt-40 w-4/12 ml-36 flex-col">
          <h1 className="text-7xl text-white">Indulge Your Pet in Luxury</h1>
          <p className="mt-8 mb-8 text-white">
            Experience a new level of pet care with our mobile spa services.
            Treat your furry friend to the best in pet pampering – because they
            deserve it!
          </p>
          <button className="bg-neutral hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-xl">
            Book your appointment
          </button>
        </div>
        <img className="mb-10" src="../src/assets/dog.svg" alt="dog picture" />
      </div>
    </div>
    </>
  );
};

export default AboutUs;
