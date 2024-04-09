import React from "react";

const AmenitiesComp = (props) => {
  return (
    <div className="text-center">
      <div className="max-[767px]:my-8 max-[767px]:text-3xl text-indigo-600 flex justify-center items-center md:text-4xl md:my-9">
        {props.icon}
      </div>
      <div className="opacity-90 md:opacity-80">
        <h1 className="max-[767px]:text-xl font-serif font-bold md:text-2xl">
          {props.label}
        </h1>
        <p className="md:text-xl">{props.description}</p>
      </div>
    </div>
  );
};

export default AmenitiesComp;
