import React, { Fragment } from "react";
import Navigation from "../../../components/navigation/Navigation";
import "./ThingsToDo.css";
import Tourism from "./Tourism";
import Footer from "../../../components/Footer";
import { FaPhoneFlip } from "react-icons/fa6";

const SanFransiscoData = [
  {
    id: 1,
    isActive: true,
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712613482/RoyalEmber%20Hotel/LangingPage/alcatraz_hprjwd.jpg",
    number: "01",
    tittle: "Alcatraz Island",
    description:
      "Ornare accumsan congue nunc id facilisis tincidunt ridiculus congue consequat ultrices in mollis netus pellentesque lectus Ornare accumsan congue nunc id facilisis tincidunt ridiculus congue consequat ultrices in mollis netus pellentesque lectus Ornare accumsan congue nunc id facilisis tincidunt ridiculus congue consequat ultrices in mollis netus pellentesque",
  },
  {
    id: 2,
    isActive: false,
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712613490/RoyalEmber%20Hotel/LangingPage/fisherman_zwtrai.jpg",
    number: "02",
    tittle: "Fisherman's Wharf",
    description:
      "Ornare accumsan congue nunc id facilisis tincidunt ridiculus congue consequat ultrices in mollis netus pellentesque lectus Ornare accumsan congue nunc id facilisis tincidunt ridiculus congue consequat ultrices in mollis netus pellentesque lectus Ornare accumsan congue nunc id facilisis tincidunt ridiculus congue consequat ultrices in mollis netus pellentesque",
  },
  {
    id: 3,
    isActive: true,
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712613513/RoyalEmber%20Hotel/LangingPage/goldenGate_zg9gx2.jpg",
    number: "03",
    tittle: "Golden Gate Park",
    description:
      "Ornare accumsan congue nunc id facilisis tincidunt ridiculus congue consequat ultrices in mollis netus pellentesque lectus Ornare accumsan congue nunc id facilisis tincidunt ridiculus congue consequat ultrices in mollis netus pellentesque lectus Ornare accumsan congue nunc id facilisis tincidunt ridiculus congue consequat ultrices in mollis netus pellentesque",
  },
  {
    id: 4,
    isActive: false,
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712613506/RoyalEmber%20Hotel/LangingPage/garden_pqvma7.jpg",
    number: "04",
    tittle: "Queen Wilhelmina Tulip Garden",
    description:
      "Ornare accumsan congue nunc id facilisis tincidunt ridiculus congue consequat ultrices in mollis netus pellentesque lectus Ornare accumsan congue nunc id facilisis tincidunt ridiculus congue consequat ultrices in mollis netus pellentesque lectus Ornare accumsan congue nunc id facilisis tincidunt ridiculus congue consequat ultrices in mollis netus pellentesque",
  },
  {
    id: 5,
    isActive: true,
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712613517/RoyalEmber%20Hotel/LangingPage/ocean_beach_dam0do.jpg",
    number: "05",
    tittle: "Ocean Beach",
    description:
      "Ornare accumsan congue nunc id facilisis tincidunt ridiculus congue consequat ultrices in mollis netus pellentesque lectus Ornare accumsan congue nunc id facilisis tincidunt ridiculus congue consequat ultrices in mollis netus pellentesque lectus Ornare accumsan congue nunc id facilisis tincidunt ridiculus congue consequat ultrices in mollis netus pellentesque",
  },
  {
    id: 6,
    isActive: false,
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712613488/RoyalEmber%20Hotel/LangingPage/Dutch_Windmill_wjxzs1.jpg",
    number: "06",
    tittle: "Dutch Windmill",
    description:
      "Ornare accumsan congue nunc id facilisis tincidunt ridiculus congue consequat ultrices in mollis netus pellentesque lectus Ornare accumsan congue nunc id facilisis tincidunt ridiculus congue consequat ultrices in mollis netus pellentesque lectus Ornare accumsan congue nunc id facilisis tincidunt ridiculus congue consequat ultrices in mollis netus pellentesque",
  },
];

const ThingsToDo = () => {
  return (
    <Fragment>
      <div>
        <div className="ThingsToDoBackground">
          <div className="bg-gray-950 absolute w-full h-full opacity-50" />
          <div className="font-serif text-white">
            <Navigation />
            <div className="w-128 m-auto relative lg:w-9/12">
              <div className="mt-20 text-center md:mt-32 md:flex md:gap-24 lg:flex lg:gap-64 lg:mt-28">
                <h1 className="text-5xl font-bold md:text-6xl lg:text-6xl ">
                  Things to Do
                </h1>
                <p className="mt-8 lg:mt-0">
                  "Discover a welcoming stay at our hotel, where comfort meets
                  <br />
                  convenience, and there's always more to explore and enjoy."
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-128 m-auto lg:w-9/12 font-serif">
          <div className="text-center mt-16">
            <h1 className="my-8 opacity-70 text-blue-600">
              EXPLORE SAN FRANSISCO
            </h1>
            <h1 className="text-4xl my-4 md:text-5xl md:my-6">
              small city. Big Attraction.
            </h1>
            <p className="opacity-70 md:text-lg">
              Experience the vibrant allure of San Francisco, where iconic
              landmarks, diverse culture, and endless adventures
              <br className="hidden lg:block" /> await-your gateway to a city
              full of possibilities.
            </p>
          </div>
        </div>

        <div className="w-128 m-auto lg:w-9/12 font-serif mt-20">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            {SanFransiscoData.map((BestOfSanFransisco) => (
              <div key={BestOfSanFransisco.id}>
                <Tourism
                  isActive={BestOfSanFransisco.isActive}
                  image={BestOfSanFransisco.image}
                  number={BestOfSanFransisco.number}
                  tittle={BestOfSanFransisco.tittle}
                  description={BestOfSanFransisco.description}
                />
              </div>
            ))}
          </div>
        </div>
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

export default ThingsToDo;
