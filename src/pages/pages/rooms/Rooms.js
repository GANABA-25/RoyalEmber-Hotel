import { Fragment } from "react";
import Navigation from "../../../components/navigation/Navigation";

import "./Rooms.css";
import BedRooms from "./BedRooms";
import HotelInformation from "../homePage/HotelInformation";
import SpecialOffers from "../homePage/SpecialOffers";
import Guests from "../homePage/Guests";

import { FaBed } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa";
import { SlScreenDesktop } from "react-icons/sl";
import { MdOutlineSmokeFree } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa";
import { LiaHotelSolid } from "react-icons/lia";
import { FaPhoneFlip } from "react-icons/fa6";
import Footer from "../../../components/Footer";

const RoomsData = [
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712613402/RoyalEmber%20Hotel/Rooms/singleRoom_oxlfcv.jpg",
    name: "Single Room",
    description:
      "Step into a cozy retreat with our hotel's single room. Designed for comfort and efficiency, the space features a comfortable bed, a compact workstation, and a well-appointed bathroom, providing a perfect blend of relaxation and functionality for solo travelers.",
    bedType: "1 King Bed",
    wifi: "Free Wifi",
    tv: "Plasma Tv",
    smoke: "Smoke Free",
    icon1: <FaBed />,
    icon2: <FaWifi />,
    icon3: <SlScreenDesktop />,
    icon4: <MdOutlineSmokeFree />,
  },
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712613399/RoyalEmber%20Hotel/Rooms/doubleRoom_qnwqtb.jpg",
    name: "Double Room",
    description:
      "Discover the comfort of our hotel's Double Room a spacious retreat featuring two cozy beds, modern furnishings, and an inviting ambiance. With thoughtful amenities, including a well-equipped bathroom, it's the ideal haven for couples or friends traveling together.",
    bedType: "2 Queen bed",
    wifi: "Free Wifi",
    tv: "Plasma Tv",
    smoke: "Smoke Free",
    newspaper: "Free newspaper",
    icon1: <FaBed />,
    icon2: <FaWifi />,
    icon3: <SlScreenDesktop />,
    icon4: <MdOutlineSmokeFree />,
    icon5: <FaRegNewspaper />,
  },
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712613409/RoyalEmber%20Hotel/Rooms/superSuite_vhmmnw.jpg",
    name: "Super Suite",
    description:
      "Indulge in luxury in our Super Suite, a lavish haven designed for the utmost comfort and style. This expansive retreat boasts a king-size bed, separate living area, panoramic views, and premium amenities, ensuring an opulent experience for the most discerning guests.",
    bedType: "1 King + 1 Queen",
    wifi: "Free Wifi",
    tv: "Plasma Tv",
    smoke: "Smoke Free",
    newspaper: "Free newspaper",
    corridor: "Indoor corridor",
    icon1: <FaBed />,
    icon2: <FaWifi />,
    icon3: <SlScreenDesktop />,
    icon4: <MdOutlineSmokeFree />,
    icon5: <FaRegNewspaper />,
    icon6: <LiaHotelSolid />,
  },
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712613396/RoyalEmber%20Hotel/Rooms/deluxeRoom_k6ox1o.jpg",
    name: "Deluxe Suite",
    description:
      "Experience unparalleled luxury in our Deluxe Suite, where sophistication meets comfort. This well-appointed suite features a spacious living area, a king-size bed, upscale furnishings, and exclusive amenities, providing a refined retreat for those seeking an elevated stay.",
    bedType: "1 King + 2 Queen",
    wifi: "Free Wifi",
    tv: "Plasma Tv",
    smoke: "Smoke Free",
    newspaper: "Free newspaper",
    corridor: "Indoor corridor",
    icon1: <FaBed />,
    icon2: <FaWifi />,
    icon3: <SlScreenDesktop />,
    icon4: <MdOutlineSmokeFree />,
    icon5: <FaRegNewspaper />,
    icon6: <LiaHotelSolid />,
  },
];

const Rooms = () => {
  return (
    <Fragment>
      <div className="roomsBackground">
        <div className="bg-gray-950 absolute w-full h-full opacity-50" />
        <div className="font-serif text-white">
          <Navigation />
          <div className="w-128 m-auto relative lg:w-9/12">
            <div className="lg:flex lg:gap-80 mt-20 md:mt-32 lg:mt-28">
              <h1 className="text-5xl uppercase font-bold md:text-6xl ">
                Rooms
              </h1>
              <p className="mt-8 md:text-xl lg:mt-0">
                Unwind in a chic hotel room with a king-size bed and scenic
                views, equipped with a writing desk, high-speed Wi-Fi, and a
                large flat-screen TV for a comfortable and connected stay.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="w-128 m-auto lg:w-9/12 font-serif">
        <div className="text-center mt-12 lg:mt-24">
          <h1 className=" text-sm uppercase font-semibold text-gray-950">
            Royal Ember Hotel
          </h1>
          <p className="text-4xl mt-6 lg:text-5xl">
            Find a Perfect <br className="md:hidden" /> Family Budget
            <br className="md:hidden" />
            Hotel in The Near of <br className="md:hidden lg:block" />
            San Francisco Shoreline
          </p>
        </div>

        <div className="mt-14 md:grid md:grid-cols-2 md:gap-6">
          {RoomsData.map((room) => (
            <BedRooms
              image={room.image}
              name={room.name}
              description={room.description}
              bedType={room.bedType}
              wifi={room.wifi}
              tv={room.tv}
              smoke={room.smoke}
              newspaper={room.newspaper}
              corridor={room.corridor}
              icon1={room.icon1}
              icon2={room.icon2}
              icon3={room.icon3}
              icon4={room.icon4}
              icon5={room.icon5}
              icon6={room.icon6}
            />
          ))}
        </div>
      </section>
      <HotelInformation />

      <div className="bg-gray-100 py-1 mt-12">
        <SpecialOffers />

        <Guests />

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

export default Rooms;
