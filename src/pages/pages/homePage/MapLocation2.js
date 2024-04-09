import { Fragment } from "react";
import Button from "../../../components/Button";
import MapLocation from "./MapLocation";

const MapLocation2 = () => {
  return (
    <Fragment>
      <div className="w-128 m-auto lg:w-9/12 font-serif overflow-x-auto text-center md:text-start lg:mt-40">
        <h1 className="text-3xl font-bold my-4 opacity-80 md:text-4xl lg:text-5xl">
          How to Reach
        </h1>
        <div className="md:flex md:justify-between lg:flex lg:justify-between md:mb-8">
          <p className="my-4 md:text-md">
            specific location have been marked for easy Navigation
          </p>
          <div className="mt-4 mb-8 md:mt-0 md:mb-0">
            <Button name="Get Directions" />
          </div>
        </div>
      </div>
      <div className="w-128 m-auto lg:w-9/12 hover:border active:border-blue-600">
        <MapLocation />
      </div>
    </Fragment>
  );
};

export default MapLocation2;
