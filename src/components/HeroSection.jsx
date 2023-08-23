import React from 'react';
import heroImage from '../assets/Images/heropic.jpg';
const HeroSection = () => {
  return (
    <section className="bg-gray-900 py-20 h-screen">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-center">
        {/* Description Column */}
        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 text-center md:text-left p-11 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-5xl text-white font-bold mb-4 flex items-center justify-center">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-6">
            I'm a passionate developer ready to showcase my work and skills.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md shadow-md">
            Explore More
          </button>

        </div>



        {/* Image Column */}
        <div className="md:w-1/2 text-center flex items-center justify-center">
          <img
            src={heroImage}
            alt="Your Name"
            className="rounded-full w-80 h-80 md:w-[500px] md:h-[500px] object-cover border-gray-600 border-[12px] shadow-2xl"
          />
        </div>


      </div>
    </section>
  );
};

export default HeroSection;
