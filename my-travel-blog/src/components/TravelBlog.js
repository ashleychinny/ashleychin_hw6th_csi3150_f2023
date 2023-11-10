// MyComponent.jsx
import React from "react";

const TravelBlog = (props) => {
  return (
    <div className="flex flex-col justify-around items-center h-screen w-screen bg-[#5b7175]/60">
      <h2 className="text-7xl font-bold">{props.props.placeHeading}</h2>
      <div className="flex justify-around w-full">
        <img
          className="object-cover w-96 h-96"
          src={props.props.placeImg1}
          alt=""
        />
        <img
          className="object-cover w-96 h-96"
          src={props.props.placeImg2}
          alt=""
        />
        <img
          className="object-cover w-96 h-96"
          src={props.props.placeImg3}
          alt=""
        />
      </div>
      <h3 className="text-3xl mx-12">{props.props.placeDescription}</h3>
    </div>
  );
};

export default TravelBlog;
