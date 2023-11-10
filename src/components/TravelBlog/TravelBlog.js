// MyComponent.jsx
import React from "react";
import TravelData from "../../../TravelData";

const TravelBlog = (props) => {
  return (
    <div className="flex flex-col justify-around items-center h-screen w-screen bg-rose-200">
      <h2 className="text-7xl font-serif text-rose-400 font-bold">
        {props.props.placeHeading}
      </h2>
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
      <h3 className="text-3xl mx-20 font-serif text-rose-950">
        {props.props.placeDescription}
      </h3>
    </div>
  );
};

export default TravelBlog;
