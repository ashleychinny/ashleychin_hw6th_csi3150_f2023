//MyComponent.jsx
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-screen h-screen flex justify-center overflow-hidden">
      <img
        className="absolute inset-0 overflow-hidden"
        src="HeroSection-bg-image.jpg"
        alt="Blue skies with paper airplane"
      />
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="flex flex-col justify-center items-center z-10 gap-10">
        <h1 className="text-8xl font-extrabold font-serif text-pink-300">
          Travel Blog
        </h1>
        <i>
          <h2 className="text-3xl font-serif text-pink-200">
            A blog outlining good places to travel and some images of the
            location
          </h2>
        </i>
      </div>
    </div>
  );
};

export default Hero;
