const Journey = () => {
  return (
    <div className=" bg-white pt-48 justify-center ">
      <div className="flex flex-col justify-center text-center">
        <h2 className="text-2xl font-extrabold pb-8">How it works</h2>
        <p className="pb-8">
          ShakeYourTail is an online scheduling and CRM service & is super easy
          to use, you can trial our service free for 30 days.
        </p>
        <div className="flex justify-center gap-36 bg-[url('/../client/src/assets/dotted-path.svg')] h-40 bg-no-repeat bg-contain">
          <div class="w-20 h-20 rounded-full bg-gray-200 text-gray-700 ">
            1
          </div>
          <div class="w-20 h-20 rounded-full inline-flex items-center justify-center  bg-gray-200 text-gray-700 z-50">
            2
          </div>
          <div class="w-20 h-20 rounded-full bg-gray-200 justify- text-gray-700">
            3
          </div>
          <div class="w-20 h-20 rounded-full inline-flex items-center justify-center  bg-gray-200 text-gray-700">
            4
          </div>
          
        </div>
      </div>
      <div className=" flex flex-col md:flex-row justify-center bg-red-100 mx-auto rounded-t-3xl lg:mx-32 p-8 gap-8 mx-4 md:mx-8 ">
        <h2 className="text-2xl font-extrabold text-center ">About Us</h2>
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
