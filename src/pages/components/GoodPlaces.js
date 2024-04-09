import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const GoodPlaces = (props) => {
  return (
    <div className="mt-8">
      <img className="rounded-lg" src={props.image} />
      <h1 className="text-2xl mt-4 mb-2">{props.tittle}</h1>
      <p className="opacity-80">{props.description}</p>
      <h6 className="mt-3 mb-8 text-indigo-700 flex items-center hover:text-black">
        {props.read}
        <IoIosArrowRoundForward className="text-3xl ml-2" />
      </h6>
    </div>
  );
};

export default GoodPlaces;
