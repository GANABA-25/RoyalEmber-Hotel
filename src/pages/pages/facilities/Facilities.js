import React, { Fragment } from "react";
import Navigation from "../../../components/navigation/Navigation";
import AmenitiesComp from "../../components/AmenitiesComp";
import Footer from "../../../components/Footer";
import HotelInformation from "../homePage/HotelInformation";
import "./Facilities.css";

import { FaWifi } from "react-icons/fa";
import { IoLogoNoSmoking } from "react-icons/io5";
import { FaParking } from "react-icons/fa";
import { FaDog } from "react-icons/fa";
import { FaBreadSlice } from "react-icons/fa";
import { FaSwimmingPool } from "react-icons/fa";
import { SlScreenDesktop } from "react-icons/sl";
import { FaRegCopy } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";

const AmenitiesData = [
  {
    icon: <FaWifi />,
    label: "Free Wi-Fi",
    description:
      "Magna sagittis faucibus mauris, sit enim varius sem ultricies sed netus tortor tortor fusce.",
  },
  {
    icon: <IoLogoNoSmoking />,
    label: "Smoke-Free",
    description:
      "Magna sagittis faucibus mauris, sit enim varius sem ultricies sed netus tortor tortor fusce.",
  },
  {
    icon: <FaParking />,
    label: "Free Parking",
    description:
      "Magna sagittis faucibus mauris, sit enim varius sem ultricies sed netus tortor tortor fusce.",
  },
  {
    icon: <FaDog />,
    label: "Pet Friendly",
    description:
      "Magna sagittis faucibus mauris, sit enim varius sem ultricies sed netus tortor tortor fusce.",
  },
  {
    icon: <FaBreadSlice />,
    label: "Free Breakfast",
    description:
      "Magna sagittis faucibus mauris, sit enim varius sem ultricies sed netus tortor tortor fusce.",
  },
  {
    icon: <FaSwimmingPool />,
    label: "Fitness Center",
    description:
      "Magna sagittis faucibus mauris, sit enim varius sem ultricies sed netus tortor tortor fusce.",
  },
  {
    icon: <SlScreenDesktop />,
    label: "Plasma TV",
    description:
      "Magna sagittis faucibus mauris, sit enim varius sem ultricies sed netus tortor tortor fusce.",
  },
  {
    icon: <FaRegCopy />,
    label: "Copy Machine",
    description:
      "Magna sagittis faucibus mauris, sit enim varius sem ultricies sed netus tortor tortor fusce.",
  },
  {
    icon: <FaNewspaper />,
    label: "Weekday Newspaper",
    description:
      "Magna sagittis faucibus mauris, sit enim varius sem ultricies sed netus tortor tortor fusce.",
  },
];

const Facilities = () => {
  return (
    <Fragment>
      <div className="FacilitiesBackground">
        <div className="bg-gray-950 absolute w-full h-full opacity-50" />
        <div className="font-serif text-white">
          <Navigation />
          <div className="w-128 m-auto relative lg:w-9/12">
            <div className="lg:flex lg:gap-80 mt-20 md:mt-32 lg:mt-28">
              <h1 className="text-5xl uppercase font-bold md:text-6xl ">
                Facilities
              </h1>
              <p className="mt-8 md:text-xl lg:mt-0">
                Eu quam vulputate mollis vitae egestas facilisi mauris urna
                faucibus suspendisse at tempor orci felis eu nascetur.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="w-128 m-auto  lg:w-9/12">
        <div className="max-[767px]:my-12 text-center md:my-24 lg:my-24">
          <h1 className="max-[767px]:text-4xl font-serif md:text-5xl">
            Facilities to Enhance <br className="hidden md:block" /> Your Stay
          </h1>
          <p className="max-[767px]:my-4 opacity-90 md:my-6 md:text-xl">
            Amet, est laoreet mollis ligula luctus nibh bibendum convallis
            elementum semper <br className="hidden lg:block" /> scelerisque
            risus tellus sed gravida.
          </p>
        </div>
        <div className="grid max-[767px]:gap-8 md:grid-cols-3 md:gap-12 md:gap-y-24 md:mb-52 lg:gap-12">
          {AmenitiesData.map((data) => (
            <AmenitiesComp
              icon={data.icon}
              label={data.label}
              description={data.description}
            />
          ))}
        </div>
      </section>

      <div className="max-[767px]:my-24">
        <HotelInformation />
      </div>

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
    </Fragment>
  );
};

export default Facilities;
