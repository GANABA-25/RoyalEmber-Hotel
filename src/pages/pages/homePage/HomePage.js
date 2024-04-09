import { Fragment } from "react";
import Navigation from "../../../components/navigation/Navigation";
import "./HomePage.css";

import Button from "../../../components/Button";
import NumberCount from "../../components/NumberCount";
import Facilities from "./Facilities";
import BestOfSanFransisco from "./BestOfSanFransisco";

import MapLocation2 from "./MapLocation2";
import SpecialOffers from "./SpecialOffers";
import Guests from "./Guests";
import HotelInformation from "./HotelInformation";
import Gallary from "./Gallary";

import { FaPhoneFlip } from "react-icons/fa6";
import Footer from "../../../components/Footer";

const HomePage = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="bg-gray-950 absolute w-full h-full opacity-50" />
        <div className="font-serif text-white">
          <Navigation />
          <div className="w-128 m-auto relative lg:w-9/12">
            <h1 className="uppercase mt-20 font-bold md:mt-52 lg:mt-28">
              Welcome To
            </h1>
            <h1 className="text-5xl leading-12 my-10 md:text-7xl lg:leading-15">
              Royal Ember <br className="hidden" /> Hotel
              <br className="hidden lg:block" /> San
              <br className="hidden" /> Fransisco
            </h1>
            <p className=" text-sm md:text-xl">
              Royal Ember Hotel embodies opulence and regal charm, offering
              <br className="hidden lg:block" />
              luxurious accommodations, fine dining, and a state-of-the-art spa.
              <br className="hidden lg:block" />
              Known for impeccable hospitality, it provides a warm, inviting
              atmosphere for a truly royal experience.
            </p>
            <button className="bg-white text-black p-2 rounded my-10 px-4 hover:bg-inherit hover:text-white hover:border">
              Check Availability
            </button>
          </div>
        </div>
      </div>
      <section className="w-128 m-auto lg:w-9/12 font-serif">
        <div className="my-14 md:flex md:gap-6 lg:my-24 lg:gap-14">
          <img
            className=" md:h-52 md:w-52 rounded-lg md:rounded-lg md:mx-4 lg:h-96 lg:w-2/5"
            src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712613517/RoyalEmber%20Hotel/LangingPage/ocean_beach_dam0do.jpg"
            alt="slorelineImage"
          ></img>
          <div>
            <h1 className="text-3xl font-bold mb-5 mt-2 opacity-85 leading-11 md:text-3.5 lg:text-4.5 lg:mt-3">
              Get Comfy in The Near of San <br className="hidden" /> Fransisco
              shoreline
            </h1>
            <span className="md:text-md lg:text-xl">
              <p>
                Nestled along San Francisco's picturesque shoreline is a
                comfortable haven, inviting relaxation. This coastal retreat
                harmoniously blends nature and urban charm.
              </p>
              <p className="mt-4 opacity-75">
                The iconic Golden Gate Bridge against the city's skyline. Settle
                into the comfortable surroundings, embracing the soothing sounds
                of the ocean and a fresh, salty breeze.
              </p>
            </span>
            <div className="mt-8">
              <Button name="Discover More" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 text-center my-16 md:grid-cols-4">
          <NumberCount
            maxValue={10}
            countInterval={1660}
            label="Years of service"
          />
          <NumberCount
            maxValue={320}
            countInterval={57}
            label="SQ. METER AREA"
          />
          <NumberCount maxValue={40} countInterval={450} label="Nice rooms" />
          <NumberCount
            maxValue={4567}
            countInterval={0.01}
            label="Happy visitors"
          />
        </div>
      </section>
      <MapLocation2 />

      <Facilities />

      <BestOfSanFransisco />

      <div className="lg:mt-32">
        <SpecialOffers />
      </div>

      <div className="bg-gray-100">
        <Guests />

        <HotelInformation />

        <Gallary />

        <div className="reservationBackground">
          <div className="bg-gray-950 absolute w-full h-full opacity-50" />
          <div className="font-serif text-white">
            <div className="relative">
              <h1 className="text-md">HOTEL RESERVATION</h1>
              <h1 className="text-3xl my-12 font-bold lg:text-4xl">
                Extra Perks When You Book Directly With Us
              </h1>

              <p className="my-8 opacity-80 lg:text-xl">CALL US NOW:</p>

              <p className="flex justify-center items-center gap-5 text-2xl md:text-3xl lg:text-4xl">
                <FaPhoneFlip /> + 233-596-498-006
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </Fragment>
  );
};

export default HomePage;
