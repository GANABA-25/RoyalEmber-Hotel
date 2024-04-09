import React, { Fragment } from "react";
import IconSection from "../../components/IconSection";

const Facilities = (props) => {
  return (
    <Fragment>
      <div className="w-128 m-auto lg:w-9/12 lg:m-auto font-serif text-center lg:mt-28">
        <h1 className="text-4xl my-8 font-bold opacity-80 md:text-5xl">
          Facilities
        </h1>
        <p className="opacity-75 md:text-xl">
          "Indulge in the exquisite comfort and convenience of our hotel, where
          modern <br />
          amenities, spacious rooms, and top-notch services
        </p>
      </div>

      <div className="mt-24">
        <IconSection />
      </div>
    </Fragment>
  );
};

export default Facilities;
