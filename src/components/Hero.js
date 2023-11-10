// MyComponent.jsx
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-screen h-screen flex justify-center">
      <img
        className="absolute inset-0 object-cover overflow-hidden"
        src="public/HeroSection-bg-image.jpg"
        alt="Airplane"
      />
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="flex flex-col justify-center items-center z-10 gap-10">
        <h1 className="text-6xl font-extrabold text-neutral-300">
          Travel Blog
        </h1>
        <h2 className="text-4xl font-semibold text-neutral-300">
          A blog outlining good places to travel and some images of the location
        </h2>
      </div>
    </div>
  );
};

export default Hero;
