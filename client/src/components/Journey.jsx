const Journey = () => {
  return (
    <div className=" bg-white py-48 justify-center px-32 ">
      <div className="flex flex-col justify-center text-center">
        <h2 className="text-2xl font-extrabold pb-8">How it works</h2>
        <p className="pb-8">
          ShakeYourTail is an online scheduling and CRM service & is super easy
          to use, you can trial our service free for 30 days.
        </p>
        <div className="flex justify-items-stretch justify-center bg-[url('/../client/src/assets/dotted-path.svg')] h-60 bg-no-repeat bg-contain gap-48">
          <div class="justify-self- w-20 h-20 rounded-full border-black inline-flex items-center justify-center bg-red text-gray-700 ">
            White
          </div>
          <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-red text-gray-700">
            Red
          </div>
          <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-red text-gray-700">
            Blue
          </div>
          <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-red text-gray-700">
            Black
          </div>
          {/* <img
            className="pt-10"
            src="/../src/assets/about-us-section-dotted-paths.svg"
          /> */}
        </div>
      </div>
      <div className="flex justify-center bg-gray-100 mx-auto rounded-t-3xl gap-8 p-8">
        <h2 className="text-2xl font-extrabold text-center">About Us</h2>
        <p className="text-center">
          "Bark N Bath is dedicated to providing top-notch dog grooming and
          cleaning services. Our passionate team, skilled in the latest grooming
          techniques, ensures your furry friend looks and feels their best. We
          prioritize a stress-free environment, personalized care, and use
          eco-friendly products, making us the go-to choice for discerning pet
          owners."
        </p>
      </div>
    </div>
  );
};

export default Journey;
