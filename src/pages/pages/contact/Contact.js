import Navigation from "../../../components/navigation/Navigation";
import "./Contact.css";
import MapLocation from "../homePage/MapLocation";

import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";

import Button from "../../../components/Button";
import Message from "./Message";
import Footer from "../../../components/Footer";

const Contact = () => {
  return (
    <div>
      <div className="ContactBackground">
        <div className="bg-gray-950 absolute w-full h-full opacity-50" />
        <div className="font-serif text-white">
          <Navigation />
          <div className="w-128 m-auto relative lg:w-9/12">
            <div className="lg:flex lg:gap-80 mt-20 md:mt-32 lg:mt-28">
              <h1 className="text-5xl uppercase font-bold md:text-6xl ">
                Contact
              </h1>
              <p className="mt-8 md:text-xl lg:mt-0">
                Eu quam vulputate mollis vitae egestas facilisi mauris urna
                faucibus suspendisse at tempor orci felis eu nascetur.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="w-128 m-auto lg:w-9/12 md:grid md:grid-cols-2 md:gap-5 md:my-24">
        <div className=" max-[767px]:my-16">
          <h1 className="max-[767px]:text-3xl font-serif font-bold md:text-4xl md:">
            Get in Touch
          </h1>
          <p className="max-[767px]:my-6 opacity-80 md:my-5 lg:text-xl lg:my-8">
            Sed volutpat vestibulum, non leo molestie eu justo mauris quis eu,
            at pretium rutrum amet, mauris euismod eu facilisis enim, at non
            scelerisque dolor.
          </p>
          <ul className="max-[767px]:my-4 md:grid md:gap-5 ">
            <li className="max-[767px]:text-2xl font-semibold opacity-90 md:flex md:gap-4 md:text-2xl ">
              <FaLocationDot className="text-indigo-600 text-2xl max-[767px]:my-4" />
              123 Beach St, San Francisco, CA 1234
            </li>
            <li className="max-[767px]:text-2xl font-semibold opacity-90 md:flex md:gap-4 md:text-2xl ">
              <FaPhoneAlt className="text-indigo-600 text-2xl max-[767px]:my-4" />
              +1 123 456 7890
            </li>
            <li className="max-[767px]:text-2xl font-semibold opacity-90 md:flex md:gap-4 md:text-2xl ">
              <IoMail className="text-indigo-600 text-2xl max-[767px]:my-4" />
              mail@example.com
            </li>
            <li className="max-[767px]:text-2xl font-semibold opacity-90 md:flex md:gap-4 md:text-2xl ">
              <FaClock className="text-indigo-600 text-2xl max-[767px]:my-4" />
              8:30 AM – 5:30 PM
            </li>
          </ul>
        </div>
        <div className="">
          <MapLocation />
          <div className="flex justify-center items-center max-[767px]:my-4 md:my-5">
            <Button name="Get Directions " />
          </div>
        </div>
      </section>
      <section>
        <Message />
      </section>

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
  );
};

export default Contact;
